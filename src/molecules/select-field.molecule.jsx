import { Form } from 'react-bootstrap';

export const SelectField = (props) => {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>Status</Form.Label>
      <Form.Select aria-label='Default select example' {...props}>
        <option>Pilih Salah Satu</option>
        <option value='Hadir'>Hadir</option>
        <option value='Tidak Hadir'>Tidak Hadir</option>
        <option value='Ragu-ragu'>Ragu-ragu</option>
      </Form.Select>
    </Form.Group>
  );
};
