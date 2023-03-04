import React, { useState } from 'react';
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg"
import Photo1 from "./Photos/motherboardPhoto1.png"
import Photo2 from "./Photos/motherboardphoto2.png"
import ContentAnchorsList from "./ContentAnchorsList";


const Motherboard = () => {

  const [collapse, setCollapse] = useState(false)

  return (
    <div className="PageContainer">
      <h1 className="sloganAndAccesoireName">Материнская плата</h1>

      <ContentAnchorsList/>

      <h2 className="contentParagraph" id="motherboardDescription">Описание</h2>
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

      <h2 className="contentParagraph" id="motherboardSizes">Размеры (форм-факторы) материнских плат</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20"/>Форм-фактор материнской платы - установленный производителями стандарт, задающий ее габаритные, размеры крепления к корпусу, количество и расположение отверстий для подключения комплектующих ПК.
      </p>
      <p>
        Этот параметр напрямую влияет, как на внешний вид в целом, собираемого системного блока, так и на вместительность. В контексте выбора материнской платы также стоит помнить, что от размера платы зависит тепловыделение и количество различных разъёмов на плате. Как правило, в современных ПК в большинстве используются платы размера ATX и Micro ATX.
      </p>
      <p>
        Данные форм-факторы подойдут для сборки ПК любой конфигурации, начиная от офисного варианта, заканчивая игровым или рабочим компьютером.
      </p>

      <h2 className="contentParagraph" id="motherboardSocket">Сокет материнской платы</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20"/>Сокетом материнской платы называется разъём для центрального процессора. Если сокет процессора не будет соответствовать сокету материнской платы, вы физически не сможете подключить эти комплектующие. У нескольких поколений процессоров сокеты могут совпадать.
      </p>


      <h2 className="contentParagraph" id="motherboardCompatibility">Совместимость процессора и BIOS платы</h2>
      <p>
        <img src={MoneyIcon} width="20" height="20"/>В случае, если выбранная вами материнская плата была выпущена до появления на рынке выбранного процессора, они не будут иметь совместимости со старта.
      </p>
      <p>
        Ревизия процессора характеризуется степпингом. Для того чтобы совместимость появилась вы должны будете обновить ПО BIOS вашей материнской платы.
        Сделать это можно несколькими способами:
      </p>
      <p>
        1. Приобрести материнскую плату новой партии выпуска (с новой, поддерживаемой версией BIOS). Данный способ очень редко жизнеспособен, поскольку никакая компания-производитель плат помимо ASRock не указывает версию BIOS на плате или в её характеристиках.
      </p>
      <p>
        У ASRock версия BIOS указывается на микросхеме самого BIOS. Выглядит это следующим образом:
      </p>
      <p>
        <img src={Photo2} className="motherboardPhoto2"/>
      </p>
      <p>
        2. Использовать функцию BIOS FlashBack для обновления BIOS. Однако, эта функция поддерживается не всеми материнскими платами. Чтобы совершить обновление этим способ безопасно – следуйте инструкции производителя материнской платы.
      </p>
      <p>
        3. Использовать специальное устройство для прошивки – программатор. Этот способ подойдёт вам в случае отсутствия опции FlashBack, но требует определённый навык.
      </p>
      <p>
        4. Запустить ПК на поддерживаемом материнской платой процессоре, обновить BIOS и поменять процессор на желаемый.
      </p>

      <h2 className="contentParagraph" id="motherboardChipset">Чипсет материнской платы</h2>
      <p>
        Чипсет материнской платы обычно записывается производителями в цифробуквенном виде в названии продукта. Для покупателя основных отличия различных чипсетов три:
      </p>
      <p>
        1. Количество разъёмов материнской платы
      </p>
      <p>
        2. Возможность поддержки SLI/Crossfire режимов работы видеокарт.
      </p>
      <p>
        3. Возможность разгона процессора и/или оперативной памяти.
      </p>

      <div className="extraInformation">
        <button
          className={`collapsibleTextButton ${collapse ? " active" : ""}`}
          onClick={() => setCollapse(!collapse)}
        >Подробнее</button>
        <div className="collapsibleText"
             style={{maxHeight: collapse ? "none" : 0 }}
        >
          <p>
            <img src={PhysicsIcon} width="20" height="20"/>Это связано с объёмом передаваемой по различному количеству PCI-линий видеокартой информацией.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Motherboard;