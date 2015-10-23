
// sets layout for all pages
Router.configure({
  layoutTemplate: 'layout'
});

// route for the home page
Router.route('/', {
    name: 'home', 
});

// route for the about page
Router.route('/about');/*, {
    name: 'about', 
    template: 'about'
});*/

// route for the results page
Router.route('/results');/*, {
    name: 'results', 
    template: 'results'
});*/

// route for the login page
Router.route('/login');/*, {
    name: 'login', 
    template: 'login'
});*/

// route for the sell page
Router.route('/sell');/*, {
    name: 'sell', 
    template: 'sell'
});*/

// route for the buy page
Router.route('/buy');/*, {
    name: 'buy', 
    template: 'buy'
});*/
