const searchButton = document.querySelector('.search-input img');
const searchInput = document.querySelector('.search-input input');
const itemsContainer = document.querySelector('.results__items');
const checkboxInputs = document.querySelectorAll('.input ul li input');
const sortByInput = document.querySelector('#sorting');
const mockSearchData = [
    {
        UUID: 'e68e9659-a467-4824-a921-1e777940e770',
        icon: 'images/water.png',
        type: 'water',
        name: 'Glaceau Smartwater',
        link: 'https://google.com',
        pay_by_date: '2023-11-22',
    },
    {
        UUID: '5ca5d8f0-6768-4c17-8e0c-96b818eea4f2',
        icon: 'images/water.png',
        type: 'water',
        name: 'Aquafina',
        link: 'https://google.com',
        pay_by_date: '2023-09-12',
    },
    {
        UUID: '5b7b1c1f-ff6c-4f6b-a7bd-cc8cdfe660c1',
        icon: 'images/fire.png',
        type: 'gas',
        name: 'Southern California Gas Company',
        link: 'https://google.com',
        pay_by_date: '2023-08-06',
    },
    {
        UUID: 'b9303f18-66bf-45a7-9ab0-bc1783a052bd',
        icon: 'images/light.png',
        type: 'electricity',
        name: 'State Grid Corporation',
        link: 'https://google.com',
        pay_by_date: '2023-04-17',
    },
]

window.onload = () => {
    renderData(mockSearchData);
}

function renderData(items) {
    itemsContainer.innerHTML = '';
    items.forEach(item => {
        itemsContainer.innerHTML += `
        <div class="results__item">
          <div class="results__item-left">
            <img src="${item.icon}" alt="${item.type} icon">
            <div class="company-name">${item.name}</div>
          </div>
          <div class="results__item-right">
            <img src="images/dollar.png" alt="dollar icon">
            <img src="images/new-tab.png" alt="new tab icon">
            <span>Pay by ${item.pay_by_date}</span>
          </div>
        </div>`;
    });
}

searchButton.addEventListener('click', () => {
    let currentData = mockSearchData;
    if (searchInput.value) {
        const value = searchInput.value.toLowerCase();
        currentData = mockSearchData.filter(item => item.name.toLowerCase().includes(value))
    }
    for (let i = 0; i < checkboxInputs.length; i++) {
        if (checkboxInputs[i].checked) {
            const type = checkboxInputs[i].value;
            currentData = currentData.filter(item => item.type === type);
        }
    }
    if (sortByInput.value === 'latest') {
        currentData.sort(function(a, b) {
            return new Date(a.pay_by_date) - new Date(b.pay_by_date);
        });
    } else if (sortByInput.value === 'newest') {
        currentData.sort(function(a, b) {
            return new Date(b.pay_by_date) - new Date(a.pay_by_date);
        });
    }
    renderData(currentData);
})