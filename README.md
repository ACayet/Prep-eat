# Prep-eat

## Front End Instructions

### Lorem Ipsum

Lorem Ipsum

## Back End Instructions

### Explainings

We adapted a backend project with security (SSL, CORS, Authentication, API Key, etc...) with new methods to match our project idea (A cooking application)

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
It is automaticaly added to the database at the start of the app for the first time.

### API Documentation

Documentation about the API can be found at [https://localhost:8443/api/v1/docs/](https://localhost:8443/api/v1/docs/)

### Make the back end start

* Now you can type : `npm install`
* You can start your server with `npm run start` and open a new web browser and type : `http://localhost:8080` in a browser and you should be redirected to your HTTPS project (`https://localhost:8443`)
* Congrats ! Your HTTPS Support works :+1:
