import "./Die.css";

export default function Die(){
    return <h2 className="Die">Die Roll: {Math.floor(Math.random()*6+1)}</h2>
}