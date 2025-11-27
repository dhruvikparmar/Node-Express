import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewRecipe() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:1008/viewRecipe", {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("API DATA:", res.data.data);

        console.log("API RESPONSE:", res.data);

        const data = res.data.data;

        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (

        <div className="min-h-screen p-10 bg-gray-900 text-white">

            <h1 className="text-4xl font-bold mb-8 text-center">Recipe Information</h1>

            <div className="bg-gray-800 p-6 rounded-xl shadow-xl max-w-3xl mx-auto">

                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-gray-300 border-b border-gray-600">
                            <th className="p-3 text-center">Recipe Name</th>
                            <th className="p-3 text-center">Ingredients</th>
                            <th className="p-3 text-center">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((e, i) => (
                            <tr key={i} className="hover:bg-gray-700">
                                <td className="p-3 text-center">{e.recipename}</td>
                                <td className="p-3 text-center">{e.ingrediants}</td>
                                <td className="p-3 text-center">{e.price}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
}
