import type { Model } from 'mongoose'
import type { Request } from 'express'

export type Task = {
  id?: string
  name: string
  status: string
  description?: string // Detalle de la tarea
  createdBy?: string // Usuario que creó la tarea
  assignedTo?: string // Usuario al que se le asignó la tarea
  createdAt?: Date
  lastModified?: Date
}

export type UserRequestType = Request & {
  task: Task
}

export type TaskModel = Model<Task>
