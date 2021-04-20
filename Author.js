"strict use";
class Author {
  constructor(prenom, nom, livres, dateNaissance) {
    this.prenom = prenom;
    this.nom = nom;
    this.livres = [livres];
    this.dateNaissance = dateNaissance;
  }
  addBook(book) {
    if (!this.livres.includes(book)) {
      this.livres.push(book);
      book.addAuthor(this);
    }
  }
}
