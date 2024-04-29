import React from 'react'
export default function CustomToggle(props = {}) {
    return (
        <>
            <label className='customToggle-switch'>
                <input
                    type='checkbox'
                    className={props.className}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}
                />
                <span className={props.disabled ? 'customToggle-slider-disabled round' : 'customToggle-slider round'}></span>
            </label>
        </>
    )
}