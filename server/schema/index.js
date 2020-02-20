const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList
} = graphql;

const books = [
  { id: '1', name: 'Name of the Wind', genre: 'Fantasy', authorId: '1' },
  { id: '2', name: 'The final Empire', genre: 'Fantasy', authorId: '2' },
  { id: '3', name: 'The Long Earth', genre: 'Sci-Fi', authorId: '3' },
  { id: '4', name: 'The hero of ages', genre: 'Fantasy', authorId: '2' },
  { id: '5', name: 'The color of Magic', genre: 'Fantasy', authorId: '3' },
  { id: '6', name: 'The Light Fantastic', genre: 'Fantasy', authorId: '3' }
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
    id: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    id: { type: GraphQLID },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
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
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
