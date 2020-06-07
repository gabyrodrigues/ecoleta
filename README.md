<h3 align="center" >
  Ecoleta is a marketplace where you can register waste collection points on our web application and also find those points on the mobile version.
</h3>
<p align="center">
You can find the layout of the aplication at **[Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB)**
</p>

<p align="center">
  <img alt="Languagues" src="https://img.shields.io/github/languages/count/gabyrodrigues/ecoleta">
  <img alt="Top Languague" src="https://img.shields.io/github/languages/top/gabyrodrigues/ecoleta">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gabyrodrigues/ecoleta">
  <a href="https://github.com/gabyrodrigues/ecoleta/commits/master">
    <img alt="Last commit date" src="https://img.shields.io/github/last-commit/gabyrodrigues/ecoleta">
  </a>
  <a href="https://github.com/gabyrodrigues" target="_blank">
    <img alt="Developed by Gabriely Rodrigues" src="https://img.shields.io/badge/developed%20by-Gabriely_Rodrigues-informational">
  </a>
</p>

## :computer: Languages

- **Typescript**
- **Javascript**
- **NodeJS**
- **HTML**
- **CSS**
- **SQL**

## :books: Running the application

- ### **Prerequisites**

  - It's **necessary** to install **[Node.js](https://nodejs.org/en/)** on your machine
  - Also, it's **necessary** to have a package manager, either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - It's also necessary having **[Expo](https://expo.io/)** globally installed on your machine

1. Clone Ecoleta:

```
git@github.com:gabyrodrigues/ecoleta.git
```

2. Running the application:

```
  # Install the dependencies
  $ npm install

  ## Create the database
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed
 
  # Run the API server
  $ npm run dev

  # Run the web application
  $ cd web
  $ npm start

  # Run the web application
  $ cd mobile
  $ npm start
```

## :books: Technologies
- ### Backend 
	* **celebrate**:  ^12.1.1
	* **cors**:  ^2.8.5
	* **express**:  ^4.17.1
	* **knex**:  ^0.21.1
  * **multer**:  ^1.4.2
	* **sqlite3**:  ^4.2.0
  * **ts-node**:  ^8.10.2
  * **ts-node-dev**:  ^1.0.0-pre.44
  * **typescript**:  ^3.9.3


- ### Web
	* **@testing-library/jest-dom**:  ^4.2.4
	* **@testing-library/react**:  ^9.3.2
	* **@testing-library/user-event**:  ^7.1.2
	* **axios**:  ^0.19.2
  	* **leaflet**:  ^1.6.0
	* **react**:  ^16.13.1
	* **react-dom**:  ^16.13.1
  	* **react-dropzone**:  ^11.0.1
	* **react-icons**:  ^3.10.0
 	* **react-leaflet**:  ^2.7.0
	* **react-router-dom**:  ^5.2.0
	* **react-scripts**:  3.4.1
  	* **typescript**:  ~3.7.2

- ### Mobile
	- #### React navigation
		* **@react-native-community/masked-view**: 0.1.6
		* **@react-navigation/native**:  ^5.5.0
		* **@react-navigation/stack**:  ^5.4.1
		* **axios**: ^0.19.2
		* **expo**:  ~37.0.3
		* **expo-constants**:  ~9.0.0
  		* **expo-font**:  ~8.1.0
  		* **expo-location**:  ~8.1.0
		* **expo-mail-composer**:  ~8.1.0
	- #### React
		* **react**:  ~16.9.0
		* **react-dom**:  ~16.9.0
		* **react-native**:  https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz
		* **react-native-gesture-handler**:  ~1.6.0
		* **react-native-maps**:  ~0.26.1
    		* **react-native-reanimated**:  ~1.7.0
		* **react-native-safe-area-contex**:  0.7.3
		* **react-native-screens**: ~2.2.0
    		* **react-native-svg**:  ~11.0.1
		* **react-native-web**:  ~0.11.7
	- #### Typescript  
		* **typescript**:  ~3.8.3


Developed by [Gabriely Rodrigues](https://github.com/gaby-rodrigues)
