import React from 'react';
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg"

const DefaultPage = () => {
  return (
    <div  className="PageContainer">
      <h1 className="sloganAndAccesoireName" >Поможем вам собрать пк и не только!</h1>

      <p>Задачи, которые решает наш сайт:</p>

      <div className="listStyle">
        <li>
          <p>
            Сайт представляет информацию о параметрах всех комплектующих ПК в доступном виде не только для людей с поверхностными познаниями об устройстве компьютера, но и для продвинутых пользователей.
          </p>
        </li>
        <li>
          <p>
            PC Enjoyer поможет вам выбрать свой идеальный ПК.
          </p>
        </li>
        <li>
          <p>
            Наши статьи объясняют теоретическую часть работы ПК, они расскажут об устройстве компьютера.
          </p>
        </li>
        <li>
          <p>
            Вкладка “Обновления” - изменения и улучшения сайта, как крупные, так и мелкие.
          </p>
        </li>
      </div>

      <p>Условные обозначения:</p>
      <div className="listStyle">
        <li>
          <p>
            <img src={MoneyIcon} width="20" height="20"/> — Обозначение абзацев/частей статьи, описывающей потребительские качества того или иного составляющего ПК.
          </p>
        </li>
        <li>
          <p>
            <img src={PhysicsIcon} width="20" height="20"/> — Дополнительная информация, физические свойства комплектующих.
          </p>
        </li>
      </div>
    </div>
  );
};

export default DefaultPage;