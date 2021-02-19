export enum ComponentSize {
    sm,
    md,
    lg,
    xl
}

export const calculateSize = (size: ComponentSize) => {
    switch(size) {
        case ComponentSize.sm:
            return "1 1 23%";
        case ComponentSize.md:
            return "1 1 32%";
        case ComponentSize.lg:
            return "1 1 49%";
        case ComponentSize.xl:
            return "1 1 100%";
    }
}
