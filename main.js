const addButton = document.getElementById('addButton');
const itensList = document.getElementById('itensList');
const totalView = document.getElementById('total'); 
const form = document.getElementById('form');

let total = 0;

addButton.onclick = event =>
{
    const formData = new FormData(form);
    const formValues = [...formData.entries()];

    let itemQuantity = formValues[1][1];
    let itemValue = formValues[2][1];

    if (isNaN(parseFloat(itemValue)) && isNaN(parseInt(itemQuantity)))
    {
        itemValue = 0;
        itemQuantity = 0;
    }
    else if (isNaN(parseFloat(itemValue)))
    {
        itemValue = 0;
        itemQuantity = parseInt(itemQuantity)
    }
    else if (isNaN(parseInt(itemQuantity)))
    {
        itemQuantity = 0;
        itemValue = parseFloat(itemValue);
    }
    else
    {
        itemQuantity = parseInt(itemQuantity);
        itemValue = parseFloat(itemValue);
    }
    
    const sumValues = parseFloat((itemQuantity*itemValue));

    total += sumValues;

    totalView.innerHTML = `R$ ${total.toFixed(2)}`;

    itensList.innerHTML +=
    `
        <div class="listItem">
            <span id="itemName">${formValues[0][1]}</span>
            <span id="itemQuantity">${itemQuantity}</span>
            <span id="itemValue">R$ ${sumValues}</span>
        </div>
    `;

    form.reset();

    event.preventDefault();
};