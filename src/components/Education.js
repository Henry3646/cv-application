import React, { useState } from 'react'

    
function Education() {
    const [eductationFields, setFormFields] = useState([
        {school: '', study: '', from: '', to: ''}
    ])

    const handleFormChange = (event, index) => {
        let data = [...eductationFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const addEducation = () => {
        let object = {
            school: '',
            study: '',
            from: '',
            to: ''
        }

        setFormFields([...eductationFields, object])

    }

    const removeEducation = (index) => {
        let data = [...eductationFields];
        data.splice(index,1)
        setFormFields(data)
    }

    return (
        <div className='eductation-container'>
            <form>
                {eductationFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='school'
                                placeholder='School/University'
                                onChange={event => handleFormChange(event, index)}
                                value={form.school}
                            />
                            <input
                                name='study'
                                placeholder='Area of Study'
                                onChange={event => handleFormChange(event, index)}
                                value={form.study}
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
                            <button type='button' onClick={removeEducation}>Remove</button>
                    </div>
                    
                    )
                })}
                 
            </form>
                <button onClick={addEducation}>Add</button>
        </div>
    )
}

export default Education