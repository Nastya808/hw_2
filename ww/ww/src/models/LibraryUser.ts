import { User } from '../interfaces/User';
import { LibraryBook } from './LibraryBook';

export class LibraryUser implements User {
    borrowedBooks: LibraryBook[] = [];

    constructor(
        public id: number,
        public name: string
    ) {}

    borrow(book: LibraryBook): void {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} взял книгу "${book.title}".`);
        } else {
            console.log(`Книга "${book.title}" сейчас недоступна.`);
        }
    }

    return(book: LibraryBook): void {
        const bookIndex = this.borrowedBooks.findIndex(b => b.title === book.title);
        if (bookIndex !== -1) {
            this.borrowedBooks.splice(bookIndex, 1);
            book.returnBook();
            console.log(`${this.name} вернул книгу "${book.title}".`);
        } else {
            console.log(`Книга "${book.title}" не была взята пользователем.`);
        }
    }
}
