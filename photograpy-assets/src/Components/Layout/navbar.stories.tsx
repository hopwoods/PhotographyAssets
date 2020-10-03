import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Navbar } from ".";

export default {
  title: "Photography Assets/Layout/NavBar",
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const SiteNavbar = Template.bind({});
SiteNavbar.args = {};
