import {
  mgFetchJSON,
  mgPutJSON,
} from './MGFetcher';
var inspect = require('object-inspect');

export const CustomerAddressFetcher = {
  getCustomerAddressesByCustomerId(customerId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers/${customerId}/addresses`;
    return mgFetchJSON(url)
  },

  getCustomerAddressByAddressId(addressId) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers/addresses/${addressId}`;
    return mgFetchJSON(url)
  },

  updateCustomerAddressByAddressId(addressId, jsonableObject) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/customers/addresses/${addressId}`

    return mgPutJSON(url, jsonableObject)
  },

};
