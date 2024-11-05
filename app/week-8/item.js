export default function Item(props) {
  return (
    <li
      className="m-4 p-2 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
      onClick={() => props.onSelect(props.name)}
    >
      <h2 className="text-xl font-bold text-white">{props.name}</h2>
      <p className="text-sm text-white">
        Buy {props.quantity} in {props.category}
      </p>
    </li>
  );
}
