const moment = require('moment');

const {
  GraphQLScalarType,
  GraphQLError
} = require('graphql');
var winston = require('winston');

export var ISO8601Date = new GraphQLScalarType({
  name: 'ISO8601Date',

  /*
  NB: here and elsewhere when dealing with dates I have sprinkled utc() around fairly liberally.  This is not correct (as testing with customer dob having a time of midnight will prove).  As this is a prototype of GraphQL, I'm not going to investigate and set it right.

  So, this is a warning to anyone who might mistake this masterly Javascript masterpiece for fully working, tested, ready-to-deploy code.  It is not.
  */

  // What gets returned to the caller after being queried
  // attempts to parse value and converts to ISO8601 in UTC time zone
  serialize: value => {
    const result = moment(value).utc().format()
    return result
  },

  // What is parsed when the value is embedded into the query string
  parseLiteral: ast => {
    const result = moment(ast.value).utc()
    return result
  },

  // What is parsed when the value is passed as a variable
  parseValue: value => {
    const result = moment(value)
    return result
  },

});
