// event handler that's bound to the header template
Template.header.events({
  'click [name="login"]': function(event) {
        event.preventDefault();
        $('#loginModal').openModal();
    }
});