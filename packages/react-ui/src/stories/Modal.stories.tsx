import React, { useState } from "react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";

export default {
  title: "React/Modal",
  component: Modal,
  argTypes: {
    className: { control: "text" },
  },
};

const Template = (args: React.ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose} className="rounded-md">
        <Modal.Header title="Example Modal" onClose={handleClose} />
        <Modal.Body>
          Content
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={handleClose} className="w-full">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  label: "Open Modal",
  variant: "solid",
  size: "md",
  rounded: "md",
  className: "w-screen",
};
