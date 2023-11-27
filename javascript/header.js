//Este archivo va en todo el site 

//Traemos al usuario que ingreso sesion
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const header = document.querySelector('.user-menu');
const userName = header.querySelector('.user-name')
const userAction = header.querySelector('.user-action')
const list = document.querySelector('.list');




//Tenemos algun usuario?

if(currentUser){
    //Escribo el nombre del user
    userName.textContent=currentUser.name 
    //El usuario que tenemos es administrador?
    if(currentUser.role === 'ADMIN_ROLE'){
        //Generamos botones de acceso a menus de usuarios y productos
        let li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `<a href ="/pages/user-admin.html" class="link">User-Menu</a>`


        let li2 = document.createElement('li');
        li2.classList.add('nav-item');
        li2.innerHTML = `<a href ="/pages/product-admin.html" class="link">Product-Menu</a>`
        
        list.appendChild(li)
        list.appendChild(li2);
        
        

        //Log btn
        

    }
    const logBtn = document.createElement('button');
        logBtn.classList.add('btn-log');
        logBtn.innerText = 'logout';
        //Accedemos a la propiedad onclick para agregar una funcion
        logBtn.onclick = (e)=>{
            //Removemos el currentUser del localStorage para salir
            localStorage.removeItem("currentUser");
            window.location.href="/index.html";
            
        }
        header.appendChild(logBtn);
    
}
else{
    let loginLink = document.createElement('a');
    loginLink.classList.add('loginLink');
    loginLink.href='/pages/login.html';
    loginLink.innerText='login';
    
    userAction.appendChild(loginLink)
}
