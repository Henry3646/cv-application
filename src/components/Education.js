import React from 'react'
function Education({ formData, setFormData }) {

    return (
        <div className='education'>
            <form>
                    <div className='education-container'>
                            <input
                                type='text'
                                placeholder='School/University'
                                onChange={(event) => setFormData({...formData, school1: event.target.value })}
                                value={formData.school1}
                            />
                            <input
                                type='text'
                                placeholder='Area of Study'
                                value={formData.study1}
                                onChange={(event) => setFormData({...formData, study1: event.target.value })}
                                
                            />
                            <input
                                type='text'
                                placeholder='From'
                                onChange={(event) => setFormData({...formData, from1: event.target.value })}
                                value={formData.from1}
                            />
                            <input
                                type='text'
                                placeholder='To'
                                onChange={(event) => setFormData({...formData, to1: event.target.value })}
                                value={formData.to1}
                            />
                            <input
                                type='text'
                                placeholder='School/University'
                                onChange={(event) => setFormData({...formData, school2: event.target.value })}
                                value={formData.school2}
                            />
                            <input
                                type='text'
                                placeholder='Area of Study'
                                value={formData.study2}
                                onChange={(event) => setFormData({...formData, study2: event.target.value })}
                                
                            />
                            <input
                                type='text'
                                placeholder='From'
                                onChange={(event) => setFormData({...formData, from2: event.target.value })}
                                value={formData.from2}
                            />
                            <input
                                type='text'
                                placeholder='To'
                                onChange={(event) => setFormData({...formData, to2: event.target.value })}
                                value={formData.to2}
                            />
                    </div>
            </form>
        </div>
    )
}

export default Education