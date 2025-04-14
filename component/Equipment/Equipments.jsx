import React from 'react'


const EquipmentData = [

    {
        id: 1,
        title: "Yoga Equipment",
        desc: "It is a long established fact that a reader readable. it is a long established fact that a reader readable",
        icon: <GrYoga />,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Yoga Equipment",
        desc: "It is a long established fact that a reader readable. it is a long established fact that a reader readable",
        icon: <GrYoga />,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Yoga Equipment",
        desc: "It is a long established fact that a reader readable. it is a long established fact that a reader readable",
        icon: <GrYoga />,
        delay: 0.9,
    },
]


const Equipments = () => {

    return (
        <div>
            <div className='container'>
                <div className='grid'>
                    <div>
                        <h1>What we offer for you </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aperiam unde ratione ducimus harum?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipments