import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

interface Probs {
    onSelectSortOrder : (sortOrder : string)=>void;
    sortOrder : string;
}
const SortOrder = ({onSelectSortOrder, sortOrder} : Probs) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realese Date" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created Date" },
    { value: "-updated", label: "Updating" },
    { value: "-rating", label: "Popular" },
  ];
  const currentSortOrder=sortOrders.find(order=>order.value === sortOrder)
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by : {currentSortOrder?.label || 'Relevence'}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem 
            onClick={()=>onSelectSortOrder(order.value)}
            value={order.value} 
            key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortOrder;
