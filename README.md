# Movie Gallery - React/Redux-sagas

## Description

The objective of this weekend challenge was to build a movie gallery that uses **React** and **Redux** as the main building blocks of the user interface components. I used the middleware library **redux-sagas** in order to write asynchronous https requests.

Movie gallery requirements:

- GET movies from a relational database and display on the front-end.
- allow a user to ADD a movie to the movie gallery.
- allow a user to VIEW the movie details by clicking on the movie.

The base mode took me approximately **6** hours.

- [ ] TODO before end of January 2022 -> complete stretch goals.

**Note:** At this time, only movie posters from the internet (with URL) can be added to the movie gallery. A future challenge would be to allow a user to add a movie poster image from another source (local drive, Google drive, dropbox, etc).

## Application Demo

![Movie Gallery application](public/images/movie_gallery.gif)

### Prerequisites

The following should be installed before attempting to use the movie gallery:

- [Express](https://expressjs.com/en/starter/installing.html) - a web framework for Node.js
- [Postgresql](https://www.postgresql.org/) - an open source relational database

## Installation

In order to get the movie gallery application up and running, do the following:

1. Download code locally from GitHub.
2. Create the database and corresponding table by doing the following:

- Using your favorite relational database client (I use Postico(<https://eggerapps.at/postico/>), go to the SQL Query tab that allows you to run a query. Using the queries from the _Create Database.sql_ file, do the following:
- Run the 'CREATE DATABASE' query. This will create the saga_movies_weekend database.
- From within the saga*movies_weekend database, run the remainder of the SQL queries in the \_Create Database.sql* file.

3. Install all necessary dependencies by going to your terminal and typing 'npm install'.

4. Launch the application locally.

- Go to your terminal and type 'npm run server'. This will start a local server on port 5000.
- Go to your terminal and type 'npm run client'. This will start a client session in your broswer on port 3000.

## Usage

1. Upon launching the application, all movies contained in the saga_movies_weekend database are displayed to the user.

2. A user can view the movie details by clicking on the movie. They will be brought to the Movie Details page.

3. A user can add a new movie by clicking on the 'Add a movie!' button. The user is brought to another page with a form. They are to enter the movie title, url for movie poster, movie description and select the movie genre from the drop-down list. The movie details are saved to the database by clicking on the 'Add movie' button. The gallery of movies will be updated with the new movie.

4. [ ] TODO: Give the user the ability to delete a movie from the database.

5. [ ] TODO: Give the user the ability to add a new genre to the list of genres.

## Built With/Using

- HTML
- CSS
- JavaScript
- React
- Redux
- redux-sagas
- Axios
- Node.js
- Express
- Postgresql

## Support & Acknowledgement

- Thank you to my fellow Ionian/Nighstack cohort members for interesting conversations about how to make our projects work. They all offer interesting thoughts, ideas and approaches. Thanks to Dev Jana, our Prime instructor!

If you have suggestions or questions, please email me at <jenny_alexander@icloud.com>.
