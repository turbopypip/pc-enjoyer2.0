import React from 'react';
import ContentAnchorsList from "./ContentAnchorsList";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";
import Photo1 from "./Photos/coolingSystemPhoto1.png";
import Photo2 from "./Photos/coolingSystemphoto2.png";
import Photo3 from "./Photos/coolingSystemPhoto3.png";
import Photo4 from "./Photos/coolingSystemPhoto4 .png";
import Photo5 from "./Photos/coolingSystemPhoto5.png";
import Photo6 from "./Photos/coolingSystemPhoto6.svg";

const CoolingSystem = () => {
  return (
    <div className="PageContainer">
      <h1 className="sloganAndAccesoireName">Система охлаждения</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph">Описание</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />Башенный кулер – часть системы воздушного охлаждения Вашего ПК, используемая для отвода тепла, образующегося в ходе работы процессора. Представляет собой радиатор большого размера, соединённый с тепловыми трубками. У кулера бывает, как несколько секций радиаторов, так и несколько вентиляторов
      </p>
      <p>
        Пример кулера:
      </p>
      <p>
        <img src={Photo1} className="coolingSystemPhoto1"/>
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />Задача радиатора – передать тепло от крышки процессора к всем своим поверхностям, многократно увеличив площадь той поверхности, с которой контактирует воздух. Задача вентилятора – постоянно подводить к радиатору холодный воздух, который должен вытеснять более горячий.
      </p>
      <p>
        Процесс отвода тепла – контактный, поскольку тепло радиатора передаётся непосредственно при контакте с воздухом. Часть тепла радиатора отводится излучением, поскольку любое тело, имеющее температуру выше нуля Кельвинов, излучает энергию в виде электромагнитных волн.
      </p>
      <p>
        Система водяного охлаждения (СВО) - часть системы водяного охлаждения Вашего ПК, используемая для отвода тепла, образующегося в ходе работы процессора. Представляет собой радиатор большого размера, соединённый с резервуаром жидкости, участвующей в теплообмене с радиатором пластиковыми трубками. Пример СВО:
      </p>
      <p>
        <img src={Photo2} className="coolingSystemPhoto2"/>
      </p>

      <h2 className="contentParagraph">TDP</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />Такой параметр как TDP (конструктивные требования по теплоотводу от англ. Thermal Design Power) является ненадёжным, так как производители разных комплектующих вычисляют его по-разному и на данный момент он необъективен.
      </p>

      <h2 className="contentParagraphq">Размер кулера и других комплектующих.</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />Первым делом нужно определить, сможет ли выбранный кулер вообще поместиться в корпусе ПК. В характеристиках корпуса указаны максимально допустимые параметры размера кулера, однако в них нередко написана высота башни, из-за чего сам вентилятор или тепловые трубки могут выпирать на несколько сантиметров, что станет крайне неприятным сюрпризом при сборке.
      </p>
      <p>
        Во избежание таких ситуаций рекомендуем брать с запасом в несколько сантиметров. Затем изучаем длину модулей ОЗУ (Оперативной памяти), так как кулера нередко либо полностью закрывают один из слотов, либо вынуждают поднимать вентилятор выше для комфортной установки модулей, что может мешать закрытию крышки корпуса ПК.
      </p>
      <p>
        Оптимальным решением проблемы станет поиск в Интернете изображений выбранной модели кулера, установленной на материнскую плату с оперативной памятью на борту и сравнить с Вашей сборкой (сравнить высоту ОЗУ с материнской платы и высоту Вашего ОЗУ).
      </p>

      <h2 className="contentParagraph">Крепление</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />В характеристиках кулера также указываются и поддерживаемые сокеты, однако не стоит опираться только на них. Дело в том, что крепления некоторых сокетов идентичны, однако верным способом проверить совместимость будет проверить её в спецификации выбранной системы охлаждения, будь то водяное или воздушное.
      </p>
      <p>
        В случае, если вам очень понравилась система охлаждения, но её крепёж вашей материнской платой не поддерживается или он не идёт в комплекте с выбранной моделью, то для некоторых вы можете докупить или запросить у производителя нужный крепёж.
      </p>

      <h2 className="contentParagraph">Параметры выбора</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />Если вы не собираетесь заниматься разгоном процессора или хотите использовать технологии Turbo Core или Turbo Boost для повышения тактовой частоты, то вам потребуется башенный кулер стоимостью до 1.5 тысяч рублей, а выбрать лучший кулер вы сможете по количеству тепловых трубок и размеру башни (чем больше, тем лучше).
      </p>
      <p>
        В случае разгона крайне тяжело дать конструктивный метод оценки системы охлаждения. Здесь вашим лучшим помощником станут тесты из сети. Перед началом выбором кулера следует помнить о его наличии вместе с процессором в комплектации BOX (Если кулера в такой комплектации нет, то это указывается заранее) и отсутствии в комплектации OEM.
      </p>
      <p>
        Кулеров подобных форматов будет хватать для процессоров с TDP до ~60 Вт.
      </p>
      <p style={{display: "flex"}}>
        <img src={Photo3} className="coolingSystemPhoto3"/>
        <img src={Photo4} className="coolingSystemPhoto4"/>
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />Это связано с особенностями передачи тепла материалов с кристаллической решёткой, а в частности – металлов. На атомном уровне такого понятия как температура нет, но есть понятие энергии.
      </p>
      <p>
        Вариантов хранить энергию у атомов немного, а самый значимый из них – увеличение кинетической энергии, в связи с чем при повышении температуры атомы начинают колебаться в близи устойчивых положений кристаллической решётки.
      </p>
      <p>
        Колебания возмущают баланс действующих сил, которые определяют форму решётки и колебания начинают происходить в узлах ближайших атомов, а кинетическая энергия возникает за счёт преобразования электромагнитных сил, обуславливающих форму решётки.
      </p>
      <p>
        Таким образом, передача энергии (тепла) происходит между слоями атомов и с увеличением дистанции от атома до источника тепла энергия всё более рассеяно передаётся дальше.
      </p>
      <p>
        В конечном итоге – радиатор прогреется равномерно, но поскольку вентилятор обдувает не причину появления тепла (процессор), а неэффективно прогреваемый радиатор, дальнейшее увеличение высоты башни не даст совершенно никакого прироста эффективности охлаждения.
      </p>
      <p>
        Однако для максимального увеличения высоты таких кулеров внутрь самого радиатора устанавливают медный сердечник, поскольку медь переносит тепло быстрее алюминия. И этому есть предел.
      </p>
      <p>
        Такая технология на практике позволяет увеличить максимальную высоту радиатора на пару сантиметров. Проблема данной конструкции кроется в том, что форма радиатора не позволяет эффективно его обдувать.
      </p>
      <p>
        Воздух плохо обдувает нижнюю часть вентилятора, поскольку имеет возможность уходить в любую сторону. Как итог, такие кулеры являются наиболее неэффективным инженерным решением.
      </p>

      <p>
        Кулеры такого формата подойдут для работы с TDP до ~90 Вт, в некоторых случаях с разгоном, однако при выборе такого кулера лучше всего опираться на тесты из сети.
      </p>
      <p>
        <img src={Photo5} className="coolingSystemPhoto5"/>
      </p>

      <p>
        <img src={PhysicsIcon} width="20" height="20" />Существует несколько аналогов кулеров, описанных выше, и среди них всех прослеживается одна тенденция – инженеры-конструкторы при их создании стремились не создавать больших массивов металлов внутри радиаторов, поскольку именно постепенное распространение тепла от источника к самой дальней от него точки является проблемой
      </p>
      <p>
        Одно из решений этой проблемы, представленное на изображении выше, завязано на уменьшении и утончении центральной части радиатора, а также на утончении лучей радиатора. Такие кулеры бывают и медными, по описанным выше причинам.
      </p>
      <p>
        В таких кулерах вокруг сердечника вместо массивного алюминиевого радиатора расположены тонкие пластины из алюминия или меди – ламели. Когда конец ламели нагревается, то и вся ламель начинает нагреваться быстрее.
      </p>
      <p>
        Из-за тонкости ламели можно разместить в большем количестве и плотнее, тем самым увеличив площадь поверхности радиатора – площадь рассеивания. За счёт формы кулера вентилятор может быть довольно большого диаметра, большего чем на предыдущем виде кулера, что означает больший обдув при равном уровне шума.
      </p>
      <p>
        Третий тип кулеров – башенные, существующие в двух вариациях: с вертикальным и горизонтальным расположением вентиляторов. Задумка создания кулера таких форм в том, чтобы вынести радиатор из той зоны где есть ограничение по габаритам в ту зону, где ограничения отсутствуют.
      </p>
      <p>
        Конечно, если делать кулер только из меди или алюминия, мы наткнёмся на ту же проблему, которая преследует предыдущие два вида кулеров – неизбежность свойств материалов с кристаллической решёткой. Поэтому для быстрого переноса тепла для таких кулеров применяют полые трубки, причём их толщина должна быть достаточно маленькой.
      </p>
      <p>
        Внутри трубок – летучая жидкость или вода, в зависимости от нужной степени эффективности кулера. Внутри трубки также присутствует материал с волокнистой пористой структурой. В зоне нагрева впитавшаяся в эту структуру жидкость вскипает, а процесс кипения и испарения и является следствием отбора тепла от горячего источника.
      </p>
      <p>
        Процесс терморегуляции человека за счёт пота схож с данной структурой, так что можно сказать, что инженеры в некотором роде применили биомимикрические технологии при создании этого способа передачи тепла. В трубке летучая жидкость или вода испарется и забирает тепло и улетучивается в те зоны, где давление ниже – к краям трубки.
      </p>
      <p>
        Доходя до краёв газ отдаёт энергию через стенки трубок на ламели радиатора, конденсируется и впитывается в волокна, в конечном итоге снова попадая к самой горячей – процессорной зоне и процесс повторяется.
      </p>
      <p>
        Из-за отсутствия у летучей жидкости кристаллической решётки при нагреве атомы начинают беспрепятственно двигаться по трубке, а не колебаться вокруг устойчивого положения, как в металлах.
      </p>
      <p>
        Вот схема работы трубки:
      </p>
      <p>
        <img src={Photo6} className="coolingSystemPhoto6"/>
      </p>
      <p>
        Однако, у трубки есть ограничение по передаче тепла, теплоёмкость переноса тепла у трубки – низкая, а обмен тепла не мгновенный. Если количества тепла будет больше, чем трубка может перенести, то часть тепла не будет передана. Из-за этого может возникнут ситуация, при которой почти вся летучая жидкость перейдёт в газообразное состояние, и отбор тепла прекратится почти полностью.
      </p>
      <p>
        Эта проблема решается несколькими способами – увеличением диаметра трубки или увеличением числа трубок. Просто, к примеру, сделать трубки большого размера не получится, поскольку вся конструкция и так имеет низкую жёсткость из-за толщины стенок трубки.
      </p>
      <p>
        Поэтому, эти способы решения проблемы чаще всего применяются комбинированно. Для самого радиатора существуют следующие критерии: длина, высота, ширина и расстояние между каждой пластиной.
      </p>
      <p>
        Закономерно, производителям приходиться искать компромисс между двух ключевых параметров: расстоянием между пластинами и площадью поверхности радиатора. Расстояние между пластинами нельзя сильно уменьшить, поскольку продувать башню вентилятору станет многократно сложнее, но если шаг будет слишком большим, то эффективность башни упадёт за счёт меньшей площади поверхности.
      </p>
      <p>
        Тем не менее, современные технологии симуляции воздушных потоков позволяют производителям тестировать различные формы башен без дополнительных затрат.
      </p>
      <p>
        Стенки некоторых радиаторов частично закрывают в тех местах, где не хватает давления воздуха для успешной доставки его на другую сторону радиатора и, впоследствии, на выдув из корпуса.
      </p>

      <p>
        Отдельно покупать кулер следует при разгоне процессора или желании снизить температуру процессора, количество шума. Если вы выберете кулер, вентилятор которого имеет низкую скорость и низкий уровень шума при большой башне, то работа вентилятора не будет иметь совершенно никакого смысла, поскольку он не сможет продувать башню.
      </p>
      <p>
        За правило можно взять следующее: выделяющие большое количество тепла процессора будут тише при работе с большими башнями, а процессора низкой и средней мощности будут тише вместе с башнями средних и маленьких размеров.
      </p>
      <p>
        В целом, при потреблении процессором до 120-150 ватт (при условии отсутствия разгона) тонкая башня вместе с низкими оборотами вентилятора с максимально большим вентилятором дадут вам максимальную тишину. Такой радиатор должен иметь толщину 4-5 сантиметров, 3-4 теплотрубки с вентилятором длиной и шириной 120-140 мм.
      </p>
      <p>
        Если тепловыделение превышает 150 ватт, то минимальная толщина радиатора – 6-7 сантиметров. Если тепло выделение превышает 170 ватт, то вам понадобится либо башня с двумя отдельными радиаторами, либо с одним, продуваемым с двух сторон вентиляторами.
      </p>

      <h3 className="contentParagraphTopics">Особенности изготовления пластин радиатора</h3>
      <p>
        Покупая башенный кулер в магазине, вы можете провести быстрый тест на качество изготовления радиаторных пластин, если поскребёте края пластины ногтем. Если ноготь будет за них цепляться, это нехороший знак.
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />Это негативный знак поскольку проходя любые преграды, воздух создаёт за ними зоны пониженного давления. Воздух проходящий, рядом с этими зонами втягивается в них. Даже выступы в 0,1 миллиметров могут существенно увеличивать требуемое давление для продува радиатора, как будто расстояние между пластинами уменьшилось на 0,2-0,3 миллиметра. Из-за этого вентиляторы будут шуметь больше, поскольку скорость вращения лопастей увеличится для создания большего давления.
      </p>

      <h3 className="contentParagraphTopics">Крепление вентиляторов к башне</h3>
      <p>
        Крепления вентиляторов к радиатору бывают нескольких видов – проприетарные, заменить которые после выработки ресурса не сможете, на металлических скобах и на пластиковых креплениях. Последние два вида отличаются лишь удобством крепления виброгасящих элементов к самим креплениям. Однако у дорогих башен такие элементы чаще всего предусмотрены даже при скобном креплении.
      </p>

      <h3 className="contentParagraphTopics">Подшипник вентилятора</h3>
      <p>
        Наиболее дешёвые варианты подшипника – главного вращающего элемента вентилятора – подшипник втулкового типа. Такие вентиляторы довольно тихие, поскольку имеют лишь одну движущуюся часть. Однако при длительной эксплуатации такие подшипники быстро изнашиваются. Работают такие вентиляторы от 2,5 до 3,5 лет, но это ресурс до выхода из строя, а шуметь они начинают и раньше.
      </p>
      <p>
        Второй тип подшипников – шарико-роликовые шум таких подшипников не нарастает гораздо дольше. Ресурс до выходя из строя таких подшипников – 7-10 лет работы. Для процессоров малой мощности рекомендуется использовать этот тип подшипников, поскольку третий тип может пострадать от частого включения ПК.
      </p>
      <p>
        Третий тип гидродинамические и/или с магнитным центрированием. Если такой подшипник начинает изнашиваться, то он быстро выходит из строя. Ресурс до выходя из строя таких подшипников – 7-30 лет работы.
      </p>

      <h3 className="contentParagraphTopics">Уровень шума</h3>
      <p>
        При низких оборотах вентилятора – до 300 в минуту, звук, как правило находится в неслышимом человеком диапазоне. При переходе через 800-1000 оборотов шум достигает частот, при которых можно чётко различать его местоположение. Свыше 1300-1500 оборотов будут слышны и самые дорогие вентиляторы. При достижении 2000 оборотов звук будет неприятным независимо от громкости. Вентиляторы с большим количеством оборотов не рекомендуются к покупке из-за негативного влияния шума на организм человека.
      </p>

      <h3 className="contentParagraphTopics">СВО</h3>
      <p>
        Задумываться о приобретении СВО стоит только в случае крайне высокого энергопотребления выбранного процессора и ориентировочно от 8-и ядер. Оценить эффективность той или иной системы для одного процессора вы можете благодаря тестам из сети. Дополнительно для СВО требуется специальный разъём для питания помпы, а иногда и нескольких помп.
      </p>
      <p>
        Также в параметрах корпуса должна быть поддержка установки СВО соответствующего размера. Также вы должны помнить, что брак СВО может вести за собой потерю или потребность в ремонте других комплектующих ПК, а также то, что он встречается чаще, чем у башенных кулеров.
      </p>
      <p>
        Если вы всё-таки решились приобрести водяное охлаждения, то не стоит обращать внимания на СВО с длиной радиатора менее чем 280 мм, поскольку она будет примерно так же эффективна, как и хорошие башенные кулеры, но дороже.
      </p>
      <p>
        В случае с СВО, так же, как и с башенными кулерами, толстые радиаторы будут шуметь сильнее, если используются с вентиляторами на малых оборотах, и соответственно, процессорах недостаточной мощности. Поэтому в случаях сильного разгона процессора рекомендуется покупать СВО с толстыми радиаторами.
      </p>

      <h2 className="contentParagraph">Алгоритм выбора системы охлаждения</h2>

      <h3 className="contentParagraphTopics">В случае выбора башенного кулера</h3>
      <p>
        <img src={MoneyIcon} width="20" height="20" />1. Отфильтруйте поиск по крепежу кулера, BOX или OEM версии поставки.
        <br/>
        2. Учтите размерные нюансы относительно ОЗУ и высоты кулера.
        <br/>
        3. Для оценки требуемой рассеиваемой мощности, используйте информацию из раздела “параметры выбора”.
      </p>
      <h3 className="contentParagraphTopics">В случае выбора СВО</h3>
      <p>
        <img src={MoneyIcon} width="20" height="20" />1. Отфильтруйте поиск по крепежу, длине радиатора.
        <br/>
        2. Проверьте на совместимость корпус и СВО.
        <br/>
        3. Для оценки требуемой рассеиваемой мощности, используйте информацию из раздела “параметры выбора”.
      </p>
    </div>
  );
};

export default CoolingSystem;