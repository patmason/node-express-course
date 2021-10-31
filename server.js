const express = require("express");
const app = express();
const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.listen(8000, function () {
  console.log("server is running");
});

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    user: mockUserData,
  });
});
