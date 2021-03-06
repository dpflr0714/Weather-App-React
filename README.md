# Weather Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### See the Live Preview

Link here

### Functionality

- The Weather App is a simple web application that retrieves real time weather data.
- City is the primary query keyword when making the request. States are optional but not necessary.
- Depending on the weather conditions, the animated icons will adjust accordingly. The icons can vary from: cloudy, clear, drizzle, rainy, snowy, and thunder.
- Dark mode can change the background color and font color depending on which mode it toggled.
- If the user request a location that does not yet exist, there will be a warning that tells that the place does not exist.
- Default location when the app first starts up is Los Angeles.
- Fully responsive website that will adjust to any size.

### Thoughts

- It took me a while to implement the dark mode, but thanks to Material-UI simple components, it was much easier than if I were to implement from scratch. Also, it worked really well.
- This was my first project using React and Material-UI and also working with API calls. It was overwhelming at first, but thanks to my previous experience with Javascript and CSS, I was able to successfully create the app without any major hiccups.
- After creating my first React app, I was able to experience the efficiency of components and I could definitely see how useful it could be to create apps easily and efficiently.
- I spent a lot of time trying to have a layout that seemed the most logical to the user and also pleasing to the eye.

### What I could have done better

- Build an app with function components rather than class components. This will allow more reusability.
- Use async and await for better handling API calls for fetch. The app currently loads before the API call is finished, which causes the app to show "NaN" breifly the API is called.
- Improve the security of the API key.


