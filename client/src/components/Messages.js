import {
  faCheck,
  faClose,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { ButtonBrown } from '../molecules/button.molecule';
import { convertSecondToDate, readebleDate } from '../utils/functions';

const Messages = ({ dataMessages, selected = () => {} }) => {
  const onReply = (data) => {
    document.getElementById('guest-section').scrollIntoView();
    selected(data);
  };

  const colorStatus = (status) => {
    if (status == 'Hadir') return 'text-success';
    if (status == 'Tidak Hadir') return 'text-danger';
    if (status == 'Ragu-ragu') return 'text-warning';
  };

  const getFirstCharacter = (char) => {
    let newChar = char
      .split(' ')
      .map((val) => val[0])
      .join('');
    return newChar;
  };

  return (
    <div className='message'>
      {dataMessages?.map((data) => (
        <Fragment>
          <Card key={data.id} className='mt-3'>
            <Card.Header>
              <div className='message-name d-flex justify-content-between'>
                <h6 className='m-0'>{data.name}</h6>
                <div className={colorStatus(data.status)}>
                  {data.status == 'Hadir' && <FontAwesomeIcon icon={faCheck} />}
                  {data.status == 'Tidak Hadir' && (
                    <FontAwesomeIcon icon={faClose} />
                  )}
                  {data.status == 'Ragu-ragu' && (
                    <FontAwesomeIcon icon={faQuestion} />
                  )}
                  <span className='ps-2'>{data.status}</span>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <div className='d-flex'>
                <div className='me-2 message-photo-profile'>
                  <h1>{getFirstCharacter(data.name)}</h1>
                </div>
                <div className='flex-fill'>
                  <div>
                    <p className='mb-3'>{data.message}</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span className='text-muted'>
                      {readebleDate(
                        convertSecondToDate(data.createdAt.seconds)
                      )}
                    </span>
                    <ButtonBrown
                      onClick={() => onReply(data)}
                      label='Balas'
                      size='btn-sm'
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          {data?.repliesMsg?.length > 0 && (
            <div className='ms-5 mt-2'>
              {data?.repliesMsg?.map((reply, index) => (
                <Card key={data.index} className='mb-2'>
                  <Card.Header>
                    <div className='message-name'>
                      <h6 className='m-0'>{reply.name}</h6>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className='d-flex'>
                      <div className='me-2 message-photo-profile'>
                        <h1>{getFirstCharacter(reply.name)}</h1>
                      </div>
                      <div className='flex-fill'>
                        <div>
                          <p>{reply.message}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <span className='text-muted'>
                            {readebleDate(
                              convertSecondToDate(data.createdAt.seconds)
                            )}
                          </span>
                          <ButtonBrown
                            onClick={() => onReply(reply)}
                            label='Balas'
                            size='btn-sm'
                          />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Messages;
