const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
