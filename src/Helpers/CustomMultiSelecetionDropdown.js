import React, { useState, useEffect, useRef } from "react"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputGroup } from "react-bootstrap";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
export default function CustomMultiSelectionDropdown({ option, width = '15vw', checkedalltext = "All", handleSelectedData, getData }) {
    const [Show, setShow] = useState(false)
    const [multiSelectdata, setmultiSelectdata] = useState(option)
    const [checkedAll, setCheckedAll] = useState(false)
    const [searchCount, setSearchCount] = useState(0)
    const [query, setQuery] = useState("")
    let SearchLength = []
    let searchresult = []
    let arr1
    let arr2
    let data = []
    let result1 = []
    let Allchecked
    let Allchecked1

    // open and close outside dropdown
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            // close if clicked on outside of element
            function handldeClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false)
                }
            }
            // bind the event listener
            document.addEventListener("mousedown", handldeClickOutside)
            return () => {
                // unbind the event listener on clean up
                document.removeEventListener("mousedown", handldeClickOutside)
            }
        }, [ref])
    }

    // open and close dropdown using onmouse-functionality
    const handleMouseDown = () => {
        setShow(!Show)
    }

    // checked all-functionality
    const handleCheckAll = () => {
        setCheckedAll(!checkedAll)
        checkedfuncAll()
    }
    const checkedfuncAll = () => {
        if (checkedAll) {
            const AllData = multiSelectdata && multiSelectdata.map((ele, index) => {
                if (!ele.disabled && !ele.readOnly) {
                    return { ...ele, selected: false }
                }
                else {
                    return { ...ele }
                }
            })
            setmultiSelectdata(AllData)
        }
        else {
            const AllData = multiSelectdata && multiSelectdata.map((ele, index) => {
                SearchLength?.filter((e) => {
                    if (ele == e) {
                        return ele.selected = true
                    }
                    else {
                        return { ...ele }
                    }
                })
                return { ...ele }
            })
            setmultiSelectdata(AllData)
        }
    }
    const handleSelected = (checkeddata, checkedIndex) => {
        let selectedvalue = { ...checkeddata, selected: !checkeddata.selected }
        handleSelectedData(selectedvalue, checkedIndex)
    }

    // selected checkbox-functionality
    const handleCheck = (checkeddata, checkedIndex) => {
        handleSelected(checkeddata, checkedIndex)
        const newData = multiSelectdata.map((data, index) => {
            if (checkeddata.text == data.text && !checkeddata.readOnly) {
                return { ...data, selected: !data.selected }
            }
            else {
                return { ...data }
            }
        })
        setmultiSelectdata(newData)

        Allchecked = newData.every((ele) => ele.selected === true)
        if (Allchecked) {
            setCheckedAll(true)
        }
        if (!Allchecked) {
            setCheckedAll(false)
        }
    }
    useEffect(() => {
        getData(multiSelectdata)
    }, [multiSelectdata])

    useEffect(() => {
    }, [multiSelectdata, checkedAll])

    // to get the length of the checked data
    const checkedfunc = () => {
        let mainArray = multiSelectdata
        arr1 = mainArray.filter((e) => {
            return e.selected
        })
        arr2 = arr1.map(ele => {
            return ele.label
        })
        data.push(arr2)
    }
    checkedfunc()

    useEffect(() => { }, [data[0]])

    // search functionality
    searchresult = multiSelectdata.filter(searchele => {
        if (query === "") {
            // if query is empty
            return searchele
        }
        else if (searchele.text.toLowerCase().startsWith(query.toLowerCase())) {
            return searchele
        }
    })

    // while not searching
    if (query === "") {
        result1.push(searchresult)
    }

    // while searching element,dropdown data should display in ascending order
    else {
        searchresult.sort((a, b) => {
            const A = a.text.toUpperCase()
            const B = b.text.toUpperCase()
            // sort in an ascending order
            if (A < B) {
                return -1
            }
            if ((A > B)) {
                return 1
            }
            return 0
        })
        result1.push(searchresult)
    }

    // functionality-when all search element get checked,the checbox 'All' will be checked
    let funcresult = () => {
        Allchecked1 = SearchLength.length > 0 && SearchLength.every((ele) => ele.selected === true)
        if (Allchecked1) {
            setCheckedAll(true)
        }
        if (!Allchecked1) {
            setCheckedAll(false)
        }
    }
    useEffect(() => {
        setSearchCount(SearchLength.length)
        funcresult()
    }, [SearchLength, arr2, result1, searchresult])
    return (
        <>
            <Row>
                <Col xs={11}>
                    <Form.Group className='p-1 input-group flex-nowrap align-items-end col-xs-12 col-sm-5'>
                        <Form.Label className='dropLabel'>
                            Class:
                        </Form.Label>
                        <div className="multi-dropdown" style={{ width: width }} ref={wrapperRef}>
                            <div className="dropdown-btn" onMouseDown={handleMouseDown}>
                                {data && data[0].length > 0 ? (data[0].length > 2 ? `${data[0][0]},${data[0][1]}...` : data[0].length === 1 && `${data[0][0]}` || data[0].length === 2 && `${data[0][0]},${data[0][1]}`) : 'Selected'}
                                <span className="multisearchIcon"><MdKeyboardArrowDown /></span>
                            </div>
                            {Show && (
                                <div className="dropdown-content">
                                    <div className="multi-searchdiv m-0 p-0">
                                        <div className="multi-searchCol">
                                            <InputGroup className="multi-search justify-content-between">
                                                <input type='text' placeholder="Type text" onChange={event => setQuery(event.target.value)} minLength={"150px"} maxLength={"390px"} />
                                                <span className="multisearchIcon"><CiSearch /></span>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <Row className="multi-droprow m-0 p-0">
                                        <Col className='multi-dropCol d-flex align-items-center'>
                                            <input type='checkbox' checked={checkedAll} onChange={handleCheckAll} id="multidrop" />
                                            <label className="multi-dropAll" htmlFor="multidrop">{checkedalltext}</label>
                                            <span className="multi-droplen pe-4">{query ? `(${searchCount})` : ''}</span>
                                            <span className="multi-droplen ms-auto">{arr1.length}/{option.length}</span>
                                        </Col>
                                    </Row>
                                    <Row className="multicheck m-0">
                                        <Col className='multiCheckCol m-0'>
                                            {result1 && result1[0].length > 0 ? result1[0].map((ele, index) => {
                                                SearchLength.push(ele)
                                                return (
                                                    <ul key={index} className="multiChecklist p-0 m-0 d-flex align-items-center">
                                                        <li><input type='checkbox' id={`custom-checbox-${index}`} checked={ele.selected} className={ele.readOnly ? 'input-readonly' : ''} disabled={ele.disabled} onChange={() => { handleCheck(ele, index) }} /></li>
                                                        <li><label htmlFor={`custom-checbox-${index}`} className={ele.disabled ? 'droptext-disabled' : ele.readOnly ? 'droptext-readOnly' : 'droptext'}>{ele.text}</label></li>
                                                    </ul>
                                                )
                                            }) : <span className="labelnomatch">no match found</span>}
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}