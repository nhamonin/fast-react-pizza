import { formatCurrency } from '../../utilities/helpers';
import { OrderItem } from '../../types';

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: {
  item: OrderItem;
  isLoadingIngredients: boolean;
  ingredients: string[];
}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
