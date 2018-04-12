
import {
  mgFetchOne,
  mgFetchMany,
} from './MGFetcher';
var winston = require('winston');


export const ProductFetcher = {
  getProductsByPage(page, limit) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/products?page=${page}&limit=${limit}`;
    return mgFetchMany(url);
  },

  //
  getProductBySKU(sku) {
    const url = `https://api-test2.mgnonprod.co.uk/api/rest/products?filter[1][attribute]=sku&filter[1][eq]=${sku}`;

    return mgFetchOne(url);
  },

// TODO: probably shouldn't be in product fetcher; i'm sure it will find a proper home someday
// this would be capable of much enhancement, but keeping it simple atm
  getImageURLStringForStyle(style, width, height) {
    const sep = '&'
    let args = '?fmt=jpg'
    if (width) {
      args = `${args}${sep}w=${width}`
    }
    if (height) {
      args = `${args}${sep}h=${height}`
    }
    const name = `${style}_${width ? width : 'w'}_${height ? height : 'h'}.jpg`
    const url = `https://media.missguided.com/s/missguided/${style}_set/${name}${args}`
    return url
  },

  // fetch 4 images and a video url
  getImageURLStringsForStyle(style) {
    let arr = [];
    arr.push(`https://media.missguided.com/i/missguided/${style}_01`)
    arr.push(`https://media.missguided.com/i/missguided/${style}_02`)
    arr.push(`https://media.missguided.com/i/missguided/${style}_03`)
    arr.push(`https://media.missguided.com/i/missguided/${style}_04`)
    return arr
  }

};
