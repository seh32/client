if (Meteor.isClient){
	Template.loginmodal.events({
		'submit form': function(event){
			console.log('Submitting form!');
			console.log(event.target.password.value);
			event.preventDefault
			var url = 'https://www.calvin.edu/cgi-bin/auth/login.pl';
			var options = {
				param: {'a': 'login', 'i': 'peoplesearch2', 'p': event.target.password.value, 'u': event.target.email.value}
			}
			HTTP.call('POST', url, options, function(error, result) {
				if (error) {
					console.log(error);
				} else {
					console.log(result);
					console.log('passed validateNewUser');
				}
			})
		}
	});
}