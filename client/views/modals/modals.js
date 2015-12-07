// binds to the loginModal template when its rendered
Template.loginModal.onRendered(function() {
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .5,
        in_duration: 300,
        out_duration: 300
    });
});

// modified myLdapLogin template inherits from ldapLogin of tdamsma:meteor-accounts-ldap package
Template.myLdapLogin.inheritsHelpersFrom("ldapLogin");
Template.myLdapLogin.inheritsEventsFrom("ldapLogin");
Template.myLdapLogin.inheritsHooksFrom("ldapLogin");

// helper functions that are bound to the loginModal template
Template.loginModal.helpers({
    emailField: function () {
        return {
            icon: "account_circle",
            type: "email",
            name: "ldap",
            label: "Calvin Email"
        }
    },
    passwordField: function () {
        return {
            icon: "lock",
            type: "password",
            name: "password",
            label: "Calvin Password"
        }
    },
    loginButton: function () {
        return {
            label: "Login",
            attr: {
                class: "modal-close btn-flat transparent waves-effect waves-green",
                type: "submit",
                form: "loginForm"
            }
        }
    },
    cancelButton: function () {
        return {
            label: "Cancel",
            attr: {
                class: "modal-close btn-flat transparent waves-effect waves-red"
            }
        }
    }
});
