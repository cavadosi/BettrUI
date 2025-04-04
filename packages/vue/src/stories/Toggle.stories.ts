import { ref } from "vue";
import Toggle from "../components/Toggle.vue";

export default {
  title: "Vue/Toggle",
  component: Toggle,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    activeIcon: { control: "text" },
    inactiveIcon: { control: "text" },
    disabled: { 
        control: "boolean",
        defaultValue: false
      },
    modelValue: { table: { disable: true } }
  },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    const enabled = ref(args.modelValue);
    return { args, enabled };
  },
  template: '<Toggle v-bind="args" v-model="enabled"/>',
});

export const Default = Template.bind({});
Default.args = {
    modelValue: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  modelValue: false,
  activeIcon: "Sun",
  inactiveIcon: "Moon",
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  label: "Enable notifications",
  description: "Receive updates and alerts",
  modelValue: true,
};
