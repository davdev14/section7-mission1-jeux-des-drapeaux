const flagHolder = document.getElementById("flag");
const nextBtn = document.getElementById("next-btn");
const message = document.getElementById("message");
const possibility0 = document.getElementById("possibility-0");
const possibility1 = document.getElementById("possibility-1");
const possibility2 = document.getElementById("possibility-2");
const possibility3 = document.getElementById("possibility-3");
const answers = document.querySelector("ul");
const flagContainer = document.querySelector('.flag-container')



function generateRandomFlag() {
  fetch("https://restcountries.com/v3.1/all")
    .then((Response) => Response.json())
    .then((json) => {
      const random = Math.floor(Math.random() * json.length);

      const country = json[random];

      const possibilities = [];

      const countryInfo = {
        flag: country.flags.png,
        name: country.name.common,
        possibilities,
      };

      const countryName = countryInfo.name;

      for (let i = 0; i < 3; i++) {
        const randomAns = Math.floor(Math.random() * json.length);
        const ans = json[randomAns].name.common;
        possibilities.push(ans);
      }
      possibilities.push(countryName);
      possibilities.sort();

      flag.innerHTML = `
      <img src='${countryInfo.flag}'/>
      `;

      possibility0.textContent = countryInfo.possibilities[0];

      possibility1.textContent = countryInfo.possibilities[1];

      possibility2.textContent = countryInfo.possibilities[2];

      possibility3.textContent = countryInfo.possibilities[3];


      answers.addEventListener("click", (target) => {
        if (target.target.innerHTML === countryInfo.name) {
          flagContainer.style.border = "5px solid green"
        }else{
          flagContainer.style.border ="5px solid red"
        }
      });
    });
    return generateRandomFlag
}
generateRandomFlag();
function refresh() {
  location.reload()
}

