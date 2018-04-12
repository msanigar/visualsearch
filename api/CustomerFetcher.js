
import {
  mgFetchOne,
  mgPutJSON,
} from './MGFetcher';

const util = require('util')
const winston = require('winston');

export const CustomerFetcher = {
  getCustomerById(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=entity_id&filter[1][eq]=${customerId}`;

    return mgFetchOne(url);
  },

  getCustomerByEmail(email) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers?limit=5&filter[1][attribute]=email&filter[1][eq]=${email}`;

    return mgFetchOne(url)
    .then(res => {
      // TODO: very likely needs more bad data checking
      if (res["entity_id"] == null) {
        throw("invalid login")
      }
      return res
    })
  },

  updateCustomerById(customerId, jsonableObject) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers/${customerId}`

    return mgPutJSON(url, jsonableObject)
  },

};
