import axios, { AxiosPromise } from 'axios'

// Response body of user doesn't exist
export interface IBadRequest {
    message: string
}

// Response body of other error
export interface IForbidden {
    status: string
    msg: string
}

// Data body of an music chart
export interface IMusicChart {
    achievements: number
    ds: number
    dxScore: number
    fc: string
    fs: string
    level: string
    level_index: number
    level_label: string
    ra: number
    rate: string
    song_id: number
    title: string
    type: string
}

// Response body of success
export interface IResponse {
    user_id: unknown | null
    user_data: unknown | null
    username: string
    nickname: string
    rating: number
    plate: string
    additional_rating: number
    charts: {
        dx: Array<IMusicChart>
        sd: Array<IMusicChart>
    }
}

// Perform a API request
export function getData(username: string): AxiosPromise<IResponse> {
    let payload = {
        b50: true,
        username
    }
    let res: AxiosPromise<IResponse> = axios({
        url: "https://www.diving-fish.com/api/maimaidxprober/query/player",
        method: "POST",
        data: payload
    })
    return res
}
