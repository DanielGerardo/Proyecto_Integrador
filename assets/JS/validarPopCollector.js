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

