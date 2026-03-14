import React from "react";

const Input = ({
    label,
    type = "text",
    error = false,
    helperText = "",
    className = "",
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1">

            {label && (
                <label className="text-sm font-medium">
                    {label}
                </label>
            )}

            <input
                type={type}
                className={`border rounded-lg px-3 py-2 outline-none
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:ring-1"}
        ${className}`}
                {...props}
            />

            {helperText && (
                <p className={`text-sm ${error ? "text-red-500" : "text-gray-500"}`}>
                    {helperText}
                </p>
            )}

        </div>
    );
};

export default Input;
