let myLibrary = [];

// practice preventDefault
const btn = document.getElementById("bTn");
btn.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    const autor = document.querySelector("#autor");
    const title = document.querySelector("#title");
    addBookToLibrary(autor.value, title.value);
  },
  false
);

function Book() {
  // the constructor...
}
function addBookToLibrary(autor, title) {
  // do stuff here

  if (autor === "" || title === "") return;
  const books = document.querySelector(".books");
  const book = document.createElement("div");
  // add to database
  const bookObj = {
    author: autor,
    title: title,
  };
  myLibrary.push(bookObj);
  console.table(myLibrary);
  book.id = myLibrary.length - 1;
  book.className = "card";
  book.innerHTML = `Author: <b>${bookObj.author}
    </b> <br /> Title: <b>${
      bookObj.title
    }</b> <br /> <button class"delete" onclick="deleteBook(${
    myLibrary.length - 1
  })"> X </button>`;
  books.appendChild(book);
}

const deleteBook = (num) => {
  const book = document.getElementById(num);
  book.remove();
  delete myLibrary[num];
  console.table(myLibrary);
};
