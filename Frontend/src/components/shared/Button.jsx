import React from "react";

const Button = ({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    onClick,
    className = "",
}) => {

    const baseStyle =
        "flex items-center justify-center gap-2 rounded-lg font-medium transition duration-200";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const disabledStyle = disabled || loading ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${disabledStyle} ${className}`}
        >
            {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}

            {children}
        </button>
    );
};

export default Button;
