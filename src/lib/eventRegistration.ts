// src/lib/eventRegistration.ts

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
  message?: string;
  error?: string;
}

/**
 * Returns ticket amount
 */
export function getTicketAmount(ticket: TicketType): number {
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

/**
 * Validate form
 */
export function validateRegistration(data: RegistrationData): string | null {
  if (!data.fullName.trim()) return "Full name is required.";

  if (!data.email.trim()) return "Email is required.";

  if (!/\S+@\S+\.\S+/.test(data.email))
    return "Please enter a valid email.";

  if (!data.phone.trim())
    return "Phone number is required.";

  if (!data.country.trim())
    return "Country is required.";

  if (!data.ticketType)
    return "Select a ticket type.";

  if (!data.transactionCode.trim())
    return "Enter the M-Pesa transaction code.";

  if (!data.mpesaMessage.trim())
    return "Paste the M-Pesa confirmation message.";

  return null;
}

/**
 * Submit registration
 */
export async function registerAttendee(
  data: RegistrationData
): Promise<RegistrationResponse> {

  const validation = validateRegistration(data);

  if (validation) {
    return {
      success: false,
      error: validation,
    };
  }

  try {
    const payload = {
      ...data,

      amount: getTicketAmount(data.ticketType),
    };

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return result;

  } catch (error) {

    console.error(error);

    return {
      success: false,
      error:
        "Unable to connect to the registration server. Please try again.",
    };
  }
}
