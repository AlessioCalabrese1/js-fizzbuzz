let containerElement = document.getElementById("FizzBuzzDom");
let childDiv = document.createElement("div");

for (let index = 1; index <= 100; index++) {
    if ((index % 3) == 0 && (index % 5) != 0) {
        console.log("Fizz");
        childDiv.classList = ("fizzColor col-2 text-center d-flex align-items-center justify-content-center m-3 heightBlock");
        childDiv.innerHTML = "Fizz";
        containerElement.append(childDiv);
        containerElement.innerHTML += "<br>";
    } else if((index % 3) != 0 && (index % 5) == 0){
        console.log("Buzz");
        childDiv.classList = ("buzzColor col-2 text-center d-flex align-items-center justify-content-center m-3 heightBlock");
        childDiv.innerHTML = "Buzz";
        containerElement.append(childDiv);
        containerElement.innerHTML += "<br>";
    } else if((index % 3) == 0 && (index % 5) == 0){
        console.log("FizzBuzz");
        childDiv.classList = ("fizzBuzzColor col-2 text-center d-flex align-items-center justify-content-center m-3 heightBlock");
        childDiv.innerHTML = "FizzBuzz";
        containerElement.append(childDiv);
        containerElement.innerHTML += "<br>";
    } else{
        console.log(index);
        childDiv.classList = ("number col-2 text-center d-flex align-items-center justify-content-center m-3 heightBlock");
        childDiv.innerHTML = index;
        containerElement.append(childDiv);
        containerElement.innerHTML += "<br>";
    }
}