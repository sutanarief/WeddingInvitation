import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonBrown } from '../molecules/button.molecule';
import { InputField } from '../molecules/input-field.molecule';
import { addCollection, getCollecion } from '../utils/firebase';
import { convertSecondToDate } from '../utils/functions';
import Messages from './Messages';

const GuestBook = () => {
  const [hope, setHope] = useState({
    name: '',
    message: '',
    createdAt: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allMessages, setAllMessages] = useState([]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setHope({
      ...hope,
      [name]: value,
    });
  };

  const submitMessage = async () => {
    setIsLoading(true);
    const data = await addCollection('messages', [hope]);
    if (data == 'sukses') {
      setHope({
        name: '',
        message: '',
        createdAt: new Date(),
      });
      setIsLoading(false);
      getData();
    }
  };

  const getData = async () => {
    try {
      let messages = await getCollecion('messages');
      let mapMessages = messages.docs
        .map((doc) => doc.data())
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      setAllMessages(mapMessages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <h3>Guest Book</h3>
      </div>
      <div>
        <InputField
          label='Name'
          name='name'
          value={hope.name}
          onChange={(e) => onChangeHandler(e)}
          placeholder='Your Name'
          type='text'
        />
        <InputField
          label='Message'
          name='message'
          value={hope.message}
          onChange={(e) => onChangeHandler(e)}
          placeholder='Your Hope'
          as='textarea'
          rows='3'
        />
        <ButtonBrown onClick={() => submitMessage()} loading={isLoading} />
      </div>
      <Messages dataMessages={allMessages} />
    </div>
  );
};

export default GuestBook;
