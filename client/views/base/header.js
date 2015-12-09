// event handler that's bound to the header template
Template.header.events({
  'click [name="login"]': function(event) {
        event.preventDefault();
        console.log("login??");
        $('#loginModal').openModal();
    }
});