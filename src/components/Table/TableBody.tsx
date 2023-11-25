import { FC } from "react";
import TableRow from "./TableRow";

interface IProps {
  data: (string | number | undefined)[][];
}

const TableBody: FC<IProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((dataRow, i) => (
        <TableRow key={i} dataRow={dataRow} />
      ))}
    </tbody>
  );
};

export default TableBody;
