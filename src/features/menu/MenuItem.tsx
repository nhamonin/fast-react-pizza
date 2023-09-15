import { formatCurrency } from '../../utilities/helpers';
import { MenuItem } from '../../types';

function MenuItem({ pizza }: { pizza: MenuItem }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
