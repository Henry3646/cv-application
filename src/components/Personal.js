import React from 'react'
    
function Personal({ formData, setFormData}) {

    return (
        <div className='personal-container'>
            <input 
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={(event) => 
                setFormData({...formData, name: event.target.value})}
            ></input>
            <input
                type='text'
                placeholder='Email'
                value={formData.email}
                onChange={(event) => 
                setFormData({...formData, email: event.target.value})}
            ></input>

            <input
                type='text'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={(event) => 
                setFormData({...formData, phone: event.target.value})}
            ></input>

            <input
            type='text'
            placeholder='Location'
            value={formData.location}
                onChange={(event) => 
                setFormData({...formData, location: event.target.value})}
            ></input>
            </div>
    )
}

export default Personal
