import { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
export default function CustomEditableDropdown({
    width = '9vw',
    show = { show },
    setShow = { setShow },
    option = { option },
    showarrow = { showarrow },
    setShowarrow = { setShowarrow },
    handleSelected = { handleSelected },
    placeholder = 'select'
}) {
    const [query, setQuery] = useState("")

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

    // open and close dropdown
    const MouseDownHandlerValue = () => {
        setShow(!show)
        setShowarrow(true)
    }

    // input hanldechange
    const hanldeChange = (e) => {
        setQuery(e.target.value)
        e.target.value && setShow(true)
        setShowarrow(false)
    }

    // selected handleDropdown
    const handleDropdown = (ele, index) => {
        handleSelected(ele, index)
        setQuery(ele.label)
        setShow(!show)
    }

    // search functionality
    let searchresult = option.filter(searchele => {
        if (query === "") {
            // if query is empty
            return searchele
        }
        else if (searchele.label.toLowerCase().startsWith(query.toLowerCase())) {
            // return filtered array
            return searchele
        }
    })
    return (
        <>
            <div style={{ width ,marginLeft:'20px',marginTop:'10px'}} ref={wrapperRef}>
                <div className='editcustom-dropdown'>
                    <div className='editdropdown-btn'>
                        <input type='search' placeholder={placeholder} onChange={(e) => hanldeChange(e)} value={query} />
                        <span className='mx-1' onMouseDown={MouseDownHandlerValue}><MdKeyboardArrowDown /></span>
                    </div>

                    {/* All content will display when we click on down arrow Icon-functionality */}
                    {showarrow && show && <div className='editdropdown-content'>
                        {option && option.length > 0 ? option.map((ele, index) => {
                            return <div className='editdropdown-item' key={index} onClick={() => { handleDropdown(ele, index) }}>{ele.label}</div>  // only to display label
                            // return <div className='editdropdown-item' key={index} onClick={()=>{handleDropdown(ele,index)}}>{ele.icon}{ele.label}</div>
                        }) : <div className='editdropdown-item'>
                            no match found
                        </div>}
                    </div>}

                    {!showarrow && show && <div className='editdropdown-content'>
                        {searchresult && searchresult.length > 0 ? searchresult.map((ele, index) => {
                            return <div className='editdropdown-item' key={index} onClick={() => { handleDropdown(ele, index) }}>{ele.label}</div>  // only to display label
                            // return <div className='editdropdown-item' key={index} onClick={()=>{handleDropdown(ele,index)}}>{ele.icon}{ele.label}</div>
                        }) : <div className='editdropdown-item'>
                            no match found
                        </div>}
                    </div>}
                </div>
            </div>
        </>
    )
}