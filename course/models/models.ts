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
}

export interface AssignmentItem {
    code: string;
    due: string;
    title: string;
    url: string | null;
}