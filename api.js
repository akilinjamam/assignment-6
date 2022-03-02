
const searchText = () => {
    const inputText = document.getElementById('input-field');

    const inputValue = inputText.value
    inputText.value = '';


    document.getElementById('error').style.display = 'block'
    document.getElementById('parent').textContent = '';

    document.getElementById('parent-two').textContent = ''
    document.getElementById('parent-two').style.display = 'none'

    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`


    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.data.slice(0, 20)))

}




const displaySearch = searchResult => {
    console.log(searchResult);
    // debugger;

    if (searchResult == '') {
        const mainError = document.getElementById('error')
        const errosMessage = document.createElement('p');
        errosMessage.innerHTML = `<p class="w-50 text-center mx-auto text-white bg-danger rounded">please type correct</p>`;



        mainError.replaceChildren(errosMessage)

    }

    else if (searchResult == searchResult) {
        const parrentDiv = document.getElementById('parent');


        parrentDiv.textContent = '';



        document.getElementById('error').style.display = 'none'

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

}

const displayDetails = details => {
    // console.log(details)

    const detailUrl = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(detailUrl)
        .then(res => res.json())
        .then(data => showDetailInfo(data))
}

const showDetailInfo = detailInfo => {

    console.log(detailInfo.data);

    const parentTwo = document.getElementById('parent-two');
    document.getElementById('parent-two').style.display = 'block'
    const newSingleDiv = document.createElement('div');
    parentTwo.textContent = ''
    newSingleDiv.classList.add('card');
    newSingleDiv.innerHTML = `
    
    <img src="${detailInfo.data.image}" class="card-img-top p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title text-info">${detailInfo.data.name}</h5>
            <p class="card-text text-danger">${detailInfo.data.brand}</p>
            <p class="card-text text-danger">Release Date : ${detailInfo.data.releaseDate ? detailInfo.data.releaseDate : 'not found'}</p>
            <p class="card-text text-dark bold">Main Features :</p>
          
            <p class="card-text text-secondary"> chip set : ${detailInfo.data.mainFeatures.chipSet}</p>
            <p class="card-text text-secondary"> display Size : ${detailInfo.data.mainFeatures.displaySize}</p>
            <p class="card-text text-secondary"> Memory : ${detailInfo.data.mainFeatures.memory}</p>
            <p class="card-text text-secondary"> Sensor : ${detailInfo.data.mainFeatures.sensors[0]}, ${detailInfo.data.mainFeatures.sensors[1]}, ${detailInfo.data.mainFeatures.sensors[2]}, ${detailInfo.data.mainFeatures.sensors[3]}, ${detailInfo.data.mainFeatures.sensors[4]}</p>

            

        </div>
    
    `
    parentTwo.appendChild(newSingleDiv)
}









