import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { ToggleSwitch, IToggleSwitchProps } from "./toggleSwitch";

export default {
  title: "Photography Assets/Controls/ToggleSwitch",
  component: ToggleSwitch,
} as Meta;

let darkMode: boolean = true;
const toggleDarkMode = (value: boolean) => {
  darkMode = value;
};

const Template: Story<IToggleSwitchProps> = (args) => (
  <ToggleSwitch {...args} />
);

export const Enabled = Template.bind({});
Enabled.args = {
  id: "Checked",
  name: "Checked",
  checked: true,
  small: false,
  optionLabels: ["Yes", "No"],
  disabled: false,
  onChange: () => toggleDarkMode(false),
};
