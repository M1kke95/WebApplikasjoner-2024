import { HeaderProps } from "../types/types";


export default function InformationAboutPerson({ person }: HeaderProps) {
  return (
      <>
      <h1>{person.name}</h1>
      <p>{person.degree}</p>
      <p>{person.points} points</p>
      <p>Contact: {person.email}</p>
      </>
  );
}
