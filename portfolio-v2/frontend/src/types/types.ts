export interface ProjectType {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    
}

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  removeProject: (id: string) => void; 
};

export type PersonProps = {
    person: {
      name: string;
      degree: string;
      points: number;
      email: string;
      experiences: { name: string }[]; 
    };
  };



export type contactProps = {
    email: string; 
}

export type ExperienceProps = {
    description: string;
};

export type ExperienceType = {
    name: string;  
  };

export type HeaderProps = {
person: {
    name: string;
    degree: string;
    points: number;
    email: string;
};
};