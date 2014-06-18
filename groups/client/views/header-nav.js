Template.detailNav.events({
  "click .pull-left" : function() {
    Router.go('locationSet');
  }
});

Template.groupNav.events({
  "click .groups" : function() {
    Router.go('groupsList');
  }
});