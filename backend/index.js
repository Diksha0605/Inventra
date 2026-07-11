const Medicine = require("./models/Medicine");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://inventraAdmin:Diksh%400605@ac-6izkicr-shard-00-00.rmsn84q.mongodb.net:27017,ac-6izkicr-shard-00-01.rmsn84q.mongodb.net:27017,ac-6izkicr-shard-00-02.rmsn84q.mongodb.net:27017/inventra?ssl=true&replicaSet=atlas-tk6u8j-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const app = express();

app.use(express.json());

const PORT = 5000;

let medicines = [];

app.get("/", (req, res) => {
    res.send("Welcome to Inventra Medical Inventory Management System");
});

app.post("/medicines", async (req, res) => {
    try {
        const medicine = new Medicine(req.body);

        await medicine.save();

        res.send("Medicine Added Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Adding Medicine");
    }
});

app.get("/medicines", async (req, res) => {
    try {
        const medicines = await Medicine.find();

        res.json(medicines);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Fetching Medicines");
    }
});

app.get("/medicines/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const medicine = await Medicine.findOne({ id: id });

        if (!medicine) {
            return res.status(404).send("Medicine Not Found");
        }

        res.json(medicine);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Fetching Medicine");
    }
});

app.put("/medicines/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const medicine = await Medicine.findOne({ id: id });

        if (!medicine) {
            return res.status(404).send("Medicine Not Found");
        }

        medicine.quantity = req.body.quantity;

        await medicine.save();

        res.send("Medicine Updated Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Updating Medicine");
    }
});

app.delete("/medicines/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const medicine = await Medicine.findOneAndDelete({ id: id });

        if (!medicine) {
            return res.status(404).send("Medicine Not Found");
        }

        res.send("Medicine Deleted Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Deleting Medicine");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


