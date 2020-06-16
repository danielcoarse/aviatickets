class FavoriteTickets {
  constructor() {
    this.tickets = {};
  }

  get favoriteTickets() {
    return this.tickets;
  }

  addTicketsToFavorite(ticket) {
    this.tickets[ticket._id] = ticket;
  }

  removeTicket(ticket) {
    delete this.tickets[ticket._id];
  }
}

const favoriteTickets = new FavoriteTickets();

export default favoriteTickets;
