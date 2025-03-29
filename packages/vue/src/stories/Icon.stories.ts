import Icon from "../components/Icon.vue";

export default {
    title: "Vue/Icon",
    component: Icon,
    argTypes: {
      name: { 
        control: { type: "text" } 
        },
      variant: { 
        control: { type: "select" }, 
        options: ["solid", "outline"],
        },
    },
};
  
  const Template = (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon v-bind="args" class="size-8"/>',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    name: "Home",
    variant: "outline",
  };
  