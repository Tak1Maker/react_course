export class Book {
  constructor(title, author, description, pages, currentPage, read){
    this.title = title; 
    this.author = author; 
    this.description = description; 
    this.pages = pages;
    this.currentPage = currentPage; 
    this.read = read; 
  }

  
  readBook(pages){
    if (page < 1 || page > this.pages)
      return 0;
    if (page > 0 && page < this.pages){
      this.currentPage = page; 
      return 1; 
    }
    if (page == this.pages) {
      this.currentPage = page; 
      this.read = true; 
      return 1; 
    } 
  }
}
const livre1 = new Book("MonLivre", "Salim", "Humour", 330, 30, false);
const livre2 = new Book("MonLivre2", "Mouttaki", "Horreur", 200, 100, false);
const livre3 = new Book("Mon livre3", "Imad", "Action", 550, 300, false);

export const books = [livre1, livre2, livre3];
