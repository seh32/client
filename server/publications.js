/* This server js file returns the elements of our book collection 
 * It also adds three dumby books to our collection if it is empty
 *
 * To do: filter search results based on search parameters
 *        sort results by price, name, ect.
 */
Meteor.publish('bookshelf',function(){
    return Bookshelf.find();
});

if (Bookshelf.find().count() === 0) {
  Bookshelf.insert({
    title: "Fundamentals of Chemistry",
    author: "Ralph A. Burns",
    thumbnail: "http://www.thomasriggs.net/blog/wp-content/uploads/2009/08/TextbookCover.jpg"
  });

  Bookshelf.insert({
    title: "Human Biology",
    author: "Michael D. Johnson",
    thumbnail: "http://homepage.smc.edu/azuma_kay/bio2/images/Johnson4.jpg"
  });

  Bookshelf.insert({
    title: "Essential English",
    author: "E. Suresh Kumar, P. Sreehari, J. Savithri",
    thumbnail: "http://www.languageinindia.com/april2011/essentialenglishfrontcover.jpg"
  });
}
