import React from 'react';
import ContentAnchorsList from "./ContentAnchorsList";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import Photo1 from "./Photos/opMemoryPhoto1.png"

const OpMemory = () => {
  return (
    <div className="PageContainer">
      <h1 className="sloganAndAccesoireName">Оперативная память</h1>

      <ContentAnchorsList />
      <h2 className="contentParagraph">Описание</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />Оперативная память для ПК имеет форм фактор DIMM. Такая память продаётся в виде прямоугольных модулей, вставляемых напрямую в соответствующие разъёмы материнской платы. Выглядят разъёмы на материнских платах следующим образом:
      </p>
      <p>
        <img src={Photo1} className="OpMemoryPhoto1"/>
      </p>

      <h2 className="contentParagraph">Типы памяти</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />На данный момент типы оперативной памяти имеют следующий письменный вид: DDR, DDR2, DDR3, DDR4, DDR5, где DDR – самый старший вид.
      </p>
    </div>
  );
};

export default OpMemory;