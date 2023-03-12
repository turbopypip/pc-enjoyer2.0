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
               HandleClickScroll(e,"opMemoryDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemoryTypes")}
          >Типы памяти</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemoryVolume")}
          >Объём оперативной памяти</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemoryFrequency")}
          >Эффективная частота</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemoryXMPAndDOCP")}
          >XMP и DOCP профили</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemoryOutsideFactors")}
          >Факторы, влияющие на характеристики памяти</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"opMemorySelectionAlgorithm")}
          >Алгоритм выбора оперативной памяти</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;