import {Moment} from 'moment'

export type Day = {
  id: number;
  startTime: Moment;
  endTime: Moment;
  cost: number;
  result?: number
}
