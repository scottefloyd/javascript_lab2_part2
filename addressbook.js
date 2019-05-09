"use strict";

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
    const itemUL = document.querySelector("section.display_contacts");
    itemUL.innerHTML = "";

    let count = 0;

    for (let index in book.contacts) {
      const itemUL = document.querySelector("section.display_contacts");
      const el = document.createElement("div");
      el.setAttribute("index", count);
      el.classList.add("contact_box");
      el.innerHTML = `
      <p>Name: ${book.contacts[index].name}</p>
      <p>Email: ${book.contacts[index].email}</p>
      <p>Phone: ${book.contacts[index].phone}</p>
      <p>Relation: ${book.contacts[index].relation}</p>
      <span class="trash_can"><i class="material-icons trash_can delete-circle">delete-circle</i></span>`;
      itemUL.append(el);
      count++
    }

  }

  addItem(info) {
    this.contacts = [...this.contacts, { ...info }];
    
    document.querySelectorAll("input")[0].value = "";
    document.querySelectorAll("input")[1].value = "";
    document.querySelectorAll("input")[2].value = "";
    document.querySelectorAll("input")[3].value = "";

    book.display();
  }

  deleteContact(index) {
    this.contacts = [...this.contacts.slice(0, index), ...myContacts.slice(index + 1)];
  }
}


const main = document.querySelector("main");

main.addEventListener("click", function (event) {
  if (event.target.classList.contains("add_btn")) {

    let inputElements = document.querySelectorAll("input");
    book.addItem(new Contact(inputElements[0].value, inputElements[1].value, inputElements[2].value, inputElements[3].value));

  } else if (event.target.classList.contains("trash_can")) {
    event.target.parentNode.parentNode.remove();
  }
});

const book = new AddressBook();


book.display();
