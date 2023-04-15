const addButton = document.getElementById('addButton');
const itensList = document.getElementById('itensList');
let arrOfListItens = [];

const removeParent = event => {
    event.target.parentElement.remove();
}

addButton.onclick = button =>
{
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const formValues = [...formData.entries()];

    const itemName = formValues[0][1];
    const itemQuantity = parseInt(formValues[1][1]);
    const itemValue = parseFloat(formValues[2][1]);
    const sumValues = (itemQuantity*itemValue).toFixed(2);

    arrOfListItens.push([itemName, sumValues]);
    console.log(arrOfListItens);

    itensList.innerHTML +=
    `
        <div class="listItem">
            <span id="itemName">${formValues[0][1]}</span>
            <span id="itemQuantity">${itemQuantity}</span>
            <span id="itemValue">R$ ${sumValues}</span>

            <button onclick="removeParent(event)" id="removeButton">X</button>
        </div>
    `;

    button.preventDefault();
};

/* Lista de compras
5-Salvar valores em lista
6-Exibir na tela soma total dos valores de cada item da lista
7-Permitir ao usuário remover itens da lista
*/