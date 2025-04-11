import axios from "axios";

export async function postEmailOrCodeConfirmation(data) {
  try {
    console.log(data);
    const res = await axios.post(
      "https://buy-sell-ecommerce.onrender.com/api/auth/email_confirmation/",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Email/code confirmation error:", error);
    throw error;
  }
}
/**
 *
 * // Send email
await postEmailOrCodeConfirmation({ email }, token);

// Confirm with code
await postEmailOrCodeConfirmation({ email, code }, token);

 */
