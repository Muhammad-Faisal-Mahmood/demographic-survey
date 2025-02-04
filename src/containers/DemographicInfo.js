import React from "react";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { ThreeDimensionalLight } from "survey-core/themes";
import { Survey } from "survey-react-ui";
import { useCallback } from "react";
import "../scss/demographic-container.scss";
import { withRouter } from "react-router-dom";

// const SURVEY_ID = 1;

const surveyJson = {
  elements: [
    {
      type: "html",
      html: "<h2><b>Demographic Information</b></h2>",
    },
    {
      name: "phone",
      type: "text",
      title:
        "Enter your whatsapp number (if you wish to not respond, you are no longer eligible for the lottery reward)",
      inputType: "tel",
      placeholder: "+27 (00) 000-0000",
      autocomplete: "tel",
      validators: [
        {
          type: "regex",
          regex: "\\+[0-9]{2} \\([0-9]{2}\\) [0-9]{3}-[0-9]{4}",
          text: "Phone number must be in the following format: +27 (00) 000-0000",
        },
      ],
    },
    {
      name: "gender",
      type: "dropdown",
      showOtherItem: true,
      title: "What is your gender?",
      choices: ["Male", "Female"],
    },
    {
      name: "age",
      type: "text",
      title: "What is your age?",
      placeholder: "0",
      inputType: "number",
    },
    {
      name: "education",
      type: "dropdown",
      title: "What is your highest level of education?",
      showOtherItem: false,
      choices: [
        "No Education",
        "Primary School",
        "Secondary School",
        "Vocational School",
        "High School",
        "Associate Degree",
        "Bachelor's Degree",
        "Master's Degree",
        "Doctoral Degree",
      ],
    },
    {
      name: "city",
      type: "text",
      title: "What city do you live in?",
      placeholder: "South Africa",
    },
    {
      type: "dropdown",
      name: "ethnicity",
      title: "Which is your ethnicity?",
      showNoneItem: false,
      showOtherItem: true,
      choices: [
        "White South African",
        "Black South African",
        "Colored South African",
        "Asian South African",
        "Congolese",
        "Kenyans",
        "Mozambicans",
        "Nigerians",
        "Somalian",
        "Zimbabwean",
        "Indian",
        "Bangledeshi",
        "Italian",
        "British",
      ],
    },
    {
      type: "dropdown",
      name: "party",
      title: "Which South African political party do you most affiliate with?",
      showNoneItem: false,
      showOtherItem: true,
      choices: [
        "Did not vote",
        "ACTIONSA",
        "ACDP",
        "ANC",
        "ATM",
        "ALJAMA",
        "BOSA",
        "DA",
        "EFF",
        "VF+",
        "GOOD",
        "IFP",
        "CCC",
        "PAC",
        "PA",
        "RISE",
        "MK",
        "UAT",
        "UDM",
      ],
    },
    {
      type: "text",
      inputType: "number",
      placeholder: "R0",
      name: "wage",
      title: "How much money do you aproximately make in a given year?",
    },
    {
      type: "html",
      name: "consent",
      html: '<p style="text-align: justify"><br> This is an investigation into attitudes surrounding different immigrant groups in South Africa<br> <strong>PRINCIPAL INVESTIGATOR </strong><br> Darmin Tarasewicz<br> Torrey Pines High School<br> 3710 Del Mar Heights Rd, San Diego, California, United States 92130<br> +1 (619) 714 - 0293<br> im.darminator@gmail.com<br> <strong> PURPOSE OF STUDY </strong><br> You are being asked to take part in a research study. Before you decide to participate in this study, it is important that you understand why the research is being done and what it will involve. Please read the following information carefully. Please ask the researcher if there is anything that is not clear or if you need more information.<br> The purpose of this study is to investigate the differences in attitude toward different immigrant groups in South Africa.<br> <strong> STUDY PROCEDURES </strong><br> This study is optional and can be quit at any time. Any data from incomplete surveys are not saved and will not be used in the final paper. This study will ask optional demographic questions, then will move on to seven questions where the respondant will catigorize certain words as either foreigner or south african, and good or bad person.<br> <strong> RISKS </strong><br> You may decline to answer any or all questions and you may terminate your involvement at any time if you choose.<br> <strong> BENEFITS </strong> There is a lottery to win R1500. To enter, you need to put your whatsapp number above. We hope that the information obtained from this study may give insight into attitudes towards different immigrant groups.<br> <strong> CONFIDENTIALITY </strong><br> Your responses to this survey will be anonymous. Please do not write any identifying information on your survey, or for the purposes of this research study, your comments will not be anonymous. Every effort will be made by the researcher to preserve your confidentiality including the following:<br> No names will be asked for in this survey. The only information tied to you are optional demographic questions. All responses are also locked behind a secured google account and cannot be accessed by anyone except the researcher.<br> Participant data will be kept confidential except in cases where the researcher is legally obligated to report specific incidents. These incidents include, but may not be limited to, incidents of abuse and suicide risk.<br> <strong> CONTACT INFORMATION </strong><br> If you have questions at any time about this study, or you experience adverse effects as the result of participating in this study, you may contact the researcher whose contact information is provided on the first page. If you have questions regarding your rights as a research participant, or if problems arise which you do not feel you can discuss with the Primary Investigator, please contact Michael Montgomery at +1 (858) 755-0125, ext. 2137.<br> <strong>VOLUNTARY PARTICIPATION</strong><br> Your participation in this study is voluntary. It is up to you to decide whether or not to take part in this study. If you decide to take part in this study, you will be asked to agree to this a consent form. After you agree to this consent form, you are still free to withdraw at any time and without giving a reason. Withdrawing from this study will not affect the relationship you have, if any, with the researcher. If you withdraw from the study before data collection is completed, your data will be returned to you or destroyed.<br> <strong>CONSENT</strong><br> I have read and I understand the provided information and have had the opportunity to ask questions. I understand that my participation is voluntary and that I am free to withdraw at any time, without giving a reason and without cost. I voluntarily agree to take part in this study. <br> </p>',
    },
    {
      type: "checkbox",
      name: "consent_agreement",
      titleLocation: "hidden",
      choices: [
        {
          value: "project_consent",
          text: "I consent to filling out this form and participating in this project",
        },
        {
          value: "analysis_consent",
          text: "I consent to my responses being used in a research paper and analyzed",
        },
      ],
    },
  ],
};

class DemographicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.survey = new Model(surveyJson);
    this.survey.applyTheme(ThreeDimensionalLight);

    // Bind the event handler
    this.handleSurveyComplete = this.handleSurveyComplete.bind(this);
  }

  handleSurveyComplete(sender) {
    const results = JSON.stringify(sender.data);
    console.log(results); // Log results (optional)
    alert("Survey completed! Redirecting to /home...");
    this.props.history.push("/home"); // Redirect to /home using history.push
  }

  componentDidMount() {
    this.survey.onComplete.add(this.handleSurveyComplete);
  }

  componentWillUnmount() {
    this.survey.onComplete.remove(this.handleSurveyComplete);
  }

  render() {
    return <Survey model={this.survey} />;
  }
}

// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default withRouter(DemographicInfo);
