/* This server js file returns the elements of our book collection
 * It also adds three dumby books to our collection if it is empty
 *
 * To do: filter search results based on search parameters
 *        sort results by price, name, ect.
 */
Meteor.publish('books', function() {
    return Books.find();
});
Meteor.publish('classes', function() {
    return Classes.find();
});

Meteor.methods({
  newBook: function (book) {
    Books.insert(book);
  },
  removeBook: function (id) {
    Books.remove(id);
  }
});
