Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'tabNav': {to: 'footer'}
  }
});

Router.map(function() {
    this.route('layout', {
    path: '/',
    template: 'getLocation'
  });

  this.route('locationSet', {
    path: '/locationSet',
    template: 'locationSet'
  });

  this.route('groupsList', {
    path: '/groupsList',
    template: 'groupsList'
  });

  this.route('gameDetail', {
    path: '/gameDetail',
    template: 'gameDetail'
  });

  this.route('groupDetail', {
    path: '/groupDetail',
    template: 'groupDetail'
  });

  this.route('signUp', {
    path: '/signup',
    template: 'signUp'
  });

  this.route('improveProfile', {
    path: '/improve-profile',
    template: 'improveProfile'
  });

  this.route('addAvailability', {
    path: '/availability',
    template: 'addAvailability'
  });

  this.route('favoriteGames', {
    path: '/choose-favorites',
    template: 'favoriteGames'
  });
});