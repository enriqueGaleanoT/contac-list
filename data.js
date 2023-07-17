function driverProgram(){
    let contactList = ["Enrique Galeano", "ADA School", "Cristobal Colon", "Elizabeth Marie"];
    console.log("1. Lista original:"+ contactList);

    let addContacts = "Carlos Jose" 
    
    console.log("2. Lista con un contacto nuevo: ");
    addContactToList(contactList, addContacts); 

    console.log("3. Elemento removido de la lista: ");
    popContactFromList(contactList);

    printArray(contactList);
}

function addContactToList(arrayContacts, contact){
    arrayContacts.push(contact);
    for (let i = 0; i < arrayContacts.length; i++) {
        console.log(arrayContacts[i]);
    }
}

function popContactFromList(arrayContacts){
    console.log("Elemento:" + arrayContacts.pop());

}

function printArray(arrayContacts){
    console.log("4. Lista Nueva: "+arrayContacts);
}
