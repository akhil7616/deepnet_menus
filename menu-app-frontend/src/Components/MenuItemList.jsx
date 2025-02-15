import React, { useState } from "react";
import "../styles/MenuItemList.css"; // Ensure you have this CSS file

const MenuItemList = ({ menu, refreshMenu }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  });

  if (!menu) return null; // If no menu is selected, return nothing

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;

    try {
      const response = await fetch(`http://localhost:5000/api/menus/${menu._id}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      setNewItem({ name: "", description: "", price: "" }); // Reset form
      setIsFormOpen(false); // Close modal

      if (refreshMenu) refreshMenu(); // ✅ Fetch updated menu list
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="menu-item-container">
      <h2 className="menu-section-title">{menu.name.toUpperCase()}</h2>

      {menu.items.length > 0 ? (
        <div className="menu-grid">
          {menu.items.map((item) => (
            <div key={item._id} className="menu-item">
              <div className="menu-item-content">
                <h3 className="menu-item-name">
                  {item.name} <span className="dots"></span> 
                  <span className="price">${item.price}</span>
                </h3>
                <p className="menu-item-description">{item.description}</p>
              </div>
              {item.image && (
                <img src={item.image} alt={item.name} className="menu-item-image" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-items">No items available in this menu.</p>
      )}

      {/* Floating Plus Button */}
      <button className="add-item-btn" onClick={() => setIsFormOpen(true)}>+</button>

      {/* Add Item Modal */}
      {isFormOpen && (
        <div className="menu-form-overlay">
          <div className="menu-form">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={newItem.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newItem.description}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleInputChange}
                required
              />

              <div className="form-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setIsFormOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItemList;
