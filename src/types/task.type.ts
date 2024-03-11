import type { Model } from 'mongoose'
import type { Request } from 'express'

export type Task = {
  id?: string
  name: string
  status: string
  //detalle de la tarea
  //El usuario que creo la tarea
  //EL usuario que hara tarea
  createdAt?: Date
  lastModified?: Date
}

export type UserRequestType = Request & {
  task: Task
}

export type TaskModel = Model<Task>
