import React, { useState } from 'react'

function Skills() {
    const [skillsFields, setFormFields] = useState([
        {skill: ''}
    ])

    const handleFormChange = (event, index) => {
        let data = [...skillsFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const addSkill = () => {
        let object = {
            skill: '',
        }

        setFormFields([...skillsFields, object])

    }

    const removeSkill = (index) => {
        let data = [...skillsFields];
        data.splice(index,1)
        setFormFields(data)
    }

    return (
        <div className='eductation-container'>
            <form>
                {skillsFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => handleFormChange(event, index)}
                                value={form.skill}
                            />
                            <button onClick={removeSkill}>Remove</button>
                    </div>
                    
                    )
                })}
                 
            </form>
                <button onClick={addSkill}>Add</button>
        </div>
    )
}

export default Skills