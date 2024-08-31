import { Book } from '../interfaces/Book';

export class LibraryBook implements Book {
    constructor(
        public title: string,
        public author: string,
        public publishedYear: number,
        public genre: string,
        public isAvailable: boolean = true
    ) {}

    borrowBook(): void {
        this.isAvailable = false;
    }

    returnBook(): void {
        this.isAvailable = true;
    }
}
