import React, { useState } from 'react'
export default function CustomAccordion({ title, children }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='accordion-wrapper'>
            <div
                className={`accordion-title ${isOpen ? 'open' : 'closed'}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
                <div className='accordion-content'>{children}</div>
            </div>
        </div>
    )
}