//alert('Hello, we are still working on this page :)');

function adcItem() {
    var inputValue = document.getElementById('idinput').value
    var textNode = document.createTextNode(inputValue);

    var newListItem = document.createElement('li');
    newListItem.appendChild(textNode);

    var orderedList = document.getElementById("itemsList");
    orderedList.appendChild(newListItem);
};

function deleteItem() {

};