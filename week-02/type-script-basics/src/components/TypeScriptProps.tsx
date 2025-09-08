type GreetingProps = {
  name: string;
  placesVisited: string[];
  year: number;
};

export default function TypeScriptProps({
  name,
  placesVisited,
  year,
}: GreetingProps) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <ul>
        {placesVisited.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
      <h2>{year}</h2>
    </div>
  );
}
