function numberGenerator() {
  let i = 1
  while(i<82){
    let randNumber = Math.floor(Math.random() * 9);
    document.getElementById(i).value = randNumber;
    i++;
  }
}

numberGenerator()
//document.getElementById('myTextarea').value = '';

//let value3 = Math.floor(Math.random() * 10);

//alert(value3)
