import { ActionFunctionArgs, useFetcher } from "react-router-dom";

import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action(args: ActionFunctionArgs<{ orderId: string }>) {
  if (!args.params.orderId) return null;
  await updateOrder(args.params.orderId, { priority: true });

  return null;
}

export default UpdateOrder;
