const mealForm = $(".meal__form");
const exerciseForm = $(".workout__form");

console.log("test1");

$(mealForm).on("submit", () => {
    let meal = $("#meal").val();
    let calories = $("#meal__calories").val();

    console.log("test");

    const mealCard = `
        <div class = "meal__card">
            <h4>${meal}</h4>
            <h5>Calories</h5>
            <p>${calories}</p>
        </div>
    `
    $(".excersize-cards").append(mealCard);
})
