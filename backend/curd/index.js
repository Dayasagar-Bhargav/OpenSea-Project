const express = require('express');
const mongoose = require('mongoose');
const user = require('./dbconn');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async(req, res) => {
    try {
        const data = await user.find();
        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
}
);

app.post('/post', (req, res) => {

    try {
        const { name, email, mobile, password } = req.body;
        const newuser = new user({ name, email, mobile, password });
        newuser.save();
        res.send("User created");
    }
    catch (err) {
        console.log(err);
    }

});

app.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await user.findByIdAndDelete(id);
        res.send("User deleted");
    }
    catch (err) {
        console.log(err);
    }
});

app.patch('/update/:id', async(req, res) => {
    try {
        const _id = req.params.id;
      console.log(_id)
      let data = await user.findByIdAndUpdate({_id}, { $set: req.body});
      res.send(data);
    }
    catch (err) {
        console.log(err);
    }
});
        

app.listen(4000, () => {
    console.log('Listening on port 3000');
});