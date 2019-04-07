export default `
<ul>
    <li>
        <p><b>Без точки на конце</b> пишутся единицы измерения: <i>млн</i>, <i>млрд</i>, <i>ч</i>, <i>мин</i>,
            <i>с</i>, <i>т</i>, <i>кг</i>, <i>г</i>, <i>м</i>, <i>дм</i>, <i>см</i>, <i>км</i>, <i>мм</i>,
            <i>мкм</i>, <i>мк</i>, <i>нм</i>, <i>В</i>, <i>Гц</i>, <i>Ом</i>, <i>Вт</i>, <i>Дж</i>, <i>Кл</i>,
            <i>Па</i>, <i>А</i>, <i>Н</i>, <i>Ст</i>, <i>атм</i>, <i>бар</i>, <i>бр</i>, <i>тс</i>, <i>кгс</i>, <i>пк</i>
            (если на них не заканчивается предложение)</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>150 млрд долларов</td>
                <td>150 млрд
                    <del>.</del>
                    долларов
                </td>
            </tr>
            <tr>
                <td>Возьмите сена примерно 22 кг
                    <ins>.</ins>
                    И сожгите.
                </td>
                <td>Возьмите сена примерно 22 кг И сожгите.</td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>После точки</b> в сокращениях и инициалах <b>ставится пробел</b></p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>Пупкин К.
                    <ins></ins>
                    Г. и т.
                    <ins></ins>
                    д.
                </td>
                <td>Пупкин А.М. и т.д.</td>
            </tr>
        </table>
    </li>
    <li>
        <p>В одном тексте должны употребляться <b>единообразные сокращения</b>. Сокращение должно быть однозначным
            в рамках контекста. Предложение не должно начинаться с сокращения или <b>числа в цифровой форме</b>.</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>С 1901
                    <ins>г.</ins>
                    по 2000
                    <ins>г.</ins>
                    длился XX
                    <ins>в.</ins>
                </td>
                <td rowSpan="2">С 1901
                    <del>года</del>
                    по 2000
                    <del>г.</del>
                    длился XX
                    <del>в.</del>
                </td>
            </tr>
            <tr>
                <td>С 1901
                    <ins>года</ins>
                    по 2000
                    <ins>год</ins>
                    длился XX
                    <ins>век</ins>
                </td>
            </tr>
            <tr>
                <td>
                    Железная дорога — ж.
                    <ins></ins>
                    д. или ж
                    <ins>/</ins>
                    д<br/>
                    Железнодорожный — ж.
                    <ins>-</ins>
                    д.
                </td>
                <td>
                    Железная дорога — ж.д.<br/>
                    Железнодорожный — ж.д.
                </td>
            </tr>
            <tr>
                <td>
                    <ins>Около</ins>
                    1200 года компьютеров ещё не было
                </td>
                <td>
                    <del>Ок.</del>
                    1200 года компьютеров ещё не было
                </td>
            </tr>
            <tr>
                <td>Когда сдача проекта?
                    <ins>Пять</ins>
                    дней назад.
                </td>
                <td>Когда сдача проекта?
                    <del>5</del>
                    дней назад.
                </td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>Единица измерения</b> всегда пишется справа от числа. При перечислении она указывается только один
            раз.</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>200 тыс.
                    <ins> $</ins>
                </td>
                <td>
                    <del>$</del>
                    200 тыс.
                </td>
            </tr>
            <tr>
                <td>От 15 до 30%</td>
                <td>От 15
                    <del>%</del>
                    до 30%
                </td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>Пробелы в числах</b>. Решётка <i>#</i> — не знак номера. Арифметические знаки отбиваются, знаки
            положительности/отрицательности — нет. Знак процента не отбивается.</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>№
                    <ins></ins>
                    42-ф
                </td>
                <td>№42-ф</td>
            </tr>
            <tr>
                <td>Угол 15°</td>
                <td>Угол 15
                    <del></del>
                    °
                </td>
            </tr>
            <tr>
                <td>Температура −10
                    <ins></ins>
                    °С
                </td>
                <td>Температура −
                    <del></del>
                    10°С
                </td>
            </tr>
            <tr>
                <td>30%</td>
                <td>30
                    <del></del>
                    %
                </td>
            </tr>
            <tr>
                <td>−15
                    <ins></ins>
                    ·
                    <ins></ins>
                    +25
                </td>
                <td>−
                    <del></del>
                    15·+
                    <del></del>
                    25
                </td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>Промежуток значений</b> пишется через тире без отбивки, сокращения <i>г.</i>, <i>в.</i> и некоторые
            другие удваиваются для легкости мысленного прочтения. С отрицательными числами употребляется многоточие.
            Для словесной формы используется дефис. Последняя значащая цифра у числа и допустимого отклонения должна
            быть одного разряда. Единица измерения для допустимых отклонений ставится или за скобкой или у обоих
            чисел. При указании смежных годов через дробь у второго числа опускаются цифры столетия (если они
            совпадают).</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>−5
                    <ins>…</ins>
                    −10 °С
                </td>
                <td>−5
                    <del>—</del>
                    −10 °С
                </td>
            </tr>
            <tr>
                <td>Пять
                    <ins>-</ins>
                    семь часов
                </td>
                <td>Пять
                    <del>—</del>
                    семь часов
                </td>
            </tr>
            <tr>
                <td>
                    <ins>(</ins>
                    45,60 ± 2,14
                    <ins>)</ins>
                    мм <br/>
                    ИЛИ<br/>
                    45,60
                    <ins> мм</ins>
                    ±
                    <ins></ins>
                    2,14 мм
                </td>
                <td>45,6±2,14 мм</td>
            </tr>
            <tr>
                <td>Зима 1989/90 года</td>
                <td>Зима 1989/
                    <del>19</del>
                    90 года
                </td>
            </tr>
            <tr>
                <td>Зима 1999/
                    <ins>20</ins>
                    00 года
                </td>
                <td>Зима 1999/00 года</td>
            </tr>
            <tr>
                <td>Зима 1990—
                    <ins>19</ins>
                    91 годов
                </td>
                <td>Зима 1990
                    <del></del>
                    —
                    <del></del>
                    91 годов
                </td>
            </tr>
        </table>
    </li>
    <li>
        <p>Два <b>числа</b> в цифровой форме не должны стоять рядом. Числа длиннее 4 знаков разбиваются группами по
            три, круглые большие числа в тексте лучше писать прописью. <b>Дробная часть</b> не отбивается. У
            десятичных дробей дробная часть отделяется от целой запятой (а не точкой) и отбивается по три знака.
            Слова <i>часть</i>, <i>доля</i> после дроби не пишутся.</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>Лишь
                    <ins>семь</ins>
                    15-литровых бойлеров
                </td>
                <td>Лишь
                    <del>7</del>
                    15-литровых бойлеров
                </td>
            </tr>
            <tr>
                <td>10
                    <ins>&thinsp;</ins>
                    000
                </td>
                <td>10000</td>
            </tr>
            <tr>
                <td>Разворовано 20&thinsp;
                    <ins>млрд</ins>
                    долларов
                </td>
                <td>Разворовано 20&thinsp;
                    <del>000&thinsp;000&thinsp;000</del>
                    долларов
                </td>
            </tr>
            <tr>
                <td>3,141
                    <ins>&thinsp;</ins>
                    592
                    <ins>&thinsp;</ins>
                    7
                </td>
                <td>3,1415927</td>
            </tr>
            <tr>
                <td>2½ яблока</td>
                <td>2
                    <del></del>
                    ½
                    <del>часть</del>
                    яблока
                </td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>Падежное окончание порядкового числительного</b> однобуквенное, если предпоследняя буква — гласная
            и двухбуквенное, если согласная. Окончание наращивается у всех числительных, если их меньше двух подряд,
            иначе — только у последнего. Если падежные окончания разные, то они наращиваются у всех. Окончание
            обязательно наращивается, если опущено слово год или месяц.</p>
        <table>
            <tr>
                <th>Правильно</th>
                <th>Неправильно</th>
            </tr>
            <tr>
                <td>25-е</td>
                <td>25-
                    <del>ы</del>
                    е
                </td>
            </tr>
            <tr>
                <td>105-му</td>
                <td>105-
                    <del>о</del>
                    му
                </td>
            </tr>
            <tr>
                <td>40
                    <ins>-е</ins>
                    и 50-е годы
                </td>
                <td>40 и 50-е годы</td>
            </tr>
            <tr>
                <td>30, 40 и 50-е годы</td>
                <td>30
                    <del>-е</del>
                    , 40
                    <del>-е</del>
                    и 50-е годы
                </td>
            </tr>
            <tr>
                <td>В начале 70
                    <ins>-х</ins>
                    —80-е годы
                </td>
                <td>В начале 70—80-е годы</td>
            </tr>
            <tr>
                <td>В ноябре 2008
                    <ins>-го</ins>
                </td>
                <td>В ноябре 2008</td>
            </tr>
        </table>
    </li>
    <li>
        <p><b>Знаки пунктуации с кавычками, скобками</b></p>
        <table>
            <tr>
                <th>
                    <b>До кавычки</b><br/>
                    (если относятся только к кавычкам)
                </th>
                <th>
                    <b>После кавычки</b> (всегда)<br/>
                    До скобки [если относятся только к скобкам]
                </th>
                <th>
                    <b>После скобки и кавычки</b><br/>
                    (всегда)
                </th>
            </tr>
            <tr>
                <td><b>! ? …</b></td>
                <td><b>.</b></td>
                <td><b>, ; : —</b></td>
            </tr>
        </table>
        <p>
            Он поёжился — «Здесь кто-то есть»
            <ins>.</ins>
            <br/>
            Заказчик снова прислал картинки в DOC (ну сколько ж можно
            <ins>?</ins>
            )
            <ins>.</ins>
            <br/>
            Осталось вычитать пять новостей (вряд ли больше)
            <ins>!</ins>
        </p>
    </li>
</ul>

`
