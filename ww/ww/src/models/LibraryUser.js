"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryUser = void 0;
class LibraryUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} взял книгу "${book.title}".`);
        }
        else {
            console.log(`Книга "${book.title}" сейчас недоступна.`);
        }
    }
    return(book) {
        const bookIndex = this.borrowedBooks.findIndex(b => b.title === book.title);
        if (bookIndex !== -1) {
            this.borrowedBooks.splice(bookIndex, 1);
            book.returnBook();
            console.log(`${this.name} вернул книгу "${book.title}".`);
        }
        else {
            console.log(`Книга "${book.title}" не была взята пользователем.`);
        }
    }
}
exports.LibraryUser = LibraryUser;
