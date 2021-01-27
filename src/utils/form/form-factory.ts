import {NetlifyFormItem, InputSize, InputType, INetlifyFormItem} from '../../components/form/netlify-form';

export const formFactory = () => {
    let forms: Array<INetlifyFormItem> = new Array<INetlifyFormItem>();

    let first: INetlifyFormItem = new NetlifyFormItem("label 1", InputType.Text, InputSize.small, "label 1");
    let second: INetlifyFormItem = new NetlifyFormItem("label 2", InputType.Text, InputSize.small, "label 2");
    let third: INetlifyFormItem = new NetlifyFormItem("label 3", InputType.Text, InputSize.small, "label 3");
    let fourth: INetlifyFormItem = new NetlifyFormItem("label 4", InputType.Email, InputSize.medium, "label 4");
    let fifth: INetlifyFormItem = new NetlifyFormItem("label 5", InputType.Password, InputSize.medium, "label 5");
    let sixth: INetlifyFormItem = new NetlifyFormItem("label 6", InputType.Text, InputSize.large, "label 6");
    let seven: INetlifyFormItem = new NetlifyFormItem("Submit", InputType.Submit, InputSize.large, "");

    forms.push(first);
    forms.push(second);
    forms.push(third);
    forms.push(fourth);
    forms.push(fifth);
    forms.push(sixth);
    forms.push(seven);
    return forms;
}