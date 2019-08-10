import {
  LANG_AARAKOCRA,
  LANG_ABYSSAL,
  LANG_AQUAN,
  LANG_AURAN,
  LANG_BLINK_DOG,
  LANG_BULLYWUG,
  LANG_CELESTIAL,
  LANG_COMMON,
  LANG_DEEP_SPEECH,
  LANG_DRACONIC,
  LANG_DRUIDIC,
  LANG_DWARVISH,
  LANG_ELVEN,
  LANG_GIANT,
  LANG_GIANT_EAGLE,
  LANG_GIANT_OWL,
  LANG_GITH,
  LANG_GNOLL,
  LANG_GNOMISH,
  LANG_GOBLIN,
  LANG_GRELL,
  LANG_GRUNG,
  LANG_HALFLING,
  LANG_HOOK_HORROR,
  LANG_ICE_TOAD,
  LANG_IGNAN,
  LANG_INFERNAL,
  LANG_IXITXACHITL,
  LANG_MODRONE,
  LANG_ORC,
  LANG_OTYUGH,
  LANG_PRIMORDIAL,
  LANG_SAHUAGIN,
  LANG_SLAAD,
  LANG_SPHINX,
  LANG_SYLVAN,
  LANG_TERRAN,
  LANG_THAY,
  LANG_THRI_KREEN,
  LANG_THUG_JARGON,
  LANG_TLINCALLI,
  LANG_TROGLODYTE,
  LANG_UMBER_HULK,
  LANG_UNDERCOMMON,
  LANG_VEGEPYGMY,
  LANG_WINTER_WOLF,
  LANG_WORGEN,
  LANG_YETI,
} from '@/constants/dnd/dndLanguageList'

const common = {
  id: LANG_COMMON,
  probabilityWeight: 200,
}

export const withoutCommonLanguageList = [
  {
    id: LANG_PRIMORDIAL,
    probabilityWeight: 20,
  },
  {
    id: LANG_ELVEN,
    probabilityWeight: 30,
  },
  {
    id: LANG_SYLVAN,
    probabilityWeight: 10,
  },
  {
    id: LANG_ABYSSAL,
    probabilityWeight: 10,
  },
  {
    id: LANG_INFERNAL,
    probabilityWeight: 10,
  },
  {
    id: LANG_AQUAN,
    probabilityWeight: 5,
  },
  {
    id: LANG_DWARVISH,
    probabilityWeight: 30,
  },
  {
    id: LANG_GIANT,
    probabilityWeight: 15,
  },
  {
    id: LANG_AURAN,
    probabilityWeight: 5,
  },
  {
    id: LANG_CELESTIAL,
    probabilityWeight: 5,
  },
  {
    id: LANG_DEEP_SPEECH,
    probabilityWeight: 2,
  },
  {
    id: LANG_UNDERCOMMON,
    probabilityWeight: 5,
  },
  {
    id: LANG_DRACONIC,
    probabilityWeight: 10,
  },
  {
    id: LANG_DRUIDIC,
    probabilityWeight: 2,
  },
  {
    id: LANG_GNOMISH,
    probabilityWeight: 5,
  },
  {
    id: LANG_GOBLIN,
    probabilityWeight: 5,
  },
  {
    id: LANG_GNOLL,
    probabilityWeight: 2,
  },
  {
    id: LANG_HALFLING,
    probabilityWeight: 5,
  },
  {
    id: LANG_IGNAN,
    probabilityWeight: 2,
  },
  {
    id: LANG_ORC,
    probabilityWeight: 5,
  },
  {
    id: LANG_TERRAN,
    probabilityWeight: 2,
  },
  {
    id: LANG_THUG_JARGON,
    probabilityWeight: 2,
  },
  {
    id: LANG_UMBER_HULK,
    probabilityWeight: 1,
  },
  {
    id: LANG_SAHUAGIN,
    probabilityWeight: 2,
  },
  {
    id: LANG_VEGEPYGMY,
    probabilityWeight: 1,
  },
  {
    id: LANG_WORGEN,
    probabilityWeight: 1,
  },
  {
    id: LANG_GIANT_OWL,
    probabilityWeight: 1,
  },
  {
    id: LANG_GIANT_EAGLE,
    probabilityWeight: 1,
  },
  {
    id: LANG_SPHINX,
    probabilityWeight: 2,
  },
  {
    id: LANG_GITH,
    probabilityWeight: 5,
  },
  {
    id: LANG_GRELL,
    probabilityWeight: 1,
  },
  {
    id: LANG_GRUNG,
    probabilityWeight: 2,
  },
  {
    id: LANG_MODRONE,
    probabilityWeight: 1,
  },
  {
    id: LANG_BULLYWUG,
    probabilityWeight: 1,
  },
  {
    id: LANG_SLAAD,
    probabilityWeight: 1,
  },
  {
    id: LANG_YETI,
    probabilityWeight: 1,
  },
  {
    id: LANG_HOOK_HORROR,
    probabilityWeight: 1,
  },
  {
    id: LANG_ICE_TOAD,
    probabilityWeight: 1,
  },
  {
    id: LANG_BLINK_DOG,
    probabilityWeight: 1,
  },
  {
    id: LANG_OTYUGH,
    probabilityWeight: 1,
  },
  {
    id: LANG_WINTER_WOLF,
    probabilityWeight: 1,
  },
  {
    id: LANG_THAY,
    probabilityWeight: 5,
  },
  {
    id: LANG_TLINCALLI,
    probabilityWeight: 1,
  },
  {
    id: LANG_THRI_KREEN,
    probabilityWeight: 2,
  },
  {
    id: LANG_TROGLODYTE,
    probabilityWeight: 1,
  },
  {
    id: LANG_IXITXACHITL,
    probabilityWeight: 1,
  },
  {
    id: LANG_AARAKOCRA,
    probabilityWeight: 2,
  },
]

export default [
  common,
  ...withoutCommonLanguageList,
]
