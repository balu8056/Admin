import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import SaveIcon from "@material-ui/icons/Save";
import TableData from "../../DummyData";

import {connect} from 'react-redux'


const UpdateItem = (props) => {
  const {match } = props;
  const idFromPath = match.params.id;
  const data = TableData.filter((document) => document.id === idFromPath);
  const {id, customer_name, customer_email, product, quantity} = data[0];

  return (
    <div className="mt-5 updateTable">
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td className="text-center">Customer Id </td>
            <td>
              <div className="form-group">
                <input
                  type="text"
                  disabled={true}
                  className="form-control"
                  id="updateId"
                  placeholder="id"
                  defaultValue={id}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">Customer Name</td>
            <td>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="updateName"
                  placeholder="id"
                  defaultValue={customer_name}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">Customer Email</td>
            <td>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="updateEmail"
                  placeholder="id"
                  defaultValue={customer_email}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">Product </td>
            <td>
              <div className="form-group">
                <select
                  className="form-control"
                  id="updateProduct"
                  defaultValue={product}
                >
                  <option defaultValue="1">Product 1</option>
                  <option defaultValue="2">Product 2</option>
                  <option defaultValue="3">Product 3</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">Quantity</td>
            <td>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="updateQuantity"
                  placeholder="Quantity"
                  defaultValue={quantity}
                  min="1"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-danger p-1 mr-5">
        <DeleteOutlineIcon onClick={() => props.setUser(id)} />
      </button>
      <button className="btn btn-warning ml-5 p-1">
        <SaveIcon />
      </button>
    </div>
  );
};

function mapStateToProps(state){
  return {
    tabledata: state.tableData
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUser: (id) => {
      dispatch({type: "DETELE_DATA", payload: id})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem)




// export default UpdateItem;
