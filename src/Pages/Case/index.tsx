import React from "react";
import ContentAnchorsList from "./ContentAnchorsList";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";
import Photo1 from "./Photos/casePhoto1.png";
import Photo2 from "./Photos/casePhoto2.png";
import Photo3 from "./Photos/casePhoto3.png";
import Photo4 from "./Photos/casePhoto4.png";
import Photo5 from "./Photos/casePhoto5.png";
import Photo6 from "./Photos/casePhoto6.png";

const Case = () => {
  return (
    <div>
      <h1 className="sloganAndAccesoireName">Корпус</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph" id="caseDescription">
        Описание
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        После выбора всех комплектующих компьютера необходимо выбрать под них
        корпус. Корпус – внешняя оболочка компьютера, защищающая его от пыли и
        неэффективного распределения воздушных потоков.
      </p>
      <p>
        Корпусы могут быть самых разных форм, но все они стандартизированы под
        один из форм-факторов.
      </p>

      <h2 className="contentParagraph" id="caseForms">
        Форм-фактор корпуса
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Основной характеристикой коруса является его размер. Корпусы
        классифицируются по размеру поддерживаемой материнской платы на:
      </p>
      <p>
        Mini-ITX (170х170 мм), Micro-ATX (244х244 мм), ATX (305x244 мм), E-ATX
        (305х330 мм), XL-ATX (345х262 мм)
      </p>
      <p>
        В корпус с поддержкой больших форм-факторов почти всегда можно вставить
        материнскую плату меньшего размера, но не наоборот.
      </p>
      <p>
        После сравнения форм-фактора материнской платы с поддерживаемым, крайне
        рекомендуем сравнить размеры видеокарты, БП (блока питания) и системы
        охлаждения процессора с допустимыми.
      </p>
      <p>
        В большинстве современных ПК используются платы размера ATX и Micro ATX.
        Данные форм-факторы подойдут для сборки ПК любой конфигурации, начиная
        от офисного варианта, заканчивая игровым или рабочим компьютером.
      </p>
      <p>
        Желательно заранее спланировать порядок установки и расположение
        проводов для максимальной скорости сборки ПК. Кабель-менеджмент позволит
        избежать трудностей при сборке ПК, его обновлении, и устранении
        неполадок. Нужно учитывать максимальную длину видеокарты и максимальную
        высоту башни охлаждения центрального процессора.
      </p>

      <h2 className="contentParagraph" id="caseCooling">
        Охлаждение и организация воздушных потоков
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />В корпусе может
        располагаться разное количество системных вентиляторов, как заранее
        установленных, так и требующих Вашего вмешательства в установке.
      </p>
      <p>
        В системах воздушного охлаждения чем больше вентиляторов, тем лучше,
        однако не менее важна организация движения потоков воздуха внутри
        корпуса:
      </p>
      <p>Холодный воздух поступает снизу, горячий выходит сверху.</p>
      <p>
        Не стоить ставить все вентиляторы только на вдув или же только на выдув.
      </p>
      <p>Пример хорошей организации воздушных потоков:</p>
      <p>
        <img src={Photo1} className="casePhoto1" />
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">Преимущества этой системы</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          1. При такой схеме избегается смешивание холодных и горячих потоков вне
          корпуса, так как горячий воздух легче холодного и стремится вверх, а
          холодный стремится вниз.
        </p>
        <p>
          2. Если все вентиляторы ставить на вдув, это повысит давление внутри ПК,
          что эффективнее защитит его от пыли, но потребует большей работы от
          вентиляторов для преодоления сопротивления воздуха, из-за чего те
          будут больше шуметь и быстрее изнашиваться.
        </p>
        <p>
          3. Если все вентиляторы ставить на выдув, давление внутри ПК понизится,
          из-за чего пыль будет стремиться внутрь корпуса.
        </p>
      </div>

      <p>
        Охлаждению способствуют антипылевые фильтры (не забудьте их своевременно
        очищать) и сетчатые панели корпуса. Однако, сетчатые панели не
        препятствуют распространению звука, что делает ПК шумнее.
      </p>
      <p>
        От шума уберегает предустановленный шумопоглощающий материал, но нужно
        помнить о его стоимости и препятствовании охлаждению. Если Вам не
        нравится такой вариант, но шум нужно снизить, помогут силиконовые
        гвозди, ведь они уменьшают вибрации от вентиляторов.
      </p>
      <p>
        Вместо воздушной системы охлаждения в корпусе может быть предустановлена
        система водяного охлаждения.
      </p>

      <h2 className="contentParagraph" id="caseConvenience">
        Дополнительные удобства
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        После рассмотрения способа охлаждения переходим к удобству корпуса.
      </p>
      <p>1. Состав и расположение портов корпуса.</p>
      <p>
        <img src={Photo2} className="casePhoto2" />
      </p>
      <p>
        2. Высокие ножки с прорезиненными накладками. Высота позволяет лучше
        вдувать воздух снизу, а резина препятствует скольжению.
      </p>
      <p>
        3. Безвинтовое крепление HDD/SDD. Упрощает установку и снятие устройств
        хранения данных.
      </p>
      <p>4. Возможность укладки кабелей за задней крышкой корпуса.</p>
      <p>
        <img src={Photo3} className="casePhoto3" />
      </p>
      <p>
        5. Наличие реобаса (устройства регулировки мощностей вентиляторов) и
        контроллера вентиляторов, к которому они будут подключаться.
      </p>
      <p>
        <img src={Photo4} className="casePhoto4" />
      </p>
      <p>
        6. Кожух, закрывающий БП. Чаще всего несёт эстетическую функцию
        (например, если блок питания не будет подходить по цвету корпусу).
      </p>
      <p>
        <img src={Photo5} className="casePhoto5" />
      </p>
      <p>7. Наличие открывающейся боковой стенки с ручкой.</p>
      <p>
        <img src={Photo6} className="casePhoto6" />
      </p>
    </div>
  );
};

export default Case;
