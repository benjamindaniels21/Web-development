const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6c7afaf8b14eb0d89ad999ebe0577d32&units=imperial"

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log(weatherData);

      res.write("<h1>The temperature in London is " + temp + " degrees Fahrenheit.</h1>");
      res.write("<p>It is currently " + description + " outside.</p>");
      res.write("<img src=" + imageURL +">");
      res.send();

    });
  });
});




app.listen(3000, function(){
  console.log("The server is running on port 3000.")
})
