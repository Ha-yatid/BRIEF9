/* eslint-disable react/prop-types */
import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';

/*const UserTable = ({columns,data, handleDelete, handleViewDetails }) => {*/
  const UserTable = ({columns,data, handleDelete, handleViewDetails }) => {
  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-2">
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </th>
          ))}
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user._id} className="border-t">
            {columns.map((column) => (
              <td key={`${user._id}-${column}`} className="px-4 py-2">
                {user[column]} 
              </td>
            ))}
            <td className="px-4 py-2 flex space-x-2">
              <button
                onClick={() => handleViewDetails(user)}
                className="text-blue-500 hover:text-blue-700"
              >
                <EyeIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
