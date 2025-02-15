import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menulist.css";
import MenuItemList from "./MenuItemList";

const Menubar = () => {
    const [menus, setMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [menuName, setMenuName] = useState("");
    const [menuDescription, setMenuDescription] = useState("");

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/menus");
            setMenus(response.data);
            if (response.data.length > 0) {
                setSelectedMenu(response.data[0]); // ✅ Set the first menu as default
            }
        } catch (error) {
            console.error("Error fetching menus:", error);
        }
    };

    const handleAddMenu = async (e) => {
        e.preventDefault();
        if (!menuName.trim()) return;

        try {
            const response = await axios.post("http://localhost:5000/api/menus", {
                name: menuName,
                description: menuDescription,
            });

            setMenus([...menus, response.data]); // Add new menu to the list
            setSelectedMenu(response.data); // Select the newly added menu
            setShowForm(false);
            setMenuName("");
            setMenuDescription("");
        } catch (error) {
            console.error("Error adding menu:", error);
        }
    };

    return (
        <div className="menu-container">
            <div className="menu-list">
                <div className="menu-row">
                    {menus.map((menu) => (
                        <div
                            key={menu._id}
                            className={`menu-card ${selectedMenu?._id === menu._id ? "active" : ""}`}
                            onClick={() => setSelectedMenu(menu)}
                        >
                            <h3 className="menu-title">{menu.name}</h3>
                        </div>
                    ))}
                    {/* ✅ Plus Button to Add New Menu */}
                    <button className="add-item-btn" onClick={() => setShowForm(true)}>+</button>
                </div>
            </div>

            {/* ✅ Add New Menu Form (Modal) */}
            {showForm && (
                <div className="menu-form-overlay">
                    <div className="menu-form">
                        <h2>Add New Menu</h2>
                        <form onSubmit={handleAddMenu}>
                            <input
                                type="text"
                                placeholder="Menu Name"
                                value={menuName}
                                onChange={(e) => setMenuName(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Menu Description"
                                value={menuDescription}
                                onChange={(e) => setMenuDescription(e.target.value)}
                                required
                            ></textarea>
                            <div className="form-buttons">
                                <button type="submit">Add</button>
                                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ✅ Show selected menu items */}
            {selectedMenu && <MenuItemList menu={selectedMenu} refreshMenu={fetchMenus} />}
        </div>
    );
};

export default Menubar;
