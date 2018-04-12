import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import { OrdersQuery } from './Order';
import {
  ProductBySKUQuery,
  ProductsByPageQuery,
 } from './Product'
import {
  ConnectedCustomerQuery,
  CustomerByEmailQuery,
  CustomersQuery,
  CustomerConnectMutation,
  CustomerUpdateMutation,
} from './Customer';
import {
  CustomerAddressUpdateMutation,
} from './CustomerAddress';

const query = new GraphQLObjectType({
  description: 'global query object',
  name: 'Query',
  fields: {
    connectedCustomer: ConnectedCustomerQuery,
    customerByEmail: CustomerByEmailQuery,
    productBySKU: ProductBySKUQuery,
    productsByPage: ProductsByPageQuery,
  },
});

const mutation = new GraphQLObjectType({
  description: 'global mutation object',
  name: 'Mutation',
  fields: {
    connect: CustomerConnectMutation,
    customerUpdate: CustomerUpdateMutation,
    customerAddressUpdate: CustomerAddressUpdateMutation,
  },
});


export const schema = new GraphQLSchema({
  query: query,
  mutation: mutation,
});
