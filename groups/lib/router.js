Router.map(function() {
    this.route('layout', {
    path: '/',
    template: 'getLocation',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });

  this.route('locationSet', {
    path: '/locationSet',
    template: 'locationSet',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });

  this.route('groupsList', {
    path: '/groupsList',
    template: 'groupsList',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });

  this.route('gameDetail', {
    path: '/gameDetail',
    template: 'gameDetail',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });

  this.route('groupDetail', {
    path: '/groupDetail',
    template: 'groupDetail',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });
});