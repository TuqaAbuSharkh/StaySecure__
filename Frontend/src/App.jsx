import { useState } from "react";
import Button from "./components/shared/Button";
import Modal from "./components/shared/Modal";
import Input from "./components/shared/Input";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 space-y-4">

      <div className="flex flex-col gap-2 mt-4 w-80">
        <Input placeholder="Enter your name" label="Enter your name" />

        <Button className="w-80" onClick={() => setOpen(true)}>
          Delete
        </Button>
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Delete"
      >
        <p>Are you sure?</p>

        <div className="flex gap-2 mt-4">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button variant="danger">
            Yes
          </Button>
        </div>
      </Modal>

    </div>
  );
}

export default App;
