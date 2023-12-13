var arithmetixExample = 5+3;
var assignmentExample = 10;
assignmentExample +=5;
var comparisionExample = 5;
var logicalExample = 7 < 4
var stringExample = "Hello "+"World";
var ternaryExample= (5>3) ? "yes" : "No";

document.getElementById("arithmeticExample").textContent="5+3"+ arithmetixExample;
document.getElementById("assignmentExample").textContent="Initial value: 10, After +=5: "+ assignmentExample;
document.getElementById("comparisionExample").textContent="7 < 4 is "+ comparisionExample;
document.getElementById("logicalExample").textContent="true && false"+ logicalExample;
document.getElementById("stringExample").textContent="hello"+"world="+stringExample;
document.getElementById("ternaryExample").textContent="(5>3) ? Yes or No :" + ternaryExample;

var age=18;
var canVote = (age>=18) ? "yes" : "No";
document.getElementById("conditionalExample").textContent="Can the person vote (age 18)?"+ canVote;


var loopingExampleText="";
for (var i =1; i<=5; i++){
    loopingExampleText += "Iteration "+ i + "<br>";
}
document.getElementById("loopingExample").innerHTML = loopingExampleText;
