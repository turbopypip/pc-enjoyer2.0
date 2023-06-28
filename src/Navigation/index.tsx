import React, { FC, MouseEvent } from "react";
import HandleClickScroll from "../Utils/HandleClickScroll";
import "../Css/App.css";

type Props = {
  showNavigation?: boolean | null;
  setPage: (page: number) => void;
  isMobile: boolean;
};

const Navigation: FC<Props> = ({ setPage, showNavigation, isMobile }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, number: number) => {
    setPage(number);
    HandleClickScroll(e, "root", "auto");
  };

  const getTransformStyle = () => {
    if (showNavigation || !isMobile) return;

    return `translateX(-100%)`;
  };

  return (
    <aside
      className="NavigationColumn__container"
      style={{ transform: getTransformStyle() }}
      id="navigation"
    >
      <ul className="NavigationColumn">
        <li className="Pc-EnjoyerLogo">
          <a onClick={(e) => handleClick(e, 0)}>PC-Enjoyer</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 1)}>Материнская плата</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 2)}>Центральный процессор</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 3)}>Блок питания</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 4)}>Оперативная память</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 5)}>Видеокарта</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 6)}>Корпус</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 7)}>Система охлаждения</a>
        </li>
        <li className="PageLinks">
          <a onClick={(e) => handleClick(e, 8)}>Накопители памяти</a>
        </li>
        <li className="Updates">
          <a onClick={(e) => handleClick(e, 9)}>Обновления</a>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
