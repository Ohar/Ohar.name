import { MOVE_TYPE_INFANTRY } from '@/constants/TC/move'
import {
  OPERATIVE_HERETIC_CHORISTER,
  OPERATIVE_HERETIC_DEATH_COMMANDO,
  OPERATIVE_HERETIC_PRIEST,
} from '@/constants/TC/operative_ids'

const operativeCollection = {
  [OPERATIVE_HERETIC_PRIEST]: {
    abilityList: [
      {
        name: 'Puppet Master',
        text: `Select a target model, friend or foe (including the Priest), within 12”. As a RISKY ACTION you can move the model D6” in any one direction, including forcing it to jump/fall down or enter into melee combat with any enemy model (as if it had Charged), or leave Combat (as if it had Retreated, including granting any enemies within range free attacks)`
      },
      {
        name: 'Tough',
        text: `Demonic vitality makes the Heretic Priests very difficult to slay. They are subject to the rules for TOUGH creatures.`
      },
    ],
    armour: 0,
    attackRanged: 2,
    attackMelee: 2,
    baseSize: 32,
    cost: 80,
    equipmentText: `The Heretic Priest can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury.`,
    flavour: `The Leader of a Heretic warband. These fallen priests perform all kinds of unholy magics, summoning petrifying demons and creatures using their Goetic spells. Often pledged to a Demon Lord in Hell, such as Pazuzu or Guison, the Profane Gospels they recite terrify church forces, causing ears to bleed and eyeballs to burst in their sockets.`,
    id: OPERATIVE_HERETIC_PRIEST,
    keyList: ['HERETIC', 'ELITE', 'TOUGH', 'LEADER'],
    limit: 1,
    movementType: MOVE_TYPE_INFANTRY,
    name: 'Heretic Priest',
    speed: 6,
  },
  [OPERATIVE_HERETIC_DEATH_COMMANDO]: {
    abilityList: [
      {
        name: 'Infiltrator',
        text: `The Death Commando can be placed anywhere on the table out of line of sight of any enemies, but at least 8” away from the closest enemy. Deployed after all other models without the Keyword INFILTRATOR.`
      },
      {
        name: 'Stealth Generator',
        text: `Ranged attacks against a Death Commando suffer -1 DICE to all the attack rolls.`
      },
      {
        name: 'Hide',
        text: `As a RISKY ACTION with +1 DICE the Commando can hide if any piece of scenery the model is touching can block line of sight in any direction, even partially, regardless of whether an enemy currently has a clear LOS. If successful, enemies cannot target the Commando with ranged attacks or Charges. Weapons with the Keyword BLAST affect the Commando as normal if it is in the radius of the weapon. This effect ends if the Commando moves from its exact position in any way, it makes a Ranged Attack or an enemy model comes within 1.5” of it.`
      },
    ],
    armour: 0,
    attackRanged: 1,
    attackMelee: 2,
    baseSize: 32,
    cost: 90,
    equipmentText: `The Death Commando can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury. The only ranged weapons they can be equipped with are Silenced Pistols, a Tormentor Chain and Gas Grenades.`,
    flavour: `Silent Killers equipped with stealth generators that hide them from the eyes of God. These terrifying infiltrators have been known to kill entire enemy squads alone`,
    id: OPERATIVE_HERETIC_DEATH_COMMANDO,
    keyList: ['HERETIC', 'ELITE', 'INFILTRATOR'],
    limit: { min: 0, max: 1 },
    movementType: MOVE_TYPE_INFANTRY,
    name: 'Heretic Death Commando',
    speed: 6,
  },
  [OPERATIVE_HERETIC_CHORISTER]: {
    abilityList: [
      {
        name: 'Unholy Hymns',
        text: `All enemy models within 8” of the Chorister suffer an additional -1 DICE for all ACTIONS they attempt.`
      },
      {
        name: 'Unholy Horror',
        text: `The Chorister causes FEAR.`
      },
    ],
    armour: 0,
    attackRanged: -2,
    attackMelee: 2,
    baseSize: 32,
    cost: 65,
    equipmentText: `The Chorister can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury.`,
    flavour: `Suicide is a Mortal Sin, and sacrificing yourself to the glory of Hell is a yet greater affront to God. Some Heretics born with a gift of sonorous voice but little prospects of rising through the ranks but possessing a determination to excel may pursue the dark path of becoming a Chorister.

Such supplicants go to one of the black altars of Heretic abodes at the bottom of the deep inverted pyramid temples dedicated to the greatest of Arch-devils. There they are dressed in the robes of dark devotion, lie on the altar and mutilate themselves to death by carving unholy runes into their flesh. The more wounds they can suffer before perishing, the more pleasing it is said their offering is. The most devout slice their own throats, trying to cut as deep as they can before their miserable life leaves them.

Most such wretches go to their doom in the Lake of Fire, but some are reborn as Choristers after nine days. Their corpses lurch back to their feet, and finish their grisly beheading, and lift their severed heads that begin to sing hymns they have learned in the Inferno. From their self-inflicted wounds spurts cold blood that forms diabolic symbols and changes to match the words of their unholy chorale. They head towards the front lines driven by a call no living can hear and join the Heretic warband of their choosing.

As their severed heads sing their agonising hymns, the minds of their enemies are filled with visions from the Pits of Hell, weakening both the resolve and strength of those unfortunate enough to hear the dire song of a Chorister. Their hymns are often the first thing a fresh recruit experiences on the battlefield, as their unholy voice rolls across the trenches, proclaiming a never-ending prophecy of the final victory of Hell over Heaven`,
    id: OPERATIVE_HERETIC_CHORISTER,
    keyList: ['HERETIC', 'ELITE', 'FEAR'],
    limit: { min: 0, max: 1 },
    movementType: MOVE_TYPE_INFANTRY,
    name: 'Heretic Chorister',
    speed: 6,
  },
}

export default operativeCollection
