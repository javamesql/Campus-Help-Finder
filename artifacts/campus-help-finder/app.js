const searchInput = document.querySelector("#resource-search");
const cards = [...document.querySelectorAll(".resource-card")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const clearSearch = document.querySelector("#clear-search");

function filterResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches = card.textContent.toLocaleLowerCase().includes(query)
      || card.dataset.search.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = query
    ? `Showing ${visibleCount} of 6 resources`
    : "Showing all 6 resources";
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterResources);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  filterResources();
  searchInput.focus();
});
document.querySelectorAll(".learn-link").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
