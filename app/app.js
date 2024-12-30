const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Sola fortunae repellere omnium adamare utriusque appellat laborat.",
    },
    {
      id: "2",
      title: "Sola fortunae repellere omnium adamare utriusque appellat laborat.",
    },
    {
      id: "3",
      title: "Sola fortunae repellere omnium adamare utriusque appellat laborat.",
    },
    {
      id: "4",
      title: "Sola fortunae repellere omnium adamare utriusque appellat laborat.",
    },
  ]);
});

const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.listen(SERVER_PORT, () => {
  console.log(`listening for requests on port ${SERVER_PORT}`);
});
