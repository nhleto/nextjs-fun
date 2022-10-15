export default function List({ children }) {
  return (
    <ul>
      {children.map(({ element, id }) => (
        <li key={id}>{element}</li>
      ))}
    </ul>
  );
}
