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

//server part of email function
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

if (Books.find().count() === 0) {
  Books.insert({
    title: "Fundamentals of Chemistry",
    author: "Ralph A. Burns",
    edition: "1st",
    isbn: 9780321500458,
    price: "25.00",
    comment: "Only worn once",
    thumbnail: "http://www.thomasriggs.net/blog/wp-content/uploads/2009/08/TextbookCover.jpg"
  });

  Books.insert({
    title: "Human Biology",
    edition: null,
    isbn: 9780321511152,
    price: "35.00",
    comment: "It was okay",
    author: "Michael D. Johnson",
    thumbnail: "http://homepage.smc.edu/azuma_kay/bio2/images/Johnson4.jpg"
  });

  Books.insert({
    title: "Essential English",
    author: "E. Suresh Kumar",
    isbn: 9782221511447,
    price: "8.50",
    edition: "3rd",
    comment: "Mint-condition, never before opened",
    thumbnail: "http://www.languageinindia.com/april2011/essentialenglishfrontcover.jpg"
  });
}

Meteor.methods({
  newBook: function (book) {
    Books.insert(book);
  },
  removeBook: function (id) {
    Books.remove(id);
  }
});
