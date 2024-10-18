import { PersonProps } from "../types/types";
import Experiences from "./Experiences";
import Header from "./InformationPerson";


export default function Biografi({ person }: PersonProps) {
  return (
    <div>
      <Header person={person} />
      <Experiences experiences={person.experiences} />
    </div>
  );
}
