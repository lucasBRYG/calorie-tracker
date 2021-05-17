const mealForm = $(".meal__form");
const exerciseForm = $(".workout__form");

$("#meal-submit").on("click", () => {
    let meal = $("#meal").val();
    let calories = $("#meal__calories").val();

    console.log(meal + " " + calories);
    console.log("test2");

    $("#meal-cards").append(createCard(meal, calories, "meal"));
    
})

$("#workout-submit").on("click", () => {
    let workout = $("#workout").val();
    let calories = $("#workout__calories").val();

    console.log(workout + " " + calories);
    console.log("test2");

    $("#workout-cards").append(createCard(workout, calories, "workout"));
})

function createCard(title, value, id) {

    return `
        <div class="${id}__card card">
            <h4>${title}</h4>
            <h5>Calories</h5>
            <p>${value}</p>
        </div>
    `;
    
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