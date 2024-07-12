import { useNotify, useUpdate } from "react-admin";
import { IconButton, Tooltip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import type { Order } from "data-generator-retail";

export const OrderCancelButton = ({ order, onSuccess }: Props) => {
  const notify = useNotify();

  const [update, { isPending }] = useUpdate(
    "orders",
    {
      id: order.id,
      data: { status: "cancelled" },
      previousData: order,
    },
    {
      onSuccess: () => {
        notify(`Order ${order.reference} cancelled`);
        onSuccess();
      },
    }
  );

  const handleCancel = (order: Order) => {
    update();
  };

  return (
    <Tooltip title="Cancel order" placement="left">
      <IconButton
        color="error"
        aria-label="Cancel order"
        onClick={() => handleCancel(order)}
        disabled={isPending}
      >
        <CancelIcon />
      </IconButton>
    </Tooltip>
  );
};

interface Props {
  order: Order;
  onSuccess: () => void;
}
