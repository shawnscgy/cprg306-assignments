export default function Item(props) {
  return (
    <li className="m-4 p-2 bg-slate-900 max-w-sm">
      <h2 className="text-xl font-bold text-white">{props.name}</h2>
      <p className="text-sm text-white">
        Buy {props.quantity} in {props.category}
      </p>
    </li>
  );
}
