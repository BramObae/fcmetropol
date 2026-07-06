const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

// Matches the keys used in EventsPage's PACKAGES object exactly.
export type TicketType =
  | "Dinner"
  | "CorporateTable"
  | "OpenPlay"
  | "Workshop"
  | "OpenPlayWorkshop";

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  ticketType: TicketType;
  transactionCode: string;
  mpesaMessage?: string;
  quantity?: number;
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

// Base price per unit (per person / per player / per table of 10).
export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "Dinner":
      return 5000;
    case "OpenPlay":
      return 5000;
    case "Workshop":
      return 10000;
    case "OpenPlayWorkshop":
      return 15000;
    case "CorporateTable":
      return 100000;
    default:
      return 0;
  }
}

// Backend (Apps Script / Sheet) expects the old lowercase codes.
// Map new-style keys -> legacy values so the sheet keeps working.
const BACKEND_TICKET_CODE: Record<TicketType, string> = {
  Dinner: "dinner",
  CorporateTable: "corporate",
  OpenPlay: "openPlay",
  Workshop: "workshop",
  OpenPlayWorkshop: "combo",
};

export async function registerAttendee(
  data: RegistrationData
): Promise<RegistrationResponse> {
  try {
    const quantity = data.quantity ?? 1;
    const amount = data.amount ?? getTicketAmount(data.ticketType) * quantity;

    const formData = new URLSearchParams();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("country", data.country);
    formData.append("ticketType", BACKEND_TICKET_CODE[data.ticketType]);
    formData.append("quantity", quantity.toString());
    formData.append("amount", amount.toString());
    formData.append("transactionCode", data.transactionCode);
    formData.append("mpesaMessage", data.mpesaMessage || "");
    formData.append("notes", data.notes || "");

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: "Unable to connect to the registration server.",
    };
  }
}
