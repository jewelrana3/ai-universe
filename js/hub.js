const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    loadData2(data.data.tools);
}
const loadData2 = phones => {
    // console.log(phones)
    const appContainer = document.getElementById('app-container');
    phones.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
        appContainer.appendChild(card)
    });
}

loadData();