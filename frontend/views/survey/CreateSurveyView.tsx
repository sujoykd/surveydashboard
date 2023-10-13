import { ReactNode } from "react";
import Wizard from "../wizard/Wizard";
import CreateNewSurvey from "./CreateNewSurvey";

export default function CreateSurveyView() {
  const surveyCreationSteps: Map<string, ReactNode> = new Map([
    ["Create Survey", <CreateNewSurvey />],
    ["Create Survey2", <CreateNewSurvey />],
    ["Create Survey3", <CreateNewSurvey />],
    ["Create Survey4", <CreateNewSurvey />],
  ]);

  return (
    <>
      <Wizard steps={surveyCreationSteps} />
    </>
  );
}
