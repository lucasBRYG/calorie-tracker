## Introduction
This is a simple project I'm making mostly for my own use, but I think it will be a good excersize to see how much functionality I can add with the simplest tools. So I want to use jQuery, and basically no other frameworks or packages. Back to basics: HTML, CSS, and JS to handle everything. Try to keep everyghing it's own lane.
And instead of a backend I want this application to rely on local storage as much as possible, because:
 - Keeping it simple. No backend means no server management, no middleware, no view engines.
 - Faster and more reliable
 - MORE SECURE. Any data a user gives you, you are responsible for. Local storage keeps all a user's data close to them and limits vulnereability. User's might feel wierd about the idea that things are being stored locally so maybe a disclaimer would be good to add or maybe a way to let them look inside their own local storage.
 - User Privacy. Again, since their's no centralization of their data, it doesn't have to move any farther than their own machine.
---

### Table of Contents

- [Description](#description)
- [How to Use](#how-to-use)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Author Info](#author-info)

---

## Description
Summer bods are around the corner. This will be a really basic daily calorie tracker. It will track consumed calories and calories burned each day, and calculate how over/under a person's goal they are. Try it out here: https://lucasbryg.github.io/calorie-tracker/

### MVP
This is a very simple application, intended for personal use(at first). Soon I want to build in some more functinality like a progress bar, and tracking calorie intake over weeks. For now though, here's what I want it to do:
 - take individual meals and workouts
 - store them and generate a way to visualize them
 - delete meals or workouts
 - plot calories consumed or burned against a goal

### User Story
```
As A person that is trying to track my calorie consumption and workouts
I WANT a way to keep track of meals ive eaten and workouts ive completed
SO THAT I can plan and track my health and fitness progress
```

### Stretch Goals
 - Track Daily Net Calories over the week.
 - Add an info section with tips on how to use and meet fitness goals
 - A way to automatically calculate the calories in a meal or workout based on info from user; ie. Duration of workout, type of excersize, or what the meal was and how much they ate. This can probably be done with an API
 - Possibly turn into a PWA, once more assets like logos and graphics are working
---

## How to Use
When you first visit the webpage, you should see a prompt asking your goal for daily calorie consumption. NOTE: This number will be different for everyone. Please consult with your physician or nutritionist for this number in order to get the safest and best results.
Then you can add meals or workouts using the two forms on the right. Cards with the info you provide will appear in the page, and your Net Calories, at the bottom of the page, will change as you do. The page uses local storage to store and retrieve information you put in, so you can come back later the same day to add or edit your progress If you have local storage or javascript disable this application will not work for you.
PLEASE USE RESPONSIBLY

---

## Technologies
This application was made using HTML5, CSS3, ES6 JavaScript, and jQuery for accessing local storage and manipulating the DOM.

---

## Screenshots
### Full page
![Full page view of application](https://github.com/lucasBRYG/calorie-tracker/blob/main/assets/images/fullpageview.png)

### Meal Section
![View of meal section](https://github.com/lucasBRYG/calorie-tracker/blob/main/assets/images/Screenshot%202021-06-07%20130139.png)

### Net Calories
![View of net calories tracker](https://github.com/lucasBRYG/calorie-tracker/blob/main/assets/images/Screenshot%202021-06-07%20130245.png)

### Progress Wheel
![View of progress wheel](https://github.com/lucasBRYG/calorie-tracker/blob/main/assets/images/progress%20wheel.png.png)

### Over Wheel
![View of over-progress wheel](https://github.com/lucasBRYG/calorie-tracker/blob/main/assets/images/over%20wheel.png)

---

## Author
 Lucas Santiago
 Github: https://github.com/lucasBRYG
 LinkedIn: https://www.linkedin.com/in/lucas-bryg-codes/
 Portfolio: https://lucasbryg.github.io/portfolio/
