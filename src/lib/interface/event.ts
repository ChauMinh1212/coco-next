export interface IEvent {
    id?: string;
    name: string;
    content: string;
    img: {
        url: string;
    } | null;
    from: string;
    to: string;
    sort?: number;
}