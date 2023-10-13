import { Button } from "@hilla/react-components/Button.js";
import { AutoGrid } from "@hilla/react-crud";
import SurveyModel from "Frontend/generated/com/example/application/entity/SurveyModel";

import { SurveyService } from "Frontend/generated/endpoints";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SurveyView() {
  const [refreshNumber, setRefreshNumber] = useState(0);

  return (
    <>
      <NavLink to="/new">Create Survey</NavLink>

      <AutoGrid
        refreshTrigger={refreshNumber}
        noHeaderFilters
        service={SurveyService}
        model={SurveyModel}
      ></AutoGrid>
    </>
  );
}
