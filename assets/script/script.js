
const result = document.getElementById('result')
const category = document.getElementById('category')
const num = document.getElementById('num')
const err = document.getElementById('err')
const lnk = 'https://swapi.py4e.com/api/'

const addResult = () => {
    categoryValue = category.value
    numValue = num.value 

    if(!numValue) {
        err.textContent ='выберите номер'
    }
    console.log(`${lnk}${categoryValue}/${numValue}`)
//    try {
        fetch(`${lnk}${categoryValue}/${numValue}`)
        .then((response) => {
        if(!response.ok) {
            throw new Error (response.status)
        }
            return response.json();
        })
        .then((data) => {
//        console.log(data);
//        console.log("1")

            if(categoryValue !== 'films') {
                result.textContent = data.name
//                console.log("2")
            } else {
                result.textContent = data.title
//                console.log("3")
            } 
        })
//    } 
    .catch ((error) => {
        err.textContent = "Ошибка:"+ error.message
        console.log("Ошибка:" + error)
    })
}
//addResult()