import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css"; // Ensure the CSS file exists
import Navbar from "./Navbar"; // Import the Navbar component 
import Head1 from "./Head1"  
import Menubar from "./Menubar";
import Footer from "./Footer";

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [newMenu, setNewMenu] = useState({ name: "", description: "" });
    const [newItem, setNewItem] = useState({ name: "", description: "", price: "", menuId: "" });

    // ✅ Fetch Menus on Component Load
    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/menus");
            setMenus(response.data);
        } catch (error) {
            console.error("Error fetching menus:", error);
        }
    };

    // ✅ Add New Menu
    const addMenu = async () => {
        if (!newMenu.name.trim()) return alert("Menu name is required!");
        try {
            const response = await axios.post("http://localhost:5000/api/menus", newMenu);
            setMenus([...menus, response.data]);
            setNewMenu({ name: "", description: "" });
        } catch (error) {
            console.error("Error adding menu:", error);
        }
    };

    // ✅ Add New Menu Item
    const addMenuItem = async (menuId) => {
        if (!newItem.name.trim() || !newItem.price.trim()) return alert("Item name and price are required!");
        try {
            const response = await axios.post(`http://localhost:5000/api/menus/${menuId}/items`, newItem);
            setMenus(menus.map(menu =>
                menu._id === menuId ? { ...menu, items: [...menu.items, response.data] } : menu
            ));
            setNewItem({ name: "", description: "", price: "", menuId: "" });
        } catch (error) {
            console.error("Error adding menu item:", error);
        }
    };




    return (
 
    
        <div className="menu-container">
            <Navbar />
            <Head1 />
            <Menubar />
            <Footer />

        
        </div>
    );
};

export default Menu;
