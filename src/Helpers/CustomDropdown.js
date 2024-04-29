import React, { useEffect, useState, useRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const CustomDropdown = ({
    width={width},
    Selected = { Selected },
    setSelected = { setSelected },
    Show = { Show },
    setShow = { setShow },
    value = { value },
    setValue = { setValue },
    handleSelected = { handleSelected },
    option = { option }
}) => {

    // open and close outside dropdown
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // close if clicked on outside of element
            function hanldeClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false)
                }
            }
            // bind the event listener
            document.addEventListener("mousedown", hanldeClickOutside)
            return () => {
                // unbind the event listener on clean up
                document.removeEventListener("mousedown", hanldeClickOutside)
            }
        }, [ref])
    }

    const mousehandle = () => {
        setShow(!Show)
    }
    const hanldeClick = (item, index) => {
        handleSelected(item)
        setSelected(item)
        setValue(item.value)
        setShow(!Show)
    }
    return (
        <>
            <div className="custom-dropdown" style={{ width: width }} ref={wrapperRef}>
                {option && <div>
                    <div className="dropdown-btn" onClick={mousehandle}>
                        {Selected.label}
                        <span className='custom-arrow'><MdKeyboardArrowDown /></span>
                    </div>
                    {Show && <div className="dropdown-content">
                        {option.map((item, index) => {
                            return <div className='dropdown-item' onClick={_ => hanldeClick(item, index)} key={index}>{item.label}</div>
                        })}
                    </div>}
                </div>}
            </div>
        </>
    )
}
export default CustomDropdown
