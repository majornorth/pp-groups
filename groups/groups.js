// if (Meteor.isClient) {
//   Template.hello.greeting = function () {
//     return "Welcome to microscope.";
//   };

//   Template.hello.events({
//     'click input' : function () {
//       // template data, if any, is available in 'this'
//       if (typeof console !== 'undefined')
//         console.log("You pressed the button");
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

if (Meteor.isClient) {
  Template.getLocation.events({
    "click #getLocation" : function() {
      Router.go('locationSet');
      // if(navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(function(position) {
      //   });
      // }
    }
  });
};

