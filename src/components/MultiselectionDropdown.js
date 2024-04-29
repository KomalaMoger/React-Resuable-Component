import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import CustomMultiSelectionDropdown from '../Helpers/CustomMultiSelecetionDropdown'
import data from './jsonfolder/multidata.json'
export default function MultiSelectionDropdown() {
    const [option, setOption] = useState(data)
    const handleSelectedData = (selectedvalue) => {
        console.log("selectedvalue", selectedvalue)
    }
    const getData = () => {
        setOption(data)
    }
    console.log("option", option)
    return (
        <>
            <Row>
                <CustomMultiSelectionDropdown 
                option={option}
                checkedalltext='checkedAll'
                handleSelectedData={handleSelectedData}
                getData={getData}
                />
            </Row>
            <Row>

            </Row>
        </>
    )
}