import {
  ITEM_ABACUS,
  ITEM_AMULET,
  ITEM_BACKPACK,
  ITEM_BAGPIPES,
  ITEM_BARREL,
  ITEM_BASKET,
  ITEM_BATTLEAXE,
  ITEM_BEDROLL,
  ITEM_BELL,
  ITEM_BIT_AND_BRIDLE,
  ITEM_BLANKET,
  ITEM_BLOCK_AND_TACKLE,
  ITEM_BLOWGUN,
  ITEM_BOOK,
  ITEM_BOTTLE_GLASS,
  ITEM_BREASTPLATE,
  ITEM_BUCKET,
  ITEM_CANOE,
  ITEM_CARRIAGE,
  ITEM_CART,
  ITEM_CASE_CROSSBOW_BOLT,
  ITEM_CASE_MAP_OR_SCROLL,
  ITEM_CHAIN_MAIL,
  ITEM_CHAIN_SHIRT,
  ITEM_CHARIOT,
  ITEM_CHEST,
  ITEM_CLIMBERS_KIT,
  ITEM_CLOTHES_COMMON,
  ITEM_CLOTHES_COSTUME,
  ITEM_CLOTHES_FINE,
  ITEM_CLOTHES_TRAVELERS,
  ITEM_CLUB,
  ITEM_COMPONENT_POUCH,
  ITEM_CROSSBOW_HAND,
  ITEM_CROSSBOW_HEAVY,
  ITEM_CROSSBOW_LIGHT,
  ITEM_CROWBAR,
  ITEM_CRYSTAL,
  ITEM_DAGGER,
  ITEM_DART,
  ITEM_DICE_SET,
  ITEM_DRAGON_CHESS,
  ITEM_DRUM,
  ITEM_DULCIMER,
  ITEM_EMBLEM,
  ITEM_EXOTIC_SADDLE,
  ITEM_FISHING_TACKLE,
  ITEM_FLAIL,
  ITEM_FLASK,
  ITEM_FLUTE,
  ITEM_GALLEY,
  ITEM_GLAIVE,
  ITEM_GRAPPLING_HOOK,
  ITEM_GREATAXE,
  ITEM_GREATCLUB,
  ITEM_GREATSWORD,
  ITEM_HALBERD,
  ITEM_HALF_PLATE,
  ITEM_HAMMER,
  ITEM_HAMMER_SLEDGE,
  ITEM_HANDAXE,
  ITEM_HIDE_ARMOR,
  ITEM_HORN,
  ITEM_HOURGLASS,
  ITEM_HUNTING_TRAP,
  ITEM_INK_PEN,
  ITEM_JAVELIN,
  ITEM_JUG,
  ITEM_KEELBOAT,
  ITEM_LADDER,
  ITEM_LAMP,
  ITEM_LANCE,
  ITEM_LANTERN_BULLSEYE,
  ITEM_LANTERN_HOODED,
  ITEM_LEATHER_ARMOR,
  ITEM_LIGHT_HAMMER,
  ITEM_LOCK,
  ITEM_LONGBOW,
  ITEM_LONGSHIP,
  ITEM_LONGSWORD,
  ITEM_LUTE,
  ITEM_LYRE,
  ITEM_MACE,
  ITEM_MAGNIFYING_GLASS,
  ITEM_MANACLES,
  ITEM_MAUL,
  ITEM_MESS_KIT,
  ITEM_MILITARY_SADDLE,
  ITEM_MIRROR_STEEL,
  ITEM_MORNINGSTAR,
  ITEM_NET,
  ITEM_ORB,
  ITEM_PACK_SADDLE,
  ITEM_PADDED_ARMOR,
  ITEM_PAN_FLUTE,
  ITEM_PIKE,
  ITEM_PITCHER,
  ITEM_PLATE_ARMOR,
  ITEM_PLAYING_CARD_SET,
  ITEM_POLE,
  ITEM_POT_IRON,
  ITEM_POUCH,
  ITEM_QUARTERSTAFF,
  ITEM_QUIVER,
  ITEM_RAIN_CATCHER,
  ITEM_RAM_PORTABLE,
  ITEM_RAPIER,
  ITEM_RELIQUARY,
  ITEM_RIDING_SADDLE,
  ITEM_RING_MAIL,
  ITEM_ROBES,
  ITEM_ROD,
  ITEM_ROWBOAT,
  ITEM_SACK,
  ITEM_SADDLEBAGS,
  ITEM_SAILING_SHIP,
  ITEM_SCALE_MAIL,
  ITEM_SCALE_MERCHANTS,
  ITEM_SCIMITAR,
  ITEM_SHAWM,
  ITEM_SHIELD,
  ITEM_SHORTBOW,
  ITEM_SHORTSWORD,
  ITEM_SHOVEL,
  ITEM_SICKLE,
  ITEM_SIGNAL_WHISTLE,
  ITEM_SIGNET_RING,
  ITEM_SLED,
  ITEM_SLING,
  ITEM_SPEAR,
  ITEM_SPELLBOOK,
  ITEM_SPLINT_ARMOR,
  ITEM_SPRIG_OF_HOLLY,
  ITEM_SPRIG_OF_MISTLETOE,
  ITEM_SPYGLASS,
  ITEM_STAFF,
  ITEM_STUDDED_LEATHER_ARMOR,
  ITEM_TANKARD,
  ITEM_TENT,
  ITEM_THREE_DRAGON_ANTE,
  ITEM_TINDERBOX,
  ITEM_TOTEM,
  ITEM_TRIDENT,
  ITEM_VIAL,
  ITEM_VIOL,
  ITEM_WAGON,
  ITEM_WAND,
  ITEM_WAR_PICK,
  ITEM_WARHAMMER,
  ITEM_WARSHIP,
  ITEM_WATERSKIN,
  ITEM_WHETSTONE,
  ITEM_WHIP,
  ITEM_WOODEN_STAFF,
  ITEM_YEW_SCEPTER,
  ITEM_YEW_WAND,
  ITEM_YKLWA,
} from '@/constants/dnd/dndItemRawList'

export default [
  {
    id: ITEM_PADDED_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_LEATHER_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_STUDDED_LEATHER_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_HIDE_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_CHAIN_SHIRT,
    probabilityWeight: 500,
  },
  {
    id: ITEM_SCALE_MAIL,
    probabilityWeight: 500,
  },
  {
    id: ITEM_BREASTPLATE,
    probabilityWeight: 500,
  },
  {
    id: ITEM_HALF_PLATE,
    probabilityWeight: 500,
  },
  {
    id: ITEM_RING_MAIL,
    probabilityWeight: 500,
  },
  {
    id: ITEM_CHAIN_MAIL,
    probabilityWeight: 500,
  },
  {
    id: ITEM_SPLINT_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_PLATE_ARMOR,
    probabilityWeight: 500,
  },
  {
    id: ITEM_SHIELD,
    probabilityWeight: 500,
  },
  {
    id: ITEM_QUARTERSTAFF,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_MACE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_CLUB,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_DAGGER,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SPEAR,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_LIGHT_HAMMER,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_JAVELIN,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_GREATCLUB,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_HANDAXE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SICKLE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_YKLWA,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_CROSSBOW_LIGHT,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_DART,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SHORTBOW,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SLING,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_HALBERD,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_WAR_PICK,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_WARHAMMER,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_BATTLEAXE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_GLAIVE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_GREATSWORD,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_LANCE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_LONGSWORD,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_WHIP,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SHORTSWORD,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_MAUL,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_MORNINGSTAR,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_PIKE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_RAPIER,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_GREATAXE,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_SCIMITAR,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_TRIDENT,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_FLAIL,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_CROSSBOW_HAND,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_CROSSBOW_HEAVY,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_LONGBOW,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_BLOWGUN,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_NET,
    probabilityWeight: 1000,
  },
  {
    id: ITEM_ABACUS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BLOCK_AND_TACKLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BARREL,
    probabilityWeight: 1,
  },
  {
    id: ITEM_WATERSKIN,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BOTTLE_GLASS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BUCKET,
    probabilityWeight: 1,
  },
  {
    id: ITEM_SCALE_MERCHANTS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_POT_IRON,
    probabilityWeight: 1,
  },
  {
    id: ITEM_PITCHER,
    probabilityWeight: 1,
  },
  {
    id: ITEM_LOCK,
    probabilityWeight: 1,
  },
  {
    id: ITEM_MIRROR_STEEL,
    probabilityWeight: 10,
  },
  {
    id: ITEM_MANACLES,
    probabilityWeight: 10,
  },
  {
    id: ITEM_BOOK,
    probabilityWeight: 1,
  },
  {
    id: ITEM_SPELLBOOK,
    probabilityWeight: 20,
  },
  {
    id: ITEM_BELL,
    probabilityWeight: 1,
  },
  {
    id: ITEM_QUIVER,
    probabilityWeight: 10,
  },
  {
    id: ITEM_SIGNET_RING,
    probabilityWeight: 10,
  },
  {
    id: ITEM_CLIMBERS_KIT,
    probabilityWeight: 1,
  },
  {
    id: ITEM_FISHING_TACKLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_CASE_CROSSBOW_BOLT,
    probabilityWeight: 1,
  },
  {
    id: ITEM_CASE_MAP_OR_SCROLL,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BASKET,
    probabilityWeight: 1,
  },
  {
    id: ITEM_POUCH,
    probabilityWeight: 1,
  },
  {
    id: ITEM_GRAPPLING_HOOK,
    probabilityWeight: 5,
  },
  {
    id: ITEM_JUG,
    probabilityWeight: 1,
  },
  {
    id: ITEM_LAMP,
    probabilityWeight: 10,
  },
  {
    id: ITEM_LADDER,
    probabilityWeight: 1,
  },
  {
    id: ITEM_CROWBAR,
    probabilityWeight: 10,
  },
  {
    id: ITEM_SHOVEL,
    probabilityWeight: 10,
  },
  {
    id: ITEM_WAND,
    probabilityWeight: 10,
  },
  {
    id: ITEM_ROD,
    probabilityWeight: 10,
  },
  {
    id: ITEM_CRYSTAL,
    probabilityWeight: 10,
  },
  {
    id: ITEM_STAFF,
    probabilityWeight: 10,
  },
  {
    id: ITEM_ORB,
    probabilityWeight: 10,
  },
  {
    id: ITEM_SACK,
    probabilityWeight: 1,
  },
  {
    id: ITEM_COMPONENT_POUCH,
    probabilityWeight: 1,
  },
  {
    id: ITEM_HAMMER_SLEDGE,
    probabilityWeight: 10,
  },
  {
    id: ITEM_HAMMER,
    probabilityWeight: 10,
  },
  {
    id: ITEM_CLOTHES_TRAVELERS,
    probabilityWeight: 50,
  },
  {
    id: ITEM_CLOTHES_COSTUME,
    probabilityWeight: 50,
  },
  {
    id: ITEM_CLOTHES_COMMON,
    probabilityWeight: 50,
  },
  {
    id: ITEM_CLOTHES_FINE,
    probabilityWeight: 50,
  },
  {
    id: ITEM_BLANKET,
    probabilityWeight: 1,
  },
  {
    id: ITEM_HUNTING_TRAP,
    probabilityWeight: 1,
  },
  {
    id: ITEM_TENT,
    probabilityWeight: 1,
  },
  {
    id: ITEM_HOURGLASS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_SPYGLASS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BACKPACK,
    probabilityWeight: 1,
  },
  {
    id: ITEM_ROBES,
    probabilityWeight: 50,
  },
  {
    id: ITEM_AMULET,
    probabilityWeight: 10,
  },
  {
    id: ITEM_RELIQUARY,
    probabilityWeight: 10,
  },
  {
    id: ITEM_EMBLEM,
    probabilityWeight: 10,
  },
  {
    id: ITEM_SIGNAL_WHISTLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_BEDROLL,
    probabilityWeight: 1,
  },
  {
    id: ITEM_MESS_KIT,
    probabilityWeight: 1,
  },
  {
    id: ITEM_CHEST,
    probabilityWeight: 5,
  },
  {
    id: ITEM_RAM_PORTABLE,
    probabilityWeight: 5,
  },
  {
    id: ITEM_WHETSTONE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_TINDERBOX,
    probabilityWeight: 1,
  },
  {
    id: ITEM_MAGNIFYING_GLASS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_VIAL,
    probabilityWeight: 1,
  },
  {
    id: ITEM_INK_PEN,
    probabilityWeight: 1,
  },
  {
    id: ITEM_TANKARD,
    probabilityWeight: 1,
  },
  {
    id: ITEM_FLASK,
    probabilityWeight: 1,
  },
  {
    id: ITEM_SPRIG_OF_MISTLETOE,
    probabilityWeight: 100,
  },
  {
    id: ITEM_SPRIG_OF_HOLLY,
    probabilityWeight: 100,
  },
  {
    id: ITEM_YEW_WAND,
    probabilityWeight: 100,
  },
  {
    id: ITEM_YEW_SCEPTER,
    probabilityWeight: 100,
  },
  {
    id: ITEM_WOODEN_STAFF,
    probabilityWeight: 100,
  },
  {
    id: ITEM_TOTEM,
    probabilityWeight: 100,
  },
  {
    id: ITEM_LANTERN_HOODED,
    probabilityWeight: 10,
  },
  {
    id: ITEM_LANTERN_BULLSEYE,
    probabilityWeight: 10,
  },
  {
    id: ITEM_POLE,
    probabilityWeight: 5,
  },
  {
    id: ITEM_DRAGON_CHESS,
    probabilityWeight: 2,
  },
  {
    id: ITEM_PLAYING_CARD_SET,
    probabilityWeight: 2,
  },
  {
    id: ITEM_DICE_SET,
    probabilityWeight: 2,
  },
  {
    id: ITEM_THREE_DRAGON_ANTE,
    probabilityWeight: 2,
  },
  {
    id: ITEM_DRUM,
    probabilityWeight: 50,
  },
  {
    id: ITEM_VIOL,
    probabilityWeight: 50,
  },
  {
    id: ITEM_BAGPIPES,
    probabilityWeight: 50,
  },
  {
    id: ITEM_LYRE,
    probabilityWeight: 50,
  },
  {
    id: ITEM_LUTE,
    probabilityWeight: 50,
  },
  {
    id: ITEM_HORN,
    probabilityWeight: 50,
  },
  {
    id: ITEM_PAN_FLUTE,
    probabilityWeight: 50,
  },
  {
    id: ITEM_FLUTE,
    probabilityWeight: 50,
  },
  {
    id: ITEM_DULCIMER,
    probabilityWeight: 50,
  },
  {
    id: ITEM_SHAWM,
    probabilityWeight: 50,
  },
  {
    id: ITEM_CHARIOT,
    probabilityWeight: 5,
  },
  {
    id: ITEM_CARRIAGE,
    probabilityWeight: 5,
  },
  {
    id: ITEM_SLED,
    probabilityWeight: 5,
  },
  {
    id: ITEM_SADDLEBAGS,
    probabilityWeight: 1,
  },
  {
    id: ITEM_MILITARY_SADDLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_PACK_SADDLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_RIDING_SADDLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_EXOTIC_SADDLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_CART,
    probabilityWeight: 5,
  },
  {
    id: ITEM_BIT_AND_BRIDLE,
    probabilityWeight: 1,
  },
  {
    id: ITEM_WAGON,
    probabilityWeight: 5,
  },
  {
    id: ITEM_WARSHIP,
    probabilityWeight: 5,
  },
  {
    id: ITEM_GALLEY,
    probabilityWeight: 5,
  },
  {
    id: ITEM_KEELBOAT,
    probabilityWeight: 5,
  },
  {
    id: ITEM_LONGSHIP,
    probabilityWeight: 5,
  },
  {
    id: ITEM_SAILING_SHIP,
    probabilityWeight: 5,
  },
  {
    id: ITEM_ROWBOAT,
    probabilityWeight: 5,
  },
  {
    id: ITEM_CANOE,
    probabilityWeight: 5,
  },
  {
    id: ITEM_RAIN_CATCHER,
    probabilityWeight: 1,
  },
]
