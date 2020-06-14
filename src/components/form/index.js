import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../components/button';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
  control: {
    width: '100%',
  },
  input: {
    background: '#fff',
    marginBottom: '12px',
    padding: '12px',
  },
  label: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },
  text: {
    background: '#fff',
    padding: '12px',
    marginBottom: '80px',
  },
  spacer: {
    textAlign: 'center',
  },
}));

const validateEmail = (email) => {
  const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/; // eslint-disable-line no-control-regex
  return re.test(email);
};

const Form = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    let valid = true;

    if (name.length === 0) {
      valid = false;
      alert('Please enter your name.');
      return valid;
    }

    if (!validateEmail(email)) {
      valid = false;
      alert('Please enter a valid email address.');
      return valid;
    }

    if (message.length === 0) {
      valid = false;
      alert('Please enter a message.');
      return valid;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = process.env.REACT_APP_SENDGRID_API_KEY || '';

    if (!validateForm()) {
      return;
    }

    const headers = {
      'Authorization': `Basic ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'POST',
    };

    const data = {
      personalizations: [{
          to: [{
              email,
          }],
        },
      ],
      from: {
        email: 'test@example.com',
      },
      subject: `New contact form submission from: ${name}`,
      content: [{
        type: 'text/plain',
        value: message,
      }],
    };

    axios({
      method: 'POST',
      url: 'https://api.sendgrid.com/v3/mail/send',
      data,
      headers,
    }).then((response) => {
      if (response.data.status === 'success') {
        console.log('Message Sent.');
      } else if (response.data.status === 'fail') {
        console.log('Message failed to send.')
      }
    }).catch((e) => {
      console.log(e);
    });

    alert('Thank you! I will get back to you as soon as possible.');
    document.getElementById('contact-form').reset();
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form id='contact-form' onSubmit={handleSubmit} method='POST'>
      <FormControl className={classes.control}>
        <FormHelperText className={classes.label} id='name-text'>Name</FormHelperText>
        <Input className={classes.input} id='name' aria-describedby='name-text' onChange={onNameChange} />
      </FormControl>

      <FormControl className={classes.control}>
        <FormHelperText className={classes.label} id='mail-text'>Mail</FormHelperText>
        <Input className={classes.input} id='email' aria-describedby='email-text' onChange={onEmailChange} />
      </FormControl>

      <FormControl className={classes.control}>
        <FormHelperText className={classes.label} id='message-text'>Message</FormHelperText>
        <TextField
          className={classes.text}
          id='message'
          aria-describedby='message-text'
          multiline
          rows={20}
          onChange={onMessageChange}
        />
      </FormControl>

      <div className={classes.spacer}>
        <Button type='submit' text='Submit' />
      </div>
    </form>
  );
};

export default Form;

export { Form };
