const userStorage = JSON.parse( localStorage.getItem('users'));


const form = document.getElementById('form');


function Storage(storage){
    localStorage.setItem('users', JSON.stringify(storage));
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
    const emailExists = userStorage.find(user =>{
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
        date:new Date(elements.date.value).getTime(),
        location:elements.location.value,
        id:id,
        
    };

    
    console.log(id)
    if(elements.id.value){
        

        const indice = userStorage.findIndex(user =>{
            if(user.id === elements.id.value){
                return true;
            }
            return false;
        })

        
        userStorage[indice] = user;
        Storage(userStorage);
   
    }
    else{
        userStorage.push(user);
        Storage(userStorage);
        Swal.fire({
            title:'Success',
            text:'Los datos se han agregado',
            timer:2000,
            icon:'success'
        })
        
    }
        
        
    
    
    
})