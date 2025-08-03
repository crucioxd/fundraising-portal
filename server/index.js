const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

// Dummy user data
const dummyData = {
  name: "Puneet Upadhayay",
  referralCode: "puneet2025",
  totalDonations: 4520,
  goal: 10000,
};

// Route
app.get("/api/intern", (req, res) => {
  res.json(dummyData);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
