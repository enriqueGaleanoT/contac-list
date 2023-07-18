const contactList = [
    {
        id: 0,
        name: "Enrique",
        surname: "Galenao",
        contact: 47289341,
        city: "Tegucigalpa",
        direction: "Col. Hato"
    }
]

function driverAdd(){
    function addContactToList(ID, nombre, apellidos, telefono, ciudad, dirrecion){
        let newContact = {
            id: ID,
            name: nombre,
            surname: apellidos,
            contact: telefono,
            city: ciudad,
            direction: dirrecion
        }
        contactList.push(newContact);
        console.log(newContact);
    }
    console.log("Se agregaron estas personas a la lista");
    addContactToList(1, "Lewis", "Hamilton", 96243, "London", "colonia main street");
    addContactToList(1, "Sergio", "perez", 12345, "tegucigalpa", "colonia las uvas");
    addContactToList(1, "fer", "martinez", 54321, "san pedro sula", "colonia 15 de sept");
}

function driverShow(){
    console.log("Lista: ");
    for (let i = 0; i < contactList.length; i++) {
        console.log(contactList[i]);
    }
    if (contactList.length === 0) {
        console.log("La lista de contactos esta vacia");
    }
}

function popContactFromList(){
    console.log("Se elimino el ultimo elemento de la lista");
    console.log("Elemento:" + contactList.pop());
}


