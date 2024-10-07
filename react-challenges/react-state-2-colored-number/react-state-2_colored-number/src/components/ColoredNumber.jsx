export default function ColoredNumber({ value }) {
  return (
    <h2 style={{ color: `hsl(${230 - (value / 20) * 230}deg 100% 50%)` }}>
      {value}
    </h2>
  );
}
