
function getUsers(){
    fetch('http://localhost:9000/api/users')
    .then(response => response.json())
    .then(data => console.log(data));
}


function getUser(id){
    fetch(`http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
}
getUsers()
getUser("639bc25a8f79a92a9313b93c")


// function crearNuevoUsuario(users){
//     let attributes = Object.keys(users[0])
//     let newElement = {}

//     for(const index in attributes){
//         newElement[attributes[index]] = prompt(`Ingrese el ${attributes[index]}`)// newElement["codigo"]
//     }
//     arreglo.push(newElement)

//     return arreglo
// }

