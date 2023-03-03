const loadData = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => loadData2(data.data))
}
const loadData2 = user =>{
    console.log(user)
    
}











loadData();