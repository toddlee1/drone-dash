// export const STREAM_VIDEO_URL = 'https://2c7e2b210dba.ap-northeast-2.playback.live-video.net/api/video/v1/ap-northeast-2.046202662233.channel.Hh2DMfMQMcnq.m3u8';
import {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";

export const STREAM_VIDEO_URL = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
export const NCP_STREAM_VIDEO_URL = 'https://bwzmimvsjobe14310244.cdn.ntruss.com/live/video/ls-20221114233441-0zfPq/480p-16-9/playlist.m3u8'

export const TABLE_COLUMNS: ColumnsType<GasDataType> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (v) => {
            return {
                props: {
                    style: {backgroundColor: 'black', borderRight: 'solid white', borderLeft: 'solid white'}
                },
                children: <div style={{color: 'white'}}>{v}</div>
            }
        }
    },
    {
        title: 'Oxy',
        dataIndex: 'oxy',
        key: 'oxy',
        render: (v) => {
            return {
                props: {
                    style: {backgroundColor: 'black', borderRight: 'solid white'}
                },
                children: <div style={{color: 'white'}}>{v}</div>
            }
        }
    },
    {
        title: 'Sensed',
        dataIndex: 'sensed',
        key: 'sensed',
        render: (v) => {
            return {
                props: {
                    style: {backgroundColor: 'black', borderRight: 'solid white'}
                },
                children: <div style={{color: 'white'}}>{v}</div>
            }
        }
    }
];

export const VIDEO_TABLE_COLUMNS: ColumnsType<Video> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (v) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white', borderLeft: 'solid white'}
                    },
                    children: <Link to={`/video/${v}`}>{v}</Link>
                }
            }
        },
        {
            title: '현장',
            dataIndex: 'site_name',
            key: 'site_name',
            render: (v) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white'}
                    },
                    children: <div style={{color: 'white'}}>{v}</div>
                }
            }
        }
        ,
        {
            title: '시설물',
            dataIndex: 'facility_name',
            key: 'facility_name',
            render: (v) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white'}
                    },
                    children: <div style={{color: 'white'}}>{v}</div>
                }
            }
        }
        ,
        {
            title: '생성 일시',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (v) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white'}
                    },
                    children: <div style={{color: 'white'}}>{v}</div>
                }
            }
        }
    ]
;