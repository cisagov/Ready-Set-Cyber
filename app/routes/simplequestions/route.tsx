import { Outlet } from "@remix-run/react";
import pkg from "@trussworks/react-uswds";
import { useState } from "react";

import questionsData from "~/models/questionData";

// import RSC_Form from "../../components/form/RSC_Form";

const { Label, TextInput, FormGroup, ErrorMessage, Form, Radio } = pkg;

function SimpleQuestionairre() {
  const [show, setShowQuestion] = useState(false);
  const mockSubmit = () => {
    alert("Submitted");
  };

  const onClickHandler = () => {
    setShowQuestion(true);
  };

  const onCloseSub1 = () => {
    setShowQuestion(false);
  };

  return (
    <div className="flex items-center text-3xl justify-center">
      <p className="test-xl ">This is a simple questionairre</p>
      <div style={{ marginLeft: "4rem" }}>
        <Form onSubmit={mockSubmit}>
          <Label htmlFor="input-type-text">Text input label</Label>
          <TextInput id="input-type-text" name="input-type-text" type="text" />

          <Label htmlFor="input-focus">Text input focused</Label>
          <TextInput
            id="input-focus"
            name="input-focus"
            className="usa-focus"
            type="text"
          />

          <FormGroup error>
            <Label htmlFor="input-error" error>
              Text input error
            </Label>
            <ErrorMessage id="input-error-message">
              Helpful error message
            </ErrorMessage>
            <TextInput
              id="input-error"
              name="input-error"
              type="text"
              validationStatus="error"
              aria-describedby="input-error-message"
            />
          </FormGroup>
          <FormGroup>
            {questionsData.map((catagory) => (
              <>
                <div key={catagory.catagoryName}> {catagory.question}</div>
                <Radio
                  id={catagory.catagoryName + "True"}
                  name={catagory.question}
                  label="True"
                  onClick={onClickHandler}
                />
                <Radio
                  id={catagory.catagoryName + "False"}
                  name={catagory.question}
                  label="False"
                  onClick={onCloseSub1}
                />

                {show
                  ? catagory.subQuestions.map((questions) => (
                      <>
                        {questions.text}
                        <Radio
                          id={questions.id.toString() + "True"}
                          name={questions.id.toString()}
                          label="True"
                        />
                        <Radio
                          id={questions.id.toString() + "False"}
                          name={questions.id.toString()}
                          label="False"
                        />
                      </>
                    ))
                  : null}
              </>
            ))}
          </FormGroup>
          <FormGroup>
            <p>Is your work password different from your personal password</p>
            <Radio id="number1True" name="numberPassRadio" label="True" />
            <Radio id="number1False" name="numberPassRadio" label="False" />
          </FormGroup>
          <FormGroup>
            <p>Is your work password a strong password?</p>
            <Radio id="number2True" name="numberStrongRadio" label="True" />
            <Radio id="number2False" name="numberStrongRadio" label="False" />
          </FormGroup>
        </Form>
      </div>

      <Outlet />
    </div>
  );
}

export default SimpleQuestionairre;
