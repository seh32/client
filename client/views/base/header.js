// event handler that's bound to the header template
Template.header.events({
    'click [name="login"]': function(event) {
        event.preventDefault();
        $('#loginModal').openModal();
    }
});

Template.menuButton.onRendered(function(){
    this.$(".dropdown-button").dropdown({
        belowOrigin: true,
        hover: false,
        constrain_width: false,
        alignment: 'right'
    });
});

