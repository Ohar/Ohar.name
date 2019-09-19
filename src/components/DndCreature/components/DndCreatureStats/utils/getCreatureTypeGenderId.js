import { dndCreatureTypeCollection } from '@/constants/dnd/dndCreatureTypeList';
import { GENDER_MALE } from '@/constants/genderList';

export default creatureTypeIdList => creatureTypeIdList && creatureTypeIdList.length
  ? dndCreatureTypeCollection[creatureTypeIdList[0]].genderId
  : GENDER_MALE
