import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import { CustomerFetcher } from './CustomerFetcher';
import { OrderFetcher } from './OrderFetcher';
import { CustomerAddressFetcher } from './CustomerAddressFetcher';
import { CustomerAddressType } from './CustomerAddress';
import { OrderType } from './Order';
import { ISO8601Date } from './ISO8601Date';
const moment = require('moment');

var winston = require('winston');

export const CustomerInput = new GraphQLInputObjectType({
  name: 'CustomerInput',
  fields: {
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    dob: {
      type: ISO8601Date,
    },
    email: {
      type: GraphQLString,
    },
  },
});

export const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: {
    addresses: {
      description: 'array of addresses',
      type: new GraphQLList(CustomerAddressType),
      resolve: (obj, args, ctx) => {
        return CustomerAddressFetcher.getCustomerAddressesByCustomerId(obj.entity_id);
      },
    },
    created_at: {
      description: 'enter your description',
      type: ISO8601Date,
    },
    created_in: {
      description: 'enter your description',
      type: GraphQLString,
    },
    disable_auto_group_change: {
      description: 'enter your description',
      type: GraphQLString,
    },
    dob: {
      description: 'enter your description',
      type: ISO8601Date,
    },
    email: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    group_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    lastname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    orders: {
      type: new GraphQLList(OrderType),
      args: {
        orderIds: {
          type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
        },
      },
      resolve: (obj, {orderIds}, ctx) => {
        const sku = obj.sku
        return OrderFetcher.getOrdersByCustomerId(obj.entity_id, orderIds)
      },
    },
    website_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },

});

export const ConnectedCustomerQuery = {
  type: CustomerType,
  resolve: (obj, args, ctx) => {
    return CustomerFetcher.getCustomerById(ctx.customerId);
  },
};

export const CustomerByEmailQuery = {
  type: CustomerType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {email}) => {
    return CustomerFetcher.getCustomerByEmail(email);
  },
};

export const CustomerUpdateMutation = {
  type: CustomerType,
  args: {
    customerInput: {
      type: new GraphQLNonNull(CustomerInput),
    }
  },
  resolve: (obj, {customerInput}, ctx) => {

    var cleaned = {}
    Object.keys(customerInput).forEach(key => {
      const value = customerInput[key]
      switch (key) {
        case "dob":
        // note how the input dob is a different format from the output dob!  This is what makes APIs such a fun adventure for client devs
          cleaned[key] = value.format("DD-MM-YYYY")
          break;
        default:
          cleaned[key] = value
      }
    })

    return CustomerFetcher.updateCustomerById(ctx.customerId, cleaned)
    .then(res => CustomerFetcher.getCustomerById(ctx.customerId))
  },
};

export const CustomerConnectMutation = {
  type: CustomerType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {email, password}) => {
    if (password != "shhhh") {
      throw("invalid login")
    }
    // naturally, the error handling here needs beefing up.  for example, if the username is not recognised by the server, it doesn't send back an error, it just sends back: [] as the response.  So, somewhere in here, it should
    return CustomerFetcher.getCustomerByEmail(email);
  },
};
