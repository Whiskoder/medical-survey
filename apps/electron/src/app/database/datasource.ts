import { DataSource } from "typeorm";
import { FormEntity } from "./form.entity";

export const datasource: DataSource = new DataSource({
  type: "sqlite",
  database: "medical-forms.db",
  synchronize: true,
  logging: false,
  entities: [FormEntity],
});
