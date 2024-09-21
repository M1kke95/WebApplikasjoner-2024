import React from 'react'

type experienceProp = {
    description: string;
}
export default function Experience(props: experienceProp){
    const {description = "description"} = props

    return (
        <p>{description}</p>
    )
}