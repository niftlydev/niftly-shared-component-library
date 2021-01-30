import React from 'react';
import { Box, Button, FormControl, FormErrorIcon, FormLabel, Input } from '@chakra-ui/react';

export enum InputType {
    Text,
    Email,
    Password,
    Submit
}

export enum InputSize {
    small,
    medium,
    large
}

export interface INetlifyFormItem {
    label: string;
    inputType: InputType 
    inputSize: InputSize
    inputRequired?: boolean
    inputPlaceholder?: string
}

export class NetlifyFormItem implements INetlifyFormItem
{
    label = "";
    inputType = InputType.Text;
    inputSize = InputSize.large;
    inputPlaceholder = "";
    inputRequired = false;

    constructor(inputLabel: string, type: InputType, size: InputSize, placeholder?: string, required?: boolean) {
        this.label = inputLabel;
        this.inputType = type;
        this.inputSize = size;
        this.inputPlaceholder = placeholder;
        this.inputRequired = required;
    }
}

type NetlifyFormProps = {
    forms: Array<INetlifyFormItem>
}

export const NetlifyForm = ({forms}: NetlifyFormProps) => {

    const renderInput = (formInput: INetlifyFormItem) => {
        switch(formInput.inputType)
        {
            case InputType.Text:
                return <Input placeholder={formInput.inputPlaceholder} type="text" required={formInput.inputRequired}/>
            case InputType.Email:
                return <Input placeholder={formInput.inputPlaceholder} type="email"/>
            case InputType.Password:
                return <Input type="password"/>
            case InputType.Submit:
                return <Button width="25%" backgroundColor="brand.500" color="white" type="submit">{formInput.label}</Button> 
        }
    }

    const renderForms = () => {
        return forms.map((formItem: INetlifyFormItem) => {
            let size = "3";
            switch(formItem.inputSize)
            {
                case InputSize.small:
                    size = "0 0 32%";
                    break;
                case InputSize.medium:
                    size = "0 0 49%";
                    break;
                case InputSize.large:
                    size = "1 1 100%";
                    break;
            }

            const isSubmit = formItem.inputType === InputType.Submit;

            return (
                <FormControl flex={size} justifyContent={isSubmit ? "flex-end" : "center"} display={isSubmit ? "flex" : "block"}>
                    {formItem.inputType !== InputType.Submit ? <FormLabel>{formItem.label}</FormLabel> : <></>}
                    {renderInput(formItem)}
                </FormControl>
            )
        })
    }

    return (
        <Box>
            {/* @ts-ignore */}
            <form style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}} netlify>
                {renderForms()}
            </form>

        </Box>
    )
}