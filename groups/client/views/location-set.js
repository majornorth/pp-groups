var sundayGames = [
  {
    sport: 'Ultimate Frisbee',
    day: 'Sunday',
    time: '\xA0' + '\xA0' + '7:45am',
    playing: '12 playing', 
    location: 'Marina Green Park'
  },
  {
    sport: 'Basketball',
    day: 'Sunday',
    time: '12:00pm',
    playing: '7 playing', 
    location: 'Bakar Fitness and Recreation Center'
  },
  {
    sport: 'Basketball',
    day: 'Sunday',
    time: '\xA0' + '\xA0' + '6:15pm',
    playing: '15 playing', 
    location: 'Potrero Hill Recreation Center'
  }

];

var mondayGames = [
  {
    sport: 'Soccer',
    day: 'Monday',
    time: '\xA0' + '\xA0' + '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  }
];

var wednesdayGames = [
  {
    sport: 'Basketball',
    day: 'Wednesday',
    time: '\xA0' + '\xA0' + '9:45am',
    playing: '9 playing', 
    location: 'Upper Noe Recreation Center'
  },
  {
    sport: 'Basketball',
    day: 'Wednesday',
    time: '11:45am',
    playing: '2 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Ultimate Frisbee',
    day: 'Wednesday',
    time: '\xA0' + '\xA0' + '6:00pm',
    playing: '2 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Soccer',
    day: 'Wednesday',
    time: '\xA0' + '\xA0' + '8:00pm',
    playing: '13 playing', 
    location: 'Raymond Kimbell Playground'
  },
  {
    sport: 'Basketball',
    day: 'Wednesday',
    time: '\xA0' + '\xA0' + '8:30pm',
    playing: '13 playing', 
    location: 'Bay Club San Francisco'
  },
];

var fridayGames = [
  {
    sport: 'Soccer',
    day: 'Friday',
    time: '\xA0' + '\xA0' + '7:15pm',
    playing: '22 playing', 
    location: 'Franklin Square Park'
  }
];

var saturdayGames = [
  {
    sport: 'Soccer',
    day: 'Saturday',
    time: '\xA0' + '\xA0' + '6:45pm',
    playing: '16 playing', 
    location: 'Cesar Chavez Soccer Field'
  },
  {
    sport: 'Ultimate Frisbee',
    day: 'Saturday',
    time: '\xA0' + '\xA0' + '7:30pm',
    playing: '5 playing', 
    location: 'Franklin Square Park'
  },
  {
    sport: 'Basketball',
    day: 'Saturday',
    time: '\xA0' + '\xA0' + '7:15pm',
    playing: '22 playing', 
    location: 'Franklin Square Park'
  },
];

Template.locationSet.helpers({
  sundayGames: sundayGames,
  mondayGames: mondayGames,
  wednesdayGames: wednesdayGames,
  fridayGames: fridayGames,
  saturdayGames: saturdayGames
});
