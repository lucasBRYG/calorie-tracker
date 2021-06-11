const mealForm = $(".meal__form");          // variable references meal form on page
const exerciseForm = $(".workout__form");   // variable references workout form on page
const todayNetEl = $("#today-net");         // variable references Today Net element on page
const weekNetEl = $("#week-net");           // variable references Week Net element (not used rn)
const progressCirlce = $(".progress");      // variable references green progess wheel on page
const overCircle = $(".over-progress")      // variable references red over-progress wheel on page

$(document).ready(() => { // when document has loaded and ready on page, execute the following...

    if(localStorage.getItem("goal")) {  // checks in local storage has a value for goal key

        if(localStorage.getItem("day") != new Date().getDate()) {   // checks if day key holds a value that is different than the current date. If not today, resets items in local storage
            localStorage.setItem("day", new Date().getDate());  // sets day value to todays date (holds integer from 1-31)
            localStorage.setItem("day-calories", JSON.stringify({calories: 0}));    // sets day-calories to zero (inside an objest for scalability)
            localStorage.setItem("day-meals", "[]");    // sets day meals to empty array
            localStorage.setItem("day-workouts", "[]"); //sets day workouts to empty array
        }  //chekcing week value in ls  //get current month, add one(0 indexed)  //gets current date, subtracts day of week to get start of current week
        if(localStorage.getItem("week") != `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`) {  // checks to see if week key in local storage is different from current week. If not, resets items in local storage.
            const week = `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`;  // creates const that holds string of current week start date
            localStorage.setItem("week", week); // sets week value to local storage
            localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));  // resets week calories in ls
            localStorage.setItem("day-meals", "[]");    // resets day meals. That way if its the same day in a new month or year it will still reset
            localStorage.setItem("day-workouts", "[]"); // resets day workotus. "" "" "" "" 
        }

        todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories-JSON.parse(localStorage.getItem("goal"))}`);   // once the resets are finished, display value of day calories to page as difference of (goal+calsBurned)-cals eaten. (use to score day)
        renderCards();  // render meals and workout cards 

    } else {    // If user hasn't been to page or has empty local storage
        const goal = prompt("Enter your daily calorie intake goal:");   // gets users calorie intake goal and stores it in goal const
        const week = `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`;  // sets week const to date of the start of the current week
        const day = `${new Date().getDate()}`;  // sets date const to current date
        localStorage.setItem("goal", goal); // sets goal in ls to goal const val
        localStorage.setItem("week", week); // sets week in ls to week const val
        localStorage.setItem("day", day);   // sets day in ls to week const val
        localStorage.setItem("day-calories",  JSON.stringify({calories: 0}));   // sets day cals in ls to 0
        localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));  // sets week cals in ls to 0 (not used rn)
        localStorage.setItem("day-meals", "[]");    // sets day meals to empty array
        localStorage.setItem("day-workouts", "[]"); // sets day workotus to emtpty array

        todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories}`);    // display value of day calories to page as difference of (goal+calsBurned)-cals eaten. (use to score day) (starts 0)
        renderCaloriesBurned(); // displays total calories burned to page (starts 0)
        
    }

}); // end of doc ready function


$("#meal-submit").click(() => { // adds on click event to meal form submit button
    let meal = $("#meal").val(); // takes in value of meal name input section
    let calories;   // declares calories variable
    if ($("#meal__calories").val() != '') { // checks if calories field in form has a value
        calories = $("#meal__calories").val();  // calories variable holds val in calories field
    } else {    // if no value
        calories = 0;   // calies set to 0
    }

    $("#meal-cards").append(createCard(meal, calories, "meal"));    // add new element to meal-cards sectino on page. createCard() return a div element litteral string
    setDayCalLS(calories);  // updates calories value in local storage

    setDayMeals({meal: meal, calories: calories});  // updates local storage to include new meal
    renderUpdate(); // updates all elements on page that need to be rendered
});

$("#workout-submit").click(() => { // adds onclick event to workout submit button
    let wrkt = $("#workout").val(); // declares and initializes wrkt variable to value of workout name in form
    let calories = 0;   // declares calories variable and sets it to zero
    if ($("#workout__calories").val() != null) { //only effects calories variable if calore field is NOT null in workout form
        calories -= $("#workout__calories").val();  // calories is negative number
    }

    $("#workout-cards").append(createCard(wrkt, calories, "workout"));  // add new element to workout-cards sectino on page. createCard() return a div element litteral string
    setDayCalLS(calories);  // updates calories value in local storage

    setDayWorkouts({workout: wrkt, calories: calories});    // updates local storage to include new meal
    renderUpdate(); // updates all elements on page that need to be rendered
});

function createCard(title, value, id) { // function generates litteral string elements populated with info passed through parameters

    return `
        <div class="${id}__card card" data-type="${id}">    
            <h4>${title}</h4>
            <p class="card-calorie-section">Calories: <span>${value}</span></p>
            <button class = "delete-button" onClick="deleteButton(event)">Delete</button>
        </div>
    `;  // div elemement with card class for styling and data type set to either 'meal' or 'workout' title and value are the name of the workout/meal and calories value. Delete button initialized with onclick function
}

