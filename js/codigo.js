// Cambio de Dark a Light

const btnCambio = document.querySelector("#cambio-sun");
let x = 0;

btnCambio.addEventListener("click", function(){
    document.body.classList.toggle("light");
    if(x == 0){
        btnCambio.children[0].src = "../images/iconos/lb.png";
        x = 1;
    }else{
        btnCambio.children[0].src = "../images/iconos/sb.png";
        x = 0;
    }
});


// Variables
const addToShoppingCartButtons = document.querySelectorAll('.c-add');

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector('#shoppingContainer');

function addToCartClicked(event){
    const button = event.target;
    const card = button.closest('.card');
    
    const cardTitle = card.querySelector('#title').textContent;
    const cardPrice = card.querySelector('#price').textContent;
    const cardImg = card.querySelector('.prod-img').src;
    console.log('addToCartClicked -> cardPrice', cardTitle, cardPrice, cardImg);

    addItemToShoppingCart(cardTitle, cardPrice, cardImg);
}


function addItemToShoppingCart(){

    const shoppingCartContent = document.createElement("div");
    shoppingCartContent.classList.add("container", "p-0", "mb-3", "col-12");
    shoppingCartItemsContainer.appendChild(shoppingCartContent);

        const ulCartContent = document.createElement("ul");
        ulCartContent.classList.add("list-group");
        shoppingCartContent.appendChild(ulCartContent);

            const liCartItem = document.createElement("li");
            liCartItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "active");
            ulCartContent.appendChild(liCartItem);


                const divCartItem = document.createElement("div");
                divCartItem.classList.add("todo", "d-flex", "align-items-center", "justify-content-center", "color-primary-2", "font-ns", "col-11");
                liCartItem.appendChild(divCartItem);

                    const contImgCartItem = document.createElement("h4");
                    contImgCartItem.classList.add("col-3", "text-center");
                    divCartItem.appendChild(contImgCartItem);

                    const imgCartItem = document.createElement("img");
                    imgCartItem.classList.add("car-img", "align-items-center");
                    contImgCartItem.appendChild(imgCartItem);

                    const titleCartItem = document.createElement("h4");
                    titleCartItem.classList.add("text-center", "mb-0", "col-6");
                    divCartItem.appendChild(titleCartItem);

                    const PriceCartItem = document.createElement("h4");
                    PriceCartItem.classList.add("text-center", "mb-0", "col-3");
                    divCartItem.appendChild(PriceCartItem);

                const crossCartItem = document.createElement("div");
                crossCartItem.classList.add("col-1", "d-flex", "align-items-center", "justify-content-center");
                liCartItem.appendChild(crossCartItem);

                    const crossImgCartItem = document.createElement("img");
                    crossImgCartItem.classList.add("cross");
                    crossCartItem.appendChild(crossImgCartItem);

}

// function complete(e){
    
//     // Elimina el card al dar click en X
//     if(e.target.classList.contains("cross")){    
//         e.target.parentElement.remove();
//         // itemsLeft.textContent = printItemsLeft();
//         console.log();
//     }else{
//         // Añade clase cuando la tarea se complete
//         if(e.target.checked == true){  
//             e.target.parentElement.parentElement.classList.add("tarea-completada");
//             // itemsLeft.textContent = printItemsLeft();
//         }else{
//             e.target.parentElement.parentElement.classList.remove("tarea-completada");
//             // itemsLeft.textContent = printItemsLeft();
//         }
//     }

// }

// function clearItems(e){
//     const tareas = Array.from(contTareas.children);
//     // console.log(tareas);

//     let arrayCompleted = tareas.filter(function(tareaTarjeta){
//         if(tareaTarjeta.classList.contains("tarea-completada")){
//             return tareaTarjeta;
//         }
//     });

//     arrayCompleted.forEach(function(element, i){
//         arrayCompleted[i].remove();
//     });

// }


// function addItemToShoppingCart(cardTitle, cardPrice, cardImg){
//     const shoppingCartRow = document.createElement('div');
//     const shoppingCartContent = `
//         <div class="container p-0 mb-3 col-12">
//             <ul class="list-group" id="contProductos">
//                 <li class="list-group-item d-flex justify-content-between align-items-center active">
//                     <div class="todo d-flex align-items-center justify-content-center color-primary-2 font-ns col-11">
//                         <h4 class="col-3 text-center">
//                             <img src=${cardImg} class="car-img align-items-center"> 
//                         </h4>
//                         <h4 class="text-center mb-0 col-6">${cardTitle}</h4>
//                         <h4 class="text-center mb-0 col-3">${cardPrice}</h4>
//                     </div>
//                     <div id="" class="col-1 d-flex align-items-center justify-content-center">
//                         <img  class="cross" src="images/iconos/x.png" alt="">
//                     </div>
//                 </li>
//             </ul>
//         </div>`;
//     shoppingCartRow.innerHTML = shoppingCartContent;
//     shoppingCartItemsContainer.append(shoppingCartRow);

//         shoppingCartRow.querySelector('.cross').addEventListener('click', removeShoppingCartItem);
// }


// function removeShoppingCartItem(event){
//     const buttonClicked = event.target;
//     buttonClicked.closest('.shoppingCartItem').remove();
// }
