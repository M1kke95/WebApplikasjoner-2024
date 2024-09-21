type HeaderProps = {
  person: {
    name: string;
    degree: string;
    points: number;
    email: string;
  };
};

export default function Header({ person }: HeaderProps) {
  return (
    <header>
      <h1>{person.name}</h1>
      <p>{person.degree}</p>
      <p>{person.points} points</p>
      <p>Contact: {person.email}</p>
    </header>
  );
}
