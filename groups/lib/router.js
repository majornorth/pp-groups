Router.map(function() {
    this.route('layout', {
    path: '/',
    template: 'getLocation',
    layoutTemplate: 'getLocation',
    yieldTemplates: {
      'tabNav': {to: 'footer'}
    }
  });

  this.route('locationSet', {
    path: '/locationSet',
    template: 'locationSet',
    layoutTemplate: 'locationSet'
  });

  this.route('groupsList', {
    path: '/groupsList',
    template: 'groupsList',
    layoutTemplate: 'groupsList'
  });
});