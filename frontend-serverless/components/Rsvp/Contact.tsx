import styled from "styled-components";
import { validationSchema } from "../util/validationSchema";
import { Formik } from "formik";
import { Error } from "./Error";
import { ReactElement, FC, useState } from "react";
import { Loading } from "../Loading";

export const Contact: FC = (): ReactElement => {
  const [alert, setAlert] = useState("");
  const [submitInvoke, setSubmitInvoke] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <ContentWrap id="contact">
      <StyledContact>
        <h2>R.S.V.P</h2>
        <p
          style={{
            textAlign: "left",
            margin: "0",
            borderBottom: "1px solid #FF0039",
          }}
        >
          Please let us know if you will be able to make it.
        </p>
        <Formik
          initialValues={{
            first: "",
            last: "",
            email: "",
            coming: "yes",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
            setSubmitInvoke(true);
            setSubmitting(true);
            setStatus(undefined);
            const response = await fetch(
              `https://api.carolandarthur.com/v1/guest`,
              {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );

            const json = await response.json();

            if (response.status === 200) {
              setStatus(json);

              if (values.coming === "yes") {
                setAlert("Submission Successful, see you in Taiwan!");
              } else {
                setAlert("Submission Successful, Sorry you cant make it!");
              }
              resetForm();
              setSubmitInvoke(false);
              setSubmitting(false);
              setSuccess(true);
            } else {
              setStatus(json);
              setSuccess(false);
              setSubmitting(false);
              setAlert("You broke something, I am coming to find you");
              console.log("serverError");
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            // isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>
                Primary Guest Information
                <span style={{ color: "red", marginLeft: "0.5rem" }}>*</span>
              </h3>
              <p style={{ textAlign: "left", marginBottom: "2rem" }}>
                Please provide your information
              </p>
              <div className="input-grid">
                <div className="first-last">
                  <div className="input-row">
                    <input
                      aria-label="First Name"
                      type="text"
                      name="first"
                      id="first"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first}
                      // @ts-ignore
                      className={
                        touched.first && errors.first ? "has-error" : null
                      }
                    />
                    <Error touched={touched.first} message={errors.first} />
                  </div>
                  <div className="input-row">
                    <input
                      aria-label="Last Name"
                      type="text"
                      name="last"
                      id="last"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last}
                      // @ts-ignore
                      className={
                        touched.last && errors.last ? "has-error" : null
                      }
                    />
                    <Error touched={touched.last} message={errors.last} />
                  </div>
                </div>
                <div className="input-row">
                  <input
                    aria-label="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    // @ts-ignore
                    className={
                      touched.email && errors.email ? "has-error" : null
                    }
                  />
                  <Error touched={touched.email} message={errors.email} />
                </div>

                <div className="coming-check">
                  <div>Can you make it?</div>
                  <div className="radio-container">
                    <div className="label-container">
                      <span>YES</span>
                      <label>
                        <input
                          type="radio"
                          name="yes"
                          value="yes"
                          checked={values.coming === "yes"}
                          onChange={() => setFieldValue("coming", "yes")}
                        />
                      </label>
                    </div>
                    <div className="label-container">
                      <span>NO</span>
                      <label>
                        <input
                          type="radio"
                          name="no"
                          value="no"
                          checked={values.coming === "no"}
                          onChange={() => setFieldValue("coming", "no")}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {values.coming === "yes" && !alert.includes("Sorry") && (
                  <>
                    <h3>Plus One Information</h3>
                    <p style={{ textAlign: "left", marginBottom: "25px" }}>
                      Provide guest details if bringing one
                    </p>
                    <div className="first-last">
                      <div
                        style={{
                          marginBottom: "28px",
                        }}
                        className="input-row"
                      >
                        <input
                          aria-label="Guest First Name"
                          type="text"
                          name="guestFirst"
                          id="guestFirst"
                          placeholder="Guest First Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div
                        style={{
                          marginBottom: "2rem",
                        }}
                        className="input-row"
                      >
                        <input
                          aria-label="Guest Last Name"
                          type="text"
                          name="guestLast"
                          id="guestLast"
                          placeholder="Guest Last Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <h3>Special Requests</h3>
                    <p style={{ textAlign: "left", marginBottom: "25px" }}>
                      Let us know your special requests / concerns
                    </p>
                    <div style={{ marginBottom: "14px" }} className="input-row">
                      <textarea
                        aria-label="Special Requests"
                        name="requests"
                        id="requests"
                        placeholder="Special Requests"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="submit">
                {submitInvoke ? (
                  <Loading className="in-place" />
                ) : (
                  <Button color="green" disabled={success} type="submit">
                    Submit
                  </Button>
                )}
                {alert && (
                  <div
                    style={{
                      fontWeight: 700,
                      color: "green",
                      fontSize: "1.2rem",
                    }}
                    className="alert"
                  >
                    {alert}
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </StyledContact>
    </ContentWrap>
  );
};

const StyledContact = styled("div")`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 1980px) {
    margin: 0 20% 0 auto;
  }

  @media (max-width: 1860px) {
    margin: 0 auto;
  }

  .textarea-fix {
    position: relative;
    bottom: 7px;
    padding-right: 0.5rem;
    @media (max-width: 650px) {
      bottom: 16px;
      padding-right: 0;
    }
  }
  .input-grid {
    display: block;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);

    input {
      width: 100%;
      height: 40px;
      padding-left: 2rem;
      font-family: "Berthold";
      border: 1px solid grey;
      ::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      ::-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }
    textarea {
      width: 100%;
      height: 160px;
      resize: none;
      padding: 1.5rem;
      font-weight: 400;
      font-family: "Berthold";
      ::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      ::-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      :-moz-placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
      @media (max-width: 650px) {
        position: relative;
        bottom: 8px;
      }
    }

    .first-last {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;

      @media (max-width: 650px) {
        display: block;
      }
    }

    .coming-check {
      display: grid;
      color: ${({ theme }) => theme.yellow};
      grid-template-columns: 1fr 1fr;
      font-size: 1.4rem;

      .radio-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .label-container {
          display: flex;
          margin-right: 2rem;

          span {
            margin-right: 0.2rem;
            color: ${({ theme }) => theme.lightgrey};
            font-weight: 400;
          }

          label {
            width: 20px;

            input {
              height: 20px;
            }
          }

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
      grid-template-rows: auto auto;
    }
  }
  .submit {
    text-align: center;
  }
`;

const ContentWrap = styled("section")`
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.black};
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    margin-bottom: 4rem;
  }
  form {
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    padding: 6rem 2rem 4rem;
    margin-bottom: 0;
  }
  .valid {
    color: green;
    text-align: right;
    font-size: 1.2rem;
    height: 28px;
  }
  .invalid {
    color: red;
    text-align: right;
    font-size: 1.2rem;
    height: 28px;
  }
  .has-error {
    border: 1px solid red;
  }
  h2,
  h3,
  p {
    margin-top: 0;
    color: ${({ theme }) => theme.lightgrey};
  }

  p {
    font-weight: 400;
    color: ${({ theme }) => theme.yellow};
    font-size: 1.4rem;
  }

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const Button = styled("button")`
  background-image: linear-gradient(-180deg, #00a698 0%, #00a698 100%);
  color: ${({ theme }) => theme.primary};
  text-shadow: black 0px 0px 3px;
  font-weight: 600;
  padding: 1rem 5rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: transform 0.1s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  svg {
    margin-left: 1rem;
  }
  &:disabled {
    opacity: 0.6;
  }
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 490px) {
    width: 196px;
  }
`;
