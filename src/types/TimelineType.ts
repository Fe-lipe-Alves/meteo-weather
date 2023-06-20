import type {IntervalType} from "@/types/IntervalType";
import moment from "moment/moment";

export type TimelineType = {
    timestep: "current"|"1h"|"1d",
    "endTime": moment.Moment,
    "startTime": moment.Moment,
    intervals: IntervalType[]
}