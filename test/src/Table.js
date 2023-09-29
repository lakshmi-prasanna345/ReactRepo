import { useState } from "react";
const Table = (props) => {
    const { SNO, Image, Name, price, qty, updateTotalAmount } = props;
    const [count, setCount] = useState(0);
  
    const handleIncrement = () => {
      if (count < qty) {
        setCount(count + 1);
        updateTotalAmount(price, 1);
      }
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
        updateTotalAmount(price, -1);
      }
    };
  
    return (
      <tr>
        <td>{SNO}</td>
        <td>
          <img src={Image} alt={Name} style={{ maxWidth: "50px" }} />
        </td>
        <td>{Name}</td>
        <td>{price}</td>
        <td>
          <button onClick={handleDecrement} className="btn btn-danger">-</button> {count}{" "}
          <button onClick={handleIncrement} className="btn btn-success">+</button>
        </td>
        <td>{count * price}</td>
      </tr>
      
    );
  };
  export default Table;