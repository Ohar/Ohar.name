export default ({ weaponName, enchantBonus, actionList }) => actionList.map(
  action => action.name === weaponName
    ? {
      ...action,
      attack: {
        ...action.attack,
        bonus: (action.attack.bonus || 0) + enchantBonus,
        hit: Array.isArray(action.attack.hit)
          ? action.attack.hit.map(
            hit => Array.isArray(hit)
              ? hit.map(
                hitItem => ({
                  ...hitItem,
                  cubeBonus: (hitItem.cubeBonus || 0) + enchantBonus,
                }),
              )
              : {
                ...hit,
                cubeBonus: (hit.cubeBonus || 0) + enchantBonus,
              },
          )
          : {
            ...action.attack.hit,
            cubeBonus: (action.attack.hit.cubeBonus || 0) + enchantBonus,
          },
      },
    }
    : action,
)
