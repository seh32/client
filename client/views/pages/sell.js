// this is temporary until we actually write the code for the sell page
Template.sell.events({
    'submit #sellForm': function(event) {
        event.preventDefault();
        $('#loginModal').openModal();
    }
});
