import React from 'react'
import CustomAccordion from '../Helpers/CustomAccordion'
export default function Accordion() {
    return (
        <div className='wrapper'>
            <CustomAccordion title='outside accordion-one'>
                <div className='accordion-data text-center'>inside accordion-one</div>
            </CustomAccordion>
            <CustomAccordion title='outside accordion-two'>
                <div className='accordion-data text-center'>inside accordion-two-1</div>
                <div className='accordion-data text-center'>inside accordion-two-2</div>
                <div className='accordion-data text-center'>inside accordion-two-3</div>
            </CustomAccordion>
            <CustomAccordion title='outside accordion-three'>
                <div className='accordion-data text-center'>inside accordion-three</div>
            </CustomAccordion>
        </div>
    )
}