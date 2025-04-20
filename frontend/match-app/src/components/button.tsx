import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export default function Button({ children = "Button", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200 ease-in-out transform hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}