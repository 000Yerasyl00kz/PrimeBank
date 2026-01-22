export default async () => {
  const response = await fetch("https://gate.lava.top/api/v3/invoice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.LAVA_API_KEY
    },
    body: JSON.stringify({
      offerId: "c2bafffb-43f8-48a7-acce-1104ccf2ca17",
      email: "test@example.com",
      currency: "RUB",
      returnUrl: "https://primebaknofficial.netlify.app/success"
    })
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
