const mealForm = $(".meal__form");
const exerciseForm = $(".workout__form");
const todayNetEl = $("#today-net");
const weekNetEl = $("#week-net");
const progressCirlce = $(".progress");
const overCircle = $(".over-progress")

$(document).ready(() => {

    if(localStorage.getItem("goal")) {

        if(localStorage.getItem("day") != new Date().getDate()) {
            localStorage.setItem("day", new Date().getDate());
            localStorage.setItem("day-calories", JSON.stringify({calories: 0}));
            localStorage.setItem("day-meals", "[]");
            localStorage.setItem("day-workouts", "[]");
        }
        if(localStorage.getItem("week") != `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`) {
            const week = `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`;
            localStorage.setItem("week", week);
            localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));
            localStorage.setItem("day-meals", "[]");
            localStorage.setItem("day-workouts", "[]");
        }

        todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories-JSON.parse(localStorage.getItem("goal"))}`);
        renderCards();

    } else {
        const goal = prompt("Enter your daily calorie intake goal:");
        const week = `${new Date().getMonth() + 1}/${new Date().getDate() - new Date().getDay()}`;
        const day = `${new Date().getDate()}`;
        localStorage.setItem("goal", goal);
        localStorage.setItem("week", week);
        localStorage.setItem("day", day);
        localStorage.setItem("day-calories",  JSON.stringify({calories: 0}));
        localStorage.setItem("week-calories",  JSON.stringify({calories: 0}));
        localStorage.setItem("day-meals", "[]");
        localStorage.setItem("day-workouts", "[]");

        todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories}`);
        renderCaloriesBurned();
        
    }

});


$("#meal-submit").click(() => {
    let mel = $("#meal").val();
    let calories;
    if ($("#meal__calories").val() != '') {
        calories = $("#meal__calories").val();
    } else {
        calories = 0;
    }

    $("#meal-cards").append(createCard(mel, calories, "meal"));
    setDayCalLS(calories);

    setDayMeals({meal: mel, calories: calories});
    renderUpdate();
});

$("#workout-submit").click(() => {
    let wrkt = $("#workout").val();
    let calories = 0;
    if ($("#workout__calories").val() != null) {
        calories -= $("#workout__calories").val();
    }

    $("#workout-cards").append(createCard(wrkt, calories, "workout"));
    setDayCalLS(calories);

    setDayWorkouts({workout: wrkt, calories: calories});
    renderUpdate();
});

function createCard(title, value, id) {

    return `
        <div class="${id}__card card" data-type="${id}">
            <h4>${title}</h4>
            <p class="card-calorie-section">Calories: <span>${value}</span></p>
            <button class = "delete-button" onClick="deleteButton(event)">Delete</button>
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
    workouts.push(workout);
    localStorage.setItem("day-workouts", JSON.stringify(workouts));
}

function setDayMeals(meal) {
    let meals = JSON.parse(localStorage.getItem("day-meals"));
    meals.push(meal);
    localStorage.setItem("day-meals", JSON.stringify(meals));
}

function deleteButton(e, i) { // e will be a js event object.
    let target = e.target.parentNode;
    let targetParent = target.parentNode;
    let targetType = $(e.target.parentNode).attr("data-type")
    let arrayLocal = JSON.parse(localStorage.getItem(`day-${targetType}s`));

    let tpChildren = []
    for(let i=0; i < targetParent.children.length; i++) {
        tpChildren.push(targetParent.children[i]);
    }

    let targetIndex = tpChildren.indexOf(target);
    setDayCalLS(-arrayLocal[targetIndex].calories);

    arrayLocal.splice(targetIndex, 1);
    localStorage.setItem(`day-${targetType}s`, JSON.stringify(arrayLocal ));
    target.remove();
    renderUpdate();
}

function renderUpdate() {

    todayNetEl.html(`${JSON.parse(localStorage.getItem("day-calories")).calories-JSON.parse(localStorage.getItem("goal"))}`);
    renderCaloriesBurned();
    progressBarLogic();
}

function renderCards() {
    let meals = JSON.parse(localStorage.getItem("day-meals"));
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));

    meals.forEach(meal => {
        $("#meal-cards").append(createCard(meal.meal, meal.calories, "meal"));
    });
    workouts.forEach(workout => {
        $("#workout-cards").append(createCard(workout.workout, workout.calories, "workout"));
    })
    renderUpdate();
}

function renderCaloriesBurned() {
    let calsBurned = 0;
    let workouts = JSON.parse(localStorage.getItem("day-workouts"));
    workouts.forEach(workout => {
        calsBurned += -workout.calories;
    });

    $("#calories-burned-val").html(calsBurned);
}

function progressBarLogic() {
    let circumference = 440;
    let caloriesMax = JSON.parse(localStorage.getItem("goal"));
    let currentCals = 0;
    let over = 0;
    let meals = JSON.parse(localStorage.getItem("day-meals"));
    meals.forEach(meal => {
        currentCals += parseInt(meal.calories);
    });
    if ((currentCals/caloriesMax)*circumference > circumference) {
        over = ((currentCals/caloriesMax)*circumference)-circumference;
        if (over > circumference) {
            over = circumference;
        }
    }
    $(progressCirlce).css(`stroke-dashoffset`, `${circumference-((currentCals/caloriesMax)*circumference)+over}px`);
    $(".progress-lable").html(`${currentCals}/${caloriesMax}`);
    over = 
    $(overCircle).css(`stroke-dashoffset`, `${circumference-over}`);

}