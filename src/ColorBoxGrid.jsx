import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css"

export default function ColorBoxGrid({ colors }) {
  return (
    <div className="grid">
      {[...Array(25)].map((x, i) =>
        <ColorBox key={i} colors={colors} />
      )}
    </div>
  )
}