import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Button, ButtonProps } from "./button";

export default {
  title: "Photography Assets/Controls/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  type: "solid",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "solid",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  type: "solid",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  type: "solid",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  type: "solid",
};
