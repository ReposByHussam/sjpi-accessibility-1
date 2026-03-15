document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector("#site-search");

  searchForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
      searchInput?.focus();
      return;
    }

    window.alert(
      `You searched for: "${query}", unfortunately, this is just a demo and there is no actual search functionality implemented.`,
    );
  });
});
