"use strict"
console.clear()

for (let i = 1; i < 11; i++) {
    emailGenerator()
}
emailGenerator()
function emailGenerator() {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(res => {
            let lista = document.getElementById("lista")
            let arrayEmail = [];
            for (let i = 0; i < 1; i++) {
                arrayEmail.push(res.data.response);
                console.log(res.data.response);

                if (arrayEmail.length === 1) {
                    for (let i = 0; i < arrayEmail.length; i++) {
                        lista.innerHTML += `<li>${arrayEmail[i]}</li>`
                    }
                }
            }
        })
}




