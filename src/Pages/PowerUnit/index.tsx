import React from "react";
import ContentAnchorsList from "./ContentAnchorsList";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";
import Photo1 from "./Photos/powerUnitPhoto1.png";
import Photo2 from "./Photos/powerUnitPhoto2.png";
import Photo3 from "./Photos/powerUnitphoto3.png";
import Photo4 from "./Photos/powerUnitphoto4.svg";
import Photo5 from "./Photos/powerUnitPhoto5.png";
import PowerUnitPowerCalculator from "./PowerUnitPowerCalculator";

const PowerUnit = () => {
  return (
    <div className="PageContainer">
      <h1 className="sloganAndAccesoireName">Блок питания</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph" id="powerUnitDescription">
        Описание
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Блок питания (БП) имеет форму параллелепипеда, на одной из граней
        которого есть отверстия для отверстия для входа воздуха, а на другой –
        для выхода.
      </p>
      <p>
        На одной из граней расположен разъём для подключения блока питания к
        розетке. Из противоположной грани блока выходят провода, питающие
        компоненты системы.
      </p>
      <h3 className="contentParagraphTopics">Модульность</h3>
      <p>
        Блоки питания бывают модульными, полу модульными и стандартными.
        Модульные блоки имеют возможность отсоединения от них любых проводов,
        полу модульные – лишь некоторых проводов, от стандартного блока
        отсоединить с возможностью присоединить обратно вы ничего не сможете.
        Модульность блоков влияет только на внешний вид и удобство вашей сборки.
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />
        Блок питания ПК имеет одну ключевую задачу – преобразовать огромное для
        компьютера напряжение из розетки в соответствии с электрическими
        требованиями всех потребляющих электричество компонентов ПК. Чаще всего,
        230 вольт от розетки он разбивает на линии с напряжением в 3, 5, 12
        вольт.
      </p>
      <p>
        Линии в 3 и 5 вольт обычно питают накопители, вентиляторы, материнскую
        плату, подсветку. Линии в 12 вольт также питают эти устройства, но
        параллельно задействуются для питания процессора и видеокарты. Эти два
        компонента системы - самые энергозатратные для блока.
      </p>

      <h2 className="contentParagraph" id="powerUnitForm-Factors">
        Форм-факторы БП
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        На текущий момент реалистично встретить на рынке четыре форм-фактора БП:
        ATX (86x150x140 мм), SFX-L (64x125x125 мм), SFX (64x125x100 мм), TFX
        (64x85x175 мм). ATX – самый распространённый и рекомендованный к покупке
        для корпусов форм-фактора ATX. SFX-L и SFX – идеальные форматы для
        мини-ПК.
      </p>
      <p>
        Последний форм-фактор используется крайне редко, так как его
        максимальная мощность не превышает 350 ватт, поэтому для миниатюрного
        офисного ПК он подойдёт идеально. Расположение блоков меньших размеров в
        больших корпусах возможно благодаря переходникам, однако блоки меньших
        размеров уступают большим по всем характеристикам, кроме габаритов.
      </p>
      <p>
        При выборе БП под корпус, помимо соответствия форм фактора БП форм
        фактору корпуса, нужно учитывать максимальную длину блока питания,
        которую вы можете найти в характеристика корпуса.
      </p>

      <h2 className="contentParagraph" id="powerUnitConnectors">
        Питающие разъёмы БП
      </h2>
      <p>
        При выборе блока питания стоит обращать внимания на количество кабелей,
        питающих то или иное устройство. Пин – маленький металлический стержень,
        находящийся чаще всего в почти таком же маленьком пластмассовом корпусе
        в форме параллелепипеда.
      </p>
      <p>
        Глядя на количество стержней или пластиковых корпусов вы всегда можете
        определить сколько пин имеет разъём.
      </p>
      <p>
        Кабели MOLEX используются для питания некоторых вентиляторов напрямую,
        для разветвителей к нескольким вентиляторам с другим – 4-ёх или 3-ёх
        пиновым разъёмом. 3-ёх пиновый разъём для питания вентилятора совместим
        с 4-ёх пиновой компоновкой разъёма кабеля самого вентилятора, но не
        наоборот.
      </p>
      <p>
        Кабели SATA питают жёсткие диски и SSD-накопители, подсоединяемые к
        материнской плате через кабель SATA-SATA.
      </p>
      <p>
        Кабели питания PCI-E (разъём видео и других карт) имеют пиновую
        структуру. Количество пин блока питания и видеокарты должны строго
        совпадать, поскольку в случае избыточности и не модульности коннектора,
        вы физически не сможете оставить часть ненужных коннекторов не
        подключёнными.
      </p>
      <p>
        Кабели питания CPU (процессора) имеют пиновую структуру. Их количество у
        блока должно превышать или равняться количеству разъёмов на материнской
        плате (чаще всего над сокетом процессора). Строгое соответствие пинов
        кабеля и платы не необходимо.
      </p>

      <h2 className="contentParagraph" id="powerUnitCountOfPower">
        Мощность блока питания
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Мощность БП – ключевая характеристика при сборке ПК. Ещё важнее –
        мощность БП по 12-ти вольтовой линии, так как по ней питаются самые
        энергозатратные компоненты – процессор и видеокарта. У хороших БП общая
        номинальная мощность, которая и рисуется на коробке почти равна мощности
        по 12-ти вольтовой линии. Однако у бюджетных моделей она может быть
        существенно меньше. На самом блоке мощность по 12-ти вольтовой линии
        обозначается так:
      </p>
      <p>
        <img src={Photo1} className="powerUnitPhoto1" />
      </p>
      <p>Иногда 12-ти вольтовую линию разделяют, как здесь:</p>
      <p>
        <img src={Photo2} className="powerUnitPhoto2" />
      </p>
      <p>Иногда эту линию можно разделить переключателем на блоке:</p>
      <p>
        <img src={Photo3} className="powerUnitPhoto3" />
      </p>
      <p>
        Разделённые линии обладают меньшим запасом мощности чем целые. Посчитать
        мощность вы можете, умножив количество ампер по линии на 12. При
        превышении допустимой нагрузки на линию, блок выключится.
      </p>
      <br />
      <p>
        Воспользовавшись калькулятором мощности блока питания (ссылка вниз
        страницы) Вы сможете точно рассчитать необходимую мощность БП в
        соответствии с выбранными комплектующими ПК.
      </p>
      <p>
        Если Вы планируете будущее улучшение компонентов системы, посчитайте
        мощность для предполагаемого апгрейда или прибавите к мощности БП для
        текущей сборки 100-150 ватт. При конечном выборе блока всегда смотрите
        именно на мощность по 12-ти вольтовой линии, а не по номинальной.
      </p>
      <p>
        На страницах магазинов с видеокартами вы можете встретить графу
        “Рекомендуемая мощность блока питания”. Мощность, указанная под этой
        графой, является крайне неточной, так как считается примерно для всей
        системы, компоненты которой никому, кроме создателей этой графы
        неизвестны. Поэтому, не придавайте им совершенно никакого значения.
      </p>

      <p>
        Максимальная эффективность любого блока питания достигается в
        соответствии с графиком отношения коэффициента полезного действия к
        задействованной мощности блока питания. Пример такой кривой:
      </p>
      <p>
        <img src={Photo4} className="powerUnitPhoto4" />
      </p>
      <p>
        У каждого блока питания такая кривая отличается. Найти её Вы можете в
        технических характеристиках блока или на коробке от него. Ваш блок будет
        потреблять меньшее количество электричества и меньше нагреваться если он
        будет загружен на процент, соответствующий максимальному КПД.
      </p>

      <h2 className="contentParagraph" id="powerUnitNoiseLevel">
        Уровень шума и сертификация Lambda
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Большая нагрузка на блок питания всегда означает больший шум
        вентилятора, охлаждающего блок. Поэтому если вам важна тишина, стоит
        покупать блок с дополнительным запасом мощности (в соответствии с
        кривой, описанной в разделе про мощность). Сертификация Lambda поможет
        вам определить средний (но не максимальный) уровень шума БП.
      </p>
        <p>
              Таблица соответствия уровню сертификата шуму:
        </p>

      <p>
        <img src={Photo5} className="powerUnitPhoto5" />
      </p>

      <h2 className="contentParagraph" id="powerUnitCertification">
        Сертификация 80 PLUS
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Уровни сертификата 80 PLUS показывает максимальное значение КПД блока, а
        также скорость увеличения КПД при увеличении нагрузки.
      </p>
      <p>
        Хороший сертификат не всегда означает, что блок питания также хорош,
        однако хороший блок питания почти всегда будет иметь как минимум уровень
        80 PLUS. Описанные выше параметры возрастают от обычного 80 PLUS
        сертификата в следующем порядке: BRONZE, SILVER, GOLD, PLATINUM,
        TITANIUM.
      </p>

      <h2 className="contentParagraph" id="powerUnitSelectionAlgorithm">
        Алгоритм выбора БП
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        1. Выберите подходящую мощность БП при помощи калькулятора с учётом
        предполагаемого обновления комплектующих и считая мощность именно по
        12-ти вольтовой линии.
      </p>
      <p>
        2. Отсортируйте поиск по наличию сертификата 80 PLUS и Lambda,
        форм-фактору БП.
      </p>
      <p>
        3. Определите надобность модульности БП в соответствии с той суммой, за
        которую вы за неё заплатите. Выбирая блок, не сортируйте поиск по
        разъёмам питания. Самостоятельно проверяйте на соответствие количество
        разъёмов питания блока с нужным количеством.
      </p>
      <p>
        {
          "4. Крайне рекомендуем ознакомится с оценкой БП от портала 4PDA по данной "
        }
        <a
          href="https://cutt.ly/ZPICOB6"
          target="_blank"
          className="linkToTheOtherWebsite"
        >
          <svg
            className="linkIcon"
            viewBox="0 0 16 16"
            version="1.1"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
            ></path>
          </svg>
          ссылке
        </a>
        {
          ". Рекомендуем покупать блоки с оценкой в таблице от 7 и выше. Однако, стоит помнить что далеко не все БП были протестированы для создания этой таблицы. Отношение цены к качеству товара в таблице не учитывается."
        }
      </p>


      <h2 className="contentParagraph" id="powerUnitPowerCalculator">
        Калькулятор мощности блока питания
      </h2>
      <PowerUnitPowerCalculator />
    </div>
  );
};

export default PowerUnit;
