import { useState,useRef } from "react"
import { Form, Overlay, Popover,Row,Col,Button } from "react-bootstrap"

export default function TooltipSlider() {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0)
    const [target, setTarget] = useState(null)
    const ref = useRef(null)
    const handleClick = (event) => {
        setShow(!show)
        setTarget(event.target)
    }
    const styleInput = {
        background: 'linear-gradient(90deg,rgb(35,220,212)' + value + '%,rgb(193,210,226)' + value + '%)'
    }
    return (
        <>
            <div ref={ref}>
                <Button onClick={handleClick}>onClick</Button>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                >
                    <Popover id='popover-container'>
                        <Popover.Body className="p-2 m-1">
                            <Row md='auto'>
                                <Col md='auto'>
                                    <Form.Label>txt:</Form.Label>
                                </Col>
                                <Col md={3} className='pe-0 py-0 placeholder-bold' placeholder-bold='%'>
                                    <Form.Control type='text' className="py-0 ps-0 my-0" value={value} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='auto' className='slideContainer'>
                                    <input type='range'
                                    max={100}
                                    value={value}
                                    onChange={(e)=>setValue(e.target.value)}
                                    className="slider"
                                    style={styleInput}
                                    />
                                </Col>
                            </Row>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </div>
        </>
    )
}