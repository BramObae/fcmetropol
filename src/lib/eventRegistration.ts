const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

export type TicketType = "Individual" | "Corporate" | "Sponsor";

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
  // Optional override for the amount actually charged. Needed for the
  // Sponsor package, which uses a custom amount instead of the fixed
  // price returned by getTicketAmount().
  amount?: number;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "Individual":
      return 5000;
    case "Corporate":
      return 40000;
    case "Sponsor":
      // Custom amount, no fixed price.
      return 0;
    default:
      return 0;
  }
}

export async function registerAttendee(
  data: RegistrationData
): Promise<RegistrationResponse> {
  try {
    const formData = new URLSearchParams();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("country", data.country);
    formData.append("ticketType", data.ticketType);
    formData.append(
      "amount",
      (data.amount ?? getTicketAmount(data.ticketType)).toString()
    );
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
