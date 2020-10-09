import React, { Children } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Sidebar, ISideBarProps } from ".";

export default {
  title: "Photography Assets/Layout/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ISideBarProps> = (args) => (
  <Sidebar {...args}>
    <p>I am a Side Bar</p>
  </Sidebar>
);

export const SiteNavbar = Template.bind({});
SiteNavbar.args = {
  backgroundColor: "rgba(25, 25, 25, 0.5)",
};
