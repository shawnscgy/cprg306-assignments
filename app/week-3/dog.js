export default function Dog({ name, breed, age, color }) {
  return (
    <section className="m-2 bg-neutral-100">
      <h2 className="text-xl font-bold text-violet-900">{name}</h2>
      <p className="font-bold">Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Color: {color}</p>
    </section>
  );
}
