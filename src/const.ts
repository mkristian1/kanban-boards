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


export enum STATUS {
  New,
  Scheduled,
  InProgress,
  Completed,
}