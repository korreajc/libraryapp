
let myLibrary = [
   
];

function Book(title, author, pages, read){
    this.title = title; //string
    this.author = author; //string
    this.pages = pages; //int
    this.read = read;   //boolean
}

function addBookToLibrary(objArr){
    for(let i = 0; i < objArr.length; i++){
        console.log(objArr[i].title + ", by " + objArr[i].author + " contains "+ objArr[i].pages + " pages.")
        console.log(objArr[i].read);
    }
}

function modifyStats(){
    //get elements
    const booksRead = document.getElementById("bookStats");
    const pagesRead = document.getElementById("pagesReadStats");

    let counter = myLibrary.length;
    for(let i = 0;i < myLibrary.length;i++){
        if(!myLibrary[i].read){
            counter--;
        }
    }

    let sum = 0;
    for(let i = 0; i < myLibrary.length;i++){
        sum += parseInt(myLibrary[i].pages);
    }

    let totalBooksRead = counter;
    booksRead.innerHTML = totalBooksRead;
    pagesRead.innerHTML = sum;
}



document.getElementById("btn").addEventListener("click", function(){
    const card = document.createElement("div");
    const cardHeaderInput = document.createElement("Label");
    const bookTitleInput = document.createElement("INPUT")
    const p1Label = document.createElement("Label");
    const p1Input = document.createElement("INPUT")
    const p2Label = document.createElement("Label");
    const p2Input = document.createElement("INPUT")
    const readingCheck = document.createElement("div");
    const checkMarkDiv = document.createElement("div");
    const p3Label = document.createElement("Label");
    const p3Input = document.createElement("INPUT");
    const p4Label = document.createElement("Label");
    const p4Input = document.createElement("INPUT");
    const submit = document.createElement("button");
    const btnContent = document.createTextNode("SUBMIT");
    const latestElement = document.getElementById("bookDisplay");

    card.classList.add("smallCardTemp");
    card.setAttribute("id", "tempCard");
    checkMarkDiv.classList.add("radioBtns")
    submit.setAttribute("id", "subBtn");

    cardHeaderInput.innerHTML = "Enter Book Title: "
    cardHeaderInput.htmlFor = "bookTitleInput"
    bookTitleInput.id = "bookTitleInput"
    bookTitleInput.name = "bookTitleInput"
    bookTitleInput.type = "text";
    p1Label.innerHTML = "Enter Book Author: "
    p1Label.htmlFor = "p1Input"
    p1Input.id = "p1Input"
    p1Input.name = "p1Input"
    p1Input.type = "text";
    p2Label.innerHTML = "Enter Page Amount: "
    p2Label.htmlFor = "p2Input"
    p2Input.id = "p2Input"
    p2Input.name = "p2Input"
    p2Input.type = "text";
    readingCheck.innerHTML = "Have you read this book?"
    p3Label.innerHTML = "Yes"
    p3Label.htmlFor = "p3Input"
    p3Input.id = "yes";
    p3Input.name = "p3Input"
    p3Input.type = "radio";
    p3Input.value = "yes"
    p4Label.innerHTML = "No"
    p4Label.htmlFor = "p4Input"
    p4Input.id = "no";
    p4Input.name = "p4Input"
    p4Input.type = "radio";
    p4Input.value = "no"

    checkMarkDiv.appendChild(p3Label)
    checkMarkDiv.appendChild(p3Input)
    checkMarkDiv.appendChild(p4Label)
    checkMarkDiv.appendChild(p4Input)
    submit.appendChild(btnContent);
    card.appendChild(cardHeaderInput);
    card.appendChild(bookTitleInput);
    card.appendChild(p1Label);
    card.appendChild(p1Input)
    card.appendChild(p2Label);
    card.appendChild(p2Input)
    card.appendChild(readingCheck)
    card.appendChild(checkMarkDiv)
    card.appendChild(submit)
    latestElement.appendChild(card);
});

