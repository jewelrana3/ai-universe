// const loadData = async () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`
//     const res = await fetch(url);
//     const data = await res.json();
//     loadData2(data.data.tools);}
const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => loadData2(data.data.tools))
}

const loadData2 = phones => {
    console.log(phones)
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
          <div class="card-footer d-flex justify-content-between">
                <div>
                    <h5>${element.name}</h5>
                    <p class="p-0 m-0">${element.published_in}</p>
                </div>
                 <div class="d-flex justify-content-center align-items-center">
                     <i class=" fas fa-arrow-right"  onclick="showDetails('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                 </div
          </div>
        </div>
      </div>
        `;
        appContainer.appendChild(card)
    });
};
const showDetails = news => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${news}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayShowDetails(data.data))
}

const displayShowDetails = (deatails) => {
    console.log(deatails)
    const { image_link, input_output_examples, features, published_in } = deatails;
    document.getElementById('modal-body').innerHTML = `
    <div class="col" >
        <div class="card h-100 d-flex">
            <div>
                <img src=${image_link[0]} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${input_output_examples[0].input}</h5>
                <p class="card-title p-0 m-0">${input_output_examples[0].output}</p>
            </div>

            <div>
                <p class="p-0 m-0">1.${features[0]}</p>
                <p class="p-0 m-0">2.${features[1]}</p>
                <p class="p-0 m-0">3.${features[2]}</p>
                <div class="card-footer d-flex justify-content-between">
                    <div>
                        <h5>${name}</h5>
                        <p class="p-0 m-0">${published_in}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        `;
};

// document.getElementById('submit').addEventListener('click',function(){
//     const submitText = document.getElementById('submit')
// })


loadData();


