

export interface Item {
    name: string;
    amount: number;
    currency: string;
}

export interface Addon {
    item: Item;
}

export interface Notes {
    notes_key: string;
}

export interface Subscription {
    name?: string;
    plan_id: number;
    total_count: number;
    start_at: number;
    addons?: Addon[];
    notes?: Notes;
    customer_notify?: number;
    expire_by?: string;
}

export interface Plan {
    id?: number
    period: string
    interval: number
}