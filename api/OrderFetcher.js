
import { mgFetchMany } from './MGFetcher';

export const OrderFetcher = {
  getOrdersByCustomerId(customerId, orderIds) {
    // TODO: should do pagination, but not needed for prototype and besides I don't understand magento's wacky page parameter!
    var url = `https://api-test2.mgnonprod.co.uk/api/rest/orders?limit=99&order=created_at&dir=dsc&filter[1][attribute]=customer_id&filter[1][eq]=${customerId}`;

// TODO: specifying multiple orderIds only fetches the first...don't know how magento wants a list of orderIds
    if (orderIds !== undefined && orderIds !== null && orderIds.length > 0) {
      url += `&filter[2][attribute]=entity_id`
      var index;
      for (index = 0; index < orderIds.length; index++) {
        url += `&filter[2][in][${index}]=${orderIds[index]}`
      }
    }
// https://api-test2.mgnonprod.co.uk/api/rest/orders?order=created_at&dir=asc&filter[1][attribute]=customer_id&filter[1][in]=6370316&filter[2][attribute]=entity_id&filter[2][in][1]=17741053&filter[2][in][2]=17741169

    return mgFetchMany(url);
  },

};
