"strict use";

let authorA = new Author(
  "Jessica",
  "Villar",
  "El ultimo Mago",
  new Date("1991/06/07")
);

let bookA = new Book("9780545162074", "Magos de ciudad");

bookA.addAuthor(authorA);

console.log("Les 2 livres du authorA:");
console.log(authorA.livres[0]);
console.log(authorA.livres[1]);
console.log("Les 2 authors du bookA:");
console.log(bookA.auteurs[0]);
console.log(bookA.auteurs[1]);
