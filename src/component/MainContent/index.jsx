import "./style.css";
import DataTable from "./dataTable";

function MainContent() {
  return (
    <div className="wrapper">
      <h3>Hover Data Table</h3>

      <table>
        <thead>
          <tr>
            <th>
              Rendering engine
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            </th>
            <th>
              Browser <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Platform(s) <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              Engine version <i className="fa-solid fa-sort"></i>
            </th>
            <th>
              CSS grade <i className="fa-solid fa-sort"></i>
            </th>
          </tr>
        </thead>

        <tbody>
          <DataTable />
        </tbody>

        <thead>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
          </tr>
        </thead>
      </table>

      <div className="navigation">
        <p>Showing 1 to 10 of 57 entries</p>

        <ul className="pagination">
          <li
            className="paginate_button previous disabled"
            id="example2_previous"
          >
            Previous
          </li>
          <li className="paginate_button active">1</li>
          <li className="paginate_button ">2</li>
          <li className="paginate_button ">3</li>
          <li className="paginate_button ">4</li>
          <li className="paginate_button ">5</li>
          <li className="paginate_button ">6</li>
          <li className="paginate_button next" id="example2_next">
            Next
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
