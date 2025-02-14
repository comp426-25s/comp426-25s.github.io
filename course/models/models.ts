/**
 * Do not modify this file.
 */

export interface ScheduleItem {
    code: string;
    date: string;
    title: string;
    synopsis: string | null;
    youtubeUrl: string | null;
    slidesUrl: string | null;
    module: string;
}

export interface AssignmentItem {
    code: string;
    due: string;
    title: string;
    past: boolean;
    url: string | null;
}

export interface SupplementItem {
    code: string;
    title: string;
    posted: string;
    url: string | null;
}