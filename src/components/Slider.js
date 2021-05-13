export default function Slider({ min, max, value, handleChange, unit }) {
  return (
    <div className="slider-container">
      <h2>
        {value}
        {unit}
      </h2>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="slider"
      />
    </div>
  );
}
