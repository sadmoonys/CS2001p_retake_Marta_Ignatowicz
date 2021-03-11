import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditCard = (props) => {
	const [formData, setFormData] = useState({ header: '', content: '' });

	const handelSubmit = (e) => {
		props.handelSubmit(formData, submitCallback);
	};

	const handelChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='card' style={{ height: '100%' }}>
			<Form className='d-flex flex-column' style={{ height: '100%' }}>
				<div className='card-body' style={{ flex: 1 }}>
					<Form.Control className='mb-2 rounded-0' type='text' placeholder='Enter Header' name='header' onChange={handelChange} value={formData.header} />
					<Form.Control className='mb-2 rounded-0' as='textarea' rows={4} placeholder='Enter content' name='content' onChange={handelChange} value={formData.content} />
				</div>
				<div className='card-footer text-right'>
					<Button style={{ background: '#cce5ff', color: 'black' }} className='rounded-0' onClick={handelSubmit}>
						submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default EditCard;
