my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});

//butt.addEventListener("click") 
    //console.log(butt);
    //console.log()
