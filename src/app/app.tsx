import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Basket } from 'src/pages/basket';
import { Catalog } from 'src/pages/catalog';
import { Layout } from 'src/pages/layout';
import { PageNotFound } from 'src/pages/page-not-found';
import { Product } from 'src/pages/product';
import { AppRoutes } from 'src/shared';

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Catalog,
      element: <Layout />,
      // errorElement: <div>error</div>,
      children: [
        {
          path: AppRoutes.Catalog,
          element: <Catalog />,
        },
        {
          path: `${AppRoutes.Camera}/:idCamera`,
          element: <Product />
        },
        {
          path: AppRoutes.Basket,
          element: <Basket />
        },
        {
          path: AppRoutes.PageNotFound,
          element: <PageNotFound />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
