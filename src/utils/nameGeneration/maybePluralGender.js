import PLURAL_KOEF from '@/constants/nameGeneration/PLURAL_KOEF'

export default gender => Math.random() <= PLURAL_KOEF
  ? 'plural'
  : gender
