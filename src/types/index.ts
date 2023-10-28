export interface IGameBookMetadata {
    authorName: string;
    gamebookTitle: string;
    introduction: string;
    selectedId: string | undefined;
}

export interface IGameBookState {
    authorName: string;
    gamebookTitle: string;
    introduction: string;
    selectedId: string | undefined;
    chapters: IChapter[];
}

export interface IChapter {
    id: string;
    chapterNumber: number;
    title: string;
    oldNumber?: number;
    content?: string;
    status?: IStatus;
}

export interface IStatus {
    dead?: boolean | undefined;
    fixed?: boolean | undefined;
    ready?: boolean | undefined;
    start?: boolean | undefined;
    win?: boolean | undefined;
}