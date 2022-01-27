let numbers = ["GG"];


function verticalChecker(randNumber) {

}

function horizontalChecker(randNumber) {
  return(True)
}

function blockChecker(randNumber) {
  return(True)
}

function numberGenerator() {
  let i = 1;
  while(i<=81){
    let randNumber = Math.floor(Math.random() * 9)+1;
    document.getElementById(i).value = randNumber;
<<<<<<< HEAD
    verticalChecker(randNumber)
    //if()
=======
    //verticalChecker(randNumber);
>>>>>>> b9c754f525bb59fa642a9b7ac40fa0f1a925df2d
    numbers.push(randNumber);
    i++;
  }
  //alert(numbers.length)
  console.log(numbers);
}

numberGenerator()
//document.getElementById('myTextarea').value = '';

//let value3 = Math.floor(Math.random() * 10);

//alert(value3)
