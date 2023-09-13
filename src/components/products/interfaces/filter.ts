export interface Filter {
    id: string;
    name: string;
    type: string;
    values: Values[];
}

export interface Values {
    id: string;
    name: string;
    results?: number;
}