export interface Subscription {
    id?: number
    name: string
    price: number
    duration: number
    durationType: Duartion
}

export enum Duartion {
    DAY, WEEK, MONTH
}
