
const CartItem = (props) => {
    const { item, checked, onCheckedChangeRef } = props
    const { id, name, price } = item;
    const onWrapCheckedChange = (e, item) => {
      onCheckedChangeRef.current(item, e.target.checked);
    }
    return (
      <li key={id}>
        <input type="checkbox" checked={checked} 
          onChange={e => onWrapCheckedChange(e, item)}
        />
        <p>
        {name}
        </p>
        <p>
         {price}
        </p>
      </li>
    )
  }
  
  export default CartItem
  