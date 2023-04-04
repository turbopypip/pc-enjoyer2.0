import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  powerUnitsAmdVd,
  powerUnitsIntelCpu,
  powerUnitsNVDA,
  powerUnitsAmdCpu,
  powerUnitsCoolingVents,
  powerUnitsPompsCount,
  powerUnitsSATADatesCount,
  powerUnitsM2Count,
} from "./data";

enum CPU {
  INTEL = 1,
  AMD = 2,
}

const PowerUnitPowerCalculator = () => {
  const [power, setPower] = useState(0);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const CalcForm = document.querySelector("#CalcForm") as HTMLFormElement;

    if (CalcForm) {
      const formData = new FormData(CalcForm);

      const intelCpuValue = formData.get("powerUnitsIntelCpu");
      const amdCpuValue = formData.get("powerUnitsAmdCpu");
      const nvdaVidValue = formData.get("powerUnitsNVDA");
      const amdVidValue = formData.get("powerUnitsAmdVd");
      const coolingVentsValue = formData.get("powerUnitsCoolingVents");
      const pompsValue = formData.get("powerUnitsPompsCount");
      const datesValue = formData.get("powerUnitsSATADatesCount");
      const m2Value = formData.get("powerUnitsM2Count");

      const finalPower = Math.round(
        (Number(intelCpuValue) +
          Number(amdCpuValue) +
          Number(nvdaVidValue) +
          Number(amdVidValue) +
          Number(coolingVentsValue) +
          Number(pompsValue) +
          Number(datesValue) +
          Number(m2Value) +
          30 +
          5 +
          6) *
          1.15
      );
      if (finalPower > 47) {
        setPower(finalPower);
      } else {
        setPower(0);
      }
    }
  };
  const [selectAMDVideoCard, setSelectAMDVideoCard] = useState(false);
  const [selectNvidiaVideoCard, setSelectNvidiaVideoCard] = useState(false);
  const [selectCPU, setSelectCPU] = useState<number>();

  const getVideoCardSelectFields = () => {
    if (selectAMDVideoCard && selectNvidiaVideoCard) {
      return (
        <>
          <select
            name="powerUnitsAmdVd"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Выберите видеокарту Nvidia</option>
            {powerUnitsAmdVd.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <br/>
          <select
            name="powerUnitsNVDA"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Выберите ваш процессор Amd</option>
            {powerUnitsNVDA.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
        </>
      );
    }
    if (selectNvidiaVideoCard) {
      return (
        <select
          name="powerUnitsNVDA"
          className="powerUnitPowerCalculatorOptions"
        >
          <option value="" disabled selected hidden>Выберите видеокарту Amd</option>
          {powerUnitsNVDA.map((Unit) => (
            <option value={`${Unit.power}`}>{Unit.name}</option>
          ))}
        </select>
      );
    }
    if (selectAMDVideoCard) {
      return (
        <select
          name="powerUnitsAmdVd"
          className="powerUnitPowerCalculatorOptions"
        >
          <option value="" disabled selected hidden>Выберите видеокарту Amd</option>
          {powerUnitsAmdVd.map((Unit) => (
            <option value={`${Unit.power}`}>{Unit.name}</option>
          ))}
        </select>
      );
    }
  };

  const handleCPUChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectCPU(Number(e.target.value));
  };
  const getCPUSelectField = () => {
    switch (selectCPU) {
      case CPU.AMD:
        return (
          <select
            name="powerUnitsAmdCpu"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Выберите процессор Amd</option>
            {powerUnitsAmdCpu.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
        );
      case CPU.INTEL:
        return (
          <select
            name="powerUnitsIntelCpu"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Выберите процессор Intel</option>
            {powerUnitsIntelCpu.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
        );
    }
  };

  return (
    <div>
      <form
        className="powerUnitPowerCalculator"
        id="CalcForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <p>Выберите тип видеокарты</p>
          <div className="checkbox">
            <div className="checkboxInputContainer">
              <input
                type="checkbox"
                name="selectVideoCard"
                checked={selectAMDVideoCard}
                onChange={() => setSelectAMDVideoCard(!selectAMDVideoCard)}
              />
            </div>

            <span className="checkboxText">AMD</span>
          </div>

          <br />
          <div className="checkbox">
            <div className="checkboxInputContainer">
              <input
                type="checkbox"
                name="selectVideoCard"
                checked={selectNvidiaVideoCard}
                onChange={() => setSelectNvidiaVideoCard(!selectNvidiaVideoCard)}
              />
            </div>
            <span className="checkboxText">Nvidia</span>
          </div>


          <br />
          {getVideoCardSelectFields()}
          <br />

          <p>Выберите тип процессора</p>
          <div className="radio">
            <div className="radioInputContainer">
              <input
                type="radio"
                name="radioCPU"
                checked={selectCPU === 1}
                value={1}
                onChange={(e) => handleCPUChange(e)}
              />
            </div>
            <span className="radioText">Intel</span>
          </div>

          <br />
          <div className="radio">
            <div className="radioInputContainer">
              <input
                type="radio"
                name="radioCPU"
                checked={selectCPU === 2}
                value={2}
                onChange={(e) => handleCPUChange(e)}
              />
            </div>
            <span className="radioText">AMD</span>
          </div>
          <br />
          {getCPUSelectField()}
          <br />
          <p>Остальные комплектующие</p>

          <select
            name="powerUnitsCoolingVents"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Количество вентиляторов</option>
            {powerUnitsCoolingVents.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>

          <br/>

          <select
            name="powerUnitsPompsCount"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Количество помп</option>
            {powerUnitsPompsCount.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>

          <br/>

          <select
            name="powerUnitsSATADatesCount"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Количество устройств SATA</option>
            {powerUnitsSATADatesCount.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>

          <br/>

          <select
            name="powerUnitsM2Count"
            placeholder="amfgoierghpew"
            className="powerUnitPowerCalculatorOptions"
          >
            <option value="" disabled selected hidden>Количество устройств M2</option>
            {powerUnitsM2Count.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          value="Расчет"
          className="powerUnitPowerCalculatorSubmit"
        />
      </form>
      <p>
        {`Итоговая рекомендуемая мощность блока питания с учётом запаса 15%: `}
        <span className="powerUnitsPowerCount">{power}</span>
      </p>
    </div>
  );
};

export default PowerUnitPowerCalculator;
