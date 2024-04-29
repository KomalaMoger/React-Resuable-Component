import React, { useState } from "react"
import CustomEditableDropdown from "../Helpers/CustomEditableDropdown"
import Originldata from './jsonfolder/dropdowndata.json'

export default function EditableDropdown() {
    const [showdata, setShowdata] = useState(false)
    const [flag, setFlag] = useState(false)

    // changing the key title to label and datavalue to value if data is from backend api
    const optiondata = Originldata.map(({
        title: label,
        dataValue: value,
        ...rest
    }) => ({
        label,
        value,
        ...rest
    }))

    // selected data
    const handleSelecteddata = (ele, index) => {
        console.log("selectedlabel", ele.label, "selectedvalue", ele.value)
    }
    return (
        <>
            <CustomEditableDropdown
                show={showdata}
                setShow={setShowdata}
                showarrow={flag}
                setShowarrow={setFlag}
                handleSelected={handleSelecteddata}
                option={optiondata}
                placeholder="select country"
            />
        </>
    )
}