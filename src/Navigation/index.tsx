import React , {FC} from 'react';
import '../Css/App.css'

type Props = {
  setPage: (page: number) => void;
};

const Navigation:FC<Props> = ({setPage}) => {
  const onClick = (number: number) => {
    setPage(number);
  }

  return (
    <aside className="NavigationColumn__container">
      <ul className="NavigationColumn">
        <li><p className="Pc-Enjoyer__logo" onClick={() => onClick(0)}>Pc-Enjoyer</p></li>
        <li><p className="PageLinks" onClick={() => onClick(1)}>Материнская плата</p></li>
        <li><p className="PageLinks" onClick={() => onClick(2)}>Центральный процессор</p></li>
        <li><p className="PageLinks" onClick={() => onClick(3)}>Блок питания</p></li>
        <li><p className="PageLinks" onClick={() => onClick(4)}>Оперативная память</p></li>
        <li><p className="PageLinks" onClick={() => onClick(5)}>Видеокарта</p></li>
        <li><p className="PageLinks" onClick={() => onClick(6)}>Корпус</p></li>
        <li><p className="PageLinks" onClick={() => onClick(7)}>Система охлаждения</p></li>
        <li><p className="PageLinks" onClick={() => onClick(8)}>Накопители памяти</p></li>
        <li><p><p className="Copyright">© PC-Enjoyer 2023</p></p></li>
      </ul>
    </aside>
  );
};

export default Navigation;