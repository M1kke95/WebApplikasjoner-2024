import { BiografiProps} from "../types/types";
import Experiences from "./Experiences";
import Header from "./InformationPerson";



export default function Biografi({ person, toggleCreateProjectForm }: BiografiProps) {
  return (
    <div className="bioContainer">
      <figure className="bioPicture">
        <img 
          src={person.image} 
          alt={`${person.name}'s portrait`} 
          className="biografi-image"
        />
      </figure>
      <div className="bio">
        <Header person={person} />
        <Experiences experiences={person.experiences} />
        <button onClick={toggleCreateProjectForm}>Legg til prosjekt</button>
      </div>
    </div>
  );
}
