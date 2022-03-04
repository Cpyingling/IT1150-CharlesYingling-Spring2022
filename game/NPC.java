package game;

public class NPC extends Entity {
    // wolf
    protected static String npcName;
    protected static String npcGender;
  
    public NPC(String argnpcName, String argnpcGender) {
      super(argnpcName, argnpcGender);
      NPC.npcName = argnpcName;
      NPC.npcGender = argnpcGender;
    }
    public static void displayName() {
      System.out.println("This is a: " + npcGender + npcName);
    }
  }