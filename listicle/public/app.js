// public/app.js
async function loadEvents() {
  const container = document.getElementById("events");

  try {
    const res = await fetch("/api/events");
    if (!res.ok) throw new Error("Failed to load events");

    const events = await res.json();
    container.innerHTML = events.map(renderCard).join("");
  } catch (err) {
    container.innerHTML = `
      <article>
        <h2>Couldn’t load events</h2>
        <p class="muted">${escapeHtml(err.message)}</p>
      </article>
    `;
  }
}

function renderCard(event) {
  const priceText = event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`;
  return `
    <article class="card">
      <img class="card-image" src="${escapeHtml(event.imageUrl)}" alt="${escapeHtml(event.name)}" />
      <h2 class="card-title">${escapeHtml(event.name)}</h2>
      <p class="muted"><strong>Venue:</strong> ${escapeHtml(event.venue)}</p>
      <p class="muted"><strong>Genre:</strong> ${escapeHtml(event.genre)}</p>
      <p class="muted"><strong>Price:</strong> ${escapeHtml(priceText)}</p>
      <a role="button" href="/events/${encodeURIComponent(event.slug)}">View details</a>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loadEvents();