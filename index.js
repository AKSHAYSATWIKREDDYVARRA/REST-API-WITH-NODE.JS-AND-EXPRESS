import express from 'express';
import bodyParses from 'body-parser'; //it is used to turn the request from user into the readable format  


const app = express(); // initializing the function 
const PORT = 9296; // here we creating an unique port number for the back end and it can be any number

app.use(bodyParses.json()); // here we are telling the express to use the body-parser only the json files or format
 
app.listen(PORT, () => console.log(`Server running on the port: http://localhost:${PORT}`)); // this function is used to listen the request from the user


//NODEMON --> it is used to auto update the changes in the server with closing the server and run again the server for seeing the changes
