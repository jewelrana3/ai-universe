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
    // see more side
    const seeMore = document.getElementById('see-more');
    if(phones.length > 6){
        phones = phones.slice(0,12)
        seeMore.classList.remove('d-none')
    }
    else{
        seeMore.classList.add('d-none')
    }
    // toggleSpiner(false);
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

// toggleSpiner(false);

const showDetails = news => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${news}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayShowDetails(data.data))
}

const displayShowDetails = (deatails) => {
    console.log(deatails)
    const { image_link, input_output_examples, description, pricing,features,integrations } = deatails;
    document.getElementById('modal-body').innerHTML = `
    <div class="col " >
        <div class="card h-100">
           <div class="d-flex">
                <div>
                    <img src=${image_link[0] ? image_link[0] : 'not dtails'} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${input_output_examples[0].input ? input_output_examples[0].input:'not a title' }</h5>
                    <p class="card-title p-0 m-0">${input_output_examples[0].output}</p>
                </div>

                <div class="p-4">
                    <h4 class="p-0 m-0">${description}</h4>
                    <div class="d-flex gap-4 p-4">
                        <div> <p class="p-0 m-0 mt-2">1.${pricing[0].price ? pricing[0].price:'not a doller'}</p></div>
                        <div> <p class="p-0 m-0 mt-2">1.${pricing[1].price}</p></div>
                        <div> <p class="p-0 m-0 mt-2">1.${pricing[2].price}</p></div>
                </div>
           
                
                    <div>
                    <div class="d-flex gap-4 ">
                    <div>
                        <h3>features</h3>
                        <p class="p-0 m-0">.${features[1].feature_name}</p class="p-0 m-0">
                        <p class="p-0 m-0">.${features[2].feature_name}</p class="p-0 m-0">
                        <p class="p-0 m-0">.${features[3].feature_name}</p class="p-0 m-0">
                    </div>

                    <div>
                        <h3>integrations</h3>
                        <p class="p-0 m-0">.${integrations[0] ? integrations [0]:'not found'}</p class="p-0 m-0">
                        <p class="p-0 m-0">.${integrations[1]}</p class="p-0 m-0">
                        <p class="p-0 m-0">.${integrations[2]}</p class="p-0 m-0">
                    </div>
                </div>
                    </div>
           
               
           </div>
        </div>
    </div>
        
        `;
};


const proessSearch = (gaba) =>{
    // toggleSpiner(true);
    loadData(gaba)
}
// submit button
document.getElementById('submit').addEventListener('click',function(){
   //start loder
proessSearch(6)

})

// const toggleSpiner = isLoading =>{
//     const loderSection = document.getElementById('loder');
//     if(isLoading){
//         loderSection.classList.remove('d-none')
//  }
//     else{
//         loderSection.classList.add('d-none')
//     }
// }

document.getElementById('btn-show-all').addEventListener('click',function(){
    proessSearch();
   
});


loadData();


