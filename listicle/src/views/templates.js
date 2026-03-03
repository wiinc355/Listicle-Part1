// src/views/templates.js
function renderEventDetailPage(event) {
  const priceText = event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`;
  const date = new Date(event.dateTime);
  const dateText = isNaN(date) ? event.dateTime : date.toLocaleString();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(event.name)} | Listicle</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main class="container">
    <nav>
      <ul><li><strong>Discover Local Music</strong></li></ul>
      <ul><li><a href="/">Home</a></li></ul>
    </nav>

    <article>
      <header>
        <h1>${escapeHtml(event.name)}</h1>
        <p class="muted">
          <strong>Venue:</strong> ${escapeHtml(event.venue)} &nbsp;•&nbsp;
          <strong>Genre:</strong> ${escapeHtml(event.genre)} &nbsp;•&nbsp;
          <strong>Price:</strong> ${escapeHtml(priceText)}
        </p>
      </header>

      <img class="detail-image" src="${escapeHtml(event.imageUrl)}" alt="${escapeHtml(event.name)}"/>

      <p><strong>Date & Time:</strong> ${escapeHtml(dateText)}</p>
      <p><strong>Artists:</strong> ${escapeHtml(event.artists.join(", "))}</p>
      <p>${escapeHtml(event.description)}</p>

      <footer>
        <a role="button" href="/">Back to list</a>
      </footer>
    </article>
  </main>
</body>
</html>`;
}

function render404Page(requestedPath) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 | Listicle</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main class="container">
    <article>
      <h1>404 - Page Not Found</h1>
      <p class="muted">No route matches: <code>${escapeHtml(requestedPath)}</code></p>
      <a role="button" href="/">Go Home</a>
    </article>
  </main>
</body>
</html>`;
}

function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>500 | Listicle</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
</head>
<body>
  <main class="container">
    <article>
      <h1>500 - Server Error</h1>
      <p class="muted">Something went wrong on the server.</p>
      <a role="button" href="/">Go Home</a>
    </article>
  </main>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = { renderEventDetailPage, render404Page, renderErrorPage };