export default function ColorBox({ color }) {
  const styles = {
    height: "35px",
    width: "300px",
    backgroundColor: color,
  };
  return <div style={styles}></div>;
}

const double = (n) => n * 2;

const msg = "Happy Day🥳🥳";

export { double, msg }; // named export
