import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  first: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a first "),
  last: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a last name"),
  guestFirst: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255"),
  // .required('Must enter a last name'),
  guestLast: Yup.string()
    .min(2, "Must have a character")
    .max(255, "Must be shorter than 255"),
  // .required('Must enter a last name'),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255")
    .required("Must enter an email"),
  requests: Yup.string().min(2, "Please enter a longer message"),
  // .required('Must enter a message'),
  coming: Yup.string()
    .min(2, "Must Select an option")
    .required("Must enter a message"),
});
