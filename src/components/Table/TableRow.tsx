import { FC } from "react";
import TableCell from "@components/Table/TableCell";

interface IProps {
  dataRow: (string | number | undefined)[];
}

const TableRow: FC<IProps> = ({ dataRow }) => {
  return (
    <tr>
      {dataRow.map((data, i) => (
        <TableCell key={i} data={data} />
      ))}
    </tr>
  );
};

export default TableRow;
