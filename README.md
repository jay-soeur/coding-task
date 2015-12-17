## What you will need:
nodejs v5.0.0

npm v3.3.6

grunt v0.4.5

## Build:
```
npm install  (I feel that is not that realiable and needed to do it twice in some cases).

grunt
```
## Running the app:
````
npm start
````
paste this into a browser:
````
http://{domain}:3000
````

you can change the port to whatever you want in:
````
app.ts

 app.listen(3000, () => {
        console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
 });
````

* There is no unit testing
-------------

# etaskr Coding Task Guidelines

There's few better ways to assess someone's programming skills than to have them undertake a reasonably open ended coding task. This task is borrowed heavily from https://github.com/Westpac-Mobile/CodingTest, so thank-you to those people for such a great boilerplate. 

Please do not spend more that 2-3 hours on this task. If it takes you much longer than that, there is something fundamentally wrong with your approach.

## Requirements

The task is to create a basic **Node.js** web application that displays the current temperature using https://forecast.io/ using the geo-location of your browser.

### Key business requirements

* Display the current temperature in degrees celsius
* Display the temperature based on the geolocation of your browser
* Display a simple icon and label based on the weather information provided (eg. sunny, cloudy, rainy etc).
* The API request must be proxied via your node.js application ie. do not make a request from the client side directly to https://developer.forecast.io/ for the weather information.

### What we will be looking for in the application

We are looking for engineers that can lead technology and design decisions without the need for explicit guidance. This is why we are not providing an exact outline of what we are looking for so we influence your direction on this task as little as possible. We want to see how you work unencumbered and get to know what really matters to you when developing a web application.

## Getting Started

* Fork this repository.
* Register for a free API key at: https://developer.forecast.io/.
* Commit your code, and send us a pull request when you are finished.
