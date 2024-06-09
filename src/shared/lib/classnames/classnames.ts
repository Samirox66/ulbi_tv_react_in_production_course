type Optionals = Record<string, string | boolean>;

export function classNames(
    main: string,
    optionals: Optionals,
    additionals: string[]
): string {
    return [
        main,
        Object.entries(optionals)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls),
        ...additionals,
    ].join(" ");
}
