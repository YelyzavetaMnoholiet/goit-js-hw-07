const categories = document.querySelectorAll("li.item");
console.log(categories);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
