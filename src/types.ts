export interface NavItem {
    id: string;
    title: string;
}

export interface HowWorkItem {
    imgUrl: string;
    title: string;
    description: string;
}

export interface Review {
    avatarUrl?: string;
    city: string;
    text: string;
    autor: string;
}

export interface Question {
    title: string;
    text: string;
}