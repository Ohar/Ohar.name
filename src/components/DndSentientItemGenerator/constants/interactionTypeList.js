export default [
  {
    id: 'emotions',
    probabilityWeight: 60,
    isAbleToSpeak: false,
    description: 'Предмет общается, передавая эмоции существу, несущему или использующему его.',
  },
  {
    id: 'speak',
    probabilityWeight: 30,
    isAbleToSpeak: true,
    description: 'Предмет может говорить, читать и понимать на одном или нескольких языках.',
  },
  {
    id: 'speak_and_telepathy',
    probabilityWeight: 10,
    isAbleToSpeak: true,
    description: 'Предмет может говорить, читать и понимать на одном или нескольких языках. Кроме того, он может общаться телепатически с персонажем, несущим или использующим его.',
  },
]
