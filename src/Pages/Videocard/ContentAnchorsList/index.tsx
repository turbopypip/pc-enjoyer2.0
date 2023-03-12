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
               HandleClickScroll(e,"videoCardDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardTypes")}
          >Виды видеокарт</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardPoweracity")}
          >Производительность</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardVideoMemory")}
          >Видеопамять</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardWidthOfABus")}
          >Разрядность шины видеопамяти</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardPowerSource")}
          >Питание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardCooling")}
          >Охлаждение</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardBuyingExperience")}
          >Нюансы покупки</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"videoCardSelectionAlgorithm")}
          >Алгоритм выбора видеокарты</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;