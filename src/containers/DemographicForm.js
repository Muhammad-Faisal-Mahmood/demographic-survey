import React, { useState } from "react";
import "../scss/DemographicForm.scss";

const DemographicForm = () => {
  const [formData, setFormData] = useState({
    whatsappNumber: "",
    gender: "",
    age: "",
    education: "",
    city: "",
    ethnicity: "",
    politicalAffiliation: "",
    income: "",
    consentProject: false,
    consentResearch: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Navigate to /home after submission
    window.location.href = "/test/power-happiness";
  };

  return (
    <div className="container">
      <h4 className="center-align">Demographic Information</h4>
      <form onSubmit={handleSubmit}>
        {/* WhatsApp Number */}
        <div className="card">
          <div className="card-content">
            <label htmlFor="whatsappNumber">
              Enter your WhatsApp number (if you wish to not respond, you are no
              longer eligible for the lottery reward)
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="+27 (00) 000-0000"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="card">
          <div className="card-content">
            <label>What is your gender?</label>
            <select
              className="browser-default styled-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Age */}
        <div className="card">
          <div className="card-content">
            <label htmlFor="age">What is your age?</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Education */}
        <div className="card">
          <div className="card-content">
            <label>What is your highest level of education?</label>
            <select
              className="browser-default styled-select"
              name="education"
              value={formData.education}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="highschool">High School</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>
        </div>

        {/* City */}
        <div className="card">
          <div className="card-content">
            <label htmlFor="city">What city do you live in?</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Ethnicity */}
        <div className="card">
          <div className="card-content">
            <label>Which is your ethnicity?</label>
            <select
              className="browser-default styled-select"
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="african">African</option>
              <option value="asian">Asian</option>
              <option value="white">White</option>
              <option value="hispanic">Hispanic</option>
            </select>
          </div>
        </div>

        {/* Political Affiliation */}
        <div className="card">
          <div className="card-content">
            <label>
              Which South African political party do you most affiliate with?
            </label>
            <select
              className="browser-default styled-select"
              name="politicalAffiliation"
              value={formData.politicalAffiliation}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="party1">Party 1</option>
              <option value="party2">Party 2</option>
              <option value="party3">Party 3</option>
            </select>
          </div>
        </div>

        {/* Income */}
        <div className="card">
          <div className="card-content">
            <label htmlFor="income">
              How much money do you make in a year?
            </label>
            <input
              type="text"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="R0"
            />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p style={{ textAlign: "justify" }}>
              <br /> This is an investigation into attitudes surrounding
              different immigrant groups in South Africa
              <br />
              <strong>PRINCIPAL INVESTIGATOR</strong>
              <br /> Darmin Tarasewicz
              <br /> Torrey Pines High School
              <br /> 3710 Del Mar Heights Rd, San Diego, California, United
              States 92130
              <br /> +1 (619) 714 - 0293
              <br /> im.darminator@gmail.com
              <br />
              <strong>PURPOSE OF STUDY</strong>
              <br /> You are being asked to take part in a research study.
              Before you decide to participate in this study, it is important
              that you understand why the research is being done and what it
              will involve. Please read the following information carefully.
              Please ask the researcher if there is anything that is not clear
              or if you need more information.
              <br /> The purpose of this study is to investigate the differences
              in attitude toward different immigrant groups in South Africa.
              <br />
              <strong>STUDY PROCEDURES</strong>
              <br /> This study is optional and can be quit at any time. Any
              data from incomplete surveys are not saved and will not be used in
              the final paper. This study will ask optional demographic
              questions, then will move on to seven questions where the
              respondent will categorize certain words as either foreigner or
              South African, and good or bad person.
              <br />
              <strong>RISKS</strong>
              <br /> You may decline to answer any or all questions and you may
              terminate your involvement at any time if you choose.
              <br />
              <strong>BENEFITS</strong> There is a lottery to win R1500. To
              enter, you need to put your WhatsApp number above. We hope that
              the information obtained from this study may give insight into
              attitudes towards different immigrant groups.
              <br />
              <strong>CONFIDENTIALITY</strong>
              <br /> Your responses to this survey will be anonymous. Please do
              not write any identifying information on your survey, or for the
              purposes of this research study, your comments will not be
              anonymous. Every effort will be made by the researcher to preserve
              your confidentiality, including the following:
              <br />
              No names will be asked for in this survey. The only information
              tied to you are optional demographic questions. All responses are
              also locked behind a secured google account and cannot be accessed
              by anyone except the researcher.
              <br />
              Participant data will be kept confidential except in cases where
              the researcher is legally obligated to report specific incidents.
              These incidents include, but may not be limited to, incidents of
              abuse and suicide risk.
              <br />
              <strong>CONTACT INFORMATION</strong>
              <br /> If you have questions at any time about this study, or you
              experience adverse effects as the result of participating in this
              study, you may contact the researcher whose contact information is
              provided on the first page. If you have questions regarding your
              rights as a research participant, or if problems arise which you
              do not feel you can discuss with the Primary Investigator, please
              contact Michael Montgomery at +1 (858) 755-0125, ext. 2137.
              <br />
              <strong>VOLUNTARY PARTICIPATION</strong>
              <br /> Your participation in this study is voluntary. It is up to
              you to decide whether or not to take part in this study. If you
              decide to take part in this study, you will be asked to agree to
              this consent form. After you agree to this consent form, you are
              still free to withdraw at any time and without giving a reason.
              Withdrawing from this study will not affect the relationship you
              have, if any, with the researcher. If you withdraw from the study
              before data collection is completed, your data will be returned to
              you or destroyed.
              <br />
              <strong>CONSENT</strong>
              <br /> I have read and I understand the provided information and
              have had the opportunity to ask questions. I understand that my
              participation is voluntary and that I am free to withdraw at any
              time, without giving a reason and without cost. I voluntarily
              agree to take part in this study.
            </p>
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="card">
          <div className="card-content">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="consentProject"
                  checked={formData.consentProject}
                  onChange={handleChange}
                />
                <span>
                  I consent to filling out this form and participating in this
                  project
                </span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  name="consentResearch"
                  checked={formData.consentResearch}
                  onChange={handleChange}
                />
                <span>
                  I consent to my responses being used in a research paper and
                  analyzed
                </span>
              </label>
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="center-align">
          <button
            type="submit"
            className="red-btn  waves-effect waves-light red"
          >
            Complete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemographicForm;
