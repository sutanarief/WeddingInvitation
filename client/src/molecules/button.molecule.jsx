import './molecules.style.scss';

export const ButtonBrown = ({ onClick = () => {}, loading }) => {
  return (
    <button onClick={onClick} className='btn btn-brown' disabled={loading}>
      {loading ? 'Sending' : 'Send'}
    </button>
  );
};
