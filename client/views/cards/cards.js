// binds to the cards template when its created
Template.cards.onCreated(function(){
  this.subscribe("books");
});

// helper functions bound to the cards template
Template.cards.helpers({
    books: function() {
        b = Books.find({isbn: 9780131409095});
        console.log(b);
        return b;
    }
});

// binds to the card template when its created
Template.card.onCreated(function() {
    this.messageSent = new ReactiveVar(false);
});

// event handler bound to the card template
Template.card.events({
    "click .send-message": function(event, template) {
        MaterializeModal.confirm({
            title: "Are you sure?",
            message: "Your email address will be sent to the seller to notify them of your interest.",
            callback: function(error, response) {
                if (response.submit) {
                    template.messageSent.set(true);
                    Materialize.toast("Message Sent", 4000, "rounded");
                }
            }
        });
    }
})

// helper functions bound to the card template
Template.card.helpers({
    messageSent: function() {
        return Template.instance().messageSent.get();
    }
});
