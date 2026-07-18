// Search Apps
const search = document.getElementById("search");

search.addEventListener("keyup", function () {
  let filter = search.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Download Button
document.querySelectorAll(".card a").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Replace this button with your APK or Play Store download link.");
  });
});
