
import {
  mgFetchJSON,
} from './MGFetcher';
var winston = require('winston');

export const DeliveryFetcher = {
  getDelivery(orderId, postcode) {
    const realUrl = `https://www.missguided.co.uk/ordertracker/index/post?order_id=${orderId}&postcode=${postcode}`;

/*
because i'm using a missguided database full of test data, but the delivery system works with real data, i am going to 'cleverly' substitute a few known orderId/postcode combinations for the computed url.  I'll base the 'random' one chosen on the orderId so any given order will always have the same fake delivery data.

N.B.: the delivery server will eventually stop delivering data for orders which were delivered in the distant past (after 3 months? i think??).  When that happens, pester someone to look up some recent orders and refresh the fakeData, below.  Or, you know, get a proper delivery test system set up.  (as is recommended in the next paragraph as well...it is almost like I'm trying to tell you something....)

Naturally, IRL, all this fake nonsense would be removed, and realUrl would be renamed url and everything would be just tickety-boo...ps probably a better way to test would be to have an entire 'fake delivery server' which would send out data similar to what the real delivery server sends...i just haven't got time for all that.  Plus that would mean writing yet more code in this ridiculous untyped language.
*/
    const randomishFakeIndex = orderId.substr(-1) % 3
    const fakeData = [
      ['122728615', 'A91 C578'],
      ['122693205', 'BT817TZ'],
      ['122693184', 'Eh14 3Ee']
    ]
    const fakeUrl = `https://www.missguided.co.uk/ordertracker/index/post?order_id=${fakeData[randomishFakeIndex][0]}&postcode=${fakeData[randomishFakeIndex][1]}`;
    //winston.debug('delivery, real url: ', realUrl)
    //winston.debug('deliver, fetching fake url:', fakeUrl)
    const url = fakeUrl
// end of fakery

    return mgFetchJSON(url);
  },

};
