function driverProgram(){
    let contactList = ["Enrique Galeano", "ADA School", "Cristobal Colon", "Elizabeth Marie"];

    let testContact = "Hola Me como Los mocos"

   console.log(addContact(contactList, testContact));
    
}

function addContact(arrayContact,contact){
    let newArrayHodler = arrayContact.push(contact);
    for (let i = 0; i < newArrayHodler.length; i++) {
        console.log(newArrayHodler[i]);
    }
}
