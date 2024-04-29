import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({
    show = { show },
    onhide = { onhide },
    Title = 'Title',
    message = 'Woohoo, you are reading this text in a modal!',
    SaveText = 'Save Changes',
    DeleteText = 'Delete',
    CloseText = 'close',
    showsave = false,
    showDelete = false,
    onSave = {},
    onDelete = { onDelete }
}) {

    return (
        <>
            <Modal
                show={show}
                onHide={onhide}
                centered
            // backdropClassName=''---->for background color,css changes
            // contentClassName=''------>for css changes
            // backdrop='static'---->when ever we click outside the modalpopup,modalpop won't get closed
            >
                <Modal.Header closeButton>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    {showsave && <Button variant="primary" onClick={onSave}>
                        {SaveText}
                    </Button>}
                    {showDelete && <Button variant="outline-primary" onClick={onDelete}>
                        {DeleteText}
                    </Button>}
                    <Button variant="secondary" onClick={onhide}>
                        {CloseText}
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;