import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/";
import { Content } from ".";

export default {
  title: "Photography Assets/Layout/Content",
  component: Content,
} as Meta;

const Template: Story = (args) => (
  <Content {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula
      sollicitudin, facilisis metus vitae, faucibus ligula. Duis eleifend est
      condimentum varius tincidunt. Donec maximus arcu vitae sodales ultricies.
      Sed posuere elit sed metus lacinia, ut volutpat libero posuere. Cras
      facilisis nibh ac erat dapibus, nec sagittis diam finibus. Pellentesque
      vulputate aliquet condimentum. Ut vel massa ac eros suscipit eleifend sed
      quis risus. Nullam rutrum leo id ex elementum, ut vestibulum sem ultrices.
      Vivamus eu lectus ut urna mollis hendrerit quis placerat velit.
      Suspendisse eget lacinia nulla. Suspendisse vitae turpis a nulla venenatis
      fringilla in sit amet augue. Aenean auctor euismod enim hendrerit
      lobortis.
    </p>
    <p>
      Sed ultricies justo at nulla pellentesque, ac consequat augue molestie.
      Fusce feugiat odio arcu, in hendrerit ex tempus vel. Fusce quis orci
      laoreet urna accumsan bibendum. Aliquam at lorem at ipsum aliquam
      scelerisque. Duis rhoncus egestas libero, vitae tristique neque vehicula
      eget. Quisque justo est, suscipit vel luctus a, consectetur eu turpis.
      Suspendisse rutrum turpis quam, eget consectetur sapien aliquet vitae.
      Pellentesque imperdiet porttitor sapien id mattis. Donec eu ante porta,
      varius dui vel, elementum felis. Donec porttitor a nulla in varius.
    </p>
  </Content>
);

export const SiteContent = Template.bind({});
SiteContent.args = {};
