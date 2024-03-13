import "./Die.css";

export default function Die({ sides = 6 }) {
  return <h2 className="Die">Die Roll: {Math.floor(Math.random() * sides + 1)}</h2>
}