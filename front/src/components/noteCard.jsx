import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const EditCard = (props) => {
	const [isEdit, setEdit] = useState(false);
	const [formData, setFormData] = useState({ header: props.data.header, content: props.data.content });

	const handelUpdate = () => {
		setEdit(!isEdit);
	};

	const handelChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Card style={{ height: '100%' }}>
			<Card.Header>
				{isEdit ? <Form.Control className='mb-2 rounded-0' type='text' placeholder='Enter Header' name='header' onChange={handelChange} value={formData.header} /> : props.data.header}
			</Card.Header>
			<Card.Body>
				<p className='card-text'>
					{isEdit ? (
						<Form.Control className='mb-2 rounded-0' as='textarea' rows={4} placeholder='Enter content' name='content' onChange={handelChange} value={formData.content} />
					) : (
						props.data.content
					)}
				</p>
				{isEdit ? (
					<div className='text-right'>
						<Button variant='success' size='sm' onClick={(e) => props.updateNote(formData)}>
							submit
						</Button>
					</div>
				) : (
					''
				)}
			</Card.Body>
			<div className='card-footer d-flex'>
				<Form.Check type='switch' id={'custom-switch' + props.data.noteID} onChange={(e) => props.changeVissibility(!props.data.isHide, props.data.noteID)} checked={props.data.isHide} />
				<Button variant='danger' size='sm' onClick={props.deleteNote(props.data.noteID)}>
					Delete
				</Button>
				<Button variant='warning' size='sm' onClick={handelUpdate}>
					Update
				</Button>
				<Button variant='info' size='sm' onClick={props.shareNote(props.data.noteID)}>
					share
				</Button>
			</div>
		</Card>
	);
};

export default EditCard;
