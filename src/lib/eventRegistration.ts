const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

export type TicketType =
  | "dinner"
  | "openPlay"
  | "workshop"
  | "combo"
  | "corporate";

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  ticketType: TicketType;
  transactionCode: string;
  // Optional now: the new registration flow no longer collects the raw
  // M-Pesa confirmation SMS.
  mpesaMessage?: string;
  // How many people/players this registration covers. Always 1 for the
  // fixed-quantity Corporate Table. Defaults to 1 if omitted.
  quantity?: number;
  // Optional override for the total amount actually charged (price ×
  // quantity). The events page always passes this explicitly, but the
  // fallback below keeps single-unit registrations working either way.
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

// Base price per unit (per person / per player / per table). Multiply by
// quantity to get the total — the events page already does this and
// passes the result via `amount`, but this stays here as the source of
// truth and as a fallback if `amount` isn't supplied.
export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "dinner":
      return 5000;
    case "openPlay":
      return 5000;
    case "workshop":
      return 10000;
    case "combo":
      return 15000;
    case "corporate":
      return 100000;
    default:
      return 0;
  }
}

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
    formData.append("ticketType", data.ticketType);
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
