const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

// Matches the three real ticket categories: Individual, Corporate (10
// delegates, fixed package price), and Sponsor (custom partnership amount).
export type TicketType = "Individual" | "Corporate" | "Sponsor";

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  ticketType: TicketType;
  transactionCode: string;
  mpesaMessage?: string;
  companyName?: string;
  // Total amount actually charged. Required for Sponsor (custom amount);
  // for Individual/Corporate the page passes getTicketAmount() explicitly.
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

// Fixed prices. Sponsor has no fixed price — it's a custom partnership
// amount collected on the form — so it returns 0 here as a safe default
// only; the page always supplies the real amount explicitly for Sponsor.
export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "Individual":
      return 5000;
    case "Corporate":
      return 40000;
    case "Sponsor":
      return 0;
    default:
      return 0;
  }
}

// Backend (Apps Script / Sheet) expects lowercase ticket codes.
const BACKEND_TICKET_CODE: Record<TicketType, string> = {
  Individual: "individual",
  Corporate: "corporate",
  Sponsor: "sponsor",
};

export async function registerAttendee(
  data: RegistrationData
): Promise<RegistrationResponse> {
  try {
    const amount = data.amount ?? getTicketAmount(data.ticketType);

    const formData = new URLSearchParams();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("country", data.country);
    formData.append("ticketType", BACKEND_TICKET_CODE[data.ticketType]);
    formData.append("amount", amount.toString());
    formData.append("transactionCode", data.transactionCode);
    formData.append("mpesaMessage", data.mpesaMessage || "");
    formData.append("companyName", data.companyName || "");
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
