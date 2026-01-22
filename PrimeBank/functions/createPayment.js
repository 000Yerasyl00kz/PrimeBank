// export default async () => {
//   try {
//     const response = await fetch("https://gate.lava.top/api/v3/invoice", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Api-Key": process.env.LAVA_API_KEY
//       },
//       body: JSON.stringify({
//         offerId: "c2bafffb-43f8-48a7-acce-1104ccf2ca17",
//         email: "test@example.com",
//         currency: "RUB",
//         returnUrl: "https://your-site.netlify.app/success"
//       })
//     });

//     const data = await response.json();

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" }
//     });

//   } catch (err) {
//     return new Response(
//       JSON.stringify({
//         error: "Function crashed",
//         message: err.message
//       }),
//       { status: 500 }
//     );
//   }
// };

export default async () => {
  return new Response(
    JSON.stringify({ ok: true }),
    { headers: { "Content-Type": "application/json" } }
  );
};