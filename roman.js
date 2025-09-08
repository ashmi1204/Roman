let res = document.getElementById("output");
function convert(){
  let valid = true;
  let num = document.getElementById("number");
  if(num.value===""){
    valid = false;
    res.textContent= "Please enter a valid number";
  }
  else if(parseInt(num.value)<1){
    res.textContent = "Please enter a number greater than or equal to 1";
    valid = false;
  }
  else if(parseInt(num.value)>3999){
    res.textContent = "Please enter a number less than or equal to 3999";
    valid = false;
  }
  if(valid)
  {
    res.textContent = "";
    if(Math.floor(num.value/1000)>0){
      res.textContent += "M".repeat(Math.floor(num.value/1000));
      num.value -= Math.floor(num.value/1000)*1000;
    }
    if(Math.floor(num.value/900)>0){
      res.textContent += "CM"
      num.value -= 900;
    }
    if(Math.floor(num.value/500)>0){
      res.textContent += "D";
      num.value -= 500;
    }
    if(Math.floor(num.value/400)>0){
      res.textContent += "CD";
      num.value -= 400;
    }
    if(Math.floor(num.value/100)>0){
      res.textContent += "C".repeat(Math.floor(num.value/100));
      num.value -= Math.floor(num.value/100)*100;
    }
    if(Math.floor(num.value/90)>0){
      res.textContent += "XC";
      num.value -= 90;
    }
    if(Math.floor(num.value/50)>0){
      res.textContent += "L";
      num.value -= 50;
    }
    if(Math.floor(num.value/40)>0){
      res.textContent += "XL";
      num.value -= 40;
    }
    if(Math.floor(num.value/10)>0){
      res.textContent += "X".repeat(Math.floor(num.value/10));
      num.value -= Math.floor(num.value/10)*10;
    }
        if(Math.floor(num.value/9)>0){
      res.textContent += "IX";
      num.value -= 9;
    }
    if(Math.floor(num.value/5)>0){
      res.textContent += "V";
      num.value -= 5;
    }
    if(Math.floor(num.value/4)>0){
      res.textContent += "IV"
      num.value -= 4;
    }
    if(Math.floor(num.value/1)>0){
      res.textContent += "I".repeat(Math.floor(num.value/1));
      num.value -= Math.floor(num.value/1)*1;
    }

  }
  num.value="";
}