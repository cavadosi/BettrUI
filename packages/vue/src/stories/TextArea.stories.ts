import TextArea from "../components/TextArea.vue";

export default {
  title: "Vue/TextArea",
  component: TextArea,
  argTypes: {
    label: { control: "text", description: "Label for the textarea" },
    rows: { control: "number", description: "Number of rows" },
    disabled: { control: "boolean", description: "Disable the textarea" },
    placeholder: { control: "text", description: "Placeholder text" },
    id: { control: "text", description: "Textarea ID" },
    name: { control: "text", description: "Textarea name" },
    modelValue: { control: "text", description: "Textarea value" },
  },
};

const Template = (args) => ({
  components: { TextArea },
  setup() {
    return { args };
  },
  template: '<TextArea v-bind="args" v-model:value="args.modelValue" />',
});

export const Default = Template.bind({});
Default.args = {
  id: "comment",
  name: "comment",
  label: "Add your comment",
  rows: 4,
  disabled: false,
  placeholder: "Write your thoughts here...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "comment",
  name: "comment",
  label: "Add your comment",
  rows: 4,
  disabled: true,
  placeholder: "Write your thoughts here...",
};
