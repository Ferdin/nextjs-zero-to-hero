// Explain about this - why this should be client component.
"use client";

type ClickEventComponentProps = {
  movieName: string;
};

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function ClickEventComponent({
  movieName,
}: ClickEventComponentProps) {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`);
  };
  return (
    <div>
      <Button onClick={handlePlayClick}>Play &quot;{movieName}&quot;</Button>
    </div>
  );
}

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
