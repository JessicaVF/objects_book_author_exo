"strict use";
class Book {
  constructor(ISBN, titre, auteurs, dateParution, resume) {
    this.ISBN = ISBN;
    this.titre = titre;
    this.auteurs = [auteurs];
    this.dateParution = dateParution;
    this.resume = resume;
  }
  addAuthor(author) {
    if (!this.auteurs.includes(author)) {
      this.auteurs.push(author);
      author.addBook(this);
    }
  }
}
