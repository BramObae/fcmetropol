const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

// Must match API_KEY exactly in the Apps Script backend (Code.gs).
// This is a deterrent, not real secrecy — anyone can view this file's
// bundled JS and read it. It stops bots and stray URL-scanning from
// hitting the endpoint directly, not a determined attacker who inspects
// the frontend. If this value ever needs to change, update it here AND
// in Code.gs's API_KEY at the same time, or every registration will
// fail with "Unauthorized" the moment one side is updated without the
// other.
const APP_SECRET = "fcm2026-8k2j9dq4";

// Group purchases: one buyer can register multiple tickets of the same
// type in a single submission (e.g. a parent buying for 3 kids, or a
// scout buying 5 Open Play passes), instead of everyone needing to
// submit their own separate registration and payment. Capped at 10 so
// a single registration can't silently become a bulk/corporate-scale
// transaction — Corporate Table already exists for genuinely large
// group bookings.
export const MAX_QUANTITY = 10;

// Matches the eleven real categories for Metropol Open Play Kenya 2026:
// the six attendee ticket types (Launch Dinner, Corporate Table, Open
// Play, Workshop, Coaches Workshop, and the Open Play + Workshop
// combo), plus the five sponsorship partnership tiers.
export type TicketType =
  | "Dinner"
  | "CorporateTable"
  | "OpenPlay"
  | "Workshop"
  | "CoachesWorkshop"
  | "OpenPlayWorkshop"
  | "StrategicTitle"
  | "Platinum"
  | "Gold"
  | "Silver"
  | "Bronze";

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  ticketType: TicketType;
  transactionCode: string;
  mpesaMessage?: string;
  companyName?: string;
  // How many tickets of this type this one registration covers, 1–10.
  // Does not apply to sponsorship tiers (always treated as 1 there —
  // a sponsorship is a single custom-amount commitment, not a per-unit
  // purchase). Defaults to 1 if omitted.
  quantity?: number;
  // Total amount actually charged. Fixed-price tickets pass
  // getTicketAmount() automatically; sponsorship tiers require the
  // caller to supply a specific amount within that tier's range (see
  // SPONSOR_TIERS and validateSponsorAmount below) — the backend
  // independently re-validates whatever is sent either way, so this
  // is never trusted blindly on its own.
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

// Fixed prices for the six attendee ticket types. Coaches Workshop is
// priced at 5,000 — separate from the player Workshop's 10,000.
export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "Dinner":
      return 5000;
    case "CorporateTable":
      return 100000;
    case "OpenPlay":
      return 5000;
    case "Workshop":
      return 10000;
    case "CoachesWorkshop":
      return 5000;
    case "OpenPlayWorkshop":
      return 15000;
    // Sponsorship tiers don't have one fixed price — this returns the
    // tier's minimum, useful as a "starting from" display figure. The
    // actual amount a sponsor pays is a specific number within the
    // tier's range, supplied separately (see SPONSOR_TIERS).
    case "StrategicTitle":
      return SPONSOR_TIERS.StrategicTitle.min;
    case "Platinum":
      return SPONSOR_TIERS.Platinum.min;
    case "Gold":
      return SPONSOR_TIERS.Gold.min;
    case "Silver":
      return SPONSOR_TIERS.Silver.min;
    case "Bronze":
      return SPONSOR_TIERS.Bronze.min;
    default:
      return 0;
  }
}

// Sponsorship partnership tiers. `max: null` means no upper bound
// (Strategic Title Partner is "KES 7,500,000+"). Kept in sync with
// SPONSOR_TIER_RANGES in the Apps Script backend — if either side's
// numbers change, update both.
export interface SponsorTier {
  label: string;
  description: string;
  min: number;
  max: number | null;
}

export const SPONSOR_TIERS: Record<
  "StrategicTitle" | "Platinum" | "Gold" | "Silver" | "Bronze",
  SponsorTier
> = {
  StrategicTitle: {
    label: "Strategic Title Partner",
    description: "Official naming rights, category exclusivity",
    min: 7500000,
    max: null,
  },
  Platinum: {
    label: "Platinum Partner",
    description: "Premium branding, launch dinner recognition",
    min: 3000000,
    max: 7499999,
  },
  Gold: {
    label: "Gold Partner",
    description: "High level branding, hospitality",
    min: 1500000,
    max: 2999999,
  },
  Silver: {
    label: "Silver Partner",
    description: "Branding and event access",
    min: 750000,
    max: 1499999,
  },
  Bronze: {
    label: "Bronze Partner",
    description: "Partner recognition, logo placement",
    min: 250000,
    max: 749999,
  },
};

export function isSponsorTier(ticket: TicketType): boolean {
  return ticket in SPONSOR_TIERS;
}

