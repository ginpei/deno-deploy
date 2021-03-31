addEventListener("fetch", (event) => {
  const response = new Response("Hello Ginpei World! 🐧", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