//passes info to array upon submission and creates a new card, updates stats
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'subBtn'){
          var check = false;
          if(document.getElementById('yes').checked) {
            //Yes radio button is checked
            check = true;
          }else if(document.getElementById('no').checked) {
            //No radio button is checked
            check = false;
          }
          let temp = {
            "title": document.getElementById("bookTitleInput").value,
            "author": document.getElementById("p1Input").value,
            "pages": document.getElementById("p2Input").value,
            "read": check,
        }

        myLibrary.push(temp);
        deleteTemp();
        createCard();
        modifyStats();
     }
 });

 //remove card from display and book info from array
 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'removeButton'){
          //do something
          var parentDiv = e.target.parentNode
          var index = parentDiv.getAttribute('data-index')
          myLibrary.splice(index-1, 1);
          parentDiv.remove();
          modifyStats();
     }
 });

 //changes color of read div, updates array
 document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'notReadP'){
        var div = e.target;
        div.innerHTML = "Read"
        div.id = "readP"
        let index = e.target;
        let newIndex = index.parentNode
        let indexTwo = newIndex.getAttribute('data-index')
        myLibrary[indexTwo-1].read = true;
        modifyStats();
     }else if(e.target && e.target.id== 'readP'){
        var div = e.target;
        div.innerHTML = "Not Read"
        div.id = "notReadP"
        let index = e.target;
        let newIndex = index.parentNode
        let indexTwo = parseInt(newIndex.getAttribute('data-index'))
        myLibrary[indexTwo-1].read = false;
        modifyStats();

     }
 })

 function deleteTemp(){
     var tempCard = document.getElementById("tempCard");
     tempCard.remove();
 }

 function readCheck(){
    const bookCheck = "Not Read"
    if(myLibrary[i].read){
        bookCheck = "Read";
    }
    return bookCheck;
 }

 function displayCards(){
    for(let i = 0; i < myLibrary.length; i++){
        const newCard = document.createElement("div");
        const newCardDiv = document.createElement("div");
        const newCardHeader = document.createElement("h3");
        const newCardHeaderText = document.createTextNode(myLibrary[i].title);
        const p1 = document.createElement("p");
        const p1Text = document.createTextNode(myLibrary[i].author);
        const p2 = document.createElement("p");
        const p2Text = document.createTextNode(myLibrary[i].pages);
        var bookCheck = readCheck();
        const p3 = document.createElement("p");
        const p3Content = document.createTextNode(bookCheck);
        const removeButton = document.createElement("button");
        const buttonText = document.createTextNode("Remove");

        newCard.classList.add("smallCard");
        newCard.setAttribute("id", "newCard");
        newCardDiv.classList.add("smallCardTitle");
        removeButton.setAttribute("id", "removeButton")

        newCardHeader.appendChild(newCardHeaderText);
        newCardDiv.appendChild(newCardHeader);
        p1.appendChild(p1Text);
        p2.appendChild(p2Text);
        p3.appendChild(p3Content);
        removeButton.appendChild(buttonText)

        newCard.appendChild(newCardDiv);
        newCard.appendChild(p1)
        newCard.appendChild(p2)
        newCard.appendChild(p3)
        newCard.appendChild(removeButton)
        newCard.setAttribute("data-index", i+1)

        //append card to main content
        const latestElement = document.getElementById("bookDisplay");
        latestElement.appendChild(newCard);
    }
 }

 function readCheckArray(){
    var bookCheck = "Not Read"
    if(myLibrary[myLibrary.length-1].read){
        bookCheck = "Read";
        myLibrary[myLibrary.length-1].read = true;
    }else{
        myLibrary[myLibrary.length-1].read = false;
    }
    return bookCheck;
 }

 //displaying the user inputted card, new
 function createCard(){
    const newCard = document.createElement("div");
    const newCardDiv = document.createElement("div");
    const newCardHeader = document.createElement("h3");
    const newCardHeaderText = document.createTextNode(myLibrary[myLibrary.length-1].title);
    const p1 = document.createElement("p");
    const p1Text = document.createTextNode(myLibrary[myLibrary.length-1].author);
    const p2 = document.createElement("p");
    const p2Text = document.createTextNode(myLibrary[myLibrary.length-1].pages);
    const p3 = document.createElement("p");
    var bookCheck = readCheckArray();
    const p3Content = document.createTextNode(bookCheck);
    const removeButton = document.createElement("button");
    const buttonText = document.createTextNode("Remove");

    newCard.classList.add("smallCard");
    newCard.setAttribute("id", "newCard");
    newCardDiv.classList.add("smallCardTitle");
    p3.setAttribute("id", "readP")
    removeButton.setAttribute("id", "removeButton")
    newCard.setAttribute("data-index", myLibrary.length)

    newCardHeader.appendChild(newCardHeaderText);
    newCardDiv.appendChild(newCardHeader);
    p1.appendChild(p1Text);
    p2.appendChild(p2Text);
    p3.appendChild(p3Content);
    removeButton.appendChild(buttonText)
    newCard.appendChild(newCardDiv);
    newCard.appendChild(p1)
    newCard.appendChild(p2)
    newCard.appendChild(p3)
    newCard.appendChild(removeButton)

    //append card to main content
    const latestElement = document.getElementById("bookDisplay");
    latestElement.appendChild(newCard);
 }

addBookToLibrary(myLibrary);

if(typeof myLibrary !== 'undefined'){
    displayCards();
    console.log(myLibrary.length)
}