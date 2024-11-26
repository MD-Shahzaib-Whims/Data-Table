import { useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

import './App.css';

DataTable.use(DT);

function App() {
  // Demo data
  const [tableData, setTableData] = useState<
    Array<[string, string, string, string, string, string]>
  >([
    [
      'Tiger Nixon',
      'System Architect',
      'Edinburgh',
      '5421',
      '2011-04-25',
      '$320,800',
    ],
    [
      'Garrett Winters',
      'Accountant',
      'Tokyo',
      '8422',
      '2011-07-25',
      '$170,750',
    ],
    [
      'Ashton Cox',
      'Junior Technical Author',
      'San Francisco',
      '1562',
      '2009-01-12',
      '$86,000',
    ],
    [
      'Cedric Kelly',
      'Senior Javascript Developer',
      'Edinburgh',
      '6224',
      '2012-03-29',
      '$433,060',
    ],
  ]);

  return (
    <>
      <div>
        <h1>Simple table</h1>
        <h2>DataTables + React example</h2>
        <p>
          This example demonstrates the <code>datatables.net-react</code>
          package being used to display an interactive{' '}
          <a href="https://datatables.net">DataTable</a> in a React application.
          Full documentation is{' '}
          <a href="https://datatables.net/manual/react">
            available in the DataTables manual
          </a>
          .
        </p>
        <p>
          It uses a simple array as the data source for each row in the
          DataTable, which makes the configuration very easy (each entry in the
          array is used for the matching column index). Objects can also be
          used.
        </p>

        <DataTable data={tableData} className="display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Extn.</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </>
  );
}

export default App;
