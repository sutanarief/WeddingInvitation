import './molecules.style.scss';

export const ButtonBrown = ({ onClick = () => {}, loading, label, size = '' }) => {
  return (
    <button onClick={onClick} className={`btn btn-brown ${size}`} disabled={loading}>
      {loading ? 'Sending' : label}
    </button>
  );
};
