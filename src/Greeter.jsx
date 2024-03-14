export default function Greeter(props) {
  const { person: name } = props;
  return <h1>Hello {name}!</h1>;
}