const Button = ({ label, disabled, outline, small, custom, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-none flex items-center justify-center gap-2 
      ${outline ? "bg-white" : "bg-blue-700"} 
      ${outline ? "text-slate-700" : "text-white"} 
      ${small ? "text-sm font-light" : "text-md font-semibold"} 
      ${small ? "py-1 px-2 border" : "py-3 px-4 border-2"} 
      ${custom ? custom : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
