# maggie-portfolio

*work in progress*

This is a portfolio website using React as frontend, ExpressJS for backend and  Mongoose as persistence.

## How to run :

### 1. Clone the repository
> git clone https://github.com/Hristiyan-Anchev/maggie-portfolio/

### 2. Go to the project folder and install all the dependencies for both the development client and backend.


> **$** cd client && npm install

> **$** cd ../backend && npm install

### 3. Create a .env file inside the backend directory
  This is where you specify your environment variables, such as:
    -the database connection string
    -the authentication name and password for your database user (you must create one via mongo shell first to authenticate against your database!) 
    -the email and password that the server will be using to send emails when using the enquiry form 
    -the target email that all the enquiries are mailed to
    
    
Example of .env:

> DB_HOST=mongodb://localhost:27017/portfolio_db  <br>
DB_USER=backend_server   <br>
DB_PASSWD=myPasswordForUser-backend_server  <br>
MAIL_USER=username.of.email.that.the.server.uses  <br>
MAIL_PASSWD=myEmailPasword  <br>
TARGET_MAIL=the.email.that.all.enquiries.go.to@gmail.com  <br>

### 4. Seed your database with the data from **backend/data_seed** folder, either via MongoDB Compass or mongo shell.

### 5. Start the application in development mode:

  From the top-level project directory
  
  I. cd client/ && npm start (starts react dev server at localhost:3000)  <br>
  II. node backend/bin/www (starts backend at localhost:3001) 
  
  
  
