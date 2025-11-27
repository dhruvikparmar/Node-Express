import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterAdmin from "./routes/registerAdmin";
import LoginAdmin from "./routes/loginAdmin";
import ViewProfile from "./routes/viewProfile";
import AddRecipe from "./routes/addRecipe" 
import ViewRecipe from "./routes/viewRecipe";


function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>

        <div className="space-x-6">
          <Link className="hover:text-blue-400" to="/registerAdmin">Register</Link>
          <Link className="hover:text-blue-400" to="/loginAdmin">Login</Link>
          <Link className="hover:text-blue-400" to="/viewProfile">Profile</Link>
          <Link className="hover:text-blue-400" to="/addRecipe">Add Recipe</Link>
          <Link className="hover:text-blue-400" to="/viewRecipe">View Recipe</Link>
          
        </div>
      </nav>

      {/* ROUTES */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<RegisterAdmin />} />
          <Route path="/registerAdmin" element={<RegisterAdmin />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/viewProfile" element={<ViewProfile />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/viewRecipe" element={<ViewRecipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
