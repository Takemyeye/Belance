"use client";

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: InputFieldProps) {
  return (
    <label className="block">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
