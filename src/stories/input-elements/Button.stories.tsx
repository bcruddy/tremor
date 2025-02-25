import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArrowRightIcon } from "assets";

import { BaseColors, Sizes as InputSizes } from "lib/primitives";

import { Card, ColGrid, Flex, Title } from "components";

import { Button } from "components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Tremor/InputElements/Button",
  component: Flex,
} as ComponentMeta<typeof Flex>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const MyIcon = ArrowRightIcon;

const SizesTemplate: ComponentStory<typeof Button> = (args) => (
  <Card>
    <ColGrid numCols={5} gapY="gap-y-2">
      {Object.values(InputSizes).map((size) => (
        <>
          <Button {...args} size={size} text="Button" />
          <Button {...args} size={size} text="Button" icon={MyIcon} />
          <Button
            {...args}
            size={size}
            text="Button"
            icon={MyIcon}
            iconPosition="right"
          />
          <Button
            {...args}
            size={size}
            text="Button"
            variant="secondary"
            icon={MyIcon}
            iconPosition="left"
          />
          <Button
            {...args}
            size={size}
            text="Button"
            variant="light"
            icon={MyIcon}
            iconPosition="right"
          />
        </>
      ))}
    </ColGrid>
  </Card>
);

const ColorsTemplate: ComponentStory<typeof Button> = (args) => (
  <Card>
    <ColGrid numCols={4} numColsLg={4} gapY="gap-y-2">
      {Object.values(BaseColors).map((color) => (
        <>
          <Button {...args} color={color} text={color} />
          <Button {...args} color={color} text={color} icon={MyIcon} />
          <Button {...args} color={color} text={color} variant="secondary" />
          <Button {...args} color={color} text={color} variant="light" />
        </>
      ))}
    </ColGrid>
  </Card>
);

const ResponsiveFlexTemplate: ComponentStory<typeof Button> = (args) => (
  <>
    <Title>Mobile</Title>
    <div className="tr-w-64">
      <Card>
        <Flex>
          <Button {...args} text="Button" icon={MyIcon} />
          <Button
            {...args}
            text="Button"
            icon={MyIcon}
            importance={"secondary"}
          />
        </Flex>
      </Card>
    </div>
    <Title marginTop="mt-5">Desktop</Title>
    <Card>
      <Flex>
        <Button {...args} text="Very Long Button Text" icon={MyIcon} />
        <Button
          {...args}
          text="Very Long Button Text"
          icon={MyIcon}
          importance={"secondary"}
        />
      </Flex>
    </Card>
  </>
);

const LoadingStateTemplate: ComponentStory<typeof Button> = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Card>
      <Button text="Click to Load" handleClick={() => setLoading(!loading)} />
      <ColGrid numCols={3} gapY="gap-y-2" marginTop="mt-10">
        {Object.values(InputSizes).map((size) => (
          <>
            <Button size={size} text="Button" loading={loading} />
            <Button size={size} text="Button" icon={MyIcon} loading={loading} />
            <Button
              size={size}
              text="Button"
              icon={MyIcon}
              iconPosition="right"
              loading={loading}
            />
            <Button
              size={size}
              text="Button"
              importance="secondary"
              loading={loading}
            />
          </>
        ))}
      </ColGrid>
      <Title>With Loading Text</Title>
      <ColGrid numCols={4} gapY="gap-y-2">
        <Button text="Button" loading={loading} loadingText="Loading" />
        <Button
          text="Button"
          icon={MyIcon}
          loading={loading}
          loadingText="Loading"
        />
        <Button
          text="Button"
          icon={MyIcon}
          iconPosition="right"
          loading={loading}
          loadingText="Loading"
        />
        <Button
          text="Button"
          importance="secondary"
          loading={loading}
          loadingText="Loading"
        />
      </ColGrid>
    </Card>
  );
};

const ButtonWithChildren: ComponentStory<typeof Button> = () => (
  <Card>
    <ColGrid numCols={1} gapY="gap-y-3" marginTop="mt-10">
      <Button>Children only</Button>
      <Button text="Text only" />
      <Button text="Text is prefered">Children are prefered</Button>
      <Button text="Text is prefered">
        <span style={{ color: "red" }}>Button with span and text prop</span>
      </Button>
      <Button text="Text is prefered">
        <span style={{ color: "red" }}>Button with span and text prop</span>
      </Button>
      <Button text="Text is prefered" icon={MyIcon}>
        <span style={{ color: "red" }}>Button with span and icon prop</span>
      </Button>
      <Button text="Text is prefered" icon={MyIcon} iconPosition="right">
        <span style={{ color: "red" }}>Button with span and icon prop</span>
      </Button>
    </ColGrid>
  </Card>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  onClick: () => alert(2),
};

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  handleClick: () => console.log("clicked"),
};

export const WithFlexParent = ResponsiveFlexTemplate.bind({});

export const WithDisabled = ResponsiveFlexTemplate.bind({});
WithDisabled.args = {
  disabled: true,
};

export const LoadingStates = LoadingStateTemplate.bind({});
LoadingStates.args = {
  disabled: true,
};

export const WithChildren = ButtonWithChildren.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
