import * as Redux from "redux";
declare module "redux" {
  export interface Store {
    sagaTask: store.sagaTask;
  }
}
