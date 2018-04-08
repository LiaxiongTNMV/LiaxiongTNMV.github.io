function check(){
     
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    var correctNo = 0;
    
    if(question1 == "Providence"){
    	correctNo++;
    }
    if(question2 == "Hartford"){
    	correctNo++;
    }
    if(question3 == "Albany"){
    	correctNo++;
    }

    var message = ["Great job!" ,"That's just okay", "You really need to do better"];
    var picture = ["pic/great.gif" , "pic/soso.gif" , "pic/whenbad.gif"];

    var range; 
    if(correctNo < 1){
    	range = 2;
    }

    if(correctNo >0 && correctNo < 3){
    	range = 1;
    }

    if(correctNo > 2){
    	range = 0 ;
    }

	document.getElementById("after_submit").style.visibility = "visible"; 
     
    document.getElementById("message").innerHTML = message[range];
	document.getElementById("number_correct").innerHTML = "You got  " +correctNo +"  correct!";
	document.getElementById("picture").src = picture[range];
}