var sundayGames = [
  {
    sport: 'Ultimate Frisbee',
    day: 'Sunday',
    time: '7:45am',
    playing: '12 playing', 
    location: 'Marina Green Park'
  },
  {
    sport: 'Basketball',
    day: 'Sunday',
    time: '7:45am',
    playing: '12 playing', 
    location: 'Marina Green Park'
  }
];

var mondayGames = [
  {
    sport: 'Soccer',
    day: 'Monday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  }
];

var tuesdayGames = [
  {
    sport: 'Soccer',
    day: 'Tuesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  }
];

var wednesdayGames = [
  {
    sport: 'Basketball',
    day: 'Wednesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Soccer',
    day: 'Wednesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Soccer',
    day: 'Wednesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Soccer',
    day: 'Wednesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  },
  {
    sport: 'Soccer',
    day: 'Wednesday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  },
];

var fridayGames = [
  {
    sport: 'Soccer',
    day: 'Friday',
    time: '7:15pm',
    playing: '3 playing', 
    location: 'Franklin Square'
  }
];

Template.locationSet.helpers({
  sundayGames: sundayGames,
  mondayGames: mondayGames,
  tuesdayGames: tuesdayGames,
  wednesdayGames: wednesdayGames,
  fridayGames: fridayGames
});
