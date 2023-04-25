// first set initail value to 0

let count = 0;
let value = document.querySelector("#value");
let increaseBtn = document.querySelector(".increase");
let btns = document.querySelectorAll(".btn");

console.log(
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const properties = e.currentTarget.classList;
      if (properties.contains("decrease")) {
        count--;
      } else if (properties.contains("increase")) {
        count++;
      } else {
        count = 0;
      };

      if( count > 0 ) {
        value.style.color = "green";
      }else if(count < 0){
        value.style.color = "red";
      }else{
        value.style.color = "black";
      }
      
      value.textContent = count;

    });
  })
);
