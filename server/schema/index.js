const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} = graphql;

const books = [
  { id: '1', name: 'Name of the Wind', genre: 'Fantasy' },
  { id: '2', name: 'The final Empire', genre: 'Fantasy' },
  { id: '3', name: 'The Long Earth', genre: 'Sci-Fi' }
];

const authors = [
  { id: '1', name: 'Rhonda Byre', age: 41 },
  { id: '2', name: 'Anesh Parvatha', age: 26 },
  { id: '3', name: 'Stephen Hawking', age: 53 }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    id: { type: GraphQLID }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    id: { type: GraphQLID }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
