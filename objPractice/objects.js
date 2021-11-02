
let myLibrary = [
    {
        "title": "1984",
        "author": "George Orwell",
        "pages": 100, 
        "read": false
    },
    {
        "title": "Jose",
        "author": "George Orwell",
        "pages": 200, 
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



document.getElementById("btn").addEventListener("click", function(){
    const card = document.createElement("div");
    card.classList.add("smallCard");
    card.setAttribute("id", "tempCard");
    // make div to put header in
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("smallCardTitle");
    // make header
    const cardHeaderInput = document.createElement("Label");
    cardHeaderInput.innerHTML = "Enter Book Title: "
    cardHeaderInput.htmlFor = "bookTitleInput"

    var bookTitleInput = document.createElement("INPUT")
    bookTitleInput.id = "bookTitleInput"
    bookTitleInput.name = "bookTitleInput"
    bookTitleInput.type = "text";
    //put header within div

    cardDiv.appendChild(cardHeaderInput);
    cardDiv.appendChild(bookTitleInput);

    const p1Label = document.createElement("Label");
    p1Label.innerHTML = "Enter Book Author: "
    p1Label.htmlFor = "p1Input"

    var p1Input = document.createElement("INPUT")
    p1Input.id = "p1Input"
    p1Input.name = "p1Input"
    p1Input.type = "text";
    

    const p2Label = document.createElement("Label");
    p2Label.innerHTML = "Enter Page Amount: "
    p2Label.htmlFor = "p2Input"

    var p2Input = document.createElement("INPUT")
    p2Input.id = "p2Input"
    p2Input.name = "p2Input"
    p2Input.type = "text";

    const p3 = document.createElement("p");
    const p3Content = document.createTextNode("Read/NotRead");
    p3.appendChild(p3Content);

    const submit = document.createElement("button");
    submit.setAttribute("id", "subBtn");
    const btnContent = document.createTextNode("SUBMIT");
    submit.appendChild(btnContent);



    card.appendChild(cardDiv);
    card.appendChild(p1Label);
    card.appendChild(p1Input)
    card.appendChild(p2Label);
    card.appendChild(p2Input)
    card.appendChild(p3);
    card.appendChild(submit)

    //append card to main content
    const latestElement = document.getElementById("bookDisplay");
    latestElement.appendChild(card);

    
});

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'subBtn'){
          //do something
          let temp = {
            "title": document.getElementById("bookTitleInput").value,
            "author": document.getElementById("p1Input").value,
            "pages": document.getElementById("p2Input").value,
            "read": true
        }

        myLibrary.push(temp);
        addBookToLibrary(myLibrary);
        deleteTemp();
        createCard();
     }
 });

 function deleteTemp(){
     var tempCard = document.getElementById("tempCard");
     tempCard.remove();
 }

 function displayCards(){
    for(let i = 0; i < myLibrary.length; i++){
        const newCard = document.createElement("div");
        newCard.classList.add("smallCard");
        newCard.setAttribute("id", "newCard");
        // make div to put header in
        const newCardDiv = document.createElement("div");
        newCardDiv.classList.add("smallCardTitle");
        // make header
        const newCardHeader = document.createElement("h3");
        const newCardHeaderText = document.createTextNode(myLibrary[i].title);
        newCardHeader.appendChild(newCardHeaderText);
        //put header within div

        newCardDiv.appendChild(newCardHeader);

        const p1 = document.createElement("p");
        p1Text = document.createTextNode(myLibrary[i].author);
        p1.appendChild(p1Text);

        const p2 = document.createElement("p");
        p2Text = document.createTextNode(myLibrary[i].pages);
        p2.appendChild(p2Text);

        const p3 = document.createElement("p");
        const p3Content = document.createTextNode("Read/NotRead");
        p3.appendChild(p3Content);

        newCard.appendChild(newCardDiv);
        newCard.appendChild(p1)
        newCard.appendChild(p2)
        newCard.appendChild(p3)

        //append card to main content
        const latestElement = document.getElementById("bookDisplay");
        latestElement.appendChild(newCard);
    }
 }

 function createCard(){
    const newCard = document.createElement("div");
    newCard.classList.add("smallCard");
    newCard.setAttribute("id", "newCard");
    // make div to put header in
    const newCardDiv = document.createElement("div");
    newCardDiv.classList.add("smallCardTitle");
    // make header
    const newCardHeader = document.createElement("h3");
    const newCardHeaderText = document.createTextNode(myLibrary[myLibrary.length-1].title);
    newCardHeader.appendChild(newCardHeaderText);
    //put header within div

    newCardDiv.appendChild(newCardHeader);

    const p1 = document.createElement("p");
    p1Text = document.createTextNode(myLibrary[myLibrary.length-1].author);
    p1.appendChild(p1Text);

    const p2 = document.createElement("p");
    p2Text = document.createTextNode(myLibrary[myLibrary.length-1].pages);
    p2.appendChild(p2Text);

    const p3 = document.createElement("p");
    const p3Content = document.createTextNode("Read/NotRead");
    p3.appendChild(p3Content);

    newCard.appendChild(newCardDiv);
    newCard.appendChild(p1)
    newCard.appendChild(p2)
    newCard.appendChild(p3)

    //append card to main content
    const latestElement = document.getElementById("bookDisplay");
    latestElement.appendChild(newCard);
 }

addBookToLibrary(myLibrary);
displayCards();