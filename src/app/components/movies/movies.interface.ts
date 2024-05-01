export interface MovieGet {
    id: number;
    title: string;
    director: string;
    publicationDate: Date;
    genre: string;
    createAt: Date;
    updateAt: Date;
}

export interface MoviePost {
    title: string;
    director: string;
    publicationDate: Date;
    genre: string;
}