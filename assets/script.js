const mealForm = $(".meal__form");
const exerciseForm = $(".workout__form");

$("#meal-submit").on("click", () => {
    let meal = $("#meal").val();
    let calories = $("#meal__calories").val();

    console.log(meal + " " + calories);
    console.log("test2");

    const mealCard = `
        <div class = "meal__card">
            <h4>${meal}</h4>
            <h5>Calories</h5>
            <p>${calories}</p>
        </div>
    `
    $("#meal-cards").append(mealCard);
})
