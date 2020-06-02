import styled from "styled-components";
import { validationSchema } from "../util/validationSchema";
import { Formik } from "formik";
import { Error } from "./Error";
import { ReactElement, FC, useState } from "react";

export const Contact: FC = (): ReactElement => {
  const [alert, setAlert] = useState("");
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
            firstName: "",
            lastName: "",
            email: "",
            coming: "yes",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
            console.log(values);
            setSubmitting(true);
            setStatus(undefined);
            const response = await fetch("http://localhost:3000/prod/user", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            });

            const json = await response.json();

            if (response.status === 200) {
              setStatus(json);
              setAlert("Message sent, thank you");
              resetForm();
              setSubmitting(false);
            } else {
              setStatus(json);
              setAlert("Message failed to send, please try again");
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
            isSubmitting,
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
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      // @ts-ignore
                      className={
                        touched.firstName && errors.firstName
                          ? "has-error"
                          : null
                      }
                    />
                    <Error
                      touched={touched.firstName}
                      message={errors.firstName}
                    />
                  </div>
                  <div className="input-row">
                    <input
                      aria-label="Last Name"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      // @ts-ignore
                      className={
                        touched.lastName && errors.lastName ? "has-error" : null
                      }
                    />
                    <Error
                      touched={touched.lastName}
                      message={errors.lastName}
                    />
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
                      <span>yes</span>
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
                      <span>no</span>
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
                      aria-label="First Name"
                      type="text"
                      name="guestFirstName"
                      id="guestFirstName"
                      placeholder="First Name"
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
                      aria-label="Last Name"
                      type="text"
                      name="guestLastName"
                      id="guestLastName"
                      placeholder="Last Name"
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
                    aria-label="Requests"
                    name="requests"
                    id="requests"
                    placeholder="Special Requests"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="submit">
                <Button color="green" disabled={isSubmitting} type="submit">
                  Submit
                </Button>
                {alert && <div className="alert">Message Sent! Thank you</div>}
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
      font-weight: 700;
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
