import React from 'react'


type ProjectProps = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
};

export default function Project({
    id,
    name,
    description,
    startDate,
    endDate,
    imageUrl,
  }: ProjectProps) {
    return (
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <img src={imageUrl} alt={name} />
        </div>
      );
    }