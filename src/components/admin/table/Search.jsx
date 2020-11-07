import $ from "jquery";

const Search = (props) => {
  const search = () => {
    const value = $("#search").val();
    value.length !== 0 ? props.search(value) : console.log("not enough");
  };
  return (
    <div className="mt-3 mb-3">
      <div className="input-group searchInput" id="searchInput">
        <input
          id="search"
          type="text"
          className="form-control form-control-sm"
          placeholder="Search by name, email..."
        />
        <div className="input-group-append" style={{ height: "100%" }}>
          <button
            onClick={search}
            className="btn btn-secondary p-1"
            type="button"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
