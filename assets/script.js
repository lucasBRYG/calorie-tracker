const mealCardButton = $("#mealCardButton");
const exerciseCardButton = $("#workoutCardButton");

const mealCard = `
    <div class="meal__form">
    <form>
        <input type="text" id="meal">
        <label for="meal">Meal</label>

        <input type="number" id="calories">
        <label for="calories">Calories in meal</label>

        <input type="submit">
    </form>
</div>
`

const workoutCard = `
    <div class="workout__form">
        <form>
            <input type="text" id="workout">
            <label for="workout">Workout Name</label>

            <input type="number" id="calories">
             <label for="calories">Calories burned</label>

            <input type="submit">
         </form>
    </div>
`

$(mealCardButton).on("click", () => {
    document.append();
})

exerciseCardButton.on("click", () => {
    document.append(workoutCard)
})