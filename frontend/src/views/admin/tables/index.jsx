import CheckTable from "./components/CheckTable";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

const Tables = () => {
  return (
    <div className="mt-5 grid h-full w-full grid-cols-1 gap-5 md:grid-cols-1">
      <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />

      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
};

export default Tables;
