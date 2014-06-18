Template.improveProfile.events({
  "click .cancel-improve" : function() {
    Router.go('groupsList');
  },
  "click #improveContinue" : function() {
    Router.go('addAvailability');
  }
});