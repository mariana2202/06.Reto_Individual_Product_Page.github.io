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

// // Variables

// const inputProd = document.querySelector("#agregarProducto");
// const contProd = document.querySelector("#contProductos");
// const addProd = document.querySelector(".card");

// // Funciones

// function insertTarea(e){

//     if(e.keyCode === 13){
    
//         e.preventDefault();

//         if(inputProd.value != ""){
        
//             // Creación li tareas añadidas
//             const addProd = document.createElement("div");
//             addProd.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "active");
//             contProd.appendChild(addProd);

//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("div");
//                 divTarea.classList.add("todo", "d-flex", "align-items-center", "justify-content-center", "color-primary-2", "font-ns", "col-11");
//                 addProd.appendChild(divTarea);

//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("h4");
//                 divTarea.classList.add("col-3", "text-center");
//                 addProd.appendChild(divTarea);

//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("img");
//                 divTarea.classList.add("car-img", "align-items-center");
//                 addProd.appendChild(divTarea);
                
//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("h4");
//                 divTarea.classList.add("text-center", "mb-0", "col-6");
//                 addProd.appendChild(divTarea);
                    
//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("h4");
//                 divTarea.classList.add("text-center", "mb-0", "col-3");
//                 addProd.appendChild(divTarea);
                    
//                 // Creación del div contenedor de texto
//                 const divTarea = document.createElement("div");
//                 divTarea.classList.add("col-1", "d-flex", "align-items-center", "justify-content-center");
//                 addProd.appendChild(divTarea);

//                 // Creación boton X
//                 const btnX = document.createElement("div");
//                 btnX.classList.add("cross");
//                 addProd.appendChild(btnX);

//                 itemsLeft.textContent = printItemsLeft();
        
//         }        
    
//     }

// }