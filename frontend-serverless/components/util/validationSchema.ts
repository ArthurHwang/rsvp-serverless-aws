import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a first name"),
  lastName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a last name"),
  guestFirstName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255"),
  // .required('Must enter a last name'),
  guestLastName: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255"),
  // .required('Must enter a last name'),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email"),
  message: Yup.string().min(2, "Please enter a longer message"),
  // .required('Must enter a message'),
  coming: Yup.string()
    .min(2, "Must Select an option")
    .required("Must enter a message"),
});
