import { useEffect, useState } from "react";
import { getMenus, createMenu } from "../api";
import "./MenuList.css";

function MenuList() {
    const [menus, setMenus] = useState([]);
    const [newMenu, setNewMenu] = useState({ name: "", description: "" });

    useEffect(() => {
        getMenus().then((res) => setMenus(res.data));
    }, []);

    const addMenu = async () => {
        const res = await createMenu(newMenu);
        setMenus([...menus, res.data]);
    };

    return (
        

        <div className="container">
           
            <h1>Menus</h1>
            <div>
                {menus.map((menu) => (
                    <div key={menu._id} className="menu-card">
                        <h2>{menu.name}</h2>
                        <p>{menu.description}</p>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Menu Name" onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })} />
            <input type="text" placeholder="Description" onChange={(e) => setNewMenu({ ...newMenu, description: e.target.value })} />
            <button onClick={addMenu}>Create Menu</button>
        </div>
        
    );
}

export default MenuList;
