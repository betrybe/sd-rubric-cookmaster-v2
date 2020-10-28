const yup = require('yup');

yup.setLocale({
  mixed: {
    required: 'Invalid entries. Try again.',
  },
  string: {
    email: 'Invalid entries. Try again.',
  },
});

exports.schema = yup.object().shape({
  name: yup.string().strict().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});


