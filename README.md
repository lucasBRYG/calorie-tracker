## Introduction
Spring started 3 days ago, wich means the need for summer bods are around the corner. This will be a really basic weekly calorie tracker. It will track consumed calories and calories burned each day, and calculate how over/under a person's goal they are.

---

### Table of Contents

- [Description](#description)
- [How to Use](#how-to-use)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Author Info](#author-info)

---

## Description
Building a simple calorie tracker, mostly for myself but should be a good little project

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

### Flex Goals
 - Add a progress bar that fills up as you consume calories. 100% will be the daily intake goal.
 - Track Daily Net Calories over the week.
 - Add an info section with tips on how to use and meet fitness goals
 - A way to automatically calculate the calories in a meal or workout based on info from user; ie. Duration of workout, type of excersize, or what the meal was and how much they ate

## How to Use
When you first visit the webpage, you should see a prompt asking your goal for daily calorie consumption. NOTE: This number will be different for everyone. Please consult with your physician or nutritionist for this number in order to get the safest and best results.
Then you can add meals or workouts using the two forms on the right. Cards with the info you provide will appear in the page, and your Net Calories, at the bottom of the page, will change as you do. The page uses local storage to store and retrieve information you put in, so you can come back later the same day to add or edit your progress.
PLEASE USE RESPONSIBLY

## Technologies
This application was made using HTML5, CSS3, ES6 JavaScript, and jQuery for accessing local storage and manipulating the DOM.

## Screenshots
### Full page
![Full page view of application] (./assets/images/Screenshot2021-06-07130224.png)

### Meal Section
![View of meal section] (./assets/images/Screenshot2021-06-07130139.png)

### Net Calories
![View of net calories tracker] (./assets/images/Screenshot2021-06-07130245.png)

## Author
 Lucas Santiago
 Github: https://github.com/lucasBRYG
 LinkedIn: https://www.linkedin.com/in/lucas-bryg-codes/
 Portfolio: https://lucasbryg.github.io/portfolio/