/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import { app, ipcMain } from "electron";
import { environment } from "../../environments/environment";
import { datasource } from "../database/datasource";
import { CreateFormDto } from "../dtos/create-form.dto";
import { FormEntity } from "../database/form.entity";
import { PaginationDto } from "../dtos/pagination.dto";

export default class ElectronEvents {
  static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

const formsRepository = datasource.getRepository(FormEntity);

ipcMain.handle("datasource-init", async (event) => {
  try {
    await datasource.initialize();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
});

ipcMain.handle(
  "create-form",
  async (
    event,
    createFormDto: CreateFormDto
  ): Promise<FormEntity | undefined> => {
    console.log(createFormDto);
    try {
      const formEntity = formsRepository.create(createFormDto);
      await formsRepository.save(formEntity);
      return formEntity;
    } catch (e) {
      console.error(e);
    }
  }
);

ipcMain.handle(
  "get-forms",
  async (event, pagination?: PaginationDto): Promise<FormEntity[]> => {
    try {
      const { limit = 10, offset = 0 } = pagination || {};
      const forms = await formsRepository.find({
        take: limit,
        skip: offset,
      });
      return forms;
    } catch (e) {
      console.error(e);
    }
  }
);

ipcMain.handle("delete-form-by-id", (event, id) => {
  console.log("Deleting form by id");
  console.log(id);
});

ipcMain.handle("get-form-by-id", (event, id) => {
  console.log("Getting form by id");
  console.log(id);
});

ipcMain.handle("update-form-by-id", (event, id, data) => {
  console.log("Updating form by id");
  console.log(id);
  console.log(data);
});

// Handle App termination
ipcMain.on("quit", (event, code) => {
  app.exit(code);
});
