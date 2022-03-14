package game;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Player extends Entity {
    protected  int userHealth;
    protected  int userAttack;
    protected  int userDefense;
    protected  int userLevel;
    protected  String userName;
    protected  String userGender;


    protected int[] currentLevel = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    protected int[] requiredXP = { 0, 5, 10, 15, 20, 25, 30, 35, 40, 45 };
    protected int userXP;
  
    public Player(String argName, String argGender) {
      super(argName, argGender);
      this.userName = argName;
      this.userGender = argGender;
      this.userHealth = 100;
      this.userAttack = 5;
      this.userDefense = 5;
      this.userLevel = 1;
      this.userXP = 0;
    }
  
    public void addXP() {
      userXP = userXP + 5;
      //while (userXP >= requiredXP) {
        userLevel++; 
      System.out.println("You are now level: " + userLevel++);
     // break;  
      //}
    }
  
    public void displayXP() {
      System.out.println("You have: " + userXP + "XP");
    }
    /*public void levelUp() {
      if (requiredXP >= userXP) {
        userLevel = userLevel + 1;
        System.out.println("You are now level: " + userLevel++);
        }
      }*/

    public void displayName() {
      System.out.println("Your name is: " + userName);
    }
  }