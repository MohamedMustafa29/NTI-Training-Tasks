interface Book {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
    publishedYear?: number;
}

class Library<T extends { id: number }> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getAllItems(): T[] {
        return [...this.items];
    }

    findById(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }
}

class Member {
    constructor(public name: string, private memberId: number) {}

    get id(): number {
        return this.memberId;
    }

    borrowBook(book: Book): string {
        if (book.isAvailable) {
            book.isAvailable = false;
            return `${this.name} borrowed "${book.title}"${book.publishedYear ? `(${book.publishedYear})` : ''}`;
        } else {
            return `"${book.title}" is not available for borrowing.`;
        }
    }
}



const library = new Library<Book>();

const book1: Book = { id: 1, title: "1984", author: "George Orwell", isAvailable: true };
const book2: Book = { id: 2, title: "Dune", author: "Frank Herbert", isAvailable: true, publishedYear: 1965 };

library.addItem(book1);
library.addItem(book2);

const member1 = new Member("Mohamed Mostafa", 1);
console.log(member1.borrowBook(book1));
