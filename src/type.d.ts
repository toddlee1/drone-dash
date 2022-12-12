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

type Dron = {
    id: 1,
    facility_name: string,
    image_type?: string,
    video_url: string,
    ir_video_url?: string,
    created_at: "2022-10-29T00:37:12.390000Z",
    length?: string | number,
    site_id: number,
    dron_id: number,
    dron_name: string,
    battery: number,
    sensor_type: string,
    optime: "15:00:00",
    altitude: number,
    lat: number,
    lon: number,
    site_name: string,
    admin_name: string,
    rate1: number,
    rate2: number
}

type Props = {
    dron: Dron;
    gas?: GasDataType[];
}