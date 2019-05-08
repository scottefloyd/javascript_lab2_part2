"use strict";

window.onload = function() {

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [
      new Contact("Snoopy", "snoopy@cooldog.com", "111-222-3333", "my dog"),
      new Contact("Porkchop", "porkchop@doug.com", "333-555-9999", "a cool friend")
    ];
  }

  display() {
    //const el = document.createElement("div");
    const itemUL = document.querySelector("section.display_contacts");
    itemUL.innerHTML = "";

    for (let index in book.contacts) {
      const itemUL = document.querySelector("section.display_contacts");
      const el = document.createElement("div");
      el.innerHTML = `
      <p>Name: ${book.contacts[index].name}</p>
      <p>Email: ${book.contacts[index].email}</p>
      <p>Phone: ${book.contacts[index].phone}</p>
      <p>Relation: ${book.contacts[index].relation}</p>
      <button i="${index}" class="add_btn">Delete</button>
      `;
      itemUL.append(el);
    }

  }

  addItem(info) {
    this.contacts.push(info);
  //  console.log(this.contacts);
    book.display();

    //const addItem = (info) => book.contacts = [ ...book.contacts, { ...info } ];

   // console.log(addItem());
    
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
     // console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
    }
  }
}

//const addItem = (newItem) => book.contacts = [ ...book.contacts, { ...newItem } ];






const main = document.querySelector("main");

main.addEventListener("click", function(event) {
  if (event.target.classList.contains("add_btn")) {

    let inputName = document.querySelector("#input_name").value;
    let email = document.querySelector("#input_email").value;
    let phone = document.querySelector("#input_phone").value;
    let relation = document.querySelector("#input_relation").value;

    book.addItem(new Contact(inputName, email, phone, relation));

    // display(itemList[event.target.attributes[0].value]);
    //updateTotal();
  } else if (event.target.classList.contains("trash_can")) {
    removeItem(event.target.attributes[0].value);
    event.target.parentNode.remove();
    //updateTotal();
  }
});


const book = new AddressBook();

// while (true) {
//   let choice = prompt("Add, Delete, Print, or Quit?");
//   if (choice === "Quit") {
//     console.log("Goodbye.");
//     break;
//   } else if (choice === "Print") {
//     book.print();
//   } else if (choice === "Delete") {
//     let deleteChoice = prompt("Delete by index or by name?");
//     if (deleteChoice === "Name") {
//       book.deleteByName(prompt("Enter a name."));
//     } else if (deleteChoice === "Index") {
//       book.deleteAt(prompt("Index to delete?"));
//     }
//   } else if (choice === "Add") {
//     book.add(new Contact(
//       prompt("Enter a name."),
//       prompt("Enter an email."),
//       prompt("Enter a phone number."),
//       prompt("Enter a relation.")
//     ));
//   }
// }

book.display();

console.log(book.contacts);

}