import { STATUS } from "./const"

export const boardsData = [
  {
    id: 1,
    label: "New task",
    status: STATUS.New,
  },
  {
    id: 2,
    label: "Scheduled",
    status: STATUS.Scheduled,
  },
  {
    id: 3,
    label: "In progress",
    status: STATUS.InProgress,
  },
  {
    id: 4,
    label: "Completed",
    status: STATUS.Completed,
  },
]

export const tasksData = [
  {
    id: 1,
    label: "Check email",
    time: "0:20h",
    type: "sixth",
    status: STATUS.Completed,
  },
  {
    id: 2,
    label: "Record a video comment about last week's analytics report",
    time: "7:00h",
    type: "second",
    status: STATUS.Completed,
  },
  {
    id: 3,
    label: "Check email",
    time: "0:20h",
    type: "third",
    status: STATUS.InProgress,
  },
  {
    id: 4,
    label: "Record a video comment about last week's analytics report",
    time: "7:00h",
    type: "fourth",
    status: STATUS.InProgress,
  },
  {
    id: 5,
    label: "Process all resumes for Content Marketer position",
    time: "1:30h",
    type: "first",
    status: STATUS.InProgress,
  },
  {
    id: 6,
    label: "Check email",
    time: "0:20h",
    type: "first",
    status: STATUS.New,
  },
  {
    id: 7,
    label: "Write a blogpost 7 best strategies for SEO in 2020",
    time: "5:00h",
    type: "second",
    status: STATUS.New,
  },
  {
    id: 8,
    label: "New Ad copies for Manamaja",
    time: "2:30h",
    type: "first",
    status: STATUS.Scheduled,
  },
  {
    id: 9,
    label: "Meeting with Amanda (PR department)",
    time: "0:30h",
    type: "second",
    status: STATUS.New,
  },
  {
    id: 10,
    label: "Get Patrick's approval for homepage new design",
    time: "0:20h",
    type: "fourth",
    status: STATUS.Scheduled,
  },
]
