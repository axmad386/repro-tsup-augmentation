import { Axios } from "axios";
declare module "axios" {
   interface Axios {
    dummy(): string;
  }
}
Axios.prototype.dummy = function () {
  return "dummy";
};
console.log(new Axios().dummy());