function setDayCalLS(newCals) { // function updates calories in ls. newCals param is an int
    let calories = JSON.parse(localStorage.getItem("day-calories")); // new calories vaiable (object{'calories': 'int'})
    calories.calories = parseInt(calories.calories);    // changes caloreis value in object to an ineger variabel type
    calories.calories += parseInt(newCals); // updates calories by adding calories from +meal or -workout

    localStorage.setItem("day-calories", JSON.stringify(calories)); // sets new object to local storage
}

function setDayWorkouts(workout) {  // function updates array of workouts in local storage with new workout. workout param is an object
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));    // new workouts variable holds array of objects
    workouts.push(workout); // pushes workout object from params to end of workouts array
    localStorage.setItem("day-workouts", JSON.stringify(workouts)); // updates ls to include new workout
}

function setDayMeals(meal) {    // function updates array of meals in local storage. meal passed to params is ab object
    let meals = JSON.parse(localStorage.getItem("day-meals"));  // new meals variable holds array of meal objects from ls
    meals.push(meal);   // push meal object to end of meals array
    localStorage.setItem("day-meals", JSON.stringify(meals));   // update meals in local storage to include new meal
}

function deleteButton(e) { // e will be a js event object.
    let target = e.target.parentNode;   // new target variable set to reference the card that is to be deleted
    let targetParent = target.parentNode;   // new targetParent variable set to reference parent container of selected card
    let targetType = $(e.target.parentNode).attr("data-type")   // sets targetType variable to data-type attribute of selected element. Either 'meal' or 'workout'
    let arrayLocal = JSON.parse(localStorage.getItem(`day-${targetType}s`));    // new arrayLocal variable to value of local storage item; either 'day-meals' or 'day-workouts'

    let tpChildren = [] // tpChildren set to empty array. This will hold the div elements inside parent container so es6 array protos can be used on it
    for(let i=0; i < targetParent.children.length; i++) {   // for each element inside parent container... 
        tpChildren.push(targetParent.children[i]);  // add each child to tpChildren
    }

    let targetIndex = tpChildren.indexOf(target);   // targetIndex holds index value of target in relation to parent
    setDayCalLS(-arrayLocal[targetIndex].calories); // subtracts calorie value in element from local storage

    arrayLocal.splice(targetIndex, 1);  // splice removes items from array from specified index(1st param), up to number of elements specified(2nd param)
    localStorage.setItem(`day-${targetType}s`, JSON.stringify(arrayLocal ));    // updates array of either workouts or meals in local storage
    target.remove();    // remove target element from dom
    renderUpdate();     // re-renders items on page
}

function renderUpdate() {   // function renders mutable page elemnts when called

    todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories-JSON.parse(localStorage.getItem("goal"))}`);
    renderCaloriesBurned(); // renders calories bunred section of page
    progressBarLogic(); // calculates and renders progress wheel
}

function renderCards() {    // functino renders all cards from local storage to page
    let meals = JSON.parse(localStorage.getItem("day-meals"));  // new meals variable is set to meals array from local storage
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));    // new workouts variable is set to workouts array from ls

    meals.forEach(meal => { // for each meal in array...
        $("#meal-cards").append(createCard(meal.meal, meal.calories, "meal"));  // create card and add it to meal-cards section of page
    });
    workouts.forEach(workout => {   // for each workout in array
        $("#workout-cards").append(createCard(workout.workout, workout.calories, "workout"));   // create card and add it to meal-cards section of page
    })
    renderUpdate(); // re-render page elements to match meal and workout cards 
}

function renderCaloriesBurned() {   // function calculates total calories burned value and renders to page
    let calsBurned = 0; // new calsBurned variabel set to 0
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));    // new workotus variable set to array of workouts from ls
    workouts.forEach(workout => {   // for each workout in array...
        calsBurned += -workout.calories;    // add calories in workout to calsBurned
    });

    $("#calories-burned-val").html(calsBurned); // renders value in calories-burned-val page element
}

function progressBarLogic() {   // function calculates how much of wheel to fill and renders to page
    let circumference = 440;    // circumference of wheel in pixels
    let caloriesMax = JSON.parse(localStorage.getItem("goal")); // gets goal from local storage to use as max
    let currentCals = 0;    // new currentCals variable set to 0. will hold calories consumed so far today
    let over = 0;           // new over variable set to 0. will hold how many caloreis over goal user is
    let meals = JSON.parse(localStorage.getItem("day-meals"));  // new meals variable set to array from ls
    meals.forEach(meal => { // for each meal in array...
        currentCals += parseInt(meal.calories); // add calories from each meal to currentCals
    });
    if ((currentCals/caloriesMax)*circumference > circumference) {  // evaluates if calories are over user's goal (as a ratio)
        over = ((currentCals/caloriesMax)*circumference)-circumference; // sets over to how many calories over the user's goal they are
        if (over > circumference) { // evaluates if over is greater than circumference of wheel
            over = circumference;   // if so just have over be value of circumference
        }
    }
    $(progressCirlce).css(`stroke-dashoffset`, `${circumference-((currentCals/caloriesMax)*circumference)+over}px`);    // sets stroke-dashoffset attribute of progress wheel to ratio of wheel to be filled * circumferece
    $(".progress-lable").html(`${currentCals}/${caloriesMax}`); // sets label of progress wheel and renders
    $(overCircle).css(`stroke-dashoffset`, `${circumference-over}`);    // sets stoke-dashoffet attribute of over-circle element on page

}