const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const User = require("./schema/userSchema");

// mongoose connection
mongoose.connect("mongodb+srv://mohanareact:prakash@cluster0.s9ken.mongodb.net/users?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Mongo Atlas Connected");
})

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/userData', async (req, res) => {
    const db = await User.find()
    res.send(db)
})
app.post("/userData", async (req, res) => {
    // console.log(req.body);
    // const ac = req.body.ids
    // console.log(ac, "pppp")
    // const db = await User.find()
    // const e = await db.filter(async (q) => {
    //     if (q._id === ac) {
    //         return q
    //     }
    // })
    // Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
    //     // As always, handle any potential errors:
    //     if (err) return res.status(500).send(err);
    //     // We'll create a simple object to send back with a message and the id of the document that was removed
    //     // You can really do this however you want, though.
    //     const response = {
    //         message: "Todo successfully deleted",
    //         id: todo._id
    //     };
    //     return res.status(200).send(response);
    // });
    // console.log(e, "asaasasa")
    // if (e.length == 0) {
    try {
        console.log("newUser,lllllll");
        const newUser = await new User({

            Name: req.body.Name,
            Designation: req.body.Designation,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Company: req.body.Company,
            City: req.body.City,
        })
        const nw = await newUser.save()
            .then(e => {
                console.log('New User created:' + e);
            })
    } catch {
        console.log(err);
    }
    // }
    // else {
    // console.log("sasasas")
    // const filter = { _id: ac };
    // const update = {
    //     Name: req.body.Name,
    //     Email: req.body.Email,
    //     Phone: req.body.Phone,
    //     Company: req.body.Company,
    //     Address: req.body.Address,
    //     Designation: req.body.Designation
    // };

    // await User.countDocuments(filter);

    // let res = await User.findOneAndUpdate(filter, update, {
    //     new: true,
    //     upsert: true,
    // rawResult: true
    // });
    // console.log(res);
    // }
    // console.log("else")

    // }
})
app.listen(process.env.PORT || 5000, () => console.log(`Server running on port 5000.`));
