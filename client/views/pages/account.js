// binds to the account template when its created
Template.account.onCreated(function(){
    this.subscribe("books");
});

// helper functions bound to the account template
Template.account.helpers({
    books: function() {
        return Books.find({user: Meteor.user().username});
    }
});
