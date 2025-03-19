import { Timestamp } from "firebase/firestore";

export interface Topic {
    id: string;
    title: string;
    author: string;
    createdAt: Timestamp;
    content: string;
    category: string;
    postNumber: string;
    latexContent: string;
}

export interface Exercise {
    id: string;
    month: string;
    year: string;
    author: string;
    createdAt: Timestamp;
    content: string;
    category: string;
    postNumber: string;
    latexContent: string;
    level: string;
    type: string;
    points: number;
    no: number;
    isabcd: boolean;
    options: [];
}

export interface Comment {
    id: string;
    postId: string;
    author: string;
    content: string;
    latexContent?: string;
    createdAt: Timestamp;
}