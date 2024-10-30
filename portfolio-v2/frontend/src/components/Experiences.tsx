import { ExperiencesProps} from "../types/types";
import Experience from "./Experience";




export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div>
      <p>Min erfaring:</p>
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