import axios from "axios";
import config from "../config/apiConfig";

// ! Цены на ближайшие рейсы по указанным локациям и датам

// * Endpoints
/**
 * * countries — []
 * * cities — []
 * * prices/cheap — [рейсы]. Но здесь пользователю нужно предоставить страны города и даты для выбора
 */

class Api {
  constructor(config) {
    this.url = config.url;
  }

  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`);
      return response.data;
    } catch (err) {
      return new Error(err);
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      return response.data;
    } catch (err) {
      return new Error(err);
    }
  }
  async prices(params) {
    try {
      const response = await axios.get(`${this.url}/prices/cheap`, {
        params,
      });
      return response.data;
    } catch (err) {
      return new Error(err);
    }
  }

  async airlines() {
    try {
      const response = await axios.get(`${this.url}/airlines`);
      return response.data;
    } catch (err) {
      return new Error(err);
    }
  }
}

const api = new Api(config);

export default api;
