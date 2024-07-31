import { Timestamp } from "firebase/firestore";

export interface Topic {
    id: string;
    title: string;
    author: string;
    createdAt: Timestamp;
    content: string;
    category: string;
    postNumber: string;
}