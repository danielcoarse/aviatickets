import "../css/style.css";
import locations from "./store/locations";
import "./plugins";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";
import favoriteTickets from "./store/favoriteTickets";
import favoriteUI from "./views/favorite";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;

  // Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  ticketsUI.container.addEventListener("click", (e) => {
    if (e.target && e.target.matches("a.favorites-btn")) {
      addFavoritesHandler(e);
    }
  });

  favoriteUI.container.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target && e.target.matches("a.delete-favorite")) {
      const parent = e.target.closest("[data-id]");
      const ticketID = parent.dataset.id;

      parent.remove();

      Object.values(favoriteTickets.favoriteTickets).forEach((el, i) => {
        if (el._id == ticketID) {
          favoriteTickets.removeTicket(el);
        }
      });

      console.log(favoriteTickets.favoriteTickets);
    }
  });

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // data from form inputs
    // * {CODE, CODE, 2020-09, 2020-10}
    const origin = locations.getSityCodeByKey(formUI.originValue);
    const destination = locations.getSityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    ticketsUI.renderTickets(locations.lastSearch);
    favoriteUI.renderFavoriteTickets(favoriteTickets.favoriteTickets);
  }

  function addFavoritesHandler(e) {
    const parent = e.target.closest("[data-id]");
    const ticketID = parent.dataset.id;

    locations.lastSearch.forEach((el) => {
      if (el._id == ticketID) {
        favoriteTickets.addTicketsToFavorite(el);
        favoriteUI.renderFavoriteTickets(favoriteTickets.favoriteTickets);
      }
    });
  }
});
