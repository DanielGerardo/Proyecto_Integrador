const tabla = document.getElementById("divResumen");
const divNo = document.getElementById("divNo");

function addRenglon(index,item) {
    const renglonHTML = `<tr >    <td > ${index} </td><td> ${item.codigo}</td>    <td>${item.name}</td>    <td>${item.categoria}</td>    <td>${item.cantidad}</td> <td>$ ${item.precio}</td> <td><a href="">Ver más</a></td> </tr>`;

    const tbody= document.getElementById("tbody");
    tbody.innerHTML += renglonHTML;
}

function noDatos(){
    var tabla = document.getElementById("siDatos");
    var divNo = document.getElementById("noDatos");
 
    tabla.style.display = "none";
    divNo.style.display = "block";
}
function siDatos(){
    var tabla = document.getElementById("siDatos");
    var divNo = document.getElementById("noDatos");
 
    divNo.style.display = "none";
    tabla.style.display = "block";
}

function pullitem(){

        fetch("/productos.json")
        .then(res  =>  res.json())
            .then(json =>{
                productos = JSON.stringify(json);
                productos = JSON.parse(productos);
               
            if(productos.length!=0){
                for (let i = 0; i< productos.length; i++) {
                   
                siDatos();
                addRenglon(i+1,productos[i]);
            }}
            else{
                noDatos();
            }
            
        });
}


pullitem();
    