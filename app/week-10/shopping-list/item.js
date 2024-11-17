import { useUserAuth } from "../_utils/auth-context";
import { deleteItem } from "../_services/shopping-list-service";
export default function Item(props) {
  const { user } = useUserAuth();
  const handleDeleteItem = async () => {
    await deleteItem(user.uid, props.id);
    // if (window.confirm("Delete item: " + props.name + "?")) {
    //   await deleteItem(user.uid, props.id);
    //   window.location.reload();
    // }
  };
  return (
    <li
      className="m-4 p-2 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer flex justify-between"
      onClick={() => props.onSelect(props.name)}
    >
      <div>
        <h2 className="text-xl font-bold text-white">{props.name}</h2>
        <p className="text-sm text-white">
          Buy {props.quantity} in {props.category}
        </p>
      </div>
      <button className="text-sm hover:underline" onClick={handleDeleteItem}>
        Delete
      </button>
    </li>
  );
}
