import { FC } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface IProps {
  headers: string[];
  data: (string | number)[][];
}

const Table: FC<IProps> = ({ headers, data }) => {
  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
