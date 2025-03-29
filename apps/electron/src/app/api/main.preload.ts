import { contextBridge, ipcRenderer } from "electron";
import { CreateFormDto } from "../dtos/create-form.dto";
import { PaginationDto } from "../dtos/pagination.dto";

contextBridge.exposeInMainWorld("electron", {
  datasourceInit: () => ipcRenderer.invoke("datasource-init"),
  createForm: (createFormDto: CreateFormDto) =>
    ipcRenderer.invoke("create-form", createFormDto),
  getForms: (paginationDto: PaginationDto) =>
    ipcRenderer.invoke("get-forms", paginationDto),
  deleteFormById: (id: number) => ipcRenderer.invoke("delete-form-by-id", id),
  getFormById: (id: number) => ipcRenderer.invoke("get-form-by-id", id),
  updateFormById: (id: number, data: any) =>
    ipcRenderer.invoke("update-form-by-id", id, data),
  platform: process.platform,
});
