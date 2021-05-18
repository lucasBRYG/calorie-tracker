const mealForm = $(".meal__form");
const exerciseForm = $(".workout__form");

$(document).ready(() => {
    console.log("ready!");

    if(localStorage.getItem("week")) {

        if(localStorage.getItem("day") != new Date().getDate()) {
            localStorage.setItem("day", new Date().getDate());
            localStorage.setItem("day-calories", JSON.stringify({calories: 0}));
            localStorage.setItem("day-meals", "[]");
            localStorage.setItem("day-workouts", "[]");
        }
        if(localStorage.getItem("week") != `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`) {
            localStorage.setItem("week", week);
            localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));
            localStorage.setItem("day-meals", "[]");
            localStorage.setItem("day-workouts", "[]");
        }

    } else {
        const week = `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`;
        const day = `${new Date().getDate()}`;
        localStorage.setItem("week", week);
        localStorage.setItem("day", day);
        localStorage.setItem("day-calories",  JSON.stringify({calories: 0}));
        localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));
        localStorage.setItem("day-meals", "[]");
        localStorage.setItem("day-workouts", "[]");
    }

});

$("#meal-submit").on("click", () => {
    let meal = $("#meal").val();
    let calories = $("#meal__calories").val();

    console.log(meal + " " + calories);

    $("#meal-cards").append(createCard(meal, calories, "meal"));
    setDayCalLS(calories);
    setDayMeals({meal: meal, calories: calories});
});

$("#workout-submit").on("click", () => {
    let workout = $("#workout").val();
    let calories = 0;
    calories -= $("#workout__calories").val()

    console.log(workout + " " + calories);

    $("#workout-cards").append(createCard(workout, calories, "workout"));
    setDayCalLS(calories);
    setDayWorkouts({workout: workout, calories: calories});
});

function createCard(title, value, id) {

    return `
        <div class="${id}__card card">
            <h4>${title}</h4>
            <h5>Calories</h5>
            <p>${value}</p>
        </div>
    `;
}

function setDayCalLS(newCals) {
    let calories = JSON.parse(localStorage.getItem("day-calories"));
    calories.calories = parseInt(calories.calories);
    calories.calories += parseInt(newCals);

    localStorage.setItem("day-calories", JSON.stringify(calories));
}

function setDayWorkouts(workout) {
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));
    console.log(workouts);
    workouts.push(workout);
    console.log(workouts);
    localStorage.setItem("day-workouts", JSON.stringify(workouts));
    console.log(localStorage.getItem("day-workouts"));
}

function setDayMeals(meal) {
    let meals = JSON.parse(localStorage.getItem("day-meals"));
    meals.push(meal);
    localStorage.setItem("day-meals", JSON.stringify(meals));
}

// function testCards() {
//     $("#meal-cards").append(createCard("Apple", 80, "meal"));
//     $("#meal-cards").append(createCard("Apple", 80, "meal"));
//     $("#meal-cards").append(createCard("Apple", 80, "meal"));
//     $("#meal-cards").append(createCard("Apple", 80, "meal"));
//     $("#meal-cards").append(createCard("Sando", 4200, "meal"));
//     $("#workout-cards").append(createCard("Mile Run", 120, "workout"));
// }

// testCards();