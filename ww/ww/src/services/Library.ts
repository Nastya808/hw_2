import { LibraryBook } from '../models/LibraryBook';
import { LibraryUser } from '../models/LibraryUser';

export class Library {
    books: LibraryBook[] = [];
    users: LibraryUser[] = [];

    addBook(book: LibraryBook): void {
        this.books.push(book);
    }

    registerUser(user: LibraryUser): void {
        this.users.push(user);
    }

    findBooksByAuthor(author: string): LibraryBook[] {
        return this.books.filter(book => book.author === author);
    }

    findAvailableBooks(): LibraryBook[] {
        return this.books.filter(book => book.isAvailable);
    }
}
