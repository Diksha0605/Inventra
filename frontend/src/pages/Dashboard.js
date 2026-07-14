import { useState, useEffect } from "react";
import axios from "axios";


function Dashboard() {
  const [totalMedicines, setTotalMedicines] = useState(0);
  const [medicines, setMedicines] = useState([]);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [newQuantity, setNewQuantity] = useState("");
  
  const getMedicines = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5000/medicines"
        );

        console.log(response.data);
        
        setMedicines(response.data);
        setTotalMedicines(response.data.length);
    } catch (err) {
        console.log(err);
    }
  };

  const addMedicine = async () => {
    try {
        const medicineData = {
            id: totalMedicines + 1,
            name: name,
            company: company,
            price: Number(price),
            quantity: Number(quantity)
       };
       
       await axios.post(
        "http://localhost:5000/medicines",
        medicineData
      );
      
      getMedicines();
      
      setName("");
      setCompany("");
      setPrice("");
      setQuantity("");
    } catch (err) {
        console.log(err);
    }
 };

 const deleteMedicine = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/medicines/${id}`
    );

    getMedicines();
  } catch (err) {
    console.log(err);
  }
 };

 const updateMedicine = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/medicines/${id}`,
      {
        quantity: Number(newQuantity)
      }
    );

    setNewQuantity("");
    getMedicines();
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getMedicines();
  }, []);

  const increaseCount = () => {
    setTotalMedicines(totalMedicines + 1);
  };

  return (
    <div className="navbar">
      <h2>🏥 Inventra</h2>
      <p>Medical Inventory Management System</p>

      <div className="stats-container">
        <div className="stats-card">
          <h3>Total Medicines</h3>
          <h2>{totalMedicines}</h2>
        </div>
      </div>

      <h1>Medical Inventory Dashboard</h1>

      <h3>Total Medicines: {totalMedicines}</h3>

      <div>
        <input
           type="text"
           placeholder="Medicine Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
        />

        <input
           type="text"
           placeholder="Company"
           value={company}
           onChange={(e) => setCompany(e.target.value)}
        />
        
        <input
           type="number"
           placeholder="Price"
           value={price}
           onChange={(e) => setPrice(e.target.value)}
        />

        <input
           type="number"
           placeholder="Quantity"
           value={quantity}
           onChange={(e) => setQuantity(e.target.value)}
        />
        
        <button onClick={addMedicine}>
            Add Medicine
        </button>
      </div>

      {medicines.map((medicine) => (
        <div
        key={medicine._id}
        className="medicine-card"
       >
          <h3>{medicine.name}</h3>
          
          <p>
            Company: {medicine.company}
          </p>

          <p>
            Price: ₹{medicine.price}
          </p>

          <p>
            Quantity: {medicine.quantity}
          </p>
            
            <input
            type="number"
            placeholder="New Quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            />
            
            <button
            onClick={() => updateMedicine(medicine.id)}
            >
              Update
            </button>

            <button
            onClick={() => deleteMedicine(medicine.id)}
            >
              Delete
            </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;