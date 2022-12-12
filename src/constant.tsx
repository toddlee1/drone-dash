import {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";
import {formatDateTime, getBgColor} from "./utils/util";
import {Tag} from "antd";

export const TEST_STREAM_URL_LIST = [
    'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
    'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
    'http://www.streambox.fr/playlists/test_001/stream.m3u8',
]

export const TEST_VIDEO_URL_LIST = [
    'https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4',
    'https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/2022-11-24_22-23-02.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/20210111_203053A.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20221125_105810797.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/2022-11-24_22-23-02.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20220726_144205569.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/경남TP영상 1.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/경남TP영상 2.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/경남TP영상 1.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/경남TP영상 2.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/경남TP영상 2.mp4',
    'https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4',
    'https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4',
    'https://hellophotoimagestorage.s3.ap-northeast-2.amazonaws.com/2022-11-22_22-18-53.mp4',
]

export const NCP_STREAM_VIDEO_URL = 'https://bwzmimvsjobe14310244.cdn.ntruss.com/live/video/ls-20221114233441-0zfPq/480p-16-9/playlist.m3u8';
export const NCP_STREAM_VIDEO_URL_IR = 'https://bwzmimvsjobe14310244.cdn.ntruss.com/live/video/ls-20221124225716-X4nY2/270p-16-9/playlist.m3u8';

export const TABLE_COLUMNS: ColumnsType<GasDataType> = [
    {
        title: 'No.',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
        render: (v) => {
            return {
                props: {
                    style: {backgroundColor: 'black', borderRight: 'solid white 0.5px'}
                },
                children: <div style={{color: 'white'}}>{v}</div>
            }
        }
    },
    {
        title: '산소 농도',
        dataIndex: 'oxy',
        key: 'oxy',
        width: '20%',
        render: (v: number) => {
            return {
                props: {
                    style: {backgroundColor: 'black', borderRight: 'solid white 0.5px'}
                },
                children: <Tag color={getBgColor(v)}><strong>{v}</strong></Tag>
            }
        }
    },
    {
        title: '일시',
        dataIndex: 'sensed',
        key: 'sensed',
        render: (v: string) => {
            return {
                props: {
                    style: {backgroundColor: 'black'}
                },
                children: <div style={{color: 'white'}}>{formatDateTime(v)}</div>
            }
        }
    }
];

export const VIDEO_TABLE_COLUMNS: ColumnsType<Video> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (id) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white 0.5px'}
                    },
                    children: <Link to={`/video/${id}`}>{id}</Link>
                }
            }
        },
        {
            title: '현장',
            dataIndex: 'site_name',
            key: 'site_name',
            render: (sn: string, video: Video) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white 0.5px'}
                    },
                    children: <Link to={`/video/${video.id}`}>{sn}</Link>
                }
            }
        }
        ,
        {
            title: '시설물',
            dataIndex: 'facility_name',
            key: 'facility_name',
            render: (fn: string, video: Video) => {
                return {
                    props: {
                        style: {backgroundColor: 'black', borderRight: 'solid white 0.5px'}
                    },
                    children: <Link to={`/video/${video.id}`}>{fn}</Link>
                }
            }
        }
        ,
        {
            title: '생성 일시',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (at: string, video: Video) => {
                return {
                    props: {
                        style: {backgroundColor: 'black'}
                    },
                    children: <Link to={`/video/${video.id}`}>{formatDateTime(at)}</Link>
                }
            }
        }
    ]
;