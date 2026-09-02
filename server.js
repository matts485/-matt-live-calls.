const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Booking server is running.");
});

app.post("/booking", (req, res) => {
  console.log("New booking:", req.body);

  res.json({
    success: true,
    message: "Booking received"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
