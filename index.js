//alert('Hello, we are still working on this page :)');

function adcItem(){
    var item = document.getElementById('idinput').value
    console.log(item)

    var novoElem  = document.createElement('li');
    texto = document.createTextNode(item);
    novoElem.appendChild(texto);
    console.log(novoElem);
    const body = document.body;
    body.appendChild(novoElem);
};

function deleteItem(){

};