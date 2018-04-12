
import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import { DeliveryFetcher } from './DeliveryFetcher';
import { ISO8601Date } from './ISO8601Date';
var winston = require('winston');
const moment = require('moment');


const DeliveryExpectedDateRangeType = new GraphQLObjectType({
  name: 'DeliveryExpectedDateRangeType',
  fields: {
    from: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.from * 1000
      },
    },
    to: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.to * 1000
      },
    }
  },
});


const DeliveryOrderShippingAddressType = new GraphQLObjectType({
  name: 'DeliveryOrderShippingAddressType',
  fields: {
    city: {
      description: 'enter your description',
      type: GraphQLString,
    },
    email: {
      description: 'enter your description',
      type: GraphQLString,
    },
    name: {
      description: 'enter your description',
      type: GraphQLString,
    },
    postcode: {
      description: 'enter your description',
      type: GraphQLString,
    },
    region: {
      description: 'enter your description',
      type: GraphQLString,
    },
    street_one: {
      description: 'enter your description',
      type: GraphQLString,
    }
  },
});


const DeliveryStatusType = new GraphQLObjectType({
  name: 'DeliveryStatusType',
  fields: {
    acceptable: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    friendly_status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    timestamp: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.timestamp * 1000
      },
    }
  },
});


export const DeliveryType = new GraphQLObjectType({
  name: 'DeliveryType',
  fields: () => ({
    acceptable_status: {
      description: 'enter your description',
      type: DeliveryStatusType,
    },
    acceptable_status_logs: {
      description: 'enter your description',
      type: new GraphQLList(DeliveryStatusType),
    },
    delivered_date: {
      description: 'enter your description',
      type: ISO8601Date,
      resolve: (obj) => {
        return obj.delivered_date * 1000
      },
    },
    delivery_expected_date_range: {
      description: 'enter your description',
      type: DeliveryExpectedDateRangeType,
      resolve: (obj) => obj.expected_delivery_dates,
    },
    is_delivered: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    order_date: {
      description: 'enter your description',
      // oddly, this date doesn't need multiplying by 1000! consistency, bah!
      type: ISO8601Date,
    },
    order_date_pretty: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    order_shipping_address: {
      description: 'enter your description',
      type: DeliveryOrderShippingAddressType,
    },
    status: {
      description: 'enter your description',
      type: DeliveryStatusType,
    },
    status_logs: {
      description: 'enter your description',
      type: new GraphQLList(DeliveryStatusType),
    },
    success: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    tracking_carrier: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tracking_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tracking_link: {
      description: 'enter your description',
      type: GraphQLString,
    }
  })
});
