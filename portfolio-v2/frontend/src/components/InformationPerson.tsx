import { HeaderProps } from "../types/types";


export default function InformationAboutPerson({ person }: HeaderProps) {
  return (
      <>
      <h1>{person.name}</h1>
      <p>{person.description}</p>
      <ul>
      <li><p>{person.degree}</p></li>
      <li><p>{person.points} points</p></li>
      <li><p>Contact: {person.email}</p></li>
      </ul>
      </>
  );
}
