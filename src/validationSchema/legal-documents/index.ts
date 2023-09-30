import * as yup from 'yup';

export const legalDocumentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  type: yup.string().required(),
});
