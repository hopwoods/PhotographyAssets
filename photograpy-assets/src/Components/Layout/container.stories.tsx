import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Container } from "../Layout";

export default {
  title: "Photography Assets/Layout/Container",
  component: Container,
} as Meta;

const Template: Story = (args) => (
  <Container {...args}>
    <nav css="grid-area: header">Header</nav>
    <article css="grid-area: content;">
      <p>
        The container defines the grid used for the page layout. There is a
        header, main content area, and a footer.
      </p>
    </article>
    <footer css="grid-area: footer">Footer</footer>
  </Container>
);

export const ContentContainer = Template.bind({});
ContentContainer.args = {};
