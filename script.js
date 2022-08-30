"use strict";
 
document.querySelector("#btn").addEventListener("click",function(){
 
 
let url = "dados.json";
let mulheres = 0;
let mulherIdade = 0;
let pessoas = 0;
let homens = 0;
let mediaMulheres = 0;
let div = document.querySelector("#estatisticas");
let tab = document.querySelector("#tab");
 
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            let usuario = data.results;
            usuario.forEach(function(user){
                if(user.gender == "male" && user.dob.age < 40){
                    homens++;
                    pessoas++
                } else if(user.gender == "female" && user.dob.age < 40){
                    mulheres++
                    pessoas++
                    mulherIdade += user.dob.age;
                }
            })
            console.log(mulheres);
            console.log(mulherIdade);
            mediaMulheres = mulherIdade / mulheres;
            console.log(mediaMulheres);
            div.innerHTML += `
                        <p>A média de idade das mulheres abaixo de 40 anos = ${mediaMulheres}</p><br>
                        <p>A quantidade de pessoas com idade abaixo de 40 anos = ${pessoas}</p><br>
                        <p>A quantidade de homens com idade abaixo de 40 anos = ${homens}</p><br>
                        `;
            tab.innerHTML += `
                        <table>
                        <tr>
                            <th>Nome Completo</th>
                            <th>Gênero</th>
                            <th>Idade</th>
                            <th>Rua/Número</th>
                            <th>Cidade</th>
                            <th>País</th>
                        </tr>
                        </table>
                        `;
            let usuario2 = data.results;
            usuario2.forEach(function(user){
                tab.innerHTML += `
                <table>
                <tr>
                    <td>${user.name.first} ${user.name.last}</td>
                    <td>${user.gender}</td>
                    <td>${user.dob.age}</td>
                    <td>${user.location.street.name}, ${user.location.street.number}</td>
                    <td>${user.location.city}</td>
                    <td>${user.location.country}</td>
                </tr>
                </table>
                `;
            })
        })
})
