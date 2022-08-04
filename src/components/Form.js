import React, { useState } from 'react';
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

function Form() {

    const [page, setPage] = useState(0);

    const FormTitles = ["Personal Information", "Education", "Experience", "Skills"];

    const Step = () => {
        if (page === 0){
            return <Personal />
        } else if (page === 1) {
            return <Education />
        } else if (page === 2) {
            return <Experience />
        } else {
            return <Skills />
        }
    }

    return (
        <div className='form'>
            <div className='progressbar'></div>
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
                    disabled = {page === FormTitles.length -1}
                    onClick = {() => {
                        setPage((currPage) => currPage + 1)
                        }}
                    >Next</button>

                </div>

            </div>
        </div>
    )
}

export default Form;