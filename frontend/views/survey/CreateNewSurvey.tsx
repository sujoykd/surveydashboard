import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { FormItem } from "@hilla/react-components/FormItem.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useForm } from "@hilla/react-form";
import SurveyModel from "Frontend/generated/com/example/application/entity/SurveyModel";
import { SurveyService } from "Frontend/generated/endpoints";

export default function CreateNewSurvey() {
  const { model, field, reset, submit, invalid, dirty } = useForm(SurveyModel, {
    onSubmit: async (survey) => {
      await SurveyService.createSurvey(survey);
    },
  });

  return (
    <>
      <VerticalLayout
        style={{
          alignItems: "baseline",
          padding: "calc(8px + 1.5625vw)",
          gap: "2rem",
        }}
      >
        <FormLayout style={{ flex: "1 1 auto" }}>
          <FormItem style={{ flexGrow: "1 1 auto" }}>
            <label slot="label">Survey Name</label>
            <TextField
              style={{ flexGrow: "1 1 auto" }}
              {...field(model.name)}
            />
          </FormItem>
          <FormItem style={{ flexGrow: "1 1 auto" }}>
            <label slot="label">Anonymous</label>
            <Checkbox {...field(model.anonymous)} />
          </FormItem>
        </FormLayout>
      </VerticalLayout>
    </>
  );
}
