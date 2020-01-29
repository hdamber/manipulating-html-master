document.addEventListener('DOMContentLoaded', function () {
    // create button that gives an alert with a nice message
    let btn = document.createElement("Button");
    btn.innerHTML = "click me";
    document.body.appendChild(btn);

    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert("Hello World!");
    }


    // form with submit button that alerts message
    let someText = document.getElementById("someText")
    formSubmit.addEventListener("click", myFunction2);
    function myFunction2() {
        alert(someText.value);
    }



    //adds background color on hover
    // mouse over
    let div = document.getElementById('div');
    div.onmouseover = function () {
        this.style.backgroundColor = 'lightblue';
    };

    //mouse out 
    div.onmouseout = function () {
        this.style.backgroundColor = 'transparent';

    };


    // change color of paragraph
    div.addEventListener("click", myFunction3);
    function myFunction3() {

        let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966'];
        div.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    }


    //create div and button to span my name
    let button = document.createElement('button');
    let btnTxt = document.createTextNode('Click!');
    button.appendChild(btnTxt);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        let span = document.createElement('span');
        let spanText = document.createTextNode("Hallie ");

        span.appendChild(spanText);
        document.body.appendChild(span);
    })

    
    //list of friends when clicked
    let ul = document.getElementById('ul');
    let list = document.getElementById('list');
    let count = 0
    list.addEventListener('click', function () {

        let friends = ["Brittany", "Mallory", "Rachel", "TJ", "Frank", "Candace", "Chase", "Chris", "Aaron", "Brooke"];

        if (count < friends.length - 1) {

            let li = document.createElement('li');
            li.appendChild(document.createTextNode(friends[count]));
            ul.appendChild(li)
            count++
        }


    }
    )

})