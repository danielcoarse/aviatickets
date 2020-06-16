import currencyUI from "./currency";

class FavoriteUI {
  constructor(currency) {
    this.container = document.getElementById("favorite-dropdown");
    this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
  }

  renderFavoriteTickets(tickets) {
    this.clearContainer();

    let fragment = "";
    const currency = this.getCurrencySymbol();

    Object.values(tickets).forEach((ticket) => {
      const template = FavoriteUI.favoriteTicketTemplate(ticket, currency);
      fragment += template;
    });

    this.container.insertAdjacentHTML("afterbegin", fragment);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  static favoriteTicketTemplate(ticket, currency) {
    return `
      <div class="favorite-item  d-flex align-items-start" data-id="${ticket._id}">
        <img
          src="${ticket.airline_logo}"
          class="favorite-item-airline-img"
        />
        <div class="favorite-item-info d-flex flex-column">
          <div
            class="favorite-item-destination d-flex align-items-center"
          >
            <div class="d-flex align-items-center mr-auto">
              <span class="favorite-item-city">${ticket.origin_name}</span>
              <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
              <i class="medium material-icons">flight_land</i>
              <span class="favorite-item-city">${ticket.destination_name}</span>
            </div>
          </div>

          <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${ticket.departure_at}</span>
            <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
          </div>
          <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
          </div>
          <a
            class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
            >Delete</a
          >
        </div>
      </div>
    `;
  }
}

const favoriteUI = new FavoriteUI(currencyUI);

export default favoriteUI;