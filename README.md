<div align="center">
<h1> SOUND STASH </h1>
A vinyl collectors resource
<br> 

<br>
<b>Built With:</b>
<br>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white" />
<img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" /> 

[Sound-Stash DEPLOYED LINK](https://sound-stash.vercel.app/) <!-- LINK TO BE ADDED ONCE DEPLOYED-->
</div>


## Abstract: 
This is a vinyl collectors website that uses the fetch API to get information from the [discogs-api](https://www.discogs.com/developers) and diplay that data to our users. The web app allows users to login using demo users, search for music, save vinyl albums to a collection, add journal entries for specific albums, and discover new music aligned with the users saved music preferences. If there is no user logged in, the public can still search for vinyl albums and view the albums details. The app features network requests to access information about vinyl albums and utilizes react router to create a multi-page experience, tested using Cypress.

## Preview of App:

<div align="center">

  <h2> Cell Phone Display: </h2>

  <img height="300px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnJsZWhkem4ydmt6eXAwamd3cnh3emU0NWV1a2I2Y3M2dHJhNm1tMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mw3Ky4moceobtBj1lQ/giphy.gif" alt='demo of app on a cell phone'> <!-- ADD phone preview here -->

  <br>  

  <h2> Log a Journal Entry: </h2>

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGRwampkOGZnYThkMmY5NjAzN2VvM21idncwNzgwdmt5cDRxaXBocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JT4MzMmd4XAsPCqaxx/giphy.gif" alt='demo of app displaying a journal entry'> <!-- ADD journal preview here -->

  <br>

  <h2> Bad URL & Empty State: </h2>

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc21ncHQ5OTFvbnd5c2N3bXlwN2VuODZpYzUweHdkdHoyYnAwajkzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tETn1hKNFJJ0DbLpbr/giphy.gif" alt='demo of app showing empty search state and bad url redirect'> <!-- ADD sad path preview here -->

  <br>

  <h2> Search: </h2>

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmF3N2cxeWtudmhvZHMzYXI0cjZrYzdnZXZ2anN6Z3BmYTUyOXF6YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xtNAslNxIhDk2e0BmS/giphy.gif" alt='demo of app sarching viewing albums' > <!-- ADD search preview here -->

</div>

## Installation Instructions 
- Clone to your local machine using the command: `git clone git@github.com:alivaditis/sound-stash.git`.
- Run the command: `cd sound-stash`
- Run the command: `npm install`
- Run the command: `npm start`
- Once the modules have finished compiling, enter `http://localhost:3000/` into your browser to see the live web page. 



## Context: 
- Mod 3, Week 4: 
  - We are current students of Turing School of Software & Design. 
  - Turing is a 7 month program, which offers a total of 4 modules. 
  - This project was completed during the third module that the program has to offer. 
  - Students are required to pick from a list of new tech to learn and implement.
    - Global State Mangement was selected as the tech stretch - Context API was implemented due to the small app size. 

- A total of approximately 60 hours was spent on this project between 4 contributors. 

## Contributors: 
- [Jason Alberto](https://github.com/jalbe0076)

- [Matt Fowler](https://github.com/mbenfowler)

- [Alec Livaditis](https://github.com/alivaditis)

- [Josh Martin](https://github.com/jmartin777)


## Learning Goals:
- Pick and learn a new tech withing the alloted time and implement it into the project 
- Create a user interface that is easy to use and clearly displays information
- Write DRY, reusable code that follows SRP and trends toward function purity
- Make network requests (using fetch API)
- Further improve React fundamentals
- Test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router
