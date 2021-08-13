import AddProduct from "./components/AddProduct";
import Index from "./components/Index";
import UpdateProduct from "./components/UpdateProduct";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Index />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <AddProduct history={history} />,
  },
  {
    path: "/product/edit/:id",
    exact: false,
    main: ({ match, history }) => (
      <UpdateProduct match={match} history={history} />
    ),
  },
];
export default routes;
