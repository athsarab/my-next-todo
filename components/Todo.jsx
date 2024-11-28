import React from "react";

const Todo = ({ id, title, description, status, onDelete, onEdit }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{status || "Pending"}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => onDelete()}
          className="py-2 px-4 bg-red-500 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit()}
          className="py-2 px-4 bg-green-500 text-white"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Todo;
