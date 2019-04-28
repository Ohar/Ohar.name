const encounterByBiomeList = {
  beach: dice => {
    switch (true) {
      case dice >= 1 && dice <= 7:
        return 'aarakokry'
      case dice === 8:
        return 'artus_simber'
      case dice >= 9 && dice <= 10:
        return 'ekspeditcionnyi_zapas'
      case dice >= 11 && dice <= 12:
        return 'chvinga'
      case dice >= 13 && dice <= 14:
        return 'dinozavry_allozavr'
      case dice >= 15 && dice <= 16:
        return 'dinozavry_dimetrodon'
      case dice >= 17 && dice <= 21:
        return 'dinozavry_pleziozavr'
      case dice >= 22 && dice <= 28:
        return 'dinozavry_pteranodon'
      case dice >= 29 && dice <= 31:
        return 'dinozavry_kettcalkoatl'
      case dice >= 32 && dice <= 37:
        return 'dinozavry_velotciraptor'
      case dice >= 38 && dice <= 40:
        return 'drakon_krasnyi'
      case dice >= 41 && dice <= 42:
        return 'izumrudnyi_anclav'
      case dice >= 43 && dice <= 46:
        return 'issledovateli'
      case dice >= 47 && dice <= 49:
        return 'pylaiushchii_kulak'
      case dice >= 50 && dice <= 52:
        return 'letaiushchie_obeziany'
      case dice >= 53 && dice <= 55:
        return 'letaiushchie_zmei'
      case dice >= 56 && dice <= 57:
        return 'ledianye_velikany'
      case dice >= 58 && dice <= 63:
        return 'gigantskie_iashcheritcy'
      case dice >= 64 && dice <= 67:
        return 'gigantskaia_shchyolkaiushchaia_cherepaha'
      case dice >= 68 && dice <= 71:
        return 'liudoiashchery'
      case dice >= 72 && dice <= 74:
        return 'krasnyi_volshebnik'
      case dice >= 75 && dice <= 84:
        return 'morskaia_karga'
      case dice >= 85 && dice <= 87:
        return 'krovopiitcy'
      case dice >= 88 && dice <= 89:
        return 'roi_letuchikh_myshei'
      case dice >= 90 && dice <= 94:
        return 'tabaksi_ohotneyk'
      case dice >= 95 && dice <= 99:
      case 0:
        return 'vaiia_trekhsotcvetnaia'
    }
  },
  jungle_undead_clear: dice => {
    console.log('jungle_undead_clear', dice);
    switch (true) {
      case dice === 1:
        return 'dvarfy-albinos'
      case dice === 2:
        return 'almirazh'
      case dice >= 3 && dice <= 4:
        return 'chelovekoobraznye_obeziany'
      case dice === 5:
        return 'artus_simber'
      case dice >= 6 && dice <= 7:
        return 'lozy_ubiitcy'
      case dice === 8:
        return 'toporocliuvy'
      case dice === 9:
        return 'babuiny'
      case dice >= 10 && dice <= 11:
        return 'ekspeditcionnyi_zapas'
      case dice >= 12 && dice <= 13:
        return 'kannibaly'
      case dice >= 14 && dice <= 15:
        return 'chvinga'
      case dice === 16:
        return 'tciclopy'
      case dice === 17:
        return 'dinozavry_allozavr'
      case dice === 18:
        return 'dinozavry_ankilozavr'
      case dice === 19:
        return 'dinozavry_brontozavr'
      case dice >= 20 && dice <= 21:
        return 'dinozavry_deinonikh'
      case dice >= 22 && dice <= 23:
        return 'dinozavry_gadrozavr'
      case dice === 24:
        return 'dinozavry_pteranodon'
      case dice >= 25 && dice <= 26:
        return 'dinozavry_stegozavr'
      case dice >= 27 && dice <= 28:
        return 'dinozavry_tritceratops'
      case dice >= 29 && dice <= 30:
        return 'dinozavry_tirannozavr'
      case dice >= 31 && dice <= 35:
        return 'dinozavry_velotciraptor'
      case dice === 36:
        return 'drakon_volshebnyi_drakonchik'
      case dice === 37:
        return 'eblis'
      case dice >= 38 && dice <= 42:
        return 'izumrudnyi_anclav'
      case dice >= 43 && dice <= 44:
        return 'issledovatel_myortvyi'
      case dice === 45:
        return 'issledovateli'
      case dice === 46:
        return 'tcepovaia_ulitka'
      case dice >= 47 && dice <= 50:
        return 'pylaiushchii_kulak'
      case dice === 51:
        return 'letaiushchie_obeziany'
      case dice >= 52 && dice <= 53:
        return 'letaiushchie_zmei'
      case dice >= 54 && dice <= 55:
        return 'ledianye_velikany'
      case dice === 56:
        return 'gigantskie_kabany'
      case dice === 57:
        return 'gigantskie_liagushki'
      case dice === 58:
        return 'gigantskie_iashcheritcy'
      case dice === 59:
        return 'gigantskie_skorpiony'
      case dice === 60:
        return 'gigantskie_osy'
      case dice >= 61 && dice <= 62:
        return 'girallony'
      case dice >= 63 && dice <= 64:
        return 'gobliny'
      case dice >= 65 && dice <= 66:
        return 'grungi'
      case dice === 67:
        return 'dzhakuli'
      case dice === 68:
        return 'kamadany'
      case dice >= 69 && dice <= 70:
        return 'liudoiashchery'
      case dice >= 71 && dice <= 72:
        return 'tuman_bezumnoi_obeziany'
      case dice === 73:
        return 'kapkany'
      case dice === 74:
        return 'nochnaia_karga'
      case dice === 75:
        return 'pteraliudy'
      case dice === 76:
        return 'redkoe_rastenie'
      case dice === 77:
        return 'krasnyi_volshebnik'
      case dice >= 78 && dice <= 79:
        return 'zmeia_udav'
      case dice === 80:
        return 'zmeia_gigantskii_udav'
      case dice === 81:
        return 'zmeia_gigantskaia_iadovitaia'
      case dice === 82:
        return 'pauki'
      case dice >= 83 && dice <= 85:
        return 'statuia_ubtao'
      case dice === 86:
        return 'krovopiitcy'
      case dice === 87:
        return 'su_monstry'
      case dice === 88:
        return 'roi_letuchikh_myshei'
      case dice === 89:
        return 'roi_nasekomykh'
      case dice === 90:
        return 'tabaksi_ohotneyk'
      case dice === 91:
        return 'tigr'
      case dice === 92:
        return 'vaiia_trekhsotcvetnaia'
      case dice === 93:
        return 'vegepigmei'
      case dice === 94:
        return 'vervepr'
      case dice === 95:
        return 'vertigr'
      case dice === 96:
        return 'zimnii_peizazh'
      case dice === 97:
        return 'zhyoltaia_muskusnaia_liana_i_zombi'
      case dice === 98:
        return 'iuan_ti'
      case dice === 99:
        return 'zhentarim'
      case dice === 0:
        return 'zorbo'
    }
  },
  jungle_undead_few: dice => {
    switch (dice) {
      case dice === 1:
      case dice >= 3 && dice <= 4:
        return 'chelovekoobraznye_obeziany'
    }
  },
}

export default encounterByBiomeList
