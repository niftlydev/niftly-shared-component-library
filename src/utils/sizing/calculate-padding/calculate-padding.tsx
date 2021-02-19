export enum PaddingSize {
    xs,
    sm,
    md,
    lg,
    xl
}

export const calculatePadding = (padding: PaddingSize) => {
    switch(padding) {
        case PaddingSize.xs:
            return '1%'; 
        case PaddingSize.sm:
            return '2%'; 
        case PaddingSize.md:
            return '5%'; 
        case PaddingSize.lg:
            return '10%'; 
        case PaddingSize.xl:
            return '15%'; 
    }
}