const html = String.raw;

// Unexpected use of 'addEventListener'
// eslint-disable-next-line no-restricted-globals
addEventListener("fetch", (event) => {
  const content = getContent();

  const response = new Response(content, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
  event.respondWith(response);
});

function getContent() {
  return html`
    <html>
      <head>
        <title>Hello Ginpei World! 🐧</title>
      </head>
      <body>
        <h1>Hello Ginpei World! 🐧</h1>
      </body>
    </html>
  `.trim();
}
