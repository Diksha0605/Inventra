import { useState, useEffect } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


function Dashboard() {
  const [totalMedicines, setTotalMedicines] = useState(0);
  const [medicines, setMedicines] = useState([]);

  const [name, setName] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [newQuantity, setNewQuantity] = useState({});
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
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
            name: name,
            category: category,
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
      setCategory("");
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
        quantity: Number(newQuantity[id])
      }
    );

    setNewQuantity({
      ...newQuantity,
      [id]: "",
    });
    getMedicines();
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getMedicines();
  }, []);

  const categories = [
    "Tablet",
    "Capsule",
    "Syrup",
    "Injection",
    "Eye Drop",
    "Ear Drop",
    "Powder",
    "Cream",
    "Gel",
    "Drops"
  ];

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch = medicine.name
    .toLowerCase()
    .includes(search.toLowerCase());
    
    const matchesCategory =
    selectedCategory === "All" ||
    medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryData = Object.entries(
    medicines.reduce((acc, medicine) => {
      acc[medicine.category] = (acc[medicine.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const stockData = Object.entries(
    medicines.reduce((acc, medicine) => {
      acc[medicine.category] =
      (acc[medicine.category] || 0) + medicine.quantity;
      return acc;
    }, {})
  ).map(([name, stock]) => ({
    name,
    stock,
  }));

  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
    "#ec4899",
    "#84cc16",
    "#f97316",
    "#14b8a6",
  ];

  const groupedMedicines = filteredMedicines.reduce((groups, medicine) => {
    if (!groups[medicine.category]) {
      groups[medicine.category] = [];
    }
    
    groups[medicine.category].push(medicine);
    
    return groups;
  }, {});
  // Sort medicines inside each category
  
  Object.keys(groupedMedicines).forEach((category) => {
    groupedMedicines[category].sort((a, b) => {
      switch (sortBy) {
        case "az":
          return a.name.localeCompare(b.name);
          
        case "za":
          return b.name.localeCompare(a.name);

        case "priceLow":
          return a.price - b.price;

        case "priceHigh":
          return b.price - a.price;

        case "quantityLow":
          return a.quantity - b.quantity;

        case "quantityHigh":
          return b.quantity - a.quantity;
          
          default:
            return a.name.localeCompare(b.name);
      }
    });
  });

  const totalStock = medicines.reduce(
    (sum, medicine) => sum + medicine.quantity,
    0
  );
  
  const lowStock = medicines.filter(
    (medicine) => medicine.quantity < 50
  ).length;
  
  const totalCategories = new Set(
    medicines.map((medicine) => medicine.category)
  ).size;

  return (
    <div className="dashboard-container">
      
      <div className="header">
        
        <div>
          <h1>🏥 Inventra</h1>
          <p>Medical Inventory Management System</p>
        </div>
        
        <div className="admin-section">
          <h3>Admin Panel</h3>
          <p>Welcome</p>
          </div>
        </div>
        
        <div className="stats-container">
          
          <div className="stats-card">
            <h3>💊 Total Medicines</h3>
            <h2>{totalMedicines}</h2>
          </div>
          
          <div className="stats-card">
            <h3>📦 Total Stock</h3>
            <h2>{totalStock}</h2>
          </div>
          
          <div className="stats-card">
            <h3>⚠️ Low Stock</h3>
            <h2>{lowStock}</h2>
          </div>
          
          <div className="stats-card">
            <h3>📂 Categories</h3>
            <h2>{totalCategories}</h2>
          </div>
      </div>

      <div className="analytics-section">
        <h2>📊 Inventory Analytics</h2>
        <div className="charts-container">
          
          <div className="chart-card">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
                >
                  
                  {categoryData.map((entry, index) => (
                    <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
               <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
              data={stockData}
              layout="vertical"
              margin={{
                top: 10,
                right: 20,
                left: 30,
                bottom: 10,
              }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                type="number"
                />
                <YAxis
                type="category"
                dataKey="name"
                width={110}
                interval={0}
                tick={{
                  fontSize: 11,
                  fontWeight: 600,
                  fill: "#334155",
                }}
                />
                <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
                }}
                />
                
                <Bar
                dataKey="stock"
                radius={[8, 8, 0, 0]}
                >
                  {stockData.map((entry, index) => (
                    <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="form-card">
        <h2>Add New Medicine</h2>
        <div className="form-grid">
          <input
           type="text"
           placeholder="Medicine Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
          />
          
          <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
            
            <option value="">Select Category</option>
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Syrup">Syrup</option>
            <option value="Injection">Injection</option>
            <option value="Eye Drop">Eye Drop</option>
            <option value="Ear Drop">Ear Drop</option>
            <option value="Powder">Powder</option>
            <option value="Cream">Cream</option>
            <option value="Gel">Gel</option>
            <option value="Drops">Drops</option>
          </select>
          
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
      </div>

      <div className="toolbar">
        <input
        type="text"
        placeholder="🔍 Search Medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        
        <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        >
          
          <option value="All">All Categories</option>
          <option value="Tablet">Tablet</option>
          <option value="Capsule">Capsule</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Eye Drop">Eye Drop</option>
          <option value="Ear Drop">Ear Drop</option>
          <option value="Powder">Powder</option>
          <option value="Cream">Cream</option>
          <option value="Gel">Gel</option>
          <option value="Drops">Drops</option>
        </select>

      </div>

      <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="quantityLow">Quantity: Low to High</option>
        <option value="quantityHigh">Quantity: High to Low</option>
      </select>

      <div>
        {Object.keys(groupedMedicines).map((category) => (
          <div key={category}>
            
            <h2 className="category-heading">
              📂 {category}
            </h2>
            
            <div className="medicine-grid">
              {groupedMedicines[category].map((medicine) => (
                
                <div
                key={medicine._id}
                className="medicine-card"
                >
                  
                  <h3>💊 {medicine.name}</h3>
                  {medicine.quantity < 50 ? (
                    <div className="low-stock">
                      🔴 LOW STOCK
                    </div>
                    ) : (
                    <div className="in-stock">
                      🟢 IN STOCK
                    </div>
                  )}
                  
                  <div className="category-badge">
                    {medicine.category}
                  </div>
                  
                  <p>Company: {medicine.company}</p>
                  <p>Price: ₹{medicine.price}</p>
                  <p>Quantity: {medicine.quantity}</p>
                  
                  <input
                  type="number"
                  placeholder="New Quantity"
                  value={newQuantity[medicine.id] || ""}
                  onChange={(e) =>
                    setNewQuantity({
                      ...newQuantity,
                      [medicine.id]: e.target.value,
                    })
                  }
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
          </div>
       ))}
      </div>
    </div>
  );
}

export default Dashboard;