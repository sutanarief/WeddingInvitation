import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { ButtonBrown } from '../molecules/button.molecule';
import { InputField } from '../molecules/input-field.molecule';
import { SelectField } from '../molecules/select-field.molecule';
import { addCollection, getCollections, getReply } from '../utils/firebase';
import { convertSecondToDate } from '../utils/functions';
import Messages from './Messages';

const GuestBook = ({ getMessages }) => {
  const [hope, setHope] = useState({
    name: '',
    message: '',
    status: '',
    createdAt: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [replyBar, setReplyBar] = useState(false);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setHope({
      ...hope,
      [name]: value,
    });
  };

  const submitMessage = async () => {
    const { name, message, status } = hope;
    if (name == '' || message == '' || status == '') {
      return getMessages('Pastikan semua data di isi!', true);
    }
    if (selectedData != null) {
      setIsLoading(true);
      const data = await addCollection('replies', [
        {
          name: hope.name,
          message: hope.message,
          createdAt: hope.createdAt,
          id_message: selectedData?.id || selectedData?.id_message,
        },
      ]);
      getData();
      getMessages('Pesan berhasil di kirim!', true);
      setSelectedData(null);
      setHope({
        name: '',
        message: '',
        status: '',
        createdAt: new Date(),
      });
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const data = await addCollection('messages', [hope]);
      if (data == 'sukses') {
        setHope({
          name: '',
          message: '',
          status: '',
          createdAt: new Date(),
        });
        setIsLoading(false);
        getData();
        getMessages('Pesan berhasil di kirim!', true);
      }
    }
  };

  const getData = async () => {
    try {
      let messages = await getCollections('messages');
      let mapMessages = messages.docs.map(async (doc) => {
        let replies = await getReply(doc.id);
        let mapReplies = replies.docs.map((reply) => reply.data());
        return {
          ...doc.data(),
          id: doc.id,
          repliesMsg: mapReplies,
        };
      });

      let promiseMap = await Promise.all(mapMessages);
      let sortMap = promiseMap?.sort(
        (a, b) => b?.createdAt?.seconds - a?.createdAt?.seconds
      );
      setAllMessages(sortMap);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getSelectedData = (data) => {
    setSelectedData(data);
  };

  console.log(allMessages);

  return (
    <div className='guest-book'>
      <div id='guest-section'>
        <h3 className='text-center'>Guest Book</h3>
        {selectedData != null && (
          <Alert variant='success' onClose={() => setReplyBar(!replyBar)}>
            <div className='d-flex justify-content-between'>
              <span>
                Reply to <b>{selectedData?.name}</b>
              </span>
              <span onClick={() => setSelectedData(null)}>Close</span>
            </div>
          </Alert>
        )}
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
        <SelectField
          onChange={(e) => onChangeHandler(e)}
          name='status'
          value={hope.status}
        />
        <div className='text-end'>
          <ButtonBrown
            onClick={() => submitMessage()}
            loading={isLoading}
            label='Kirim'
          />
        </div>
      </div>
      <Messages dataMessages={allMessages} selected={getSelectedData} />
    </div>
  );
};

export default GuestBook;
