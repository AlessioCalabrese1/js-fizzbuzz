let containerElement = document.getElementById("FizzBuzzDom");


for (let index = 1; index <= 100; index++) {
    if ((index % 3) == 0 && (index % 5) != 0) {
        console.log("Fizz");
        containerElement.append(index);
        containerElement.innerHTML += "<br>";
    } else if((index % 3) != 0 && (index % 5) == 0){
        console.log("Buzz");
        containerElement.append("Buzz");
        containerElement.innerHTML += "<br>";
    } else if((index % 3) == 0 && (index % 5) == 0){
        console.log("FizzBuzz");
        containerElement.append("FizzBuzz");
        containerElement.innerHTML += "<br>";
    } else{
        console.log(index);
        containerElement.append(index);
        containerElement.innerHTML += "<br>";
    }
}