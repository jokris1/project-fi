# FILE UPLOADER

This is a file uploading project

## Setup and start

To setup and start application, open thev terminal and type the following commands:

1. 'git clone https://github.com/jokris1/project-fi.git' - downloads application
2. 'npm install' inside application folder - downloads dependencies stated in package.json
3. 'node api.js' - starts server (localhost:5000)
4. 'npm start' inside application folder - starts application at localhost:3000

## Api

-   GET localhost:5000 - start page
-   GET localhost:5000/images - gets image metadata from public/Images
-   POST localhost:5000/upload - posts images to public/Images

## Future improvements

-   Making use of TypeScript for autocompletion and error catching while compiling
-   SCSS instead of CSS for more structured styling
-   Context or Redux for better props management
-   Media queries for responsive web design
-   ESLint corrections
-   Testing with Jest

This project was created by [johan.kristoffersson@gmail.com](mailto:johan.kristoffersson@gmail.com)
