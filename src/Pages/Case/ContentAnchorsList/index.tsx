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
               HandleClickScroll(e,"caseDescription")}
          >Описание</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"caseForms")}
          >Форм-фактор корпуса</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"caseCooling")}
          >Охлаждение и организация воздушных потоков</a>
        </li>
        <li>
          <a className="anchorLink"
             onClick={(e) =>
               HandleClickScroll(e,"caseConvenience")}
          >Дополнительные удобства</a>
        </li>
      </ul>
    </>
  );
};

export default ContentAnchorsList;