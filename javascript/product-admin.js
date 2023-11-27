let tableProducts = document.getElementById('table-body-products')


let productsStorage = JSON.parse( localStorage.getItem('products'))
console.log(productsStorage)

let formProduct = document.querySelector('.form');
let btn = form.querySelector('.submit');
console.log(btn)


function GenerarTablaProductos(arr){
    tableProducts.innerHTML="";

    arr.forEach(product => {
        tableProducts.innerHTML+= `<tr class="table-body">
        
        <td class="product-name">${product.productName}</td>
        <td class="product-price">${product.price}</td>
        <td class="product-consoles">${product.consoles}</td>
        <td class="product-description">${product.description}</td>
        <td class="user-date">${FormatDate(product.productDate)}</td>
        <td class="user-acciones">
         <button class="action-btn btn-danger" title="Borrar"
          onclick="ProductDelete( '${product.id}' )">
            <i class="fa-solid fa-trash"></i>
         </button>

         <button class="action-btn" title="Editar Usuario"
         onclick="ProductEdit( '${product.id}' )">
          <i class="fa-solid fa-pen-to-square"></i>
         </button>
        </td>
        </tr>`
    });
}
GenerarTablaProductos(productsStorage);

function ProductDelete(id){

    Swal.fire({
        title: "Desea borrar el producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar!"
      }).then(result => {
        if(result.isConfirmed) {
            const index = productsStorage.findIndex(product =>{
                if(product.id === id){
                    return true;
                }
                return false;
        
            })
        
            productsStorage.splice(index,1);
            GenerarTablaProductos(productsStorage);
            Storage(productsStorage)
        }
      })

    /*
    const index = productsStorage.findIndex(product =>{
        if(product.id === id){
            return true;
        }
        return false;

    })

    productsStorage.splice(index,1);
    GenerarTablaProductos(productsStorage);
    Storage(productsStorage);*/
}

function Storage(storage){
    localStorage.setItem('products', JSON.stringify(storage));
}

formProduct.addEventListener('submit', (e)=>{
    e.preventDefault();

    const elements = e.target.elements;

    const product = {
        id:crypto.randomUUID(),
        productName:elements.productName.value,
        price:elements.price.value,
        productDate:new Date(elements.productDate.value + 'T00:00:00-03:00').getTime(),
        description: elements.description.value,
        consoles:elements.consoles.value,
        image:elements.image.value
    }

    if(elements.id.value){
        
        
        const index = productsStorage.findIndex(user =>{
            if(user.id === elements.id.value){
                return true
            }
            return false;
        })
        
        

        

        productsStorage[index]=product;
        Storage(productsStorage);
        Swal.fire({
            title:'Success',
            text:'Los datos se han editado',
            timer:2000,
            icon:'success'
        })
        ResetBtn();
        
        
    }
    else{

    productsStorage.push(product);
    GenerarTablaProductos(productsStorage);
    Storage(productsStorage);

    Swal.fire({
        title:'Success',
        text:'Los datos se han agregado',
        timer:2000,
        icon:'success'
    })
    }

   
})



function ProductEdit(id){

    const product = productsStorage.find(product =>{
        if(product.id === id){
            return true;

        }
        return false;
    })
    btn.innerText='editar'

    const formElement = formProduct.elements;
    
    
    formElement.productName.value = product.productName;
    formElement.price.value = product.priceAsNumber;
    formElement.image.value = product.image;
    formElement.id.value = product.id;
    formElement.consoles.value = product.consoles;
    formElement.productDate.value = DateFormat(product.productDate);
    formElement.description.value = product.description;


}

function ResetBtn(){
    formProduct.reset();
    btn.innerText = "Agregar";
    
}
