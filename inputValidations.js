export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Full Name',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const msg_validations = {
  name: 'message',
  label: 'message',
  multiline: true,
  id: 'message',
  placeholder: 'Send us a message...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}



export const num_validation = {
  name: 'num',
  label: 'Contact Number',
  type: 'number',
  id: 'num',
  placeholder: 'Contact Number',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Email Address',
  type: 'email',
  id: 'email',
  placeholder: ' Email Address ',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Not valid',
    },
  },
}
