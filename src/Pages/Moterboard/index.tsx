import React from 'react';
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import Photo1 from "./Photos/motherboardPhoto1.png"
import ContentAnchorsList from "./ContentAnchorsList";


const Motherboard = () => {
  return (
    <div className="PageContainer">
      <h1 className="sloganAndAccesoireName">Материнская плата</h1>

      <ContentAnchorsList/>

      <h2 className="contentParagraph" id="description">Описание</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20"/>Материнская плата – прямоугольная пластина, исполосованная текстолитом, из которой выпирают множество разъёмов, иногда радиаторы.
      </p>
      <p>
        На плате располагаются и другие электрические элементы. В её левом верхнем углу или в центре располагается сокет для процессора.
      </p>
      <p>
        Слева от него – входы для периферии, сети. В нижней центральной части – литиевая батарея. Справа от сокета – разъёмы для оперативной памяти. Снизу от сокета – разъёмы PCI для видеокарт или периферии.
      </p>
      <p>
        <img src={Photo1} className="motherboardPhoto1"/>
      </p>
    </div>
  );
};

export default Motherboard;