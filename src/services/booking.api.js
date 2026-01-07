export async function checkAvailability(formData, options = { checkOnly: false }) {
  try {
    const res = await fetch(
      "http://localhost:5000/api/booking/check-availability",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Availability check failed");
    }

    if (options.checkOnly) {
      return { available: data.available };
    }

    return data; // full data for Availability page
  } catch (error) {
    console.log(error);
    return {
      available: false,
      message: error.message,
    };
  }
}
