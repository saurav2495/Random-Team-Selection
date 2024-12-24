const btn = document.querySelector("button");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const img = document.querySelector(".image");

const allTeam = ["CSK", "RCB", "MI", "PBSK"];

btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * allTeam.length);
  let value = allTeam[num];

  if (value === "CSK") {
    h1.textContent = "CSK";
    h2.style.color = "White";
    img.src =
      "https://i.pinimg.com/originals/4c/e8/ec/4ce8ec2ef49579e53d4f264f30d901b1.jpg";
  } else if (value === "RCB") {
    h1.textContent = "RCB";
    h2.style.color = "White";
    img.src =
      "https://media.licdn.com/dms/image/D4E12AQGcYQr84k65YQ/article-cover_image-shrink_720_1280/0/1714062928186?e=2147483647&v=beta&t=tscHdiFrcA1cWf0kc4wmCJOUD93Kmp2ob8sBFyj0590";
  } else if (value === "MI") {
    h1.textContent = "MI";
    h2.style.color = "White";
    img.src =
      "https://wallpapers.com/images/hd/mumbai-indians-uniform-and-helmet-2vrcgi2weevigo4y.jpg";
  } else if (value === "PBSK") {
    h1.textContent = "PBSK";
    h2.style.color = "White";
    img.src =
      "https://wallpapers.com/images/hd/punjab-kings-team-player-jymoinoik0d10qi6.jpg";
  }
});
