import React from 'react'

function Skills({ formData, setFormData}) {
    return (
        <div className='skills'>
                        <div className='skills-container'>
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill1: event.target.value}) }
                                value={formData.skill1}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill2: event.target.value}) }
                                value={formData.skill2}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill3: event.target.value}) }
                                value={formData.skill3}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill4: event.target.value}) }
                                value={formData.skill4}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill5: event.target.value}) }
                                value={formData.skill5}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill6: event.target.value}) }
                                value={formData.skill6}
                            />
                            <input
                                name='Skill'
                                placeholder='Skill'
                                onChange={event => setFormData({...formData, skill7: event.target.value}) }
                                value={formData.skill7}
                            />
                    </div>
        </div>
    )
}

export default Skills