import React from 'react';
import HandleClickScroll from "../../../Utils/HandleClickScroll";

const ContentAnchorsList = () => {
  return (
    <>
      <p>Содержание:</p>

      <ul className="listStyle">
        <li>
          <a
            className="anchorLink"
            onClick={(e) =>
              HandleClickScroll(e,"description")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink">Размеры (форм-факторы) материнских плат</a>
        </li>
        <li>
          <a className="anchorLink">Сокет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink">Совместимость процессора и BIOS платы</a>
        </li>
        <li>
          <a className="anchorLink">Чипсет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink">VRM материнской платы</a>
        </li>
        <li>
          <a className="anchorLink">Охлаждение системы питания</a>
        </li>
        <li>
          <a className="anchorLink">QVL список, каналы и топология материнской платы</a>
        </li>
        <li>
          <a className="anchorLink">Питание материнской платы</a>
        </li>
        <li>
          <a className="anchorLink">Разъемы</a>
        </li>
        <li>
          <a className="anchorLink">Дополнительные сведения</a>
        </li>
        <li>
          <a className="anchorLink">Алгоритм выбора материнской платы</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;