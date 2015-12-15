// creates the book collection
Books = new Mongo.Collection('books');

// creates an easy:search index on book titles
BooksIndex = new EasySearch.Index({
    engine: new EasySearch.MongoDB({
        sort: function () {
            return { score: -1 };
        },
        selector: function (searchObject, options, aggregation) {
            var config = this.defaultConfiguration();
            var selector = config.selector(searchObject, options, aggregation);
            var filter = options.search.props.categoryFilter;

            if (_.isString(filter) && !_.isEmpty(filter)) {
                selector.category = categoryFilter;
            }
            return selector;
        }
    }),
    collection: Books,
    defaultSearchOptions: { limit: 12 },
    fields: ['title', 'author', 'course']
});

// creates the classes collection
Classes = new Mongo.Collection('classes');
