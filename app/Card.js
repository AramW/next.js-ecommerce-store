export default function Card({ children }) {
  const cardStyle = {
    width: '1500px',
    height: '50px',
    border: '5px solid lightgrey',
    borderRadius: '2px',
    padding: '5px',
    margin: '5px',
  };
  return <div style={cardStyle}>{children}</div>;
}
