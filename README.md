## Introduction

This is the landing page for inverte.ca built using create-react-app.
•This is a Single-Page-App (SPA) that uses react-router to handle switching between / , /learn, /signin
•It uses client-routing because..
•It uses styled-componets where the CSS and HTML elements are in src/components/(someComponentName)Elements.js
•.env contains the API keys to mail.js
•Google analytics is measuring basic user data. The tag is placed in public/index.html

## Tools

For linting and formatting this App uses:
•ESLint with specific rules. The configuration lies in eslintrc.json
•Prettier handles the formatting.

## Project Structure

/public contains the index.html file, logo.ico, and og image for sharing in social media

The main code of the app lies in src.
•assets contains the images and videos used for the 3 pages.
•components contains the several components used to build this landing page.
¶ContactForm contains the UI and form that sends the message to inverte56@outlook.com
¶Footer contains the elements used to build the footer of this site.
¶HeroSection contains the video, contact button, and Unique Value Proposition for our product.
¶InfoSection contains the About and Mission sections of the site. They were coded with reusability in mind.
¶LearnMore
¶Navbar contains the logo, navlinks, and button to sign in.
¶Services contains the service cards that display what are the benefits of our product.
¶Sidebar contains the nav collpase functionalities for screen small screen sizes.
¶SignIn contains the sign-in elements that connect to a different react app.
¶ButtonElements.js is the reusable button used for info sections.
•pages contains the main HTML code returned when the three pages are hit inside this SPA.
•index.js is the main entry file that injects the app.js to public/index.html
•app.js is react router that imports the 3 pages.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
