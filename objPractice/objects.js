
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
    card.classList.add("smallCardTemp");
    card.setAttribute("id", "tempCard");
    // make div to put header in
    // make header
    const cardHeaderInput = document.createElement("Label");
    cardHeaderInput.innerHTML = "Enter Book Title: "
    cardHeaderInput.htmlFor = "bookTitleInput"

    var bookTitleInput = document.createElement("INPUT")
    bookTitleInput.id = "bookTitleInput"
    bookTitleInput.name = "bookTitleInput"
    bookTitleInput.type = "text";
    //put header within div

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

    const readingCheck = document.createElement("div");
    readingCheck.innerHTML = "Have you read this book?"


    const checkMarkDiv = document.createElement("div");
    checkMarkDiv.classList.add("radioBtns")

    const p3Label = document.createElement("Label");
    p3Label.innerHTML = "Yes"
    p3Label.htmlFor = "p3Input"

    const p3Input = document.createElement("INPUT");
    p3Input.id = "yes";
    p3Input.name = "p3Input"
    p3Input.type = "radio";
    p3Input.value = "yes"

    const p4Label = document.createElement("Label");
    p4Label.innerHTML = "No"
    p4Label.htmlFor = "p4Input"

    const p4Input = document.createElement("INPUT");
    p4Input.id = "no";
    p4Input.name = "p4Input"
    p4Input.type = "radio";
    p4Input.value = "no"

    checkMarkDiv.appendChild(p3Label)
    checkMarkDiv.appendChild(p3Input)
    checkMarkDiv.appendChild(p4Label)
    checkMarkDiv.appendChild(p4Input)

    const submit = document.createElement("button");
    submit.setAttribute("id", "subBtn");
    const btnContent = document.createTextNode("SUBMIT");
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

    //append card to main content
    const latestElement = document.getElementById("bookDisplay");
    latestElement.appendChild(card);
});

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'subBtn'){
          //do something
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
        addBookToLibrary(myLibrary);
        deleteTemp();
        createCard();
        modifyStats();

     }
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'removeButton'){
          //do something
          var parentDiv = e.target.parentNode
          var index = parentDiv.getAttribute('data-index')
          myLibrary.splice(index-1, 1);
          parentDiv.remove();
          console.log("------")
          addBookToLibrary(myLibrary);
          modifyStats();
     }
 });


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

        var bookCheck = "Not Read"
        const p3 = document.createElement("p");
        if(myLibrary[i].read){
            bookCheck = "Read";
        }
        const p3Content = document.createTextNode(bookCheck);
        p3.appendChild(p3Content);

        const removeButton = document.createElement("button");
        buttonText = document.createTextNode("Remove");
        removeButton.appendChild(buttonText)
        removeButton.setAttribute("id", "removeButton")

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

 //displaying the user inputted card, new
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
    p3.setAttribute("id", "readP")
    var bookCheck;
    if(myLibrary[myLibrary.length-1].read){
        bookCheck = "Read";
        myLibrary[myLibrary.length-1].read = true;
    }else{
        bookCheck = "Not Read";
        myLibrary[myLibrary.length-1].read = false;
    }
    const p3Content = document.createTextNode(bookCheck);
    p3.appendChild(p3Content);

    const removeButton = document.createElement("button");
    buttonText = document.createTextNode("Remove");
    removeButton.appendChild(buttonText)
    removeButton.setAttribute("id", "removeButton")


    newCard.appendChild(newCardDiv);
    newCard.appendChild(p1)
    newCard.appendChild(p2)
    newCard.appendChild(p3)
    newCard.appendChild(removeButton)

    newCard.setAttribute("data-index", myLibrary.length)


    //append card to main content
    const latestElement = document.getElementById("bookDisplay");
    latestElement.appendChild(newCard);
 }


addBookToLibrary(myLibrary);
if(typeof myLibrary !== 'undefined'){
    displayCards();
    console.log(myLibrary.length)
}