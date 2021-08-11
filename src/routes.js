import Index from "./components/Index";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Index />,
  },
];
export default routes;
