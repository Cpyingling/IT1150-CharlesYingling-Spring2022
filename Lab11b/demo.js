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
    alert("Difference is" + diff);
}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    //var charlie = 120;
    //var john = 120;
   
    var charlie = prompt("Enter charlie's height");
    var john = prompt("Enter john's height");

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

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop
Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiplesFn()
{
    var x = prompt("Enter the first number");
    CountMultiples(x);
    var y = prompt("Enter the second number");
    CountMultiples(y);
    var z = prompt("Enter the third number");
    CountMultiples(z);
}
function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}
function DisplayTriangleWithNRows()
{
    var num = prompt("Enter the number of rows for your triangle");
    DisplayTriangle(num);
}
function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle()
{
    var num = prompt("Enter the number of rows for your triangle");
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}

function SumOfOdd() {
    var sum=0;
    for (var i=5;i<=150;i++) {
        if (i%2!=0) 
            sum=sum+i;//odd
    }
    return alert("Sum of odd num between 5 & 150 = "+sum);
}

function AssignGrade() {
    var score = prompt("Enter your score");
    var grade = "";
    switch(true) {
        case score < 70:
            grade = "F";
            break;
        case score >= 70 && score <= 79:
            grade = "C";
            break;
        case score >= 80 && score <= 89:
            grade = "B";
            break;
        case score >= 90:
            grade = "A";
            break;
        default:
            grade = "Please input a score.";            
    }
    return alert("Youre grade is " +grade);
}
function FindMultiples(num) {
     num = prompt("Enter a number to display multiples of");
    var Multiples = 0;
    for(var i=1;i<=200;i++)
    {
        if (i % num == 0)
            Multiples++;
            return alert("Multiples= " +Multiples);
    }
}
function DisplayTriangleWithAB(num) {
     num = prompt("Enter the number of rows for your triangle");
    var ARow="";
    var BRow="";
    var totalA=0;
    var totalB=0;
    for (var i=1;i<=num;i++){        
        ARow = ""      ;//Reset strRow
        BRow = "";
        for (var j=1; j<=i;j++){
            ARow = ARow + "A";
            totalA++;  
        }     
        for (var d=1; d<=i;d++){
            BRow = BRow + "B";
            totalB++;
            return totalB;
        }     
        //Now we have a row. Lets display the row
        console.log(ARow+BRow);     
    }
    return totalA;
}
function CountLettersInTriangle() {
    var totalA = DisplayTriangleWithAB.totalA;
    var totalB = DisplayTriangleWithAB.totalA;
    console.log("Total A's= "+ totalA + " Total B's = "+ totalB);
}

