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
        return 'dvarfy_albinos'
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
    switch (true) {
      case dice === 2:
        return 'artus_simber'
      case dice === 66:
        return 'vaiia_trekhsotcvetnaia'
      case dice >= 90 && dice <= 91:
        return 'vegepigmei'
      case dice === 92:
        return 'vervepr'
      case dice === 93:
        return 'vertigr'
      case dice === 29:
        return 'gigantskie_osy'
      case dice === 28:
        return 'gigantskie_iashcheritcy'
      case dice >= 30 && dice <= 31:
        return 'girallony'
      case dice >= 32 && dice <= 33:
        return 'gobliny'
      case dice >= 34 && dice <= 35:
        return 'grungi'
      case dice === 1:
        return 'dvarfy_albinos'
      case dice === 11:
        return 'dinozavry_allozavr'
      case dice === 12:
        return 'dinozavry_ankilozavr'
      case dice === 14:
        return 'dinozavry_gadrozavr'
      case dice === 13:
        return 'dinozavry_deinonikh'
      case dice === 15:
        return 'dinozavry_pteranodon'
      case dice === 16:
        return 'dinozavry_stegozavr'
      case dice === 18:
        return 'dinozavry_tirannozavr'
      case dice === 17:
        return 'dinozavry_tritceratops'
      case dice >= 95 && dice <= 96:
        return 'zhyoltaia_muskusnaia_liana_i_zombi'
      case dice === 99:
        return 'zhentarim'
      case dice === 94:
        return 'zimnii_peizazh'
      case dice === 50:
        return 'zmeia_gigantskaia_iadovitaia '
      case dice === 49:
        return 'zmeia_gigantskii_udav'
      case dice >= 47 && dice <= 48:
        return 'zmeia_udav'
      case dice === 0:
        return 'zorbo'
      case dice >= 19 && dice <= 20:
        return 'izumrudnyi_anclav'
      case dice === 23:
        return 'issledovateli'
      case dice >= 21 && dice <= 22:
        return 'issledovatel_myortvyi`'
      case dice >= 9 && dice <= 10:
        return 'kannibaly'
      case dice >= 40 && dice <= 41:
        return 'kapkany'
      case dice === 46:
        return 'krasnyi_volshebnik'
      case dice >= 56 && dice <= 57:
        return 'krovopiitcy'
      case dice === 27:
        return 'letaiushchie_zmei'
      case dice >= 3 && dice <= 5:
        return 'lozy_ubiitcy'
      case dice >= 81 && dice <= 89:
        return 'nezhit_zombi'
      case dice >= 73 && dice <= 77:
        return 'nezhit_skelety`'
      case dice >= 78 && dice <= 79:
        return 'nezhit_spektry`'
      case dice === 80:
        return 'nezhit_umertvie'
      case dice >= 68 && dice <= 72:
        return 'nezhit_upyri'
      case dice === 42:
        return 'nochnaia_karga'
      case dice >= 51 && dice <= 52:
        return 'pauki'
      case dice >= 43 && dice <= 44:
        return 'pteraliudy`'
      case dice >= 24 && dice <= 26:
        return 'pylaiushchii_kulak'
      case dice === 45:
        return 'redkoe_rastenie'
      case dice >= 60 && dice <= 62:
        return 'roi_letuchikh_myshei`'
      case dice >= 63 && dice <= 65:
        return 'roi_nasekomykh'
      case dice >= 53 && dice <= 55:
        return 'statuia_ubtao'
      case dice >= 58 && dice <= 59:
        return 'su_monstry'
      case dice === 6:
        return 'toporocliuvy`'
      case dice === 67:
        return 'troll'
      case dice >= 36 && dice <= 39:
        return 'tuman_bezumnoi_obeziany'
      case dice >= 7 && dice <= 8:
        return 'ekspeditcionnyi_zapas'
      case dice >= 97 && dice <= 98:
        return 'iuan_ti'
    }
  },
  jungle_undead_many: dice => {
    switch (dice) {
      case 1:
        return 'artus_simber'
      case 50 :
        return 'vaiia_trekhsotcvetnaia'
      case 86:
      case 87:
        return 'vegepigmei'
      case 88:
      case 89:
        return 'vervepr'
      case 90:
      case 91:
        return 'vertigr'
      case 24:
        return 'gigantskie_osy'
      case 6:
        return 'dinozavry_allozavr'
      case 7:
        return 'dinozavry_ankilozavr'
      case 13:
      case 14:
        return 'dinozavry_velotciraptor'
      case 8:
        return 'dinozavry_gadrozavr'
      case 9:
        return 'dinozavry_pteranodon'
      case 10:
        return 'dinozavry_stegozavr'
      case 11:
      case 12:
        return 'dinozavry_tirannozavr'
      case 93:
      case 94:
      case 95:
      case 96:
        return 'zhyoltaia_muskusnaia_liana_i_zombi'
      case 92:
        return 'zimnii_peizazh'
      case 33:
        return 'zmeia_gigantskaia_iadovitaia '
      case 32:
        return 'zmeia_gigantskii_udav'
      case 29:
      case 30:
      case 31:
        return 'zmeia_udav'
      case 99:
      case 0:
        return 'zorbo'
      case 15:
      case 16:
        return 'izumrudnyi_anclav'
      case 21:
        return 'issledovateli'
      case 17:
      case 18:
      case 19:
      case 20:
        return 'issledovatel_myortvyi`'
      case 25:
        return 'kapkany'
      case 28:
        return 'krasnyi_volshebnik'
      case 41:
      case 42:
      case 43:
      case 44:
        return 'krovopiitcy'
      case 2:
        return 'lozy_ubiitcy'
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
        return 'nezhit_zombi'
      case 64:
      case 65:
      case 66:
      case 67:
        return 'nezhit_skelety`'
      case 68:
      case 69:
      case 70:
        return 'nezhit_spektry`'
      case 71:
      case 72:
      case 73:
        return 'nezhit_umertvie'
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
        return 'nezhit_upyri'
      case 34:
      case 35:
      case 36:
        return 'pauki'
      case 26:
        return 'pteraliudy`'
      case 22:
      case 23:
        return 'pylaiushchii_kulak'
      case 27:
        return 'redkoe_rastenie'
      case 46:
        return 'roi_letuchikh_myshei`'
      case 47:
      case 48:
      case 49:
        return 'roi_nasekomykh'
      case 37:
      case 38:
      case 39:
      case 40:
        return 'statuia_ubtao'
      case 45:
        return 'su_monstry'
      case 51:
        return 'troll'
      case 3:
      case 4:
      case 5:
        return 'ekspeditcionnyi_zapas'
      case 97:
      case 98:
        return 'iuan_ti'
    }
  },
  mountain: dice => {
    switch (dice) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        return 'aarakokry'
      case 21:
      case 22:
        return 'babuiny'
      case 98:
      case 99:
      case 0:
        return 'vervepr'
      case 62:
        return 'gigantskie_kabany'
      case 64:
      case 65:
        return 'gigantskie_osy'
      case 63:
        return 'gigantskie_iashcheritcy'
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
        return 'girallony'
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        return 'dvarfy_albinos'
      case 39:
      case 40:
      case 41:
      case 42:
        return 'dinozavry_kettcalkoatl'
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return 'dinozavry_pteranodon'
      case 43:
      case 44:
      case 45:
        return 'drakon_krasnyi'
      case 82:
      case 83:
      case 84:
        return 'zmeia_gigantskaia_iadovitaia '
      case 46:
      case 47:
        return 'izumrudnyi_anclav'
      case 51:
      case 52:
      case 53:
        return 'issledovateli'
      case 48:
      case 49:
      case 50:
        return 'issledovatel_myortvyi`'
      case 81:
        return 'krasnyi_volshebnik'
      case 85:
      case 86:
      case 87:
        return 'krovopiitcy'
      case 60:
      case 61:
        return 'letaiushchie_zmei'
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
        return 'letaiushchie_obeziany`'
      case 71:
      case 72:
      case 73:
        return 'nochnaia_karga'
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80:
        return 'pteraliudy`'
      case 88:
      case 89:
      case 90:
        return 'roi_letuchikh_myshei`'
      case 91:
      case 92:
        return 'tabaksi_ohotneyk'
      case 93:
      case 94:
      case 95:
      case 96:
      case 97:
        return 'troll'
      case 28:
      case 29:
        return 'tciclopy`'
      case 26:
      case 27:
        return 'chvinga'
      case 18:
      case 19:
      case 20:
        return 'chelovekoobraznye_obeziany`'
      case 23:
      case 24:
      case 25:
        return 'ekspeditcionnyi_zapas'
    }
  },
  // river: dice => {
  //   switch (dice) {
  //     case 1:
  //     case 2:
  //     case 3:
  //       return 'aarakokry'
  //     case 4:
  //     case 5:
  //     case 6:
  //     case 7:
  //       return 'aldani'
  //     case 8:
  //     case 9:
  //       return 'artus_simber'
  //     case 61:
  //     case 62:
  //       return 'gigantskaia_shchyolkaiushchaia_cherepaha'
  //     case 59:
  //     case 60:
  //       return 'gigantskie_liagushki'
  //     case :
  //       return 'gigantskie_osy'
  //     case :
  //       return 'gigantskie_skorpiony'
  //     case :
  //       return 'gigantskie_iashcheritcy'
  //     case :
  //       return 'gigantskii_krokodil'
  //     case :
  //       return 'girallony'
  //     case :
  //       return 'gobliny'
  //     case :
  //       return 'grungi'
  //     case :
  //       return 'dvarfy_albinos'
  //     case :
  //       return 'dzhakuli'
  //     case :
  //       return 'dinozavry_allozavr'
  //     case :
  //       return 'dinozavry_ankilozavr'
  //     case :
  //       return 'dinozavry_brontozavr'
  //     case :
  //       return 'dinozavry_velotciraptor'
  //     case :
  //       return 'dinozavry_gadrozavr'
  //     case :
  //       return 'dinozavry_deinonikh'
  //     case :
  //       return 'dinozavry_dimetrodon'
  //     case :
  //       return 'dinozavry_kettcalkoatl'
  //     case :
  //       return 'dinozavry_pleziozavr'
  //     case :
  //       return 'dinozavry_pteranodon'
  //     case :
  //       return 'dinozavry_stegozavr'
  //     case :
  //       return 'dinozavry_tirannozavr'
  //     case :
  //       return 'dinozavry_tritceratops'
  //     case :
  //       return 'drakon_volshebnyi_drakonchik'
  //     case :
  //       return 'drakon_krasnyi'
  //     case :
  //       return 'zhyoltaia_muskusnaia_liana_i_zombi'
  //     case :
  //       return 'zhentarim'
  //     case :
  //       return 'zimnii_peizazh'
  //     case :
  //       return 'zmeia_gigantskaia_iadovitaia '
  //     case :
  //       return 'zmeia_gigantskii_udav'
  //     case :
  //       return 'zmeia_udav'
  //     case :
  //       return 'zorbo'
  //     case :
  //       return 'izumrudnyi_anclav'
  //     case :
  //       return 'issledovateli'
  //     case :
  //       return 'issledovatel_myortvyi`'
  //     case :
  //       return 'kamadany'
  //     case :
  //       return 'kannibaly'
  //     case :
  //       return 'kapkany'
  //     case :
  //       return 'krasnyi_volshebnik'
  //     case :
  //       return 'krovopiitcy'
  //     case :
  //       return 'krokodily'
  //     case :
  //       return 'ledianye_velikany'
  //     case :
  //       return 'letaiushchie_zmei'
  //     case :
  //       return 'letaiushchie_obeziany`'
  //     case :
  //       return 'lozy_ubiitcy'
  //     case :
  //       return 'liudoiashchery`'
  //     case :
  //       return 'magminy`'
  //     case :
  //       return 'mefity`'
  //     case :
  //       return 'morskaia_karga'
  //     case :
  //       return 'nezhit_zombi'
  //     case :
  //       return 'nezhit_skelety`'
  //     case :
  //       return 'nezhit_spektry`'
  //     case :
  //       return 'nezhit_umertvie'
  //     case :
  //       return 'nezhit_upyri'
  //     case :
  //       return 'nochnaia_karga'
  //     case :
  //       return 'ognennye_tritony`'
  //     case :
  //       return 'pauki'
  //     case :
  //       return 'polzaiushchaia_nasyp'
  //     case :
  //       return 'pteraliudy`'
  //     case :
  //       return 'pylaiushchii_kulak'
  //     case :
  //       return 'redkoe_rastenie'
  //     case :
  //       return 'roi_kviperov'
  //     case :
  //       return 'roi_letuchikh_myshei`'
  //     case :
  //       return 'roi_nasekomykh'
  //     case :
  //       return 'salamandra'
  //     case :
  //       return 'statuia_ubtao'
  //     case :
  //       return 'su_monstry'
  //     case :
  //       return 'tabaksi_ohotneyk'
  //     case :
  //       return 'tigr'
  //     case :
  //       return 'toporocliuvy`'
  //     case :
  //       return 'troll'
  //     case :
  //       return 'tuman_bezumnoi_obeziany'
  //     case :
  //       return 'tcepovaia_ulitka'
  //     case :
  //       return 'tciclopy`'
  //     case :
  //       return 'chvinga'
  //     case :
  //       return 'chelovekoobraznye_obeziany`'
  //     case :
  //       return 'eblis'
  //     case :
  //       return 'ekspeditcionnyi_zapas'
  //     case :
  //       return 'iuan_ti'
  //
  //   }
  // },
  // ruin: dice => {
  //   switch (true) {
  //     case dice >= && dice <= :
  //       return 'aarakokry'
  //     case dice >= && dice <= :
  //       return 'aldani'
  //     case dice >= && dice <= :
  //       return 'almirazh'
  //     case dice >= && dice <= :
  //       return 'artus_simber'
  //     case dice >= && dice <= :
  //       return 'babuiny'
  //     case dice >= && dice <= :
  //       return 'vaiia_trekhsotcvetnaia'
  //     case dice >= && dice <= :
  //       return 'vegepigmei'
  //     case dice >= && dice <= :
  //       return 'vervepr'
  //     case dice >= && dice <= :
  //       return 'vertigr'
  //     case dice >= && dice <= :
  //       return 'gigantskaia_shchyolkaiushchaia_cherepaha'
  //     case dice >= && dice <= :
  //       return 'gigantskie_kabany'
  //     case dice >= && dice <= :
  //       return 'gigantskie_liagushki'
  //     case dice >= && dice <= :
  //       return 'gigantskie_osy'
  //     case dice >= && dice <= :
  //       return 'gigantskie_skorpiony'
  //     case dice >= && dice <= :
  //       return 'gigantskie_iashcheritcy'
  //     case dice >= && dice <= :
  //       return 'gigantskii_krokodil'
  //     case dice >= && dice <= :
  //       return 'girallony'
  //     case dice >= && dice <= :
  //       return 'gobliny'
  //     case dice >= && dice <= :
  //       return 'grungi'
  //     case dice >= && dice <= :
  //       return 'dvarfy_albinos'
  //     case dice >= && dice <= :
  //       return 'dzhakuli'
  //     case dice >= && dice <= :
  //       return 'dinozavry_allozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_ankilozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_brontozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_velotciraptor'
  //     case dice >= && dice <= :
  //       return 'dinozavry_gadrozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_deinonikh'
  //     case dice >= && dice <= :
  //       return 'dinozavry_dimetrodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_kettcalkoatl'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pleziozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pteranodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_stegozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tirannozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tritceratops'
  //     case dice >= && dice <= :
  //       return 'drakon_volshebnyi_drakonchik'
  //     case dice >= && dice <= :
  //       return 'drakon_krasnyi'
  //     case dice >= && dice <= :
  //       return 'zhyoltaia_muskusnaia_liana_i_zombi'
  //     case dice >= && dice <= :
  //       return 'zhentarim'
  //     case dice >= && dice <= :
  //       return 'zimnii_peizazh'
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskaia_iadovitaia '
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskii_udav'
  //     case dice >= && dice <= :
  //       return 'zmeia_udav'
  //     case dice >= && dice <= :
  //       return 'zorbo'
  //     case dice >= && dice <= :
  //       return 'izumrudnyi_anclav'
  //     case dice >= && dice <= :
  //       return 'issledovateli'
  //     case dice >= && dice <= :
  //       return 'issledovatel_myortvyi`'
  //     case dice >= && dice <= :
  //       return 'kamadany'
  //     case dice >= && dice <= :
  //       return 'kannibaly'
  //     case dice >= && dice <= :
  //       return 'kapkany'
  //     case dice >= && dice <= :
  //       return 'krasnyi_volshebnik'
  //     case dice >= && dice <= :
  //       return 'krovopiitcy'
  //     case dice >= && dice <= :
  //       return 'krokodily'
  //     case dice >= && dice <= :
  //       return 'ledianye_velikany'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_zmei'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_obeziany`'
  //     case dice >= && dice <= :
  //       return 'lozy_ubiitcy'
  //     case dice >= && dice <= :
  //       return 'liudoiashchery`'
  //     case dice >= && dice <= :
  //       return 'magminy`'
  //     case dice >= && dice <= :
  //       return 'mefity`'
  //     case dice >= && dice <= :
  //       return 'morskaia_karga'
  //     case dice >= && dice <= :
  //       return 'nezhit_zombi'
  //     case dice >= && dice <= :
  //       return 'nezhit_skelety`'
  //     case dice >= && dice <= :
  //       return 'nezhit_spektry`'
  //     case dice >= && dice <= :
  //       return 'nezhit_umertvie'
  //     case dice >= && dice <= :
  //       return 'nezhit_upyri'
  //     case dice >= && dice <= :
  //       return 'nochnaia_karga'
  //     case dice >= && dice <= :
  //       return 'ognennye_tritony`'
  //     case dice >= && dice <= :
  //       return 'pauki'
  //     case dice >= && dice <= :
  //       return 'polzaiushchaia_nasyp'
  //     case dice >= && dice <= :
  //       return 'pteraliudy`'
  //     case dice >= && dice <= :
  //       return 'pylaiushchii_kulak'
  //     case dice >= && dice <= :
  //       return 'redkoe_rastenie'
  //     case dice >= && dice <= :
  //       return 'roi_kviperov'
  //     case dice >= && dice <= :
  //       return 'roi_letuchikh_myshei`'
  //     case dice >= && dice <= :
  //       return 'roi_nasekomykh'
  //     case dice >= && dice <= :
  //       return 'salamandra'
  //     case dice >= && dice <= :
  //       return 'statuia_ubtao'
  //     case dice >= && dice <= :
  //       return 'su_monstry'
  //     case dice >= && dice <= :
  //       return 'tabaksi_ohotneyk'
  //     case dice >= && dice <= :
  //       return 'tigr'
  //     case dice >= && dice <= :
  //       return 'toporocliuvy`'
  //     case dice >= && dice <= :
  //       return 'troll'
  //     case dice >= && dice <= :
  //       return 'tuman_bezumnoi_obeziany'
  //     case dice >= && dice <= :
  //       return 'tcepovaia_ulitka'
  //     case dice >= && dice <= :
  //       return 'tciclopy`'
  //     case dice >= && dice <= :
  //       return 'chvinga'
  //     case dice >= && dice <= :
  //       return 'chelovekoobraznye_obeziany`'
  //     case dice >= && dice <= :
  //       return 'eblis'
  //     case dice >= && dice <= :
  //       return 'ekspeditcionnyi_zapas'
  //     case dice >= && dice <= :
  //       return 'iuan_ti
  //
  //   }
  // },
  // swamp: dice => {
  //   switch (true) {
  //     case dice >= && dice <= :
  //       return 'aarakokry'
  //     case dice >= && dice <= :
  //       return 'aldani'
  //     case dice >= && dice <= :
  //       return 'almirazh'
  //     case dice >= && dice <= :
  //       return 'artus_simber'
  //     case dice >= && dice <= :
  //       return 'babuiny'
  //     case dice >= && dice <= :
  //       return 'vaiia_trekhsotcvetnaia'
  //     case dice >= && dice <= :
  //       return 'vegepigmei'
  //     case dice >= && dice <= :
  //       return 'vervepr'
  //     case dice >= && dice <= :
  //       return 'vertigr'
  //     case dice >= && dice <= :
  //       return 'gigantskaia_shchyolkaiushchaia_cherepaha'
  //     case dice >= && dice <= :
  //       return 'gigantskie_kabany'
  //     case dice >= && dice <= :
  //       return 'gigantskie_liagushki'
  //     case dice >= && dice <= :
  //       return 'gigantskie_osy'
  //     case dice >= && dice <= :
  //       return 'gigantskie_skorpiony'
  //     case dice >= && dice <= :
  //       return 'gigantskie_iashcheritcy'
  //     case dice >= && dice <= :
  //       return 'gigantskii_krokodil'
  //     case dice >= && dice <= :
  //       return 'girallony'
  //     case dice >= && dice <= :
  //       return 'gobliny'
  //     case dice >= && dice <= :
  //       return 'grungi'
  //     case dice >= && dice <= :
  //       return 'dvarfy_albinos'
  //     case dice >= && dice <= :
  //       return 'dzhakuli'
  //     case dice >= && dice <= :
  //       return 'dinozavry_allozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_ankilozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_brontozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_velotciraptor'
  //     case dice >= && dice <= :
  //       return 'dinozavry_gadrozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_deinonikh'
  //     case dice >= && dice <= :
  //       return 'dinozavry_dimetrodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_kettcalkoatl'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pleziozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pteranodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_stegozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tirannozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tritceratops'
  //     case dice >= && dice <= :
  //       return 'drakon_volshebnyi_drakonchik'
  //     case dice >= && dice <= :
  //       return 'drakon_krasnyi'
  //     case dice >= && dice <= :
  //       return 'zhyoltaia_muskusnaia_liana_i_zombi'
  //     case dice >= && dice <= :
  //       return 'zhentarim'
  //     case dice >= && dice <= :
  //       return 'zimnii_peizazh'
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskaia_iadovitaia '
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskii_udav'
  //     case dice >= && dice <= :
  //       return 'zmeia_udav'
  //     case dice >= && dice <= :
  //       return 'zorbo'
  //     case dice >= && dice <= :
  //       return 'izumrudnyi_anclav'
  //     case dice >= && dice <= :
  //       return 'issledovateli'
  //     case dice >= && dice <= :
  //       return 'issledovatel_myortvyi`'
  //     case dice >= && dice <= :
  //       return 'kamadany'
  //     case dice >= && dice <= :
  //       return 'kannibaly'
  //     case dice >= && dice <= :
  //       return 'kapkany'
  //     case dice >= && dice <= :
  //       return 'krasnyi_volshebnik'
  //     case dice >= && dice <= :
  //       return 'krovopiitcy'
  //     case dice >= && dice <= :
  //       return 'krokodily'
  //     case dice >= && dice <= :
  //       return 'ledianye_velikany'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_zmei'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_obeziany`'
  //     case dice >= && dice <= :
  //       return 'lozy_ubiitcy'
  //     case dice >= && dice <= :
  //       return 'liudoiashchery`'
  //     case dice >= && dice <= :
  //       return 'magminy`'
  //     case dice >= && dice <= :
  //       return 'mefity`'
  //     case dice >= && dice <= :
  //       return 'morskaia_karga'
  //     case dice >= && dice <= :
  //       return 'nezhit_zombi'
  //     case dice >= && dice <= :
  //       return 'nezhit_skelety`'
  //     case dice >= && dice <= :
  //       return 'nezhit_spektry`'
  //     case dice >= && dice <= :
  //       return 'nezhit_umertvie'
  //     case dice >= && dice <= :
  //       return 'nezhit_upyri'
  //     case dice >= && dice <= :
  //       return 'nochnaia_karga'
  //     case dice >= && dice <= :
  //       return 'ognennye_tritony`'
  //     case dice >= && dice <= :
  //       return 'pauki'
  //     case dice >= && dice <= :
  //       return 'polzaiushchaia_nasyp'
  //     case dice >= && dice <= :
  //       return 'pteraliudy`'
  //     case dice >= && dice <= :
  //       return 'pylaiushchii_kulak'
  //     case dice >= && dice <= :
  //       return 'redkoe_rastenie'
  //     case dice >= && dice <= :
  //       return 'roi_kviperov'
  //     case dice >= && dice <= :
  //       return 'roi_letuchikh_myshei`'
  //     case dice >= && dice <= :
  //       return 'roi_nasekomykh'
  //     case dice >= && dice <= :
  //       return 'salamandra'
  //     case dice >= && dice <= :
  //       return 'statuia_ubtao'
  //     case dice >= && dice <= :
  //       return 'su_monstry'
  //     case dice >= && dice <= :
  //       return 'tabaksi_ohotneyk'
  //     case dice >= && dice <= :
  //       return 'tigr'
  //     case dice >= && dice <= :
  //       return 'toporocliuvy`'
  //     case dice >= && dice <= :
  //       return 'troll'
  //     case dice >= && dice <= :
  //       return 'tuman_bezumnoi_obeziany'
  //     case dice >= && dice <= :
  //       return 'tcepovaia_ulitka'
  //     case dice >= && dice <= :
  //       return 'tciclopy`'
  //     case dice >= && dice <= :
  //       return 'chvinga'
  //     case dice >= && dice <= :
  //       return 'chelovekoobraznye_obeziany`'
  //     case dice >= && dice <= :
  //       return 'eblis'
  //     case dice >= && dice <= :
  //       return 'ekspeditcionnyi_zapas'
  //     case dice >= && dice <= :
  //       return 'iuan_ti
  //
  //   }
  // },
  // wasteland: dice => {
  //   switch (true) {
  //     case dice >= && dice <= :
  //       return 'aarakokry'
  //     case dice >= && dice <= :
  //       return 'aldani'
  //     case dice >= && dice <= :
  //       return 'almirazh'
  //     case dice >= && dice <= :
  //       return 'artus_simber'
  //     case dice >= && dice <= :
  //       return 'babuiny'
  //     case dice >= && dice <= :
  //       return 'vaiia_trekhsotcvetnaia'
  //     case dice >= && dice <= :
  //       return 'vegepigmei'
  //     case dice >= && dice <= :
  //       return 'vervepr'
  //     case dice >= && dice <= :
  //       return 'vertigr'
  //     case dice >= && dice <= :
  //       return 'gigantskaia_shchyolkaiushchaia_cherepaha'
  //     case dice >= && dice <= :
  //       return 'gigantskie_kabany'
  //     case dice >= && dice <= :
  //       return 'gigantskie_liagushki'
  //     case dice >= && dice <= :
  //       return 'gigantskie_osy'
  //     case dice >= && dice <= :
  //       return 'gigantskie_skorpiony'
  //     case dice >= && dice <= :
  //       return 'gigantskie_iashcheritcy'
  //     case dice >= && dice <= :
  //       return 'gigantskii_krokodil'
  //     case dice >= && dice <= :
  //       return 'girallony'
  //     case dice >= && dice <= :
  //       return 'gobliny'
  //     case dice >= && dice <= :
  //       return 'grungi'
  //     case dice >= && dice <= :
  //       return 'dvarfy_albinos'
  //     case dice >= && dice <= :
  //       return 'dzhakuli'
  //     case dice >= && dice <= :
  //       return 'dinozavry_allozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_ankilozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_brontozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_velotciraptor'
  //     case dice >= && dice <= :
  //       return 'dinozavry_gadrozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_deinonikh'
  //     case dice >= && dice <= :
  //       return 'dinozavry_dimetrodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_kettcalkoatl'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pleziozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_pteranodon'
  //     case dice >= && dice <= :
  //       return 'dinozavry_stegozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tirannozavr'
  //     case dice >= && dice <= :
  //       return 'dinozavry_tritceratops'
  //     case dice >= && dice <= :
  //       return 'drakon_volshebnyi_drakonchik'
  //     case dice >= && dice <= :
  //       return 'drakon_krasnyi'
  //     case dice >= && dice <= :
  //       return 'zhyoltaia_muskusnaia_liana_i_zombi'
  //     case dice >= && dice <= :
  //       return 'zhentarim'
  //     case dice >= && dice <= :
  //       return 'zimnii_peizazh'
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskaia_iadovitaia '
  //     case dice >= && dice <= :
  //       return 'zmeia_gigantskii_udav'
  //     case dice >= && dice <= :
  //       return 'zmeia_udav'
  //     case dice >= && dice <= :
  //       return 'zorbo'
  //     case dice >= && dice <= :
  //       return 'izumrudnyi_anclav'
  //     case dice >= && dice <= :
  //       return 'issledovateli'
  //     case dice >= && dice <= :
  //       return 'issledovatel_myortvyi`'
  //     case dice >= && dice <= :
  //       return 'kamadany'
  //     case dice >= && dice <= :
  //       return 'kannibaly'
  //     case dice >= && dice <= :
  //       return 'kapkany'
  //     case dice >= && dice <= :
  //       return 'krasnyi_volshebnik'
  //     case dice >= && dice <= :
  //       return 'krovopiitcy'
  //     case dice >= && dice <= :
  //       return 'krokodily'
  //     case dice >= && dice <= :
  //       return 'ledianye_velikany'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_zmei'
  //     case dice >= && dice <= :
  //       return 'letaiushchie_obeziany`'
  //     case dice >= && dice <= :
  //       return 'lozy_ubiitcy'
  //     case dice >= && dice <= :
  //       return 'liudoiashchery`'
  //     case dice >= && dice <= :
  //       return 'magminy`'
  //     case dice >= && dice <= :
  //       return 'mefity`'
  //     case dice >= && dice <= :
  //       return 'morskaia_karga'
  //     case dice >= && dice <= :
  //       return 'nezhit_zombi'
  //     case dice >= && dice <= :
  //       return 'nezhit_skelety`'
  //     case dice >= && dice <= :
  //       return 'nezhit_spektry`'
  //     case dice >= && dice <= :
  //       return 'nezhit_umertvie'
  //     case dice >= && dice <= :
  //       return 'nezhit_upyri'
  //     case dice >= && dice <= :
  //       return 'nochnaia_karga'
  //     case dice >= && dice <= :
  //       return 'ognennye_tritony`'
  //     case dice >= && dice <= :
  //       return 'pauki'
  //     case dice >= && dice <= :
  //       return 'polzaiushchaia_nasyp'
  //     case dice >= && dice <= :
  //       return 'pteraliudy`'
  //     case dice >= && dice <= :
  //       return 'pylaiushchii_kulak'
  //     case dice >= && dice <= :
  //       return 'redkoe_rastenie'
  //     case dice >= && dice <= :
  //       return 'roi_kviperov'
  //     case dice >= && dice <= :
  //       return 'roi_letuchikh_myshei`'
  //     case dice >= && dice <= :
  //       return 'roi_nasekomykh'
  //     case dice >= && dice <= :
  //       return 'salamandra'
  //     case dice >= && dice <= :
  //       return 'statuia_ubtao'
  //     case dice >= && dice <= :
  //       return 'su_monstry'
  //     case dice >= && dice <= :
  //       return 'tabaksi_ohotneyk'
  //     case dice >= && dice <= :
  //       return 'tigr'
  //     case dice >= && dice <= :
  //       return 'toporocliuvy`'
  //     case dice >= && dice <= :
  //       return 'troll'
  //     case dice >= && dice <= :
  //       return 'tuman_bezumnoi_obeziany'
  //     case dice >= && dice <= :
  //       return 'tcepovaia_ulitka'
  //     case dice >= && dice <= :
  //       return 'tciclopy`'
  //     case dice >= && dice <= :
  //       return 'chvinga'
  //     case dice >= && dice <= :
  //       return 'chelovekoobraznye_obeziany`'
  //     case dice >= && dice <= :
  //       return 'eblis'
  //     case dice >= && dice <= :
  //       return 'ekspeditcionnyi_zapas'
  //     case dice >= && dice <= :
  //       return 'iuan_ti
  //
  //   }
  // },
}

export default encounterByBiomeList
