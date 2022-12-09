import { files, notes, roadmap, shedule, tasks } from "./assets"

export const workspaceMenu = {
  favorites: [
    { id: 1, label: "Marketing" },
    { id: 2, label: "Mobile App" },
  ],
  myProjects: [
    { id: 1, label: "Marketing" },
    { id: 2, label: "Landing Pages" },
    { id: 3, label: "Wedding" },
    { id: 4, label: "Mobile App" },
  ],
}

export const toolsMenu = [
  { id: 1, label: "Roadmap", img: roadmap, active: false },
  { id: 2, label: "Schedule", img: shedule, active: true },
  { id: 3, label: "Tasks", img: tasks, active: false },
  { id: 4, label: "Notes", img: notes, active: false },
  { id: 5, label: "Files", img: files, active: false },
]

export const boardsMock = [
  {
    id: 1,
    label: "New task",
    items: [
      { id: 1, label: "Check email", date: "0:20h" },
      {
        id: 2,
        label: "Compare PPC agencies and make a report for Steven",
        date: "3:00h",
      },
      {
        id: 3,
        label: "Meeting with Amanda (PR department)",
        date: "0:30h",
      },
      {
        id: 4,
        label: "Get Patrick's approval for homepage new design",
        date: "0:20h",
      },
    ],
  },
  {
    id: 2,
    label: "Scheduled",
    items: [
      { id: 1, label: "Check email", date: "0:20h" },
      {
        id: 2,
        label: "Write a blogpost 7 best strategies for SEO in 2020",
        date: "5:00h",
      },
      {
        id: 3,
        label: "New Ad copies for Manamaja",
        date: "2:30h",
      },
    ],
  },
  {
    id: 3,
    label: "In progress",
    items: [
      { id: 1, label: "Check email", date: "0:20h" },
      {
        id: 2,
        label: "Record a video comment about last week's analytics report",
        date: "7:00h",
      },
      {
        id: 3,
        label: "Process all resumes for Content Marketer position",
        date: "1:30h",
      },
    ],
  },
  {
    id: 4,
    label: "Completed",
    items: [
      { id: 1, label: "Check email", date: "0:20h" },
      {
        id: 2,
        label: "Record a video comment about last week's analytics report",
        date: "7:00h",
      },
    ],
  },
]
