export default function ChildComponent({ onClick }) {
  console.log('ChildComponent');
  return <button onClick={onClick}>Click me</button>;
}
