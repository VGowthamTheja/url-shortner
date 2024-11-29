export type BitlyResponse = {
    createdAt: string;
    id: string;
    link: string
    customBitlinks: Array<string>;
    longUrl: string;
    archived: boolean;
    tags: [];
    deeplinks: [];
    references: {
        [key: string]: string;
    }
}