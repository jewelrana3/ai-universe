const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    loadData2(data.data.tools);
}
const loadData2 = phones => {
    console.log(phones[0])
    const appContainer = document.getElementById('app-container');
    phones.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card h-100">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="p-0 m-0">1.${element.features[0]}</p>
          <p class="p-0 m-0">2.${element.features[1]}</p>
          <p class="p-0 m-0">3.${element.features[2]}</p>

          <hr>
          <div class="">
                <h5>${element.name}</h5>
                <p class="p-0 m-0">${element.published_in}</p>
                
          </div>
        </div>
      </div>
        `;
        appContainer.appendChild(card)
    });
}

loadData();