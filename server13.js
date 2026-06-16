const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Sample Data
const employees = [
    { id: 1, name: "John", salary: 50000 },
    { id: 2, name: "Alice", salary: 70000 },
    { id: 3, name: "David", salary: 40000 },
    { id: 4, name: "Emma", salary: 60000 }
];

// Sorting API
app.get("/employees", (req, res) => {

    const sortBy = req.query.sortBy || "id";
    const order = req.query.order || "asc";

    let sortedData = [...employees];

    sortedData.sort((a, b) => {

        if (order === "asc") {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }

    });

    res.json(sortedData);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});