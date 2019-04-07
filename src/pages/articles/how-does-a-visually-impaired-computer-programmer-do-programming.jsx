import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

export default () => (
  <Layout>
    <Seo title='Как программируют слабовидящие программисты?'/>
    <article>
      <spoiler title="От переводчика">
        <h4>Что это за&nbsp;пост? Он не&nbsp;похож на&nbsp;статью</h4>
        <p>Это действительно не&nbsp;статья. Это компиляция самых интересных, на&nbsp;мой взгляд, ответов
          на&nbsp;заглавный вопрос: «<a
            href="http://www.quora.com/How-does-a-visually-impaired-computer-programmer-do-programming">Как
            программируют слабовидящие программисты?</a>» из&nbsp;обсуждения на&nbsp;Quora.com.</p>
        <h4>Почему я сделал перевод?</h4>
        <p>
          Ответы людей меня сильно впечатлили. Я никогда не&nbsp;думал, что люди сталкиваются
          с&nbsp;<em>такими</em> проблемами и не&nbsp;только не&nbsp;отчаиваются, а&nbsp;мужественно и смело эти
          проблемы преодолевают, сохраняя при этом оптимизм и радость к&nbsp;жизни. Это поразительно.
        </p>
        <p>Как веб-разработчик, я, конечно, слышал о&nbsp;таинственных экранных дикторах и полумифических дисплеях
          Брайля. Кто-то там ими пользуется, но&nbsp;ведь это всё не&nbsp;в&nbsp;моём, а&nbsp;в&nbsp;каком-то совсем
          другом, особом, вебе, где специально обученные разработчики всё для&nbsp;них подготовили и по&nbsp;вечерам все
          вместе танцуют под луной.
        </p>
        <p>Это не&nbsp;так. <em>Совсем</em> не&nbsp;так.</p>
        <p>Нет никаких специально обученных разработчиков.</p>
        <p>Нет никакого особого веба.</p>
        <p>Веб один и он общий для&nbsp;всех. И&nbsp;никаких других разработчиков, кроме нас с&nbsp;вами, в&nbsp;нём
          нет. И&nbsp;именно мы с&nbsp;вами несём за&nbsp;него ответственность.</p>
        <p>
          Именно мы с&nbsp;вами&nbsp;— те&nbsp;люди, которые делают его таким, как он есть. Именно из&nbsp;наших
          с&nbsp;вами рук пользователи получают веб-страницы. Разработчик&nbsp;— последний, кто вносит
          в&nbsp;веб-страницу правки и определяет, насколько она будет доступной для&nbsp;людей, которые вынуждены
          пользоваться вебом иначе&nbsp;— слепые&nbsp;ли они, парализованные&nbsp;ли, или их&nbsp;возможности каким-то
          иным образом ограничены. Это&nbsp;— социальная ответственность, хотим мы этого или нет.
        </p>
        <p>
          Давайте же делать веб чуточку лучше, доступнее для&nbsp;всех и каждого, и пусть никто не&nbsp;уйдёт обиженным.
        </p>
      </spoiler>
      <cut/>
      <h4>Пархам Даустэр,
        PHP-программист
      </h4>
      <blockquote>
        <p>
          Я&nbsp;— слепой <abbr title="PHP: Hypertext Preprocessor" lang="en">PHP</abbr>-программист. Способ, которым я
          пишу код, пожалуй, отличается от&nbsp;способов, упомянутых в&nbsp;других ответах. Прежде чем начать, давайте я
          немного расскажу о&nbsp;себе.
        </p>
        <p>
          Я слеп от&nbsp;рождения. У&nbsp;меня никогда не&nbsp;было проблемы «потери зрения»: я им&nbsp;никогда
          не&nbsp;обладал. Это многое упрощает.
        </p>
        <p>
          Лично я, в&nbsp;отличие от&nbsp;многих других незрячих, использую среду разработки. Мы&nbsp;пользуемся
          экранными дикторами, а&nbsp;интерфейсы сред разработки в&nbsp;большинстве своём для&nbsp;них плохо доступны.
          Например, экранным дикторам недоступны <a href="https://youtrack.jetbrains.com/issue/IDEA-111425">все среды
          разработки компании JetBrains</a>. Это&nbsp;— один из&nbsp;минусов конкуренции в&nbsp;нашем обществе:
          люди слишком заняты заботой о&nbsp;большинстве, чтобы прислушиваться к&nbsp;меньшинству. </p>

        <p>
          Я использую Zend Studio, основанную на&nbsp;всем известном Eclipse. Eclipse&nbsp;— приятное исключение:
          доступность реализована очень хорошо. Он доступен не&nbsp;полностью, но&nbsp;и&nbsp;80% мне вполне хватает.
          Слепому выбирать не&nbsp;приходится.</p>
        <p>
          Среда разработки эффективно избавляет от&nbsp;рутины вроде запоминания сигнатур методов, документации и
          множества других вещей, оставляя мне заботу о&nbsp;более насущных вещах (например, почему
          легаси-код&nbsp;— такой отстой).
        </p>
        <p>
          Я не&nbsp;пользуюсь клавиатурой Брайля. Использовать всего лишь 6&nbsp;клавиш, которые ещё и нужно нажимать
          одновременно для&nbsp;каждого символа&nbsp;— это слишком медленно. Сотня клавиш, которые можно очень быстро
          нажимать друг за&nbsp;другом&nbsp;— это намного, намного быстрее. </p>

        <p>
          Дисплеем Брайля я тоже не&nbsp;пользуюсь. Вместо этого у&nbsp;меня стоит экранный диктор, настроенный
          на&nbsp;420&nbsp;слов в&nbsp;минуту. Это намного быстрее, чем читать с&nbsp;брайлевского дисплея.
        </p>

        <p>
          Самое важное, по&nbsp;моему мнению,&nbsp;— быть впереди конкурентов. Для незрячего это уже само по&nbsp;себе
          сложно. Мы вынуждены конкурировать, не&nbsp;имея одного из&nbsp;чувств, которое есть у&nbsp;большинства
          людей в&nbsp;мире. Это не&nbsp;было&nbsp;бы большой проблемой, если бы не&nbsp;упоминавшийся мной выше
          конфликт интересов большинства с&nbsp;меньшинством. Находясь в&nbsp;меньшинстве, нужно находить способы
          получить то, что многие люди воспринимают как само собой разумеющееся. В&nbsp;этом, мне кажется, заключается
          сила, приходящая от&nbsp;слабости: приходится импровизировать, заставлять себя, достигать невозможного
          каждый день всего лишь чтобы не&nbsp;остаться безработным.</p>
      </blockquote>

      <h4>Томми Маквильям, мобильный инженер в&nbsp;Quora</h4>
      <blockquote>
        <p>Вы слышали про&nbsp;Python Bee? Теперь представьте что так выглядит ваш обычный день.</p>

        <p>
          Одному из&nbsp;моих лучших друзей в&nbsp;старшей школе поставили диагноз «наследственная оптическая нейропатия
          Лебера», когда он учился в&nbsp;выпускном классе. <abbr title="наследственная оптическая нейропатия Лебера"
                                                                  lang="ru">НОНЛ</abbr> постоянно снижала его зрение и
          на&nbsp;первом году обучения в&nbsp;колледже мой друг почти полностью ослеп. Его специализацией была
          информатика, и то, как он программировал, было одной из&nbsp;самых невероятных вещей, которые я видел
          в&nbsp;жизни.
        </p>

        <p>
          В&nbsp;колледже он использовал комбинацию экранной лупы и экранного диктора. Экранная лупа называлась <a
          href="http://www.freedomscientific.com/Products/LowVision/MAGic">MAGic</a> и позволяла ему
          увеличивать текст так, что на&nbsp;монитор умещалось всего лишь несколько символов. Сам монитор был огромным
          экраном свыше 30&nbsp;дюймов, оптимизированным для&nbsp;слабовидящих. Экранным диктором был <a
          href="http://www.freedomscientific.com/Products/Blindness/JAWS"><abbr title="Job Access With Speech"
                                                                                lang="en">JAWS</abbr></a>,
          хотя мой друг перепробовал множество других программ. Он говорил, что существующие программы с&nbsp;открытым
          кодом выглядят жалко в&nbsp;сравнении с&nbsp;очень дорогими программами, которыми он пользовался благодаря
          помощи нашей школы.</p>
        <p>
          Мой друг всегда ставил экранный диктор на&nbsp;максимальную скорость чтения (наверное, свыше 300&nbsp;слов
          в&nbsp;минуту). Для сравнения, аудиокниги обычно звучат вдвое медленнее. Для меня это звучало как совершенно
          другой язык, но&nbsp;он его отлично понимал. Мой друг предпочитал использовать абсурдно старую версию Firefox
          (3.5 или вроде того), потому что она лучше всего поддерживала его экранный диктор. Практически все действия он
          выполнял горячими клавишами, передвигаясь по&nbsp;приложениям и окнам с&nbsp;ошеломляющей скоростью. Всё это,
          вкупе с&nbsp;40-кратным увеличением, делало практически невозможными попытки проследить за&nbsp;его
          действиями. При&nbsp;этом он работал эффективнее многих виденных мной программистов.
        </p>
        <h5>О&nbsp;том, как именно мой друг программировал.</h5>
        <p>
          Как редактор кода он использовал Emacs (думаю, из-за того, что наловчился с&nbsp;сумасшедшими горячими
          клавишами). Экранный диктор читал код, который он проматывал. Точно так&nbsp;же экранный диктор читал вывод
          терминала, так что исключалась любая возможность того, что что-то не&nbsp;будет озвучено. Как вы
          догадываетесь, программный код понять сложнее, чем английские слова. Хотя языки, не&nbsp;злоупотребляющие
          символами в&nbsp;синтаксисе, понимать проще. Более доступны те&nbsp;языки, которые «выглядят» похожими
          на&nbsp;английский, как Python, Ruby и подобные. Тем не&nbsp;менее, использование отступов вместо скобок
          довольно-таки усложняет жизнь&nbsp;— приходится внимательно выслушивать количество табов на&nbsp;каждой
          строке.
        </p>
        <p>
          Чтобы вы лучше себе представляли общую картину, я расскажу забавный случай, случившийся на&nbsp;втором
          курсе. Мы&nbsp;изучали OCaml, функциональный язык с&nbsp;забавным синтаксисом. Мой друг был вынужден слушать
          чушь вроде <i>let rec fib n равно return match n with return вертикальная черта один дефис больше, чем… точка
          с&nbsp;запятой точка с&nbsp;запятой</i> и тому подобное. В&nbsp;этот день он работал с&nbsp;очень большим
          куском кода, который никак не&nbsp;компилировался. Он прослушивал этот нелепый синтаксис снова и снова,
          но&nbsp;не&nbsp;мог найти ни&nbsp;одной ошибки. Ничего не&nbsp;изменилось, пока он не&nbsp;пришёл
          в&nbsp;класс, где зрячий помощник преподавателя заметил, что по&nbsp;какой-то причине экранный диктор
          произносит цифру «0» как букву «О». Это был совершенно новый вид багов, с&nbsp;которыми не&nbsp;сталкиваются
          зрячие программисты.
        </p>
        <p>
          Стоит также отметить, что он увлечён спецификацией доступности <abbr title="HyperText Markup Language"
                                                                               lang="en"><abbr
          title="HyperText Markup Language" lang="en">HTML</abbr></abbr>, в&nbsp;особенности <a
          href="http://www.w3.org/TR/wai-aria/"><abbr title="Accessible Rich Internet Applications"
                                                      lang="en">ARIA</abbr></a>.
          Большинство сайтов в&nbsp;интернете её полностью игнорируют, несмотря на&nbsp;то, что она очень просто
          внедряется. То, как он пользуется сайтами с&nbsp;<abbr title="Accessible Rich Internet Applications"
                                                                 lang="en">ARIA</abbr>-атрибутами и без них&nbsp;— это
          небо и земля.</p>
        <p>Сейчас он работает разработчиком <abbr title="программного обеспечения" lang="ru">ПО</abbr> на&nbsp;полной
          ставке.</p>
      </blockquote>

      <h4>Стив Дони</h4>
      <blockquote>
        <p>
          Рон Морфорд&nbsp;— один из&nbsp;самых талантливых программистов, с&nbsp;которыми мне приходилось работать.
          У&nbsp;него было что-то под названием «<a href="http://en.wikipedia.org/wiki/Marfan_syndrome">синдром
          Марфана</a>», из-за которого он полностью потерял зрение, когда ему было чуть больше двадцати. Я работал
          на&nbsp;него в&nbsp;начале 90-х, разрабатывая экранный диктор для&nbsp;Windows&nbsp;3.1. Рон владел компанией
          Automated Functions, Inc, которая разрабатывала программы и железо для&nbsp;слепых. Одним из&nbsp;его первых
          продуктов был <abbr title="Verbal Emulation in Real Time" lang="en">VERT</abbr>. Это был ящик размером
          с&nbsp;обычный <abbr title="персональный компьютер" lang="ru">ПК</abbr>, разработанный как посредник между
          компьютером и терминалом. Он отслеживал проходящий между ними трафик и преобразовывал его в&nbsp;речь. <abbr
          title="Verbal Emulation in Real Time" lang="en">VERT</abbr> мог произносить до&nbsp;400&nbsp;слов
          в&nbsp;минуту, а&nbsp;Рон их запоминал.
        </p>
        <p>
          У&nbsp;Рона было невероятная память. Одним из&nbsp;первых проектов, которые я для&nbsp;него делал сразу
          после колледжа, был экранный диктор для&nbsp;<abbr title="Disk Operating System" lang="en">DOS</abbr>.
          Иногда я возился с&nbsp;ним полдня и, если у&nbsp;меня ничего не&nbsp;получалось, я шёл к&nbsp;Рону и
          спрашивал&nbsp;— «Что делает вот эта функция?». Рон помнил её построчно, хотя, возможно, не&nbsp;заглядывал
          в&nbsp;неё несколько месяцев.</p>
        <p>
          До&nbsp;того, как Рон основал <abbr title="Automated Functions, Inc" lang="en">AFI</abbr>, он был
          специалистом по&nbsp;компьютерной безопасности в&nbsp;<abbr
          title="National Aeronautics and Space Administration" lang="en">NASA</abbr>. Он рассказывал отличные
          истории о&nbsp;том, как тамошние программисты постоянно пытались хакать друг друга, чтобы найти дыры
          в&nbsp;ранних версиях Unix.</p>
        <p>
          Я работал в&nbsp;области доступности около 8&nbsp;лет, потом устроился в&nbsp;Microsoft и работая над
          реализацией доступности в&nbsp;Windows. За&nbsp;это время я видел множество слепых программистов. Они
          пользовались множеством разнообразных техник и инструментов, но, в&nbsp;основном это была стандартная
          клавиатура и речевой вывод. Были и клавиатуры Брайля, но&nbsp;мало кто пользовался ими ежедневно.
          На&nbsp;клавиатуре
          Брайля девять основных клавиш&nbsp;— по&nbsp;четыре для&nbsp;каждой руки и пробел; буквы вводятся
          комбинациями клавиш, составляющими алфавит Брайля. Как уже упоминали&nbsp;другие участники, ещё существует
          дисплей Брайля, с&nbsp;выдвигающимися и втягивающимися пластиковыми палочками. Но&nbsp;такие дисплеи
          невероятно дороги:
          80-колоночный
          дисплей продавался за&nbsp;8&nbsp;000&nbsp;$, хотя, я думаю, что он мог подешеветь за&nbsp;последние
          20&nbsp;лет.
        </p>
      </blockquote>

      <h4>Лукас Радэлли</h4>
      <blockquote>
        <p>
          Я абсолютно слеп. Я работаю на&nbsp;Google, участвую в&nbsp;разработке алгоритма ранжирования. По&nbsp;моему
          опыту и по&nbsp;тому, что я слышал от&nbsp;многих других слепых программистов, наш способ программирования
          не&nbsp;сильно отличается от&nbsp;способа наших зрячих коллег. Я пользуюсь в&nbsp;основном текстовым
          редактором (Emacs с&nbsp;расширением Emacspeak, озвучивающим текст) и браузером для&nbsp;просмотра внутренних
          страниц Google с&nbsp;документацией и прочим.
        </p>
        <p>
          Главное отличие в&nbsp;том, что мы или слушаем то, что на&nbsp;экране, или читаем на&nbsp;дисплее Брайля.
          Ничего не&nbsp;могу сказать про использование этого дисплея, потому что у&nbsp;меня его никогда не&nbsp;было
          (слишком дорого), но&nbsp;могу поделиться некоторыми мыслями о&nbsp;том, как программировать
          на&nbsp;слух.
        </p>

        <p>
          Самое трудное в&nbsp;программировании на&nbsp;слух в&nbsp;том, что нужно запоминать кучу всего. Вы
          двигаетесь от&nbsp;строки к&nbsp;строке, прослушивая их&nbsp;целиком. Можно прослушивать код пословно
          или&nbsp;же
          посимвольно. Отличие, как видите, в&nbsp;том, что одновременно доступна лишь малая часть кода. Вы
          не&nbsp;можете
          начать программировать, посмотрев имена входящих аргументов функции. Вы их помните. Если вам понадобится
          свериться с&nbsp;объявлением функции, то&nbsp;вы ставите закладку, переходите к&nbsp;объявлению, читаете его
          и возвращаетесь назад к&nbsp;закладке. Как можно заметить, это вовсе не&nbsp;мгновенный процесс, поэтому
          тренировка памяти становится необходимым навыком</p>
        <p>
          Мне нравится программировать с&nbsp;помощью Emacspeak, потому что он хорошо подходит для&nbsp;программирования
          на&nbsp;C++. Например, в&nbsp;этой программе есть голосовые стили: она читает переменные, функции и другие
          части языка
          с&nbsp;разной интонацией. Это помогает разобраться, что есть что. Можно считать это аудиоподсветкой
          кода.
        </p>
        <h5>Напоследок, из&nbsp;интересного:</h5>
        <p>
          Слепые программисты не&nbsp;используют выравнивание кода. Обычно мы расставляем отступы уже после написания.
          Нам они не&nbsp;приносят никакой пользы.
        </p>
        <h5>Вы можете спросить: а&nbsp;как&nbsp;же Python?</h5>
        <p>
          Мне очень правится Python и даже необходимость выравнивать код не&nbsp;меняет этого. Я придумал некоторые
          техники: например, сдвигать строку в&nbsp;конец каждого блока отступов&nbsp;— так я могу очень быстро
          узнать, где блок заканчивается. При чтении чужого кода можно настроить диктор, чтобы он проговаривал глубину
          отступов, но&nbsp;меня слегка раздражает выслушивать, сколько пробелов на&nbsp;каждой строке.
        </p>
      </blockquote>

      <h4>Флориан Бэйджерс</h4>
      <blockquote>
        <p>Я пришёл сюда из&nbsp;уведомления Slack в&nbsp;коммьюнити Free Code Camp и вижу что моя блогозапись
          упомянута дважды. Спасибо. Я это ценю и очень рад, что она оказалась полезной для&nbsp;стольких из&nbsp;людей.
          К&nbsp;сожалению, из-за каких-то проблем с&nbsp;доступностью, я не&nbsp;могу прочитать комментарии с&nbsp;её
          упоминанием. Тем не&nbsp;менее, я прошу всех, у&nbsp;кого есть вопросы, стукнуть мне в&nbsp;твиттер <a
            href="https://twitter.com/zersiax">Zersiax</a>.
          Обычно я отвечаю сразу&nbsp;же, если не&nbsp;сплю :-) Это обсуждение показывает, что слепые тоже пишут
          программы и некоторым это даже нравится.
        </p>
        <p>
          Возвращаясь к&nbsp;некоторым вопросам, которые упомянуты конкретно в&nbsp;этом обсуждении:</p>

        <p>
          Как я уже упоминал в&nbsp;своём блоге, я стараюсь пользоваться средой разработки. В&nbsp;основном это среды,
          основанные на&nbsp;Eclipse и Visual Studio, которая, по&nbsp;ироничному стечению обстоятельств, довольно
          хорошо подходит для&nbsp;визуально ограниченных людей, в&nbsp;то&nbsp;время как Microsoft Access совершенно
          не&nbsp;accessible <i>(англ. accessible — «доступность», примечание переводчика)</i>. Не&nbsp;ирония ли это?
          :)</p>

        <p>
          Использовать старый браузер (Firefox&nbsp;3.5) просто глупо, если вы хоть немного кодите для&nbsp;веба. Это
          может быть грубо с&nbsp;моей стороны, но он всё равно лучше, чем <abbr title="Internet Explorer"
                                                                                 lang="en">IE</abbr>.
          Вещи вроде этого&nbsp;— причина того, что я сейчас стремлюсь работать с&nbsp;экранным диктором <abbr
          title="NonVisual Desktop Access" lang="en">NVDA</abbr> с&nbsp;открытым исходным кодом. Он просто
          отлично работает с&nbsp;последним Firefox`ом.</p>
        <p>
          Хотя я с&nbsp;радостью поучился&nbsp;бы работать в&nbsp;Vim и Emacs, мне некогда этим заниматься. Кроме
          того, я стараюсь работать в&nbsp;среде, где зрячие разработчики (в&nbsp;основном студенты) могут со&nbsp;мной
          взаимодействовать. Как правило, Linux их&nbsp;отпугивает, «Vim» для&nbsp;них&nbsp;— средство для&nbsp;чистки,
          а&nbsp;«Emaсs» звучит как какой-то вид магии. Поэтому я вынужден работать в&nbsp;редакторах с&nbsp;графическим
          интерфейсом, даже если командная строка была&nbsp;бы эффективнее.
        </p>
        <p>
          Ладно, хватит на&nbsp;этот раз:) Спасибо за&nbsp;чтение.</p>
      </blockquote>

      <a href="http://habrahabr.ru/post/260463/">Более развёрнутый ответ Флориана</a>
    </article>
  </Layout>
)
