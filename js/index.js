const url = 'https://rickandmortyapi.com/api/character/';
const container = document.getElementById('container')

async function CargarDatos(url, container){
    const res  = await fetch(url)
    const data  = await res.json();
    console.log(data)

    function renderData(item, container){
        const element = `
            <div class="item-container">
                <img  src="${item.image}" />
                <h3>${item.name}</h3>
            </div>
        `;
        container.innerHTML += element;
    }

    data.results.forEach(item => {
        renderData(item, container);
    });
}

CargarDatos(url,container);