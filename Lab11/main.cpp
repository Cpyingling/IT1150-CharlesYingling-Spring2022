/*
Make the following changes to Animal Class
1. Create a protected member named cookies. The feed() method that we will write later, will use this variable.

2. In all constructors, set cookies to 50.

3. Create a method called Speak that takes 1 parameter of type integer (let us call this as x). This method will not return any value.
a) Display "some random animal sound"  message  x times
b) Add validation to set x to 0, if it is less than 0.
c) Set this method to be virtual

4. Create a method called as Feed that takes no parameters and does not return any value.
a) Inside this method, decrease cookies by 1 and write a message "Fed the animal 1 cookie".
b) Set this method to be virtual


Create a new class called Dog and inherit from Animal class.

Write code to do the following:
1. Add 2 private variables breed and size both of type string

2. Add getter and setter for breed. No validation needed.

3. Add getter and setter for size. Valid values are "L", "M" and "S" to denote large, medium and small dogs. Any other value should be ignored and a message should display that the value has been ignored.

4. Add a constructor with no parameters. It should call the base constructor with no parameter. Insdie this constructor, set size to "L" and breed to "Unknown" and cookies to 50.

5. Add a constructor with 3 parameters - weight, height and age. It should call the base constructor with 3 parameter. Insdie this constructor, set size to "L" and breed to "Unknown" and cookies to 50.

6. Create a method called Speak (it should be similar to base class Speak method) and add logic to display "bark" x number of times. x is the input parameter. The function does not return any value.

7. Create a method called Feed (it should be similar to base class Feed method). Add logic to subtract 1 from cookies if size is "S", 2 from cookies if size is "M" and 4 from cookies if size is "L". For any other value of size, display message "Invalid size value. So we cannot determine the number of cookies to feed the dog". 
At the end, display the message "Remaining cookies" and display cookies variable value.

Test all newly updated functionality by creating appropriate objects in main.cpp for both Animal and Dog. 
*/

#include <iostream>

using namespace std;

class Animal {
private:
  int aWeight;
  int aHeight;
  int aAge;
  int aId;
public:
  string colorOfSkin;
  string colorOfEye;


Animal() {//const with no param
  aWeight=0;
  aHeight=0;
  aAge=0;
  aId=-1;
}
Animal(int Weight, int Height, int Age, int Id) {//const with 4 param
  aWeight=Weight;
  aHeight=Height;
  aAge=Age;
  aId=Id;
}
public:
    int getWeight() {
      return aWeight;
    }
    void setWeight(int x) {
      if(x<0){
        cout<<"invalid input for weight '"<<x<<"' ignored\n";
      } else {
      x = aWeight;
    }
  }
      public:
   
    int getHeight() {
      return aHeight;
    }
    void setHeight(int x) {
      if(x<0){
        cout<<"invalid input for height '"<<x<<"' ignored\n";
      } else {
      x = aHeight;
    }
  }
      public:
    int getAge() {
      return aAge;
    }
    void setAge(int a) {
      if(a>0 && a<120){
        a = aAge;
    } else {
        cout<<"invalid input for age '"<<a<<"' ignored\n";
    }
  }
  
void intro() {
  cout<<"Weight: " <<aWeight<< " Height: " <<aHeight<< " Age: " <<aAge<< " Id: " <<aId<<"\n";
  cout<<"Color of skin: " <<colorOfSkin<< "\n"" Color of Eyes: " <<colorOfEye<<"\n";
}
};

int main() {
  cout << "|c++Lab10|Author:Charles Yingling\n";
 Animal a1;//first const with no param     
  a1.colorOfSkin="Tan";
  a1.colorOfEye="Blue";
  a1.intro();
  Animal a2(5,3,1,34);//2nd const with 4 param
  a2.colorOfSkin="White";
  //test cases
  a2.setAge(125);
  a2.setHeight(-5);
  a2.setWeight(-5);
  //end test
  a2.colorOfEye="Brown";
  a2.intro();
}
