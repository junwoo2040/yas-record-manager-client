import { FC } from "react";

interface IProps {
  data: string | number;
}

const TableCell: FC<IProps> = ({ data }) => {
  return <td>{data}</td>;
};

export default TableCell;
