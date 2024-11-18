"use strict"
console.clear()




const bottone = document.getElementById("bottone");
console.log(bottone);



bottone.addEventListener("click", generateEmail)
function generateEmail() {
    let ind = 0;
    const intervallo = setInterval(() => {
        for (let i = 0; i < 1; i++) {
            ind++;
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
            if (ind === 10) {
                clearInterval(intervallo)
            }
        }

    }, 600);



}





