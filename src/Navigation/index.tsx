import React , {FC} from 'react';
import '../Css/App.css'

type Props = {
  showNavigation?: boolean | null;
  setPage: (page: number) => void;
};

const Navigation:FC<Props> = ({setPage, showNavigation}) => {
  const handleClick = (number: number) => {
    setPage(number);
  }

  return (
    <aside className="NavigationColumn__container" style={{left: `${showNavigation ? "0" : "-15em"}`}}>
      <ul className="NavigationColumn">
        <li><p className="Pc-EnjoyerLogo" onClick={() => handleClick(0)}>PC-Enjoyer</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(1)}>Материнская плата</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(2)}>Центральный процессор</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(3)}>Блок питания</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(4)}>Оперативная память</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(5)}>Видеокарта</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(6)}>Корпус</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(7)}>Система охлаждения</p></li>
        <li><p className="PageLinks" onClick={() => handleClick(8)}>Накопители памяти</p></li>
        <li><p className="Updates" onClick={() => handleClick(9)}>Обновления</p></li>
      </ul>
    </aside>
  );
};

export default Navigation;