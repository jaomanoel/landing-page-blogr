import { ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "./Button";

export default {
    title: 'inputs/Button',
    component: Button,
    argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args}/>
}

export const Default = Template.bind({});
Default.args = {};