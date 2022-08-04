import React, { useState } from 'react'
    
function Experience() {
    const [experienceFields, setFormFields] = useState([
        {company: '', role: '', from: '', to: ''}
    ])

    const handleFormChange = (event, index) => {
        let data = [...experienceFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const addExperience = () => {
        let object = {
            company: '',
            role: '',
            from: '',
            to: ''
        }

        setFormFields([...experienceFields, object])

    }

    const removeExperience = (index) => {
        let data = [...experienceFields];
        data.splice(index,1)
        setFormFields(data)
    }

    return (
        <div className='eductation-container'>
            <form>
                {experienceFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='company'
                                placeholder='Company'
                                onChange={event => handleFormChange(event, index)}
                                value={form.company}
                            />
                            <input
                                name='role'
                                placeholder='Role'
                                onChange={event => handleFormChange(event, index)}
                                value={form.role}
                            />
                            <input
                                name='from'
                                placeholder='From'
                                onChange={event => handleFormChange(event, index)}
                                value={form.from}
                            />
                            <input
                                name='to'
                                placeholder='To'
                                onChange={event => handleFormChange(event, index)}
                                value={form.to}
                            />
                            <button type='button' onClick={removeExperience}>Remove</button>
                    </div>
                    
                    )
                })}
                 
            </form>
                <button onClick={addExperience}>Add</button>
        </div>
    )
}

export default Experience