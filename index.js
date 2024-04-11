let rockimg = document.getElementById("rockimg");
let paperimg = document.getElementById("paperimg");
let scissorimg = document.getElementById("scissorimg");
let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let user = document.getElementById("usercount");
let comp = document.getElementById("compcount");
let message = document.getElementById("message");
let messagebox = document.getElementById("messagebox");
let resetbtn = document.getElementById("resetbtn");
let trybtn = document.getElementById("trybtn");
let topmessage = document.getElementById("topmessage");
let elements = document.querySelectorAll(".img");

let usernum = "";
let usercount = 0;
let compcount = 0;
topmessage.textContent = "User's Turn";


resetbtn.addEventListener("click", () => {


    user.textContent = 0;
    comp.textContent = 0;
    usercount = 0;
    compcount = 0;
    topmessage.textContent = "User's Turn";
    message.textContent = "Pick your Choice";
    message.style.background = "brown";
    rockimg.style.opacity = 0.5;
    paperimg.style.opacity = 0.5;
    scissorimg.style.opacity = 0.5;
    rock.addEventListener("click", rockbtn);
    paper.addEventListener("click", paperbtn);
    scissor.addEventListener("click", scissorbtn);


})

trybtn.addEventListener("click", () => {

    topmessage.textContent = "User's Turn";
    message.textContent = "Pick your Choice";
    message.style.background = "brown";
    rockimg.style.opacity = 0.5;
    paperimg.style.opacity = 0.5;
    scissorimg.style.opacity = 0.5;
    rock.addEventListener("click", rockbtn);
    paper.addEventListener("click", paperbtn);
    scissor.addEventListener("click", scissorbtn);
});



let disableeventlistener = () => {
    rock.removeEventListener("click", rockbtn);
    paper.removeEventListener("click", paperbtn);
    scissor.removeEventListener("click", scissorbtn);

}

let rockbtn = () => {

    disableeventlistener();
    rockimg.style.opacity = 0.5;
    paperimg.style.opacity = 0.5;
    scissorimg.style.opacity = 0.5;
    usernum = 0;
    topmessage.textContent = "Computer's Turn"



    setTimeout(function logic() {

        disableeventlistener();

        let compnum = Math.floor(Math.random() * 3);
        if (compnum == 1) {




            console.log("comp wins")
            paperimg.style.opacity = 1;




            compcount++;
            comp.textContent = `${compcount}`;
            message.textContent = "COMPUTER WINS";
            message.style.backgroundColor = "red";


        }

        else if (compnum == 2) {
            console.log("user wins");

            scissorimg.style.opacity = 1;





            usercount++;
            user.textContent = `${usercount}`;
            message.textContent = "USER WINS";
            message.style.backgroundColor = "green";




        }

        else {

            console.log("same choice");
            rockimg.style.opacity = 1;


            message.textContent = "SAME CHOICE";
            message.style.backgroundColor = "rgb(153, 102, 0)";
        }
    }, 2000)



}



rock.addEventListener("click", rockbtn)


let paperbtn = () => {


    disableeventlistener();
    rockimg.style.opacity = 0.5;
    paperimg.style.opacity = 0.5;
    scissorimg.style.opacity = 0.5;

    usernum = 1;
    topmessage.textContent = "Computer's Turn"


    setTimeout(function logic2() {

        disableeventlistener();
        let compnum = Math.floor(Math.random() * 3);



        if (compnum == 1) {

            console.log("same choice");
            paperimg.style.opacity = 1;
            message.style.backgroundColor = "rgb(153, 102, 0)";
            message.textContent = "SAME CHOICE";
            
        }

        else if (compnum == 2) {

            console.log("comp wins")
            scissorimg.style.opacity = 1;

            compcount++;
            comp.textContent = `${compcount}`;
            message.textContent = "COMPUTER WINS";
            message.style.backgroundColor = "red";
        }

        else {

            console.log("user wins");
            rockimg.style.opacity = 1;
            usercount++;
            user.textContent = `${usercount}`;
            message.textContent = "USER WINS";
            message.style.backgroundColor = "green";

        }
    }, 2000);


}


paper.addEventListener("click", paperbtn);


let scissorbtn = () => {

    disableeventlistener();
    rockimg.style.opacity = 0.5;
    paperimg.style.opacity = 0.5;
    scissorimg.style.opacity = 0.5;


    usernum = 2;
    topmessage.textContent = "Computer's Turn"


    setTimeout(function logic3() {
        disableeventlistener();
        let compnum = Math.floor(Math.random() * 3);

        if (compnum == 1) {
            console.log("comp wins")
            rockimg.style.opacity = 1;
            compcount++;
            comp.textContent = `${compcount}`;
            message.textContent = "COMPUTER WINS";
            message.style.backgroundColor = "red";

        }

        else if (compnum == 2) {

            scissorimg.style.opacity = 1;
            console.log("same choice");
            message.style.backgroundColor = "rgb(153, 102, 0)";
            message.textContent = "SAME CHOICE";

        }

        else {

            console.log("user wins");
            paperimg.style.opacity = 1;
            usercount++;
            user.textContent = `${usercount}`;
            message.textContent = "USER WINS";
            message.style.backgroundColor = "green";

        }

    }, 2000);

}


scissor.addEventListener("click", scissorbtn);
