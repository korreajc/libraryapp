
let myLibrary = [
    {
        "title": "1984",
        "author": "George Orwell",
        "pages": 100, 
        "read": false
    }, 
    {
        "title": "To Kill A Mockingbird",
        "author": "Steve",
        "pages": 200, 
        "read": false
    },
    {
        "title": "Flipped",
        "author": "Me",
        "pages": 300, 
        "read": false
    }
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(objArr){
    for(let i = 0; i < objArr.length; i++){
        console.log(objArr[i].title + ", by " + objArr[i].author + " contains "+ objArr[i].pages + " pages.")
    }
}

addBookToLibrary(myLibrary);