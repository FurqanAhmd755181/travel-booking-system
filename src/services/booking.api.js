export async function checkAvailability(formData) {
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
      throw new Error(errorData.message || "Avaliablity check Failed");
    }

    return data;
    
  } catch (error) {
    console.log(error);
    return {
      available: false,
      message: error.message,
    };
  }
}
