Template.addAvailability.events({
  "click .cancel-improve" : function() {
    Router.go('locationSet');
  },
  "click #setAvailability" : function() {
    Router.go('favoriteGames');
  }
});