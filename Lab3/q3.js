// Array and its methods, and Object literal assignment:
//     let libraryBooks = [
//         { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
//         { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
//         { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
//         { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
//     ];
// Write the following JavaScript functions:
//     o addBook, which will take title, author, and ID as inputs. It will create a new book object and add it to the
// libraryBooks if not exists. addBook should return the newly created book.
//     o getTitles, which will return all the book titles (string array). The array should be sorted alphabetically.
//     o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
// the title and return books (object array). The books should be sorted by ID.


let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", ID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", ID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", ID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257}
];

function addBook(title, author, ID) {
    libraryBooks.push({title, author, ID})
    // return libraryBooks[libraryBooks.length-1]
    // return libraryBooks.slice(-1)[0]
    return libraryBooks.at(-1)
}

console.log(addBook("The Way of Water", "JR", 1324))
console.log(libraryBooks)

const getTitles = () => libraryBooks.map((x) => x.title).sort()
console.log(getTitles())

function compareBook(a, b) {
    if (a.ID > b.ID)
        return 1
    else if (a.ID < b.ID)
        return -1
    else return 0
}

const findBooks = (keyword) => libraryBooks.filter((x) => x.title.toLowerCase().includes(keyword.toLowerCase())).sort(compareBook)
console.log(findBooks('Road'))