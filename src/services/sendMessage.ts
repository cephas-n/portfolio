const API_HOST = import.meta.env.VITE_APP_API_URL;

export default async (message: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log(message);
  try {
    const res = await fetch(`${API_HOST}/messages`, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Network error: " + res.statusText);
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
