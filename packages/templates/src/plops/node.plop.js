import { generator } from "./utils";

const templates = [
  {
    name: "Express microservice",
    path: "express-microservice",
  },
];

export default function (plop) {
  return generator(plop, templates);
}
