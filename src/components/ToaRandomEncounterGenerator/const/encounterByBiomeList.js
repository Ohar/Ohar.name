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
  river: dice => {
    switch (dice) {
      case 1:
      case 2:
      case 3:
        return 'aarakokry'
      case 4:
      case 5:
      case 6:
      case 7:
        return 'aldani'
      case 8:
      case 9:
        return 'artus_simber'
      case 61:
      case 62:
        return 'gigantskaia_shchyolkaiushchaia_cherepaha'
      case 59:
      case 60:
        return 'gigantskie_liagushki'
      case 63:
        return 'gigantskie_osy'
      case 56:
      case 57:
      case 58:
        return 'gigantskii_krokodil'
      case 64:
      case 65:
      case 66:
        return 'grungi'
      case 67:
        return 'dzhakuli'
      case 24:
        return 'dinozavry_brontozavr'
      case 27:
      case 28:
        return 'dinozavry_gadrozavr'
      case 25:
      case 26:
        return 'dinozavry_dimetrodon'
      case 35:
      case 36:
        return 'dinozavry_kettcalkoatl'
      case 29:
      case 30:
      case 31:
        return 'dinozavry_pleziozavr'
      case 32:
      case 33:
      case 34:
        return 'dinozavry_pteranodon'
      case 37:
        return 'drakon_volshebnyi_drakonchik'
      case 99:
      case 0:
        return 'zhentarim'
      case 80:
        return 'zmeia_gigantskii_udav'
      case 77:
      case 78:
      case 79:
        return 'zmeia_udav'
      case 41:
      case 42:
      case 43:
        return 'izumrudnyi_anclav'
      case 46:
      case 47:
      case 48:
      case 49:
        return 'issledovateli'
      case 44:
      case 45:
        return 'issledovatel_myortvyi`'
      case 13:
      case 14:
      case 15:
        return 'kannibaly'
      case 74:
        return 'krasnyi_volshebnik'
      case 82:
      case 83:
        return 'krovopiitcy'
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        return 'krokodily'
      case 54:
      case 55:
        return 'letaiushchie_zmei'
      case 52:
      case 53:
        return 'letaiushchie_obeziany`'
      case 10:
        return 'lozy_ubiitcy'
      case 68:
        return 'liudoiashchery`'
      case 75:
      case 76:
        return 'morskaia_karga'
      case 96:
        return 'nezhit_zombi'
      case 95:
        return 'nezhit_skelety`'
      case 94:
        return 'nezhit_upyri'
      case 71:
      case 72:
        return 'pteraliudy`'
      case 50:
      case 51:
        return 'pylaiushchii_kulak'
      case 73:
        return 'redkoe_rastenie'
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 91:
        return 'roi_kviperov'
      case 84:
      case 85:
        return 'roi_nasekomykh'
      case 81:
        return 'statuia_ubtao'
      case 92:
      case 93:
        return 'tabaksi_ohotneyk'
      case 69:
      case 70:
        return 'tuman_bezumnoi_obeziany'
      case 16:
      case 17:
      case 18:
        return 'chvinga'
      case 38:
      case 39:
      case 40:
        return 'eblis'
      case 11:
      case 12:
        return 'ekspeditcionnyi_zapas'
      case 97:
      case 98:
        return 'iuan_ti'
    }
  },
  ruin: dice => {
    switch (dice) {
      case 3:
        return 'almirazh'
      case 7:
      case 8:
        return 'artus_simber'
      case 13:
      case 14:
        return 'babuiny'
      case 79:
      case 80:
        return 'vaiia_trekhsotcvetnaia'
      case 94:
        return 'vertigr'
      case 46:
      case 47:
      case 48:
        return 'gigantskie_osy'
      case 43:
      case 44:
      case 45:
        return 'gigantskie_skorpiony'
      case 42:
        return 'gigantskie_iashcheritcy'
      case 49:
      case 50:
        return 'girallony'
      case 51:
      case 52:
        return 'gobliny'
      case 1:
      case 2:
        return 'dvarfy_albinos'
      case 53:
      case 54:
        return 'dzhakuli'
      case 23:
        return 'dinozavry_velotciraptor'
      case 22:
        return 'dinozavry_deinonikh'
      case 96:
        return 'zhyoltaia_muskusnaia_liana_i_zombi'
      case 99:
      case 0:
        return 'zhentarim'
      case 95:
        return 'zimnii_peizazh'
      case 64:
      case 65:
      case 66:
        return 'zmeia_gigantskaia_iadovitaia '
      case 82:
        return 'zmeia_gigantskii_udav'
      case 24:
      case 25:
      case 26:
        return 'izumrudnyi_anclav'
      case 29:
      case 30:
      case 31:
        return 'issledovateli'
      case 27:
      case 28:
        return 'issledovatel_myortvyi`'
      case 55:
      case 56:
      case 57:
        return 'kamadany'
      case 63:
        return 'krasnyi_volshebnik'
      case 74:
      case 75:
        return 'krovopiitcy'
      case 40:
      case 41:
        return 'ledianye_velikany'
      case 39:
        return 'letaiushchie_zmei'
      case 37:
      case 38:
        return 'letaiushchie_obeziany`'
      case 9:
      case 10:
      case 11:
      case 12:
        return 'lozy_ubiitcy'
      case 58:
        return 'liudoiashchery`'
      case 92:
      case 93:
        return 'nezhit_zombi'
      case 85:
      case 86:
      case 87:
        return 'nezhit_skelety`'
      case 88:
      case 89:
        return 'nezhit_spektry`'
      case 90:
      case 91:
        return 'nezhit_umertvie'
      case 83:
      case 84:
        return 'nezhit_upyri'
      case 61:
        return 'nochnaia_karga'
      case 67:
      case 68:
        return 'pauki'
      case 34:
      case 35:
      case 36:
        return 'pylaiushchii_kulak'
      case 62:
        return 'redkoe_rastenie'
      case 76:
      case 77:
        return 'roi_letuchikh_myshei`'
      case 69:
      case 70:
      case 71:
      case 72:
      case 73:
        return 'statuia_ubtao'
      case 78:
        return 'tabaksi_ohotneyk'
      case 81:
        return 'troll'
      case 59:
      case 60:
        return 'tuman_bezumnoi_obeziany'
      case 32:
      case 33:
        return 'tcepovaia_ulitka'
      case 20:
      case 21:
        return 'tciclopy`'
      case 19:
        return 'chvinga'
      case 4:
      case 5:
      case 6:
        return 'chelovekoobraznye_obeziany`'
      case 15:
      case 16:
      case 17:
      case 18:
        return 'ekspeditcionnyi_zapas'
      case 97:
      case 98:
        return 'iuan_ti'
    }
  },
  swamp: dice => {
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
        return 'aldani'
      case 11:
        return 'artus_simber'
      case 59:
      case 60:
        return 'gigantskaia_shchyolkaiushchaia_cherepaha'
      case 54:
      case 55:
      case 56:
        return 'gigantskie_liagushki'
      case 61:
      case 62:
        return 'gigantskie_osy'
      case 57:
      case 58:
        return 'gigantskie_iashcheritcy'
      case 51:
      case 52:
      case 53:
        return 'gigantskii_krokodil'
      case 63:
      case 64:
        return 'grungi'
      case 22:
        return 'dinozavry_allozavr'
      case 23:
        return 'dinozavry_ankilozavr'
      case 24:
      case 25:
        return 'dinozavry_brontozavr'
      case 31:
      case 32:
      case 33:
        return 'dinozavry_gadrozavr'
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        return 'dinozavry_dimetrodon'
      case 34:
      case 35:
        return 'dinozavry_pteranodon'
      case 99:
        return 'zhyoltaia_muskusnaia_liana_i_zombi'
      case 77:
      case 78:
      case 79:
      case 80:
        return 'zmeia_udav'
      case 42:
      case 43:
      case 44:
      case 45:
        return 'issledovateli'
      case 40:
      case 41:
        return 'issledovatel_myortvyi`'
      case 86:
      case 87:
        return 'krovopiitcy'
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
        return 'krokodily'
      case 48:
      case 49:
      case 50:
        return 'letaiushchie_zmei'
      case 12:
      case 13:
      case 14:
        return 'lozy_ubiitcy'
      case 65:
      case 66:
        return 'liudoiashchery`'
      case 70:
        return 'mefity`'
      case 98:
        return 'nezhit_zombi'
      case 96:
      case 97:
        return 'nezhit_skelety`'
      case 95:
        return 'nezhit_upyri'
      case 71:
        return 'nochnaia_karga'
      case 73:
      case 74:
      case 75:
      case 76:
        return 'polzaiushchaia_nasyp'
      case 72:
        return 'redkoe_rastenie'
      case 88:
      case 89:
        return 'roi_letuchikh_myshei`'
      case 90:
      case 91:
      case 92:
      case 93:
      case 94:
        return 'roi_nasekomykh'
      case 83:
      case 84:
      case 85:
        return 'statuia_ubtao'
      case 67:
      case 68:
      case 69:
        return 'tuman_bezumnoi_obeziany'
      case 46:
      case 47:
        return 'tcepovaia_ulitka'
      case 15:
      case 16:
        return 'chvinga'
      case 36:
      case 37:
      case 38:
      case 39:
        return 'eblis'
      case 0:
        return 'iuan_ti'
    }
  },
  wasteland: dice => {
    switch (dice) {
      case 1:
        return 'artus_simber'
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
        return 'gigantskie_skorpiony'
      case 6:
      case 7:
      case 8:
      case 9:
        return 'drakon_krasnyi'
      case 99:
      case 0:
        return 'zhentarim'
      case 19:
        return 'issledovateli'
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return 'issledovatel_myortvyi`'
      case 46:
      case 47:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
        return 'magminy`'
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
      case 71:
        return 'mefity`'
      case 98:
        return 'nezhit_zombi'
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
        return 'nezhit_skelety`'
      case 96:
      case 97:
        return 'nezhit_umertvie'
      case 84:
      case 85:
        return 'nezhit_upyri'
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
        return 'nochnaia_karga'
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        return 'ognennye_tritony'
      case 79:
        return 'statuia_ubtao'
      case 80:
      case 81:
      case 82:
      case 83:
        return 'troll'
      case 2:
      case 3:
      case 4:
      case 5:
        return 'ekspeditcionnyi_zapas'
    }
  },
}

export default encounterByBiomeList