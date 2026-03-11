const pageMap = {
  home: "/",
  profile: "/profile/",
  research: "/research/",
  publications: "/publications/",
  cv: "/cv/",
  contact: "/contact/",
};

const page = document.body.dataset.page;
const currentLink = document.querySelector(`.site-nav a[href="${pageMap[page]}"]`);

if (currentLink) {
  currentLink.classList.add("is-current");
  currentLink.setAttribute("aria-current", "page");
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const dataCache = new Map();
const primaryAuthorName = "Tatsuya Yamada";

async function loadJson(path) {
  if (dataCache.has(path)) {
    return dataCache.get(path);
  }

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  const data = await response.json();
  dataCache.set(path, data);
  return data;
}

function createPublicationItem(item) {
  const listItem = document.createElement("li");
  const content = document.createElement(item.url ? "a" : "span");

  if (item.url) {
    content.href = item.url;
  }

  if (item.authors) {
    const authors = document.createElement("span");
    const highlightedAuthors = item.authors.replaceAll(
      primaryAuthorName,
      `<span class="author-highlight">${primaryAuthorName}</span>`
    );
    authors.innerHTML = highlightedAuthors;
    content.append(authors);
  }

  if (item.year) {
    content.append(` (${item.year})`);
  }

  if (item.title) {
    content.append(` "${item.title}."`);
  }

  if (item.venue) {
    content.append(` ${item.venue}`);
  }

  if (item.details) {
    content.append(` ${item.details}`);
  }

  listItem.append(content);

  return listItem;
}

function sortByYearDesc(items) {
  return [...items].sort((a, b) => (b.year || 0) - (a.year || 0));
}

function createAwardItem(item) {
  const listItem = document.createElement("li");
  const parts = [];

  if (item.year) {
    parts.push(String(item.year));
  }

  if (item.title) {
    parts.push(item.title);
  }

  if (item.organization) {
    parts.push(item.organization);
  }

  if (item.details) {
    parts.push(item.details);
  }

  listItem.textContent = parts.join(" / ");
  return listItem;
}

function hideClosestCard(container) {
  const card = container.closest(".card");

  if (card) {
    card.hidden = true;
  }
}

async function renderPublicationLists() {
  const containers = document.querySelectorAll("[data-publications-list]");

  if (!containers.length) {
    return;
  }

  try {
    const data = await loadJson("/data/publications.json");

    containers.forEach((container) => {
      const mode = container.dataset.publicationsList;
      const limit = Number(container.dataset.limit || "0");
      let items = [];

      if (mode === "papers") {
        items = sortByYearDesc(data.papers || []);
      } else if (mode === "talks") {
        items = sortByYearDesc(data.talks || []);
      } else if (mode === "recent-papers") {
        items = sortByYearDesc(data.papers || []);
      }

      if (limit > 0) {
        items = items.slice(0, limit);
      }

      if (!items.length) {
        hideClosestCard(container);
        return;
      }

      items.forEach((item) => {
        container.append(createPublicationItem(item));
      });
    });
  } catch (error) {
    containers.forEach((container) => {
      hideClosestCard(container);
    });
  }
}

async function renderAwardLists() {
  const containers = document.querySelectorAll("[data-awards-list]");

  if (!containers.length) {
    return;
  }

  try {
    const data = await loadJson("/data/awards.json");
    const sorted = sortByYearDesc(data.awards || []);

    containers.forEach((container) => {
      const limit = Number(container.dataset.limit || "0");
      let items = sorted;

      if (limit > 0) {
        items = items.slice(0, limit);
      }

      if (!items.length) {
        hideClosestCard(container);
        return;
      }

      items.forEach((item) => {
        container.append(createAwardItem(item));
      });
    });
  } catch (error) {
    containers.forEach((container) => {
      hideClosestCard(container);
    });
  }
}

void renderPublicationLists();
void renderAwardLists();
