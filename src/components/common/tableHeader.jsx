import React from "react";

function TableHeader({ label, columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.path || column.key}>{column.label || label}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
