"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    registerUser(user) {
        this.users.push(user);
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    findAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
}
exports.Library = Library;
