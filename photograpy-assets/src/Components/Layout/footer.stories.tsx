import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Footer } from ".";

export default {
  title: "Photography Assets/Layout/Footer",
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const SiteFooter = Template.bind({});
SiteFooter.args = {};
