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
               HandleClickScroll(e,"powerUnitDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitForm-Factors")}
          >Форм-факторы БП</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitConnectors")}
          >Питающие разъёмы БП</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitCountOfPower")}
          >Мощность блока питания</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitNoiseLevel")}
          >Уровень шума и сертификация Lambda</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitCertification")}
          >Сертификация 80 PLUS</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitSelectionAlgorithm")}
          >Алгоритм выбора БП</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"powerUnitPowerCalculator")}
          >Калькулятор мощности блока питания</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;