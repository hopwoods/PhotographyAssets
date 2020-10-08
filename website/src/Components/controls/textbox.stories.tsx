import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { TextBox, ITextBoxProps } from "../controls";

export default {
  title: "Photography Assets/Controls/TextBox",
  component: TextBox,
  argTypes: {},
} as Meta;

const Template: Story<ITextBoxProps> = (args) => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
