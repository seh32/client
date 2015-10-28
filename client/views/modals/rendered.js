// this is called when the {{> modals}} template is rendered
Template.modals.onRendered(function() {
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5,       // Opacity of modal background
    in_duration: 300,  // Transition in duration in milliseconds
    out_duration: 300, // Transition out duration in milliseconds
    ready: function() { Materialize.toast('Modal opened', 800, 'rounded'); }, // Callback for Modal open
    complete: function() { Materialize.toast('Modal closed', 800, 'rounded'); } // Callback for Modal close
  });
});
