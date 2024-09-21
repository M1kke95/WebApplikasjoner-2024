import Experiences from "./Experiences";
import Header from "./Header";

type PersonProps = {
  person: {
    name: string;
    degree: string;
    points: number;
    email: string;
    experiences: { name: string }[]; 
  };
};

export default function Biografi({ person }: PersonProps) {
  return (
    <div>
      <Header person={person} />
      <Experiences experiences={person.experiences} />
    </div>
  );
}
