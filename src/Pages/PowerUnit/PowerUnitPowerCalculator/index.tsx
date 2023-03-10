import React, { FormEvent, useState } from "react";
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

const PowerUnitPowerCalculator = () => {
  const [power, setPower] = useState(0)
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
      const datesValue = formData.get("powerUnitsM2Count");
      const m2Value = formData.get("m2");

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
      if (finalPower > 47){
        setPower(finalPower)
      }
      else {
        setPower(0)
      }

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
          <select
            name="powerUnitsIntelCpu"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsIntelCpu.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsAmdCpu"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsAmdCpu.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsNVDA"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsNVDA.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsAmdVd"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsAmdVd.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsCoolingVents"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsCoolingVents.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsPompsCount"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsPompsCount.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsSATADatesCount"
            className="powerUnitPowerCalculatorOptions"
          >
            {powerUnitsSATADatesCount.map((Unit) => (
              <option value={`${Unit.power}`}>{Unit.name}</option>
            ))}
          </select>
          <select
            name="powerUnitsM2Count"
            className="powerUnitPowerCalculatorOptions"
          >
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
