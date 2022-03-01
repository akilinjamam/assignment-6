
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
                <h6  class="card-title text-center text-danger">${showResult.brand}</h6>
                <div class="d-grid gap-2 col-6 mx-auto">
                <button onclick="displayDetails('${showResult.slug}')" class="btn btn-primary" type="button">Details</button>
              </div>
             </div>
           
        `

        parrentDiv.appendChild(newDiv)
    });
}

const displayDetails = details => {
    // console.log(details)

    const detailUrl = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(detailUrl)
        .then(res => res.json())
        .then(data => console.log(data))
}











// const numbers = [12, 22, 12, 45, 9, 10, 11, 34, 78, 99, 43];

// for (let number = 0; number < 7; number++) {
//     let element = numbers[number];
//     console.log(element)
// }



// console.log(number.length)