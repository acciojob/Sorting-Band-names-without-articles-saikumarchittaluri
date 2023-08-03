//your code here
const bandNames = [
  "The Rolling Stones",
  "Aerosmith",
  "The Beatles",
  "Pink Floyd",
  "The Who",
  "Led Zeppelin",
  "Anthrax",
];

const excludedArticles = /^(a |an |the )/i;

const sortedBandNames = bandNames.sort((a, b) =>
  a.replace(excludedArticles, "").localeCompare(b.replace(excludedArticles, ""))
);

const bandsList = document.getElementById("bands");

sortedBandNames.forEach((bandName) => {
  const listItem = document.createElement("li");
  listItem.textContent = bandName;
  bandsList.appendChild(listItem);
});

