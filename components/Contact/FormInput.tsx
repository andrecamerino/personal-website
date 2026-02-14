interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name?: string;
  error?: string;
  required?: boolean;
}

export default function FormInput({
  id,
  label,
  type,
  placeholder,
  name,
  error,
  required = false,
}: FormInputProps) {
  const inputName = name || id;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        name={inputName}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`py-2 px-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-current ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}