


const usersInfo = JSON.parse( localStorage.getItem('users'));

const table = document.getElementById('table-body');
const form = document.getElementById('form');
const btn = form.querySelector('.submit');
const search = document.querySelector('.search');
console.log(search)


document.addEventListener('DOMContentLoaded', (e)=>{
    GenerarUsuarios(usersInfo);
})

function GenerarUsuarios(arr){
    
    table.innerHTML="";

    arr.forEach(user => {
        table.innerHTML += `<tr class="table-body">
        
        <td class="user-name">${user.name}</td>
        <td class="user-email">${user.email}</td>
        <td class="user-location">${user.location}</td>
        <td class="user-age">${user.age}</td>
        <td class="user-date">${FormatDate(user.date)}</td>
        <td class="user-acciones">
         <button class="action-btn btn-danger" title="Borrar"
          onclick="Delete( '${user.id}' )">
            <i class="fa-solid fa-trash"></i>
         </button>

         <button class="action-btn" title="Editar Usuario"
         onclick="Edit( '${user.id}' )">
          <i class="fa-solid fa-pen-to-square"></i>
         </button>
        </td>
        </tr>`
        
    });
}







form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const elements = e.target.elements;
    if(elements.password.value != elements.Rpassword.value){
        Swal.fire({
            title:"Error",
            text:"Las contraseñas no pueden ser distintas",
            icon:'error',
            timer:2000
        });
        return;
    }
    const emailExists = usersInfo.find(user =>{
        if(user.email === elements.email.value){
            return true;
        }
        return false;
    })
    
    if(emailExists && emailExists.id != elements.id.value){
        Swal.fire({
            title:"Error",
            text:"El mail ya se encuentra registrado",
            icon:'error',
            timer:2000
        })
        return;
    }
    
    const id = elements.id.value ? elements.id.value : crypto.randomUUID();
    
    
    
    const user = {
        name:elements.name.value,
        email:elements.email.value,
        password:elements.password.value,
        Rpassword:elements.password.value,
        age:elements.age.value,
        date:new Date(elements.date.value + 'T00:00:00-03:00').getTime(),
        location:elements.location.value,
        id:id,
        
    };

    
    console.log(id)
    if(elements.id.value){
        

        const indice = usersInfo.findIndex(user =>{
            if(user.id === elements.id.value){
                return true;
            }
            return false;
        })

        
        usersInfo[indice] = user;
        UpdateStorage(usersInfo);
        ResetBtn();
        Swal.fire({
            title:'Success',
            text:'Los datos se han editado',
            timer:2000,
            icon:'success'
        })
   
    }
    else{
        usersInfo.push(user);
        GenerarUsuarios(usersInfo);
        UpdateStorage(usersInfo);

        Swal.fire({
            title:'Success',
            text:'Los datos se han agregado',
            timer:2000,
            icon:'success'
        })
        
    }
        
        
    
    
    
})
function Edit(id){
    btn.innerText='Editar';
    const user = usersInfo.find(user =>{
        if(user.id === id){
            return true;
        }
        return false;
    })
    const elements = form.elements;

    form.name.value = user.name;
    form.age.value = user.ageAsNumber;
    form.password.value = user.password;
    form.password.disabled = true;
    form.Rpassword.value = user.password;
    form.Rpassword.disabled=true;
    form.date.value = DateFormat(user.date)
    form.location.value = user.location;
    form.email.value = user.email;
    form.id.value = user.id;
    
    
}

function Delete(id){

    Swal.fire({
        title: "Desea borrar el usuario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar!"
      }).then(result => {
        if(result.isConfirmed) {
            const index = usersInfo.findIndex(user =>{
                if(user.id===id){
                    return true;
                }
                return false;
            })
            usersInfo.splice(index,1);
            GenerarUsuarios(usersInfo);
            UpdateStorage(usersInfo);
        }
      })

    /*
    console.log(id);
    const index = usersInfo.findIndex(user =>{
        if(user.id===id){
            return true;
        }
        return false;
    })
    usersInfo.splice(index,1);
    GenerarUsuarios(usersInfo);
    UpdateStorage(usersInfo);*/
}

function UpdateStorage(storage){
    localStorage.setItem('users', JSON.stringify(storage));
}


search.addEventListener('keyup', (e)=>{
    const input = e.target.value.toLowerCase();

    const filter = usersInfo.filter(user =>{
        if(user.name.toLowerCase().includes(input)){
            return true;
        }
        return false;
    })

    GenerarUsuarios(filter);

})

function ResetBtn(){
    form.reset();
    btn.innerText = "Agregar";
    
}