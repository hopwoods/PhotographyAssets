import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { NavBarLink, LinkProps } from "./";
import { BrowserRouter as Router } from "react-router-dom";
import "../../style/storybook.css";

export default {
  title: "Photography Assets/Controls/NavBarLink",
  component: NavBarLink,
  argTypes: {},
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <div className="body">
    <Router>
      <NavBarLink {...args} />
    </Router>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  to: "www.google.com/uk",
  value: "Link Text",
};
