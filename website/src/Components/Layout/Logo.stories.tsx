import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Logo } from "./";

export default {
  title: "Photography Assets/Layout/Logo",
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const LogoText = Template.bind({});
LogoText.args = {};
