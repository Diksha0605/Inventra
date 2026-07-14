// import './App.css';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div className="app">
//         <h1>Medical Inventory Management System</h1>
//         <p>Manage your medicines efficiently.</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;