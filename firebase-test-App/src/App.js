import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";
import { initializeApp } from "firebase/app";


function App() {
/*const [colors, setColors] = useState([]);
const colorsRef = collection(db, "colors");

useEffect(() => {
    async function getColors() {
        try {
            const data = await getDocs(colorsRef);
            const filteredData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            setColors(filteredData);
        
        } catch (error) {
            console.error(error);
        }
    }

    getColors();
  }, []);

return (
    <div className="App">
    <h1>React Firebase Demo</h1>
    <ul>
        {colors.map((color) => (
            <li key={color.id}>
                {color.name}
            </li>
        ))}
    </ul>
</div>
    );*/
   
    const [users, setUsers] = useState([]);
    const usersRef = collection(db, "users");

    useEffect(() => {
        async function getUsers() {
            try {
                const data = await getDocs(usersRef);
                const filteredData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(filteredData);
            } catch (error) {
                console.error(error);
            }
        }

        getUsers();
    },[]);

    return (
        <div className="App">
            <h1>React Firebase Demo</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
