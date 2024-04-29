import React, { useState, useEffect } from "react"
import CustomDropdown from "../Helpers/CustomDropdown"
import Dropdowndata from './jsonfolder/dropdowndata.json'
// import axios from 'axios';
// const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function Dropdown() {
    // const [user, setUsers] = useState([])
    const [SelectedDropdown, setSelectedDropdown] = useState({ label: 'select' })
    const [showdropdown, setShowdropdown] = useState(false)
    const [valueDropdown, setValueDropdown] = useState('')

    // calling Api
    // const getData = async () => {
    //     await axios.get(`${baseURL}`).then((response) => {
    //         setUsers(response.data);
    //     })
    // };
    // useEffect(() => {
    //     getData()
    // }, [])


    // changing the key title to label and datavalue to value if data is from backend api
    // name: label,
    // id: value,
    const optiondata = Dropdowndata.map(({
        title: label,
        dataValue: value,
        ...rest
    }) => ({
        label,
        value,
        ...rest
    }))

    // selected data
    const handleSelectedDropdown = (ele, index) => {
        console.log("selectedlabeldropdown", ele.label, "selectedvaluedropdown", ele.value)
    }

    return (
        <>
            <CustomDropdown
                width='15vw'
                Selected={SelectedDropdown}
                setSelected={setSelectedDropdown}
                Show={showdropdown}
                setShow={setShowdropdown}
                value={valueDropdown}
                setValue={setValueDropdown}
                handleSelected={handleSelectedDropdown}
                option={optiondata}
            />
        </>
    )
}