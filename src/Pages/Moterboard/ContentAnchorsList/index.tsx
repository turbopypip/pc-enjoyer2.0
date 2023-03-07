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
              HandleClickScroll(e,"motherboardDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardSizes")}
          >Размеры (форм-факторы) материнских плат</a>
        </li>
        <li>
          <a className="anchorLink"
            onClick={(e) =>
              HandleClickScroll(e,"motherboardSocket")}
          >Сокет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardCompatibility")}
          >Совместимость процессора и BIOS платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardChipset")}
          >Чипсет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardVRM")}
          >VRM материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardPowerSystemCooling")}
          >Охлаждение системы питания</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardQVLCanalsTopology")}
          >QVL список, каналы и топология материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardPowerSupply")}
          >Питание материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardConnectors")}
          >Разъемы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardExtraInformation")}
          >Дополнительные сведения</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"motherboardSelectionAlgorithm")}
          >Алгоритм выбора материнской платы</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;