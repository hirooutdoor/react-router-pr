import { Page1 } from "../Page1";
import { Page1A } from "../Page1-A";
import { Page1B } from "../Page1-B";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/a",
    exact: false,
    children: <Page1A />
  },
  {
    path: "/b",
    exact: false,
    children: <Page1B />
  }
];
