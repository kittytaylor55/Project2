//@MOCK: Replace this with excersize data from the database.

const testData = await fetch('/api/excersizes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });


var testData = [
  
   
  ]
   
  //@MOCK: REPLACE THIS WITH USER PROFILE DATA
  //Make sure this always has at least one empty string.
  var UserEquipmentList = ["", "Barbell"];
   
  function GenerateWorkout(Potentialexercises, Workoutlength, Workoutintensity, UserEquipmentList) {
    var Numberofexercises;
    var WorkOutList = [];
    var FilteredExerciseList = [];
   
    //Workout length comes in 3 variations (30 minute 60 minute and 90 minute)
   
    //Workout intensity comes in 3 variations (easy, medium, hard) - Intensity will increase the frequency of more intense exercises such as squats.
   
    if ( Workoutlength == 30 ) {
      Numberofexercises = 4;
    }
   
    if ( Workoutlength == 60 ) {
      Numberofexercises = 8;
    }
   
    if ( Workoutlength == 90 ) {
      Numberofexercises = 12;
    }
   
    //Filter Excersizes the user does not have equipment for by looping over each potential excersize.
   
    Potentialexercises.forEach(function (item, index) {
      //The needle is the equipment required for the excersize, and the haystack is the users equipment list.
      //Also check the intensity level
      // console.log(item.intensity, Workoutintensity);
      // console.log(item.intensity >= Workoutintensity);
      if (UserEquipmentList.includes(item.equipment_required) && item.intensity <= Workoutintensity) {
        FilteredExcersizeList.push(item);
      }
    });
   
    while (Numberofexercises > 0) {
      WorkOutList.push( FilteredExcersizeList[ Math.floor(Math.random() * (FilteredExcersizeList.length - 0) + 0 ) ] );
      Numberofexercises--;
    }
   
    return WorkOutList;
   
  }
   
  GenerateWorkout(testData, 30, 3, UserEquipmentList);
   
  