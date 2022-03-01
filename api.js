
const searchText = () => {
    const inputText = document.getElementById('input-field');
    const inputValue = inputText.value
    inputText.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.data))

}


searchText()

const displaySearch = searchResult => {
    console.log(searchResult);

    const parrentDiv = document.getElementById('parent');
    parrentDiv.textContent = ''
    searchResult.forEach(showResult => {
        console.log(showResult);

        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
       
            <div class="card w-75 mx-auto p-3 rounded">
            <img src="${showResult.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center text-info">${showResult.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
             </div>
           
        `

        parrentDiv.appendChild(newDiv)
    });
}










// const numbers = [12, 22, 12, 45, 9, 10, 11, 34, 78, 99, 43];

// for (let number = 0; number < 7; number++) {
//     let element = numbers[number];
//     console.log(element)
// }



// console.log(number.length)