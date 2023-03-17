import React from 'react';
import HandleClickScroll from "../../../Utils/HandleClickScroll";

const ContentAnchorsList = () => {
  return (
    <>
      <p>Содержание:</p>

      <ul className="listStyle">
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"descriptionHDD")}
          >HDD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"manufacturesHDD")}
          >Производители HDD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"discsPurposes")}
          >Назначения дисков</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"discStrength")}
          >Прочность, независимая статистика по браку Backblaze</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"HDDFormFactors")}
          >Форм-факторы HDD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"HDDValue")}
          >Объём HDD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"spinSpeed")}
          >Скорость вращения шпинделя</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"IOPS")}
          >Количество операций ввода-вывода в секунду (IOPS)</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"cacheMemoryValue")}
          >Объём кеш-памяти</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"connectionInterface")}
          >Интерфейс подключения</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"HDDSelectionAlgorithm")}
          >Алгоритм выбора HDD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"descriptionSSD")}
          >SSD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"SSDForm-factors")}
          >Виды и Форм-факторы SSD</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"SpeedSSD")}
          >Скорости SSD накопителей</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"NVMe")}
          >Стандарт NVMe</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"TypesSSD")}
          >Типы памяти SSD накопителей</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"ControllerSSD")}
          >Контроллер SSD накопителей</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"SSDSelectionAlgorithm")}
          >Алгоритм выбора SSD</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;