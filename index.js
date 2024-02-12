import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();
  console.log(day); // for example it tells 2 then it means its Tuesday
  let type = "a weekday";
  let adv = "its time to work hard ";

  if (day === 6 || day === 5) {
    // saturday or sunday then

    type = "the weekend ";
    adv = "have some fun ";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
