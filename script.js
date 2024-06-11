const menuData = [
  {
    id: 1,
    name: "Kaake",
    urlID: "kaake",
    items: [
      { id: 1, name: "Picon", price: "180,000" },
      { id: 2, name: "Picon & Za3tar", price: "200,000" },
      { id: 3, name: "Picon & Akkawi", price: "220,000" },
      { id: 4, name: "Akkawi", price: "180,000" },
      { id: 5, name: "Akkawi & Mozzarella", price: "250,000" },
      { id: 6, name: "Labne Extra", price: "170,000" },
      { id: 7, name: "4 Cheese", price: "220,000" },
      { id: 8, name: "Special 4 Cheese", price: "270,000" },
      { id: 9, name: "Sejok & Cheese", price: "320,000" },
      { id: 10, name: "Pepperoni & Cheese", price: "320,000" },
      { id: 11, name: "Salami & Cheese", price: "320,000" },
      { id: 12, name: "Turkey & Cheese", price: "350,000" },
      { id: 13, name: "Halloum & Pesto", price: "320,000" },
      { id: 14, name: "Kaake Pizza", price: "350,000" },
    ],
  },
  {
    id: 2,
    name: "Saj",
    urlID: "saj",
    items: [
      { id: 1, name: "Za3tar", price: "80,000" },
      { id: 2, name: "Labne Extra", price: "170,000" },
      { id: 3, name: "4 Cheese", price: "220,000" },
      { id: 4, name: "Special 4 Cheese", price: "270,000" },
      { id: 5, name: "Sejok & Cheese", price: "350,000" },
      { id: 6, name: "Pepperoni & Cheese", price: "350,000" },
      { id: 7, name: "Salami & Cheese", price: "350,000" },
      { id: 8, name: "Turkey & Cheese", price: "380,000" },
      { id: 9, name: "Pizza", price: "400,000" },
      { id: 10, name: "Nutella", price: "250,000" },
      { id: 11, name: "Nutella & Banana", price: "280,000" },
    ],
  },
  {
    id: 3,
    name: "Specialties",
    urlID: "specialties",
    items: [
      { id: 1, name: "Tawouk 3al Saj", price: "350,000" },
      { id: 2, name: "Fahita 3al Saj", price: "350,000" },
      { id: 3, name: "Submarine 3al Saj", price: "350,000" },
      { id: 4, name: "Awarma & Labne kaake", price: "350,000" },
      { id: 5, name: "Awarma & Cheese kaake", price: "350,000" },
    ],
  },
  {
    id: 4,
    name: "Ahwe w 3asir",
    urlID: "drinks",
    items: [
      { id: 1, name: "Fresh Juice", price: "80,000" },
      { id: 2, name: "Mexican beer", price: "200,000" },
      { id: 3, name: "Ahwe lebneniye", price: "60,000" },
      { id: 4, name: "Rakwet ahwe for 2", price: "100,000" },
      { id: 5, name: "Rakwet ahwe for 4", price: "200,000" },
      { id: 6, name: "Zhourat & Tea", price: "60,000" },
      { id: 7, name: "3iran", price: "50,000" },
    ],
  },
  {
    id: 5,
    name: "Arguileh",
    urlID: "arguileh",
    items: [
      { id: 1, name: "Teffe7ten", price: "300,000" },
      { id: 2, name: "7amod w na3na3", price: "300,000" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu");

  menuData.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "card";

    const categoryHeader = document.createElement("div");
    categoryHeader.className = "card-header";
    categoryHeader.id = `heading-${category.urlID}`;
    categoryHeader.innerHTML = `
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-${category.urlID}" aria-expanded="true" aria-controls="collapse-${category.urlID}">
                    ${category.name}
                </button>
            </h2>
        `;

    const categoryBody = document.createElement("div");
    categoryBody.id = `collapse-${category.urlID}`;
    categoryBody.className = "collapse";
    categoryBody.setAttribute("aria-labelledby", `heading-${category.urlID}`);
    categoryBody.setAttribute("data-parent", "#menu");

    const categoryBodyContent = document.createElement("div");
    categoryBodyContent.className = "card-body";

    category.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const itemName = document.createElement("div");
      itemName.className = "menu-item-name";
      itemName.textContent = item.name;

      const itemPrice = document.createElement("div");
      itemPrice.className = "menu-item-price";
      itemPrice.textContent = `${item.price} LBP`;

      menuItem.appendChild(itemName);
      menuItem.appendChild(itemPrice);
      categoryBodyContent.appendChild(menuItem);
    });

    categoryBody.appendChild(categoryBodyContent);
    categoryCard.appendChild(categoryHeader);
    categoryCard.appendChild(categoryBody);
    menuContainer.appendChild(categoryCard);
  });
});
