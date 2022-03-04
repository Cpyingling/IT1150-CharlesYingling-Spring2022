package game;

class Main {
    public static void main(String[] args) {
      System.out.println("Hello Welcome to my Game");
      Entity p1 = new Player("Charlie", "Male");
      System.out.println(p1.entityGender + " " + p1.entityName);
      ((Player) p1).addXP();
      ((Player) p1).levelUp();
      ((Player) p1).displayXP();
      Entity p2 = new Player("Kaytie", "Female");
      System.out.println(p2.entityGender + " " + p2.entityName);
      ((Player) p2).addXP();
      ((Player) p2).levelUp();
      ((Player) p2).addXP();
      ((Player) p2).levelUp();
      ((Player) p2).displayXP();
      Entity n1 = new NPC("Wolf", "Male");
      System.out.println(n1.entityGender + " " + n1.entityName);
    }
  }