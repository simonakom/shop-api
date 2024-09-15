const express = require('express');
const app = express();
app.use(express.json());

// In-memory data storage
let shops = [];
let shopItems = [];
let shopIdCounter = 1;
let shopItemIdCounter = 1;

// Create a new shop
app.post('/shops', (req, res) => {
  const { name } = req.body;

    // Check if the name field is provided
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: 'Shop name is required' });
    }
    
  const newShop = { id: shopIdCounter++, name, items: [] };
  shops.push(newShop);
  res.status(201).json(newShop);
});

// Update a shop
app.put('/shops/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const shop = shops.find(s => s.id == id);

  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  shop.name = name;
  res.json(shop);
});

// Get all shops
app.get('/shops', (req, res) => {
  res.json(shops);
});

// Get a shop by ID
app.get('/shops/:id', (req, res) => {
  const { id } = req.params;
  const shop = shops.find(s => s.id == id);

  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  res.json(shop);
});

// Delete a shop
app.delete('/shops/:id', (req, res) => {
  const { id } = req.params;
  const shopIndex = shops.findIndex(s => s.id == id);

  if (shopIndex === -1) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  if (shops[shopIndex].items.length > 0) {
    return res.status(400).json({ error: 'Cannot delete a shop with items' });
  }

  shops.splice(shopIndex, 1);
  res.status(200).json({ message: 'Shop deleted successfully' });
});

// Create a new shop item and assign it to a shop
app.post('/shopItems', (req, res) => {
  const { name, price, shopId } = req.body;
  const shop = shops.find(s => s.id == shopId);

  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const newShopItem = { id: shopItemIdCounter++, name, price };
  shopItems.push(newShopItem);
  shop.items.push(newShopItem);
  res.status(201).json(newShopItem);
});

// Update a shop item
app.put('/shopItems/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const shopItem = shopItems.find(i => i.id == id);

  if (!shopItem) {
    return res.status(404).json({ error: 'Shop item not found' });
  }

  shopItem.name = name;
  shopItem.price = price;
  res.json(shopItem);
});

// Get all shop items
app.get('/shopItems', (req, res) => {
  res.json(shopItems);
});

// Get a shop item by ID
app.get('/shopItems/:id', (req, res) => {
  const { id } = req.params;
  const shopItem = shopItems.find(i => i.id == id);

  if (!shopItem) {
    return res.status(404).json({ error: 'Shop item not found' });
  }

  res.json(shopItem);
});

// Delete a shop item
app.delete('/shopItems/:id', (req, res) => {
  const { id } = req.params;
  const shopItemIndex = shopItems.findIndex(i => i.id == id);

  if (shopItemIndex === -1) {
    return res.status(404).json({ error: 'Shop item not found' });
  }

  const shopItem = shopItems[shopItemIndex];
  const shop = shops.find(s => s.items.includes(shopItem));

  if (shop) {
    const shopItemIndexInShop = shop.items.findIndex(i => i.id == id);
    if (shopItemIndexInShop !== -1) {
      shop.items.splice(shopItemIndexInShop, 1);
    }
  }

  shopItems.splice(shopItemIndex, 1);
  res.status(200).json({ message: 'Shop item deleted successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