// Checks a proposed sponsorship amount against its tier's range.
// Returns null if valid, or a human-readable error otherwise. The
// backend independently re-checks this too — this is for immediate
// client-side feedback, not the actual enforcement.
export function validateSponsorAmount(
  ticket: TicketType,
  amount: number
): string | null {
  const tier = (SPONSOR_TIERS as Record<string, SponsorTier>)[ticket];
  if (!tier) return "Not a sponsorship tier.";
  if (!Number.isFinite(amount) || amount < tier.min) {
    return `Amount must be at least KES ${tier.min.toLocaleString()} for ${tier.label}.`;
  }
  if (tier.max !== null && amount > tier.max) {
    return `Amount must be at most KES ${tier.max.toLocaleString()} for ${tier.label}.`;
  }
  return null;
}

// Backend (Apps Script / Sheet) expects these exact snake_case codes,
// see TICKET_PACKAGES in the Apps Script file. Keep this mapping in
// sync with that file if either side's keys ever change.
const BACKEND_TICKET_CODE: Record<TicketType, string> = {
  Dinner: "dinner",
  CorporateTable: "corporate_table",
  OpenPlay: "open_play",
  Workshop: "workshop",
  CoachesWorkshop: "coaches_workshop",
  OpenPlayWorkshop: "open_play_workshop",
  StrategicTitle: "strategic_title",
  Platinum: "platinum",
  Gold: "gold",
  Silver: "silver",
  Bronze: "bronze",
};

// ---------------------------------------------------------------------
// Basic client-side validation, mirroring (not replacing) the same
// checks the backend makes. Catching an obvious problem here means the
// person sees a clear message immediately instead of waiting on a
// round trip only to get the same rejection back from the server.
// ---------------------------------------------------------------------

const MAX_NAME_LENGTH = 150;
const MAX_NOTES_LENGTH = 1000;

function isValidEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function validateRegistrationData(data: RegistrationData): string | null {
  if (!data.fullName.trim()) return "Full name is required.";
  if (!isValidEmailFormat(data.email)) return "Enter a valid email address.";
  if (!data.phone.trim()) return "Phone number is required.";
  if (!data.country.trim()) return "Country is required.";

  if (isSponsorTier(data.ticketType)) {
    const amount = data.amount ?? 0;
    const sponsorError = validateSponsorAmount(data.ticketType, amount);
    if (sponsorError) return sponsorError;
  } else {
    if (!data.transactionCode.trim()) {
      return "M-Pesa transaction code is required.";
    }
    const quantity = data.quantity ?? 1;
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
      return `Quantity must be a whole number between 1 and ${MAX_QUANTITY}.`;
    }
  }

  return null;
}

export async function registerAttendee(
  data: RegistrationData
): Promise<RegistrationResponse> {
  const validationError = validateRegistrationData(data);
  if (validationError) {
    return { success: false, error: validationError };
  }

  try {
    const quantity = isSponsorTier(data.ticketType)
      ? 1
      : Math.max(1, Math.min(MAX_QUANTITY, Math.round(data.quantity ?? 1)));

    const amount = data.amount ?? getTicketAmount(data.ticketType) * quantity;

    const formData = new URLSearchParams();
    formData.append("apiKey", APP_SECRET);
    formData.append("fullName", data.fullName.trim().slice(0, MAX_NAME_LENGTH));
    formData.append("email", data.email.trim());
    formData.append("phone", data.phone.trim());
    formData.append("country", data.country.trim());
    formData.append("ticketType", BACKEND_TICKET_CODE[data.ticketType]);
    formData.append("quantity", quantity.toString());
    formData.append("amount", amount.toString());
    formData.append("transactionCode", data.transactionCode.trim());
    formData.append("mpesaMessage", data.mpesaMessage || "");
    formData.append(
      "companyName",
      (data.companyName || "").trim().slice(0, MAX_NAME_LENGTH)
    );
    formData.append("notes", (data.notes || "").trim().slice(0, MAX_NOTES_LENGTH));

    // A stalled request would otherwise hang indefinitely with no
    // feedback to the person filling in the form. 15 seconds is
    // generous for a simple POST but still bounded.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    let response: Response;
    try {
      response = await fetch(API_URL, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      return {
        success: false,
        error: "The registration server returned an error. Please try again.",
      };
    }

    let result: RegistrationResponse;
    try {
      result = await response.json();
    } catch {
      return {
        success: false,
        error: "Received an unexpected response from the server.",
      };
    }

    return result;
  } catch (err) {
    console.error(err);
    const isAbort = err instanceof DOMException && err.name === "AbortError";
    return {
      success: false,
      error: isAbort
        ? "The request timed out. Please check your connection and try again."
        : "Unable to connect to the registration server.",
    };
  }
}
