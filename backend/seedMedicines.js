const mongoose = require("mongoose");
const Medicine = require("./models/Medicine");
const medicines = require("./medicinesData");

mongoose.connect(
  "mongodb://inventraAdmin:Diksh%400605@ac-6izkicr-shard-00-00.rmsn84q.mongodb.net:27017,ac-6izkicr-shard-00-01.rmsn84q.mongodb.net:27017,ac-6izkicr-shard-00-02.rmsn84q.mongodb.net:27017/inventra?ssl=true&replicaSet=atlas-tk6u8j-shard-0&authSource=admin&retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

async function seedDatabase() {
    try {

        // Delete existing medicines
        await Medicine.deleteMany({});

        // Generate IDs automatically
        const medicinesWithIds = medicines.map((medicine, index) => ({
            id: index + 1,
            ...medicine
        }));

        // Insert all medicines
        await Medicine.insertMany(medicinesWithIds);

        console.log("✅ 50 Medicines Added Successfully");

        mongoose.connection.close();

    } catch (err) {
        console.log(err);
    }
}

seedDatabase();