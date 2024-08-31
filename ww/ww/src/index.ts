import { LibraryBook } from './models/LibraryBook';
import { LibraryUser } from './models/LibraryUser';
import { Library } from './services/Library';

const library = new Library();

const book1 = new LibraryBook('1984', 'George Orwell', 1949, 'Dystopian');
const book2 = new LibraryBook('Animal Farm', 'George Orwell', 1945, 'Political Satire');
const book3 = new LibraryBook('Brave New World', 'Aldous Huxley', 1932, 'Dystopian');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1 = new LibraryUser(1, 'Анна');
const user2 = new LibraryUser(2, 'Вова');

library.registerUser(user1);
library.registerUser(user2);

user1.borrow(book1);

console.log('Книги George Orwell:');
console.log(library.findBooksByAuthor('George Orwell'));

console.log('Доступные книги:');
console.log(library.findAvailableBooks());

user1.return(book1);

console.log('Доступные книги после возврата:');
console.log(library.findAvailableBooks());
