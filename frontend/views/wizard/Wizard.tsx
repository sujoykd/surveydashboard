import { Button } from "@hilla/react-components/Button.js";
import { Tooltip } from "@hilla/react-components/Tooltip.js";
import { Fragment, ReactNode, useState } from "react";
import css from "./Wizard.module.css";

interface Props {
  steps: Map<string, ReactNode>;
}

export default function Wizard({ steps }: Props) {
  const wizardStepNames = [...steps.keys()];
  const [currentStep, setCurrentStep] = useState(0);

  function goPrevStep(): void {
    setCurrentStep(currentStep - 1);
    console.log(currentStep);
  }

  function goNextStep(): void {
    console.log(currentStep);
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  }

  function disablePrevious(): boolean {
    return currentStep === 0;
  }

  function disableNext(): boolean {
    return currentStep === wizardStepNames.length - 1;
  }

  return (
    <div className={css.wizardContainer}>
      <div className={css.stepContainer}>
        {wizardStepNames.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className={`
                  ${css.stepItem}
                  ${idx === currentStep ? css.activeStep : ""}
                `}
              >
                <span id={`step_${idx}`}>{idx + 1}</span>
                <Tooltip
                  for={`step_${idx}`}
                  text={item}
                  position="bottom-start"
                />
              </div>
              {idx === wizardStepNames.length - 1 ? (
                ""
              ) : (
                <span className={css.divider}></span>
              )}
            </Fragment>
          );
        })}
      </div>
      <div>{steps.get(wizardStepNames[currentStep])}</div>
      <div className={css.buttonContainer}>
        <Button
          theme="secondary"
          disabled={disablePrevious()}
          onClick={goPrevStep}
        >
          Previous
        </Button>
        <Button theme="primary" disabled={disableNext()} onClick={goNextStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
