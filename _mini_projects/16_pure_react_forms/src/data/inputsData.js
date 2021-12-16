// ! These will be used to iterate form inputs automation

// have to setup the initial object to be imported in App.js later
// otherwise, it wont work since values.password in confirmPassword
// is undefined here

let values = {
  password: '',
};

const inputsData = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character",
    label: 'Username',
    pattern: '',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday',
  },
  {
    id: 4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    pattern: values.password,
    required: true,
  },
];

export default inputsData;
