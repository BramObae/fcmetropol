const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

// Matches the five real ticket categories for Metropol Open Play Kenya
// 2026: Launch Dinner, Corporate Table (10-seat table), Open Play,
// Workshop, and the Open Play + Workshop combo.
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
  companyName?: string;
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

// Fixed prices per package.
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
    case "OpenPlayWorkshop":
      return 15000;
    default:
      return 0;
  }
}

// Backend (Apps Script / Sheet) expects these exact snake_case codes,
// see TICKET_PACKAGES in the Apps Script file. Keep this mapping in
// sync with that file if either side's keys ever change.
const BACKEND_TICKET_CODE: Record<TicketType, string> = {
  Dinner: "dinner",
  CorporateTable: "corporate_table",
  OpenPlay: "open_play",
  Workshop: "workshop",
  OpenPlayWorkshop: "open_play_workshop",
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
