import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonBrown } from '../molecules/button.molecule';
import { InputField } from '../molecules/input-field.molecule';

const GuestBook = () => {
  const [hope, setHope] = useState({
    name: '',
    message: '',
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setHope({
      ...hope,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <h3>Guest Book</h3>
      </div>
      <div>
        <InputField
          label='Name'
          name='name'
          onChange={(e) => onChangeHandler(e)}
          placeholder='Your Name'
          type='text'
        />
        <InputField
          label='Message'
          name='message'
          onChange={(e) => onChangeHandler(e)}
          placeholder='Your Hope'
          as='textarea'
          rows='3'
        />
        <ButtonBrown onClick={() => console.log('run')} />
      </div>
    </div>
  );
};

export default GuestBook;
