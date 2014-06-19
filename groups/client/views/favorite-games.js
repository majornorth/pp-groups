Template.favoriteGames.events({
  'click #soccerFavorite' : function(){
    $('i.icon-soccerball').toggleClass('active');
  },
  'click #frisbeeFavorite' : function(){
    $('i.icon-frisbee').toggleClass('active');
  },
  'click #basketballFavorite' : function(){
    $('i.icon-basketball').toggleClass('active');
  },
  'click #cancelImprove' : function() {
    Router.go('locationSet');
  },
  'click #setFavorites' : function() {
    Router.go('groupsList');
  }
});