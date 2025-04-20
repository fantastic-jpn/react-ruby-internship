import { HTMLAttributes } from "react";

type selectionType = {
  values: string[],
  name: string,
} & HTMLAttributes<HTMLSelectElement>;

export default function Selection({ values, name,...props }: selectionType) {
  return (
    <select
      {...props}
      name={name}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-sm"
    >
      {values.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
}