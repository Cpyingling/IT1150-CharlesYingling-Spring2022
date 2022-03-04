package game;

public class Player extends Entity {
    protected  int userHealth;
    protected  int userAttack;
    protected  int userDefense;
    protected  int userLevel;
    protected  int userXP;
    protected  String userName;
    protected  String userGender;

    protected int[] currentLevel = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    protected int[] requiredXP = { 0, 5, 10, 15, 20, 25, 30, 35, 40, 45 };
  
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
      for(userXP=0; userXP < requiredXP[].length; userXP++) {      
        userLevel++; 
      }
      userXP += 5;
    }
  
    public void displayXP() {
      System.out.println("You have: " + userXP + "XP");
    }
    public void levelUp() {
      if (requiredXP >= userXP) {
        userLevel = userLevel + 1;
        System.out.println("You are now level: " + userLevel++);
        }
      }

    public void displayName() {
      System.out.println("Your name is: " + userName);
    }
  }