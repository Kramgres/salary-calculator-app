import {Moment} from 'moment'

export type ErrorResponse = {
  code?: number,
  message?: string
}

export type User = {
  id: string,
  email: string | null,
}

export type Day = {
  id: number;
  startTime: Moment;
  endTime: Moment;
  cost: number;
  result?: number
}
