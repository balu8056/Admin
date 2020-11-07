import { Link } from "react-router-dom";

const TableRow = (props) => {
  const { id, customer_name, customer_email, product, quantity } = props.data;

  return (
    <tr style={{ cursor: "pointer" }}>
      <th scope="row">
        <Link to={`/${id}`} className="text-blue">
          {id}
        </Link>
      </th>
      <td>{customer_name}</td>
      <td>{customer_email}</td>
      <td>{product}</td>
      <td>{quantity}</td>
    </tr>
  );
};
export default TableRow;