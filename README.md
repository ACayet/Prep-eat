# Prep-eat

## About the project

This project is a website which can help you cook by at term giving exemple of receipes and meals based on a number of required Kcal or other nutriments such as protein, salt, etc...

## Front End Instructions

### Requirements Front

You need to have these programs installated in order for the front end to work succesfully :

* @Angular/cli installed globaly (Works with Angular cli V11.0.5)
* NodeJS with npm (Works with NodeJS V16.14)

### Make the front-end start

* First, go in the `Front/` folder
* Then type `npm install` to get the needed dependencies
* You can start the webserver with the `ng serve` command. The server will be accessible at `http://localhost:4200/`. Note that this is a dev server.
* To build all the necessary files for production use the command `ng build --prod` and look inside the `dist/` folder.

## Back End Instructions

### Explainings

It is a web rest API used by the front-end to interact with the database. It has many security build in (SSL, CORS, Authentication, API Key, etc...) with any methods needed by the application.

### Requirements Back

You need to have these programs installated in order for the back end to work succesfully :

* MongoDB (Works with MongoDB 4.2.6)
* NodeJS with npm (Works with NodeJS V16.14+)

### Environment Variables (.env)

Create a `.env` file containing the following keys :

* `SSL_CERTIFICATE_PASSPHRASE` - The passphrase used to create the self signated certificate for HTTPS support
* `JWT_TOKEN_SECRETKEY` - Secret key used to generate json web tokens for users account in the app
* `JWT_TOKEN_TTL` - The number of seconds before a generated JWT expires.
* `MONGO_URI` - The MongoDB URI to connect to (Format : `mongodb://IP_ADDRESS:PORT_NUMBER/DATABASE_NAME`)

### OpenSSL (certification for HTTPS support) on windows

* Install OpenSSL by clicking on this [link](https://slproweb.com/products/Win32OpenSSL.html)
* Open a CMD/Bash window
* Check if OpenSSL is installed with this command line : `openssl version`
* If this works then type this command line : `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365`
* You will have to type some informations in order to signate the certificate then put a passphrase
* You should have two new files : `cert.pem` and `key.pem`
* You need to put the previous typed passphrase in the environment variable : `SSL_CERTIFICATE_PASSPHRASE` which is located in the `.env` file.

### Database Datas

We are using a free dataset from internet to add receipies to our project it can be found in `data/data.json`.
It is automaticaly added to the database at the start of the app for the first time or if the `receipes` collection is removed.

### API Documentation

Documentation about the API can be found at [https://localhost:8443/api/v1/docs/](https://localhost:8443/api/v1/docs/)

### CORS : Cross-Origin Ressource Sharing

CORS is a middleware that will allow (or not) a request if it is sent by another domain that the one in which API is running.
In our case the file `whitelist.json` needs to be updated to integrate any domain that will request the API (the front's domain for example)

### Make the back-end start

* First, go in the `Webservice/` folder
* Then type `npm install` to install the requiered dependencies
* You can start your server with `npm run start` and open a new web browser and type : `http://localhost:8080` in a browser and you should be redirected to your HTTPS project (`https://localhost:8443`)
* Congrats ! Your HTTPS Support works :+1:
