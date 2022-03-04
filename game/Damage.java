package game;

/**
 * 
 * @author Jason MacKeigan
 * @date Nov 6, 2014, 1:01:03 PM
 */
public class Damage {

    /**
     * The amount of damage caused by the weapon
     */
    private int amount;
  
    /**
     * The target that this damage will be inflicted upon
     */
    private Entity target;
  
    /**
     * The time that the damage was created
     */
    private long timestamp;
  
    /**
     * Creates a new damage object with a specific amount registered
     * 
     * @param amount the amount of damage
     */
    public Damage(int amount) {
      this.amount = amount;
      this.timestamp = System.currentTimeMillis();
    }
  
    /**
     * Creates a new {@link Damage} object that will be added to the damage queue
     * for the target
     * 
     * @param target     the target being dealt the damage
     * @param amount     the amount of damage being dealt
     * @param ticks      the amount of ticks until the damage is applied
     * @param hitmark    the type of hitmark that is displayed
     * @param combatType the special attack
     */
    public Damage(Entity target, int amount) {
      this(amount);
      this.target = target;
    }
  
    /**
     * Modifies the amount of damage being dealt to the target
     * 
     * @param amount the new amount of damage
     * @return the damage to be dealt
     */
    public int setAmount(int amount) {
      return this.amount = amount;
    }
  
    /**
     * Returns the amount of damage
     * 
     * @return the amount of damage
     */
    public int getAmount() {
      return amount;
    }
  
    /**
     * The target of the damage attack
     * 
     * @return the target
     */
    public Entity getTarget() {
      return target;
    }
  
    /**
     * The time that the damage was created
     * 
     * @return the time the damage was created
     */
    public long getTimestamp() {
      return timestamp;
    }
  
  }
  