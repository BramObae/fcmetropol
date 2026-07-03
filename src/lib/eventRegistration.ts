const API_URL =
  "https://script.google.com/macros/s/AKfycbwQuY20HTQfE9i28Hjoh0a5qTyZn5d5ysp4po1NbiKK38q-tDI79QZ4-Lthz8U3oFQUEw/exec";

export type TicketType = "Regular" | "VIP" | "VVIP";

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  ticketType: TicketType;
  transactionCode: string;
  mpesaMessage: string;
  notes?: string;
}

export interface RegistrationResponse {
  success: boolean;
  registration?: string;
  error?: string;
}

export function getTicketAmount(ticket: TicketType) {
  switch (ticket) {
    case "Regular":
      return 500;

    case "VIP":
      return 1000;

    case "VVIP":
      return 5000;

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
      getTicketAmount(data.ticketType).toString()
    );
    formData.append(
      "transactionCode",
      data.transactionCode
    );
    formData.append(
      "mpesaMessage",
      data.mpesaMessage
    );
    formData.append(
      "notes",
      data.notes || ""
    );

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
