export interface ProjectType {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  publishedAt: string; 
  publicStatus: boolean; 
}

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  publishedAt: string; 
  publicStatus: boolean; 
  removeProject: (id: string) => void; 
  addProject: (newProject: ProjectType) => Promise<void>;
};

export type PersonProps = {
    person: {
      description: string,
      image: string;
      name: string;
      degree: string;
      points: number;
      email: string;
      experiences: { name: string }[]; 
    };
  };


export type BiografiProps = PersonProps & {
  toggleCreateProjectForm: () => void;
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
    description: string,
    name: string;
    degree: string;
    points: number;
    email: string;
};
};