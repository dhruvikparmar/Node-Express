import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Recipe() {
  const [recipename, setRecipename] = useState("");
  const [ingrediants, setIngrediants] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleRecipe = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:1008/addRecipe", {
        recipename,
        ingrediants,
        price,
      })
      .then(
        (res) => {
          setMsg(res.data.msg);
          setRecipename("");
          setIngrediants("");
          setPrice("");
          alert(recipename +"Added Successfully")
          navigate("/viewRecipe");
        },
        (err) => {
          setMsg("Error: " + (err.response?.data?.msg || err.message));
        }
      );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleRecipe}
        className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-md text-white"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Add Recipe</h1>

        {msg && (
          <div className="bg-gray-700 p-3 rounded text-center mb-4">
            {msg}
          </div>
        )}

        <input
          type="text"
          placeholder="Enter Recipe Name"
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none"
          onChange={(e) => setRecipename(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Ingrediants"
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none"
          onChange={(e) => setIngrediants(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:outline-none"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}
