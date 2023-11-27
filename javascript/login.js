/*Obtengo los usuarios del storage*/
const users = JSON.parse(localStorage.getItem('users'));

const form = document.getElementById('login');

form.addEventListener('submit', (e)=>{

   e.preventDefault();
   
   //Obteniendo el mail derechamente con el form
   const email = form.elements.email.value.toLowerCase();
   
   //Obteniendo la password accediendo por el parametro
   const password = e.target.elements.password.value;

   const user = users.find(user =>{
    //Comprobamos que este normalizado tambien en la base de datos
    if(user.email.toLowerCase() === email){
        return true;
    }
    return false;
   })
   
   /*Chequeamos que exista el usuario*/
   if(!user){
        Swal.fire({
            title:'error',
            icon:'error',
            timer:2000,
            text:'alguno de los datos es incorrecto'
        })
     return;
   }
   
   /*Chequeamos que la password de usuario encontrado anteriormente
   coincida con el input de nuestro login*/

   if(user.password != password){
    Swal.fire({
        title:'error',
        icon:'error',
        timer:2000,
        text:'alguno de los datos es incorrecto'
    })
    return;
   }
   
   /*Eliminamos password con el delete(propiedad de objetos)*/
   delete user.password;

   localStorage.setItem('currentUser', JSON.stringify(user));
   
   Swal.fire({
    icon:'success',
    title:'Login correcto',
    text:'Siendo redireccionado'
    
   });

   //Redireccionamos a home, usamos un timer para simular el delay de la pagina
   setTimeout(()=>{
    
    //Usamos el objeto window para redireccionar al usuario
    window.location.href='/index.html'
   },2500)

   

})