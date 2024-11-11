import express from 'express';
import bodyParses from 'body-parser'; //it is used to turn the request from user into the readable format  
import userRoutes from './routes/users.js';


const app = express(); // initializing the function 
const PORT = 9296; // here we creating an unique port number for the back end and it can be any number

app.use(bodyParses.json()); // here we are telling the express to use the body-parser only the json files or format

app.use('/users', userRoutes);
// CREATING THE ROUTES
 
app.get('/', (req, res) => {
    console.log('[RELODE CHESAV RA YADAVA]!');
    
    res.send('Hello from vasiiiiiii meeeeeeeh.');
});



app.listen(PORT, () => console.log(`Server Running on the port: http://localhost:${PORT}`)); // this function is used to listen the request from the user


//NODEMON --> it is used to auto update the changes in the server with closing the server and run again the server for seeing the changes
/*
here we are going to create some routes

1) GET  -->  /users  {finds all the users}

2) POST --> /users {create the users}

3) GET --> /users/:id {finds user details}

4) DELETE --> /users/:id {deletes a user}

5) PATCH --> /users/:id {updates a user}
 */