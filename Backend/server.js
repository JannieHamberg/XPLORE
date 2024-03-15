const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const fs = require("fs").promises;

const app = express();
app.use(cors());
app.use(express.json());

const path = "./users.json"; 

const userSchema = Joi.object({
  userId: Joi.string().required(),
  favorites: Joi.array().items(Joi.string().uri()) 
});

const saveUser = async (user) => {
  let data = await fs.readFile(path, "utf-8");
  let users = JSON.parse(data);

  const { error, value } = userSchema.validate(user);
  if (error) {
    throw error;
  }

  const existingUser = users.find((u) => u.userId === value.userId);
  if (existingUser) {
    existingUser.favorites.push(...value.favorites);
  } else {
    users.push(value);
  }

  await fs.writeFile(path, JSON.stringify(users, null, 2));
};

const getFavorites = async (userId) => {
  let data = await fs.readFile(path, "utf-8");
  let users = JSON.parse(data);
  const user = users.find((u) => u.userId === userId);
  return user ? user.favorites : [];
};

app.post("/api/images/save", async (req, res) => {
  try {
    await saveUser(req.body);
    res.status(200).json({ message: "Favorites saved" });
  } catch (error) {
    res.status(400).json({ error: error.details });
  }
});

app.get("/api/images/getfavorites/:id", async (req, res) => {
  try {
    const favorites = await getFavorites(req.params.id);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
