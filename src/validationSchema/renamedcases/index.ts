import * as yup from 'yup';

export const renamedcaseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
});
