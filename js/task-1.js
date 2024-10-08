const category = document.querySelector("#categories");
const categoryList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryLi = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryLi}`);
});
