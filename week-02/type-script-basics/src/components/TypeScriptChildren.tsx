type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <button>{title}</button>
      <div>{children}</div>
    </div>
  );
}
