const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" }
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
