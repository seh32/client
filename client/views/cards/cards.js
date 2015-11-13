// binds to the cards template when its created
Template.cards.onCreated(function(){
  this.subscribe("bookshelf");
});

// helper functions bound to the cards template
Template.cards.helpers({
    bookshelf: function() {
        return Bookshelf.find();
    }
});

// binds to the card template when its created
Template.card.onCreated(function() {
    this.messageSent = new ReactiveVar(false);
});

// event handler bound to the card template
Template.card.events({
    "click .send-message": function(event, template) {
        template.messageSent.set(true);
        Materialize.toast("Message Sent", 4000, "rounded");
    }
})

// helper functions bound to the card template
Template.card.helpers({
    messageSent: function() {
        return Template.instance().messageSent.get();
    }
});
