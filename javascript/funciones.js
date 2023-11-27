
    







/*Generar cards*/

const cardsContainer = document.getElementById('cards-container');
const filterInput = document.getElementById('filter');
const products = JSON.parse(localStorage.getItem('products'))

    
function GenerarInterfaz(arr){
    
    
    cardsContainer.innerHTML='';

    arr.forEach(product => {
        cardsContainer.innerHTML += `<article class="card">
        <div class="imgbox">
            <img class="card-img" src="${product.image}">
            <div class="consoles">
                <span class="console">${product.consoles}</span>
                
            </div>
        </div>
        <div class="content">
            <h2 class="card-title">${product.productName}</h2>
            <p class="card-description">${product.description}</p>
        </div>
        
        <div class="card-values">
            <div class="card-date">${FormatDate(product.productDate)}</div>

            <div class="card-price">${product.price}</div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-btn">Ver mas</a>
            <button class="card-btn">Comprar</button>
        </footer>
    </article>`
        
    });
}



GenerarInterfaz(products);

filterInput.addEventListener('keyup', (e)=>{

    const input = e.target.value.toLowerCase();

    const filterArr = products.filter(product =>{
        const nombre = product.productName.toLowerCase();

        if(nombre.includes(input)){
            return true;
        }
        return false;
    })

    GenerarInterfaz(filterArr);
});








