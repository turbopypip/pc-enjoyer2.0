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
               HandleClickScroll(e,"powerunitDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Размеры (форм-факторы) материнских плат</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Сокет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Совместимость процессора и BIOS платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Чипсет материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >VRM материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Охлаждение системы питания</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >QVL список, каналы и топология материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Питание материнской платы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Разъемы</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Дополнительные сведения</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"")}
          >Алгоритм выбора материнской платы</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;