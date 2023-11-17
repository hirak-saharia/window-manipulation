Project Overview

- How to Plan a Web Project
- Using the Geolocation API
- Displaying a Map using Leaflet Library
- Displaying a Map Marker
- Rendering Workout Input Form
- Project Architecture
- Refactoring for Project Architecture
- Managing Workout Data: Creating Classed
- Creating a New Workout
- Rendering Workouts
- Move to Marker On Click
- Working with localStorage - Final Considerations

\*How to Plan a Web Project

- Planning Step:

  - User Stories: Who?, What?, Why?

  1. As a user, i want to log my running workouts with location, distance, time, pace, and steps/minute, so i can keep a log of all my running.
  2. As a user, log my cycling workouts with location, distance, time, speed and elevation gain, so i can keep a log of all my cycling.
  3. As a user, want to see all my workouts at a glance, so i can easily track my progress over time.
  4. As a user, want to see my workouts on a map, so i can easily check where i work out the most.
  5. As a user, want to see all my workouts when i leave the app and come back later, so that i can keep using there over time

  - Features: based on user stories

  1. Map where user clicks to add new workout(best way to get location coordinates)
  2. Geolocation to display map at current location(more user friendly)
  3. Form to input distance, time, pace, steps/minute
  4. For to input distance, time, speed, elevation gain
  5. Display all workouts in a list
  6. Display all workouts on the map
  7. Store workout data in browser using local storage API
  8. On page load, read the saved data from local storage and display.

  - Flowchart - what we will build?
  - Architecture - How we will build it?

- Implementation Step:
  - Development step

* How to use Geolocation API

  - https://leafletjs.com/index.html

* Rendering Workouts: We want an Event handler that render the form so that a new workout can be added. And then on that form, we will add an EventListener so that whenever that form is submitted only then the marker is rendered on the map.
  AND so we'll basically move this rendering of the marker to > Render workout on map
