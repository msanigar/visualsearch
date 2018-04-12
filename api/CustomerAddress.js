import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql';
import { CustomerAddressFetcher } from './CustomerAddressFetcher';
var winston = require('winston');

export const CustomerAddressInput = new GraphQLInputObjectType({
  name: 'CustomerAddressInput',
  fields: {
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    street: {
      type: new GraphQLList(GraphQLString),
    },
    city: {
      type: GraphQLString,
    },
    region: {
      type: GraphQLString,
    },
    postcode: {
      type: GraphQLString,
    },
    is_default_billing: {
      type: GraphQLBoolean,
    },
    is_default_shipping: {
      type: GraphQLBoolean,
    },
  },
});


/*
NB: see the note in Order.js about OrderAddressType and its relationship to this address.
*/
export const CustomerAddressType = new GraphQLObjectType({
  name: 'CustomerAddress',
  fields: {
    care_of: {
      description: 'enter your description',
      type: GraphQLString,
    },
    city: {
      description: 'enter your description',
      type: GraphQLString,
    },
    company: {
      description: 'enter your description',
      type: GraphQLString,
    },
    country_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    entity_id: {
      description: 'enter your description',
      type: new GraphQLNonNull(GraphQLString),
    },
    fax: {
      description: 'enter your description',
      type: GraphQLString,
    },
    firstname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_default_billing: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    is_default_shipping: {
      description: 'enter your description',
      type: GraphQLBoolean,
    },
    lastname: {
      description: 'enter your description',
      type: GraphQLString,
    },
    middlename: {
      description: 'enter your description',
      type: GraphQLString,
    },
    postcode: {
      description: 'enter your description',
      type: GraphQLString,
    },
    prefix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    region: {
      description: 'enter your description',
      type: GraphQLString,
    },
    street: {
      description: 'enter your description',
      type: new GraphQLList(GraphQLString),
    },
    suffix: {
      description: 'enter your description',
      type: GraphQLString,
    },
    telephone: {
      description: 'enter your description',
      type: GraphQLString,
    },
    vat_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
  },

});

export const CustomerAddressesByCustomerIdQuery = {
  type: CustomerAddressType,
  resolve: (obj, args, ctx) => {
    return CustomerAddressFetcher.getCustomerAddressesByCustomerId(ctx.customerId);
  },
};

export const CustomerAddressUpdateMutation = {
  type: CustomerAddressType,
  args: {
    customerAddressEntityId: {
      type: GraphQLString,
    },
    customerAddressInput: {
      type: new GraphQLNonNull(CustomerAddressInput),
    }
  },
  resolve: (obj, {customerAddressEntityId, customerAddressInput}, ctx) => {

    var cleaned = {
      "entity_id": customerAddressEntityId
    }
    Object.keys(customerAddressInput).forEach(key => {
      const value = customerAddressInput[key]
      switch (key) {
        case "is_default_billing":
        case "is_default_shipping":
          cleaned[key] = value ? 1 : 0
          break;
        default:
          cleaned[key] = value
      }
    })

    // currently not actually modifying anything because the mean old magento gives me a 500 error
        return CustomerAddressFetcher.updateCustomerAddressByAddressId(customerAddressEntityId, cleaned)
        .then(res => CustomerAddressFetcher.getCustomerAddressByAddressId(customerAddressEntityId))

    // return CustomerAddressFetcher.getCustomerAddressByAddressId(customerAddressEntityId)

  },
};
