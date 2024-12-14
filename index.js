document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container");

  // Fetch data from JSON file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        // Create card dynamically
        const card = document.createElement("div");
        card.className = "res-card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card__image">
            <div class="name_and_price">
              <h4>${item.title}</h4>
              <h4>${item.price}</h4>
            </div>
            <div class="rating_time_cont">
              <div class="rating-time">
                    <div class="rating">
                    <i class="fas fa-star"></i> 4.7
                    </div>
                    <div class="time">(50-79 min)</div>
                </div>
              <div>
                <i class="fa-solid fa-cart-plus"></i>
              </div>
            </div>
          `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
