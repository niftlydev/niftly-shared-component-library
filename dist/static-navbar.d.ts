/// <reference types="react" />

export interface LinkToPage {

    text: string;

    slug: string;

}

declare const StaticNavbar: ({ links, rightLink, logoImg }: {

    links: Array<LinkToPage>;

    rightLink: LinkToPage;

    logoImg: any;

}) => JSX.Element;

export default StaticNavbar;

