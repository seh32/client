// binds to the loginModal template when its rendered
Template.loginModal.onRendered(function() {
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .5,
        in_duration: 300,
        out_duration: 300
    });
});

// an event handler that's bound to the loginModal template
Template.loginModal.events({
    "submit #loginForm": function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        $('#loginModal').closeModal();
        Materialize.toast("Logged in as " + email, 2000, 'rounded');
    }
});

// helper functions that are bound to the loginModal template
Template.loginModal.helpers({
    emailField: function () {
        return {
            icon: "account_circle",
            type: "email",
            label: "Calvin Email"
        }
    },
    passwordField: function () {
        return {
            icon: "lock",
            type: "password",
            label: "Calvin Password"
        }
    },
    loginButton: function () {
        return {
            label: "Login",
            attr: {
                class: "btn-flat waves-effect",
                type: "submit",
                name: "action",
                form: "loginForm"
            }
        }
    },
    cancelButton: function () {
        return {
            label: "Cancel",
            attr: {
                class: "modal-action modal-close btn-flat waves-effect red-text"
            }
        }
    }
});
