"use strict"
console.clear()




const bottone = document.getElementById("bottone");
console.log(bottone);



bottone.addEventListener("click", generateEmail)
function generateEmail() {
    lista.innerHTML = "";
    let ind = 0;
    const intervallo = setInterval(() => {

        ind++;
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(res => {
                let lista = document.getElementById("lista")
                let arrayEmail = [];

                arrayEmail.push(res.data.response);
                console.log(res.data.response);
                for (let i = 0; i < arrayEmail.length; i++) {
                    lista.innerHTML += `<li>${arrayEmail[i]}</li>`
                }
            })
        if (ind === 10) {
            clearInterval(intervallo)
        }


    }, 600);



}





