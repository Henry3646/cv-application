import React, { useState} from 'react'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

import './Form.css'

function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        school1: "",
        study1: "",
        from1: "",
        to1: "",
        school2: "",
        study2: "",
        from2: "",
        to2: "",
        company1: "",
        role1: "",
        from3: "",
        to3: "",
        company2: "",
        role2: "",
        from4: "",
        to4: ""

    })

    const FormTitles = ["Personal Information", "Education", "Experience", "Skills"];

    const Step = () => {
        if (page === 0){
            return <Personal formData={formData} setFormData={setFormData}/>
        } else if (page === 1) {
            return <Education formData={formData} setFormData={setFormData}/>
        } else if (page === 2) {
            return <Experience formData={formData} setFormData={setFormData}/>
        } else {
            return <Skills formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <div className='form'>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>{Step()}</div>
                <div className='footer'>
                    <button
                    disabled = {page === 0}
                    onClick = {() => {
                        setPage((currPage) => currPage - 1)
                        }}
                    >Prev</button>

                    <button 
                    onClick = {() => {
                        if (page === FormTitles.length -1 ){

                        }
                        else {setPage((currPage) => currPage + 1)
                        }}}
                    >
                        {page === FormTitles.length -1 ? "Submit" : "Next"}
                        </button>

                </div>

            </div>
        </div>
    )
}

export default Form;