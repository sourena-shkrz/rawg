import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

const SortOrder = () => {
  const sortOrders = [
    { value: "", label: "" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realese Date" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created Date" },
    { value: "-updated", label: "Updating" },
    { value: "-rating", label: "Popular" },
  ];
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Select order
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map(order =>
            <MenuItem value={order.value} key={order.value}>{order.label}</MenuItem>
        )}
        
      </MenuContent>
    </MenuRoot>
  );
};

export default SortOrder;
