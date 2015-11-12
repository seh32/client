Template.cards.helpers({
    bookshelf: function() { 
        return Bookshelf.find(); 
    }
});

Template.card.onCreated(function() {
    this.messageSent = new ReactiveVar(false);
});

Template.card.helpers({
    messageSent: function() {
        return Template.instance().messageSent.get();
    }
});

Template.card.events({
    "click .send-message": function(event, template) {
        template.messageSent.set(true);
        Materialize.toast("Message sent", 2000, "rounded");
    }
});
