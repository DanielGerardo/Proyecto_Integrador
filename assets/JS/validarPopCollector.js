function addItem(item){
    const itemHTML = `<div class="card cardUltimo">
<img
  src="${item.img}"
  class="card-img-top"
  alt="${item.name}"
/>
<div class="card-body text-center">
  <p class="card-text">
    ${item.name}
  </p>
  <button class="btnUltimo"
    ><span>Agregar al carrito</span></button
  >
  <p>$${item.precio}</p>
</div>
</div>`;
    const itemsContainer = document.querySelector(".cardWrapperUltimo");
    itemsContainer.innerHTML += itemHTML;
}


const carga = document.querySelector('.carga');
 const App = document.querySelector('.App');
const body = document.querySelector('body');
setTimeout(() =>{
  body.style.overflowY = 'visible'
  
},3000)

setTimeout(() =>{
  carga.style.display = 'none'
  App.style.opacity = 1;
},3000)
