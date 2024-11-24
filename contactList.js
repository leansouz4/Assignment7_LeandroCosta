let contacts = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
  ];
  
  function displayContacts(list) {
    console.log("Contact List:");
    list.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} - ${contact.phone} - ${contact.email}`);
    });
  }
  
  function addContact(name, phone, email) {
    contacts.push({ name, phone, email });
    console.log(`Added: ${name}`);
  }
  
  function displayFirstAndLast() {
    console.log("First Contact:", contacts[0]);
    console.log("Last Contact:", contacts[contacts.length - 1]);
  }
  
  displayContacts(contacts);
  addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");
  displayContacts(contacts);
  displayFirstAndLast();
  