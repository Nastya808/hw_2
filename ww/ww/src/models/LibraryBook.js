"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBook = void 0;
class LibraryBook {
    constructor(title, author, publishedYear, genre, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }
    borrowBook() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
}
exports.LibraryBook = LibraryBook;
