import Button from "./Button";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">{title}</h2>

                    <Button
                        onClick={onClose}
                        variant="outline"
                        className="text-gray-500 hover:text-black"
                    >
                        ✕
                    </Button>
                </div>

                {children}
            </div>
        </div>
    );
};

export default Modal;
