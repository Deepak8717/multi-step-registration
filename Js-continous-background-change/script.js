const body = document.getElementsByTagName("body")[0];
let previousColor = "#fff";

setInterval(() => {
  let color = "#";
  const arry = ["A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    if (randomNumber < 10) {
      color += randomNumber;
    } else {
      const remainder = randomNumber % 10;
      color += arry[remainder];
    }
  }

  body.style.background = color;
  body.style.transition = "1.5s ease";
  previousColor = color;
}, 2000);
