const Input = ({ id, label, type, disabled, register, errors, required }) => {
  const error = errors && errors[id];

  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        type={type}
        placeholder=""
        className={`peer w-full p-4 outline-none bg-white border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed
        ${error ? "border-rose-400" : "border-zinc-300"}
        ${error ? "focus:border-rose-400" : "focus:border-blue-300"}
      `}
      />
      <label
        htmlFor={id}
        className={`absolute bg-white px-1 cursor-text text-base duration-150 transform -top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-[18px] peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1
        ${error ? "text-rose-400" : "text-black"}
        `}
      >
        {label}
      </label>
      {error && <p className="text-rose-400 text-xs mt-2">{error.message?.toString()}</p>}
    </div>
  );
};

export default Input;
