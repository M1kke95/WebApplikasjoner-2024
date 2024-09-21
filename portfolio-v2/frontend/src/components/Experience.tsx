

type ExperienceProps = {
  description: string;
};

export default function Experience({ description }: ExperienceProps) {
  return <p>{description}</p>;
}