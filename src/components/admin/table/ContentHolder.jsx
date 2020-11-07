import { useState } from "react";
import TableRow from "./TableRow";
import Search from "./Search";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ContentHolder = (props) => {
  const [search, setSearch] = useState("");

  console.log(props.data.length);

  const searchString = (e) => {
    setSearch(e.trim().toLowerCase());
  };

  return (
    <div className="contentHolder m-3">
      {search.length !== 0 ? (
        <ArrowBackIcon
          onClick={() => {
            searchString("");
          }}
          style={{
            fontSize: "35px",
            position: "absolute",
            cursor: "pointer",
            border: "1px solid lightgrey",
            borderRadius: "50%",
          }}
        />
      ) : (
        ""
      )}
      <Search search={searchString} />

      <div className="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-hover table-bordered mb-0">
          <thead className="tableHead text-white">
            <tr className="tableRow">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? props.data
                  .filter(
                    (data) =>
                      data.id
                        .toString()
                        .toLowerCase()
                        .includes(search) ||
                      data.customer_name
                        .toString()
                        .toLowerCase()
                        .includes(search) ||
                      data.customer_email
                        .toString()
                        .toLowerCase()
                        .includes(search) ||
                      data.product
                        .toString()
                        .toLowerCase()
                        .includes(search)
                  )
                  .map((v, i) => <TableRow key={i} data={v} />)
              : props.data.map((v, i) => <TableRow key={i} data={v} />)}
            {/*props.data.map((v, i) => (
              <TableRow key={i} data={v} setUrl={props.setUrl} />
            ))*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentHolder;
