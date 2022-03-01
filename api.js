
const searchText = () => {
    const inputText = document.getElementById('input-field');
    const inputValue = inputText.value
    inputText.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}


searchText()












// const numbers = [12, 22, 12, 45, 9, 10, 11, 34, 78, 99, 43];

// for (let number = 0; number < 7; number++) {
//     let element = numbers[number];
//     console.log(element)
// }



// console.log(number.length)