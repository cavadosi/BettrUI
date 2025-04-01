import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "React/Modal",
  component: Modal,
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: false,
    className: "w-screen",
  },
  render: (args) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(args.isOpen || false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
      <>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} className="rounded-md">
          <Modal.Header title="Example Modal" onClose={handleClose} />
          <Modal.Body>Content</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} className="w-full">Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
