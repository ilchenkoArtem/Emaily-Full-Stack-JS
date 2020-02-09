//SurveyForm Shows a from for a user to add input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey title",
    name: "title"
  },
  {
    label: "Subject Line",
    name: "subject"
  },
  {
    label: "Email Body",
    name: "body"
  },
  {
    label: "Recipient List",
    name: "emails"
  }
];

const SurveyForm = ({ handleSubmit }) => {
  const renderFields = () => {
    return FIELDS.map(({ label, name }) => (
      <Field
        key={name}
        label={label}
        type="text"
        name={name}
        component={SurveyField}
      />
    ));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(values => console.log(values))}>
        <ul>{renderFields()}</ul>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
