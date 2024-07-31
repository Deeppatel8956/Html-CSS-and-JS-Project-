let data=[
    {id:1,name:"god",email:"dgod@gmail.com"},
    {id:2,name:"dark",email:"dark@gmail.com"}
]

function readAll() {
    localStorage.setItem('object',JSON.stringify(data))
    var tabeldata=document.querySelector('.data_table')

    var object=localStorage.getItem('object')
    var objectdata=JSON.parse(object)
    var element=''

    objectdata.map((record)=>(
        element += `<tr>   
                    <td>${record.name}</td>
                    <td>${record.email}</td>
                    <td><button class='btn btn-primary' onclick='edit(${record.id})'>Edit</button></td>
                    <td><button class='btn btn-danger' onclick='delet(${record.id})'>Delet</button></td>
        </tr>`
    ))
    tabeldata.innerHTML=element
}


// form 
function create() {
    document.querySelector('.create-form').style.display='block'
    document.querySelector('.add_div').style.display='none'
}

// inputfield
function add() {
    var name=document.querySelector('#uname').value;
    var email=document.querySelector('#uemail').value;

    var newobj={id:3,name:name,email:email}
    data.push(newobj)

    document.querySelector('.create-form').style.display='none'
    document.querySelector('.add_div').style.display='block'

    readAll()
}

// edit
function edit(id) {
    // Display the update form
    const updateForm = document.querySelector('.update-form');
    updateForm.style.display = 'block';

    // Find the object with the matching ID
    const obj = data.find(rec => rec.id === id);

    // Update input values
    const nameInput = updateForm.querySelector('.name');
    const emailInput = updateForm.querySelector('.email');
    const  idinput=updateForm.querySelector('.id')
    nameInput.value = obj.name;
    emailInput.value = obj.email;
    idinput.value=obj.id
}

// update
// function update() {
//     var id=parseInt(document.querySelector('.id').value)
//     var name=document.querySelector('.name').value
//     var email=document.querySelector('.email').value

//     var index=data.findIndex(rec =>rec.id === id)
//     data[index]={id,name,email}
    
//     const updateForm = document.querySelector('.update-form');
//     updateForm.style.display = 'none';
//     readAll()
// }
function update() {
    // Retrieve input values
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;

    // Find index of the record with the given id
    var index = data.findIndex(rec => rec.id === id);

    // Check if record with the given id was found
    if (index !== -1) {
        // Update the record
        data[index] = { id, name, email };

        // Hide the update form
        const updateForm = document.querySelector('.update-form');
        updateForm.style.display = 'none';

        // Refresh the data display
        readAll();
    } else {
        console.error('Record not found for id:', id);
    }
}

// delete
function delet(id) {
   data= data.filter(rec =>rec.id !==id)
    readAll()
}

// copilate
// Assuming you have an existing 'data' array
// let data = [
//     { id: 1, name: "god", email: "dgod@gmail.com" },
//     { id: 2, name: "dark", email: "dark@gmail.com" }
// ];

// // Function to add a new data entry
// function addData(name, email) {
//     const newEntry = { id: data.length + 1, name, email };
//     data.push(newEntry);
//     localStorage.setItem('object', JSON.stringify(data));
// }

// // Example usage:
// addData("John Doe", "john@example.com");
// function readAll() {
//     var tabeldata = document.querySelector('.data_table');
//     var object = localStorage.getItem('object');
//     var objectdata = JSON.parse(object);
//     var element = '';

//     objectdata.forEach((record) => {
//         element += `<tr>
//             <td>${record.name}</td>
//             <td>${record.email}</td>
//             <td><button class='btn btn-primary'>Edit</button></td>
//             <td><button class='btn btn-danger'>Delete</button></td>
//         </tr>`;
//     });

//     tabeldata.innerHTML = element;
// }

