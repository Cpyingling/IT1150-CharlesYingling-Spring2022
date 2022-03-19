//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is " + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 162;
    var john = 135;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}
function multiply() {
    var answer = 25*42;
    alert("Sum = " +answer)
}
function divide() {
    var kids = 12;
    var pencilseach = 48/kids;
    alert("Each child gets " +pencilseach+ " pencils.")
}
function mean() {
    var sumofall = 25+47+98+46+52;
    var mean = sumofall/5;
    alert("Mean= " +mean)
}
function greater() {
    var x = 100;
    var y = 1000; 
    if (x < y) {
        alert("No");
    } else if (x > y) {
        alert("Yes");
    }
}
function greater2() {
    var x = 5*4;
    var y = 20;
    if (y > x) {
        alert("No");
    }
    else if( x == y) {
        alert("5 times 4 is the same as 20");
    } else {
        alert("Yes");
    } 
}