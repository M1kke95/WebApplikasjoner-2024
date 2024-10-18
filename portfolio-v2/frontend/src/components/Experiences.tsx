import { ExperienceType } from "../types/types";
import Experience from "./Experience";



type ExperiencesProps = {
  experiences: ExperienceType[];
};

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div>
         {experiences.length === 0 ? (
        <p>Ingen erfaringer</p>
            ) : (
        experiences.map((experience, index) => (
          <Experience key={index} description={experience.name} />
        ))
      )}
    </div>
  );
}