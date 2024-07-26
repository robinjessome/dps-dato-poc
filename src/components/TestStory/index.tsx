
type Props = {
  text: String;
};

export default function TestStory({ text }: Props) {


  return (
    <div className="text-4xl font-bold">{text}</div>
  );
}
