type GasDataType = {
    id: number;
    oxy: string;
    sensed: string;
}

type Site = {
    id: number;
    name: string;
}

type Facility = {
    id: number;
    name: string;
}

type Video = {
    id: number;
    video_url: string;
    ir_video_url: string;
    site_name: string;
    facility_name: string;
    created_at: number;
}