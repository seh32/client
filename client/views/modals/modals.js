// binds to the loginModal template when its rendered
Template.loginModal.onRendered(function() {
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .5,
        in_duration: 300,
        out_duration: 300
    });
});

// myLdapLogin template inherits from ldapLogin and loginModal
Template.myLdapLogin.inheritsHelpersFrom("ldapLogin");
Template.myLdapLogin.inheritsEventsFrom("loginModal");
Template.myLdapLogin.inheritsHooksFrom("ldapLogin");

Template.loginModal.events({
    'click button[name="login"]': function(e, tpl) {
        e.preventDefault();
        initLogin(e, tpl);
    },
    'keyup input': function(e, tpl) {
        e.preventDefault();
        if (e.keyCode == 13) { // enter key is pressed
            firstAttempt = true;
            initLogin(e, tpl);
        }
    },
    'click button[name="logout"]': function(e) {
        firstAttempt = true;
        Meteor.logout();
    }
});

// initiate login process
initLogin = function(e, tpl) {
    // find username and password from input fields
    var username = $(tpl.find('input[name="ldap"]')).val();
    var password = $(tpl.find('input[name="password"]')).val();

    // if trying to login as dev account
    if (username === "dev")
        var result = Meteor.loginWithPassword(username, password, function(error) {
            return error ? false : true;
        });
    // otherwise, use LDAP authentication
    else
        var result = Meteor.loginWithLdap(username, password, function() {
            return Meteor.userId() ? true : false;
        });
    return result;
}
