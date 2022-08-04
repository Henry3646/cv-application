import React from 'react'


function Experience({ formData, setFormData }) {

    return (
        <div className='experience'>
                        <div className='experience-container'>
                            <input
                                type='text'
                                placeholder='Company'
                                onChange={(event) => setFormData({...formData, company1: event.target.value })}
                                value={formData.company1}
                            />
                            <input
                                type='text'
                                placeholder='Role'
                                value={formData.role1}
                                onChange={(event) => setFormData({...formData, role1: event.target.value })}
                                
                            />
                            <input
                                type='text'
                                placeholder='From'
                                onChange={(event) => setFormData({...formData, from3: event.target.value })}
                                value={formData.from3}
                            />
                            <input
                                type='text'
                                placeholder='To'
                                onChange={(event) => setFormData({...formData, to3: event.target.value })}
                                value={formData.to3}
                            />
                            <input
                                type='text'
                                placeholder='Company'
                                onChange={(event) => setFormData({...formData, company2: event.target.value })}
                                value={formData.company2}
                            />
                            <input
                                type='text'
                                placeholder='Role'
                                value={formData.role2}
                                onChange={(event) => setFormData({...formData, role2: event.target.value })}
                                
                            />
                            <input
                                type='text'
                                placeholder='From'
                                onChange={(event) => setFormData({...formData, from4: event.target.value })}
                                value={formData.from4}
                            />
                            <input
                                type='text'
                                placeholder='To'
                                onChange={(event) => setFormData({...formData, to4: event.target.value })}
                                value={formData.to4}
                            />
                </div>
        </div>
    )
}

export default Experience