import Concept from "./Concept";
import "./Concepts.css";
export default function Concepts(props) {
  return (
    <ul className="concepts">
      <Concept concept={props.concepts[0]} />
      <Concept concept={props.concepts[2]} />
      <Concept concept={props.concepts[1]} />
    </ul>
  );
}
