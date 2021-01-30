/// <reference types="react" />

export declare enum HighlightSize {

    sm = 0,

    md = 1,

    lg = 2,

    xl = 3

}

declare type HighlightBoxProps = {

    highlights: Array<any>;

    size: HighlightSize;

    withBorder?: boolean;

};

export declare const HighlightBox: ({ highlights, size, withBorder }: HighlightBoxProps) => JSX.Element;

export {};

