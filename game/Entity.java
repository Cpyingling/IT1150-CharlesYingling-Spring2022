package game;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/*import java.util.Map.Entry;
import java.util.concurrent.TimeUnit;*/

public abstract class Entity{
  protected String entityName;
  protected String entityGender;

  public Entity(String argName, String argGender) {
    entityName=argName;
    entityGender=argGender;
  }
  /**
	 * A mapping of all damage that has been taken by other entities in the game
	 */
	protected Map<Entity, List<Damage>> damageTaken = new HashMap<>();
  	/**
	 * Adds some damage value to the entities list of taken damage
	 * 
	 * @param entity
	 *            the entity that dealt the damage
	 * @param damage
	 *            the total damage taken
	 */
	public void addDamageTaken(Entity entity, int damage) {
		if (entity == null || damage <= 0) {
			return;
		}
		Damage combatDamage = new Damage(damage);
		if (damageTaken.containsKey(entity)) {
			damageTaken.get(entity).add(new Damage(damage));
		} else {
			damageTaken.put(entity, new ArrayList<>(Arrays.asList(combatDamage)));
		}
	}
  	/**
	 * Clears any and all damage that has been taken by the entity
	 */
	public void resetDamageTaken() {
		damageTaken.clear();
	}
  	/**
	 * The visual name of the Entity whether its a player name or npc.
	 * 
	 * @return the name
	 */
	public String getName() {
		return entityName;
	}
}