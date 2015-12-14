//Basic helper functions for search
Template.searchBox.helpers({
    inputAttributes: function () {
        return {
            'class': 'easy-search-input col s8 offset-s2', 
            'placeholder': 'Start searching...',
            'style': 'font-size: 24px'
        };
    },
    books: function () {
        return Books.find({}, { sort: { price: -1, name: 1 } });
    },
    index: function () {
        return BooksIndex;
    },
    resultsCount: function () {
        var count = BooksIndex.getComponentDict().get('count');
        if (count === 0) {
            return "No results found.";
        } 
        else if (count === 1) {
            return String(count) + " result found";
        } 
        else {
            return String(count) + " results found";
        }
    },
    booksIndex: () => Template.BooksIndex
});
