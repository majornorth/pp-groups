Template.signUp.events({
  "click #cancelSignup" : function() {
    Router.go('groupDetail');
  },
  "click #emailSignup" : function() {
    Router.go('improveProfile');
  }
});