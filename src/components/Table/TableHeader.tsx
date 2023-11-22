import { FC } from "react";

interface IProps {
  headers: string[];
}

const TableHeader: FC<IProps> = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
