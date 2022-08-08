import React from 'react'



function Final(formData) {
    

    const displayExperience1 = () => {
        if (formData.formData.company1 !== ""){
            return(
                <div>
                    <p>{formData.formData.company1}</p>
                        <ul>
                            <li>{formData.formData.role1}</li>
                            <li>{formData.formData.from3} - {formData.formData.to3}</li>
                      </ul>
                </div>
            )
        }
    }

    const displayExperience2 = () => {
        if (formData.formData.company2 !== ""){
            return(
                <div>
                    <p>{formData.formData.company2}</p>
                        <ul>
                            <li>{formData.formData.role2}</li>
                            <li>{formData.formData.from4} - {formData.formData.to4}</li>
                      </ul>
                </div>
            )
        }
    }

    const displayEducation1 = () => {
        if (formData.formData.school1 !== "") {
            return (
                <div>
                    <p>{formData.formData.school1}</p>
                    <ul>
                        <li>{formData.formData.study1}</li>
                        <li>{formData.formData.from1} - {formData.formData.to1}</li>
                    </ul>
                </div>
            )
        }
    }
    const displayEducation2 = () => {
        if (formData.formData.school2 !== "") {
            return (
                <div>
                    <p>{formData.formData.school2}</p>
                    <ul>
                        <li>{formData.formData.study2}</li>
                        <li>{formData.formData.from2} - {formData.formData.to2}</li>
                    </ul>
                </div>
            )
        }
    }

    const displaySkills = (skill) => {
        if (skill !== "") {
            return (
                <li><div>{skill}</div></li>
            )
        }
    }
    return (
        <div className='Resume'>
            <div className='Name'>{formData.formData.name}</div>
            <div className='info'>{formData.formData.email} - {formData.formData.phone} - {formData.formData.location}</div>
            <div className='Experience'>
                <h1>Experience</h1>
                <div>{displayExperience1()}</div>
                <div>{displayExperience2()}</div>
            </div>
            <div className='Education'>
                <h1>Education</h1>
                <div>{displayEducation1()}</div>
                <div>{displayEducation2()}</div>
            </div>

            <div className='Skills'>
                <h1>Skills</h1>
                <ul className='skillsList'>
                    {displaySkills(formData.formData.skill1)}
                    {displaySkills(formData.formData.skill2)}
                    {displaySkills(formData.formData.skill3)}
                    {displaySkills(formData.formData.skill4)}
                    {displaySkills(formData.formData.skill5)}
                    {displaySkills(formData.formData.skill6)}
                    {displaySkills(formData.formData.skill7)}
                </ul>

            </div>
        </div>
    )
}

export default Final