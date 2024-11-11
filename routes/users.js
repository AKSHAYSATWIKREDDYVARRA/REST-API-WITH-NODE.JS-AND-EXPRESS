import express from "express";

const router = express.Router();


const users = 
[
    {
        "firstName": "john",
         "lastName": "doe",
         "age": 30,
         "city": "New York",
         "address": "1st line metro area NYC"
    },
    {
        "firstName": "jane",
        "lastName": "doe",
        "age": 25,
        "city": "Los Angeles",
        "address": "2nd line metro area LA"
    }
]

// all route sin here are starting with the users
router.get('/', (req, res) => {
    console.log(users);
    
    res.send(users);
});

router.post('/', (req, res) =>
{
console.log('poste route reached');
console.log(req.body);

res.send('poste route reached');

});



export default router;