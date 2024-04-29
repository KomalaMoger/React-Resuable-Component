import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CustomModal from '../../Helpers/CustomModal'
export default function Modalsave() {
    const [modalshow, setModalshow] = useState(false)
    const handleShow = () => setModalshow(true)
    const handleHide = () => setModalshow(false)
    const handleSave = () => setModalshow(false)
    const handleDelete = () => setModalshow(false)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            {modalshow && <CustomModal
                show={modalshow}
                onhide={handleHide}
                showsave={true}
                showDelete={true}
                onSave={handleSave}
                onDelete={handleDelete}
                Title='Header'
                message='message'
                SaveText='Save'
                DeleteText='Delete button'
                CloseText='cance button'
            />}
        </>
    )
}