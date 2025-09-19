import Item from "./item-list"

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>quantity: {quantity}</p>
      <p>category: {category}</p>
    </li>
  );
};

