// event handler that's bound to the sell page
Template.sell.events({
    'submit #sellForm': function(event) {
        event.preventDefault();
        if (Meteor.user()) {
            Router.go('/');
            var title = event.target.title.value;
            var edition = event.target.edition.value;
            var author = event.target.author.value;
            var course = event.target.course.value;
            var price = event.target.price.value;
            var comment = event.target.comments.value;
            //call the server side method that has access to the Books collection
            Meteor.call('newBook', {            
                title: title,
                author: author,
                edition: edition,
                price: ( (price.charAt(0) == '$') ? price.substr(1) : price ),
                comment: comment,
                removable: true,
                course:  course,
                user: Meteor.user().username,
                // currently uploads "no image" photo until we get thumbnail system set up
                thumbnail: "http://www.stjordalfoto.no/templates/clean/images/no_image.png"});
            (Materialize.toast(title + " added", 2000, 'rounded'))
        } else {
        $('#loginModal').openModal();
        }
    }
});
