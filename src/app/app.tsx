import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from 'src/pages/catalog';
import { Layout } from 'src/pages/layout';
import { Product } from 'src/pages/product';
import { AppRoutes } from 'src/shared';

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Catalog,
      element: <Layout/>,
      errorElement: <div>error</div>,
      children: [
        {
          path: AppRoutes.Catalog,
          element: <Catalog />,
        },
        {
          path: AppRoutes.Product,
          element: <Product />
        }
      ]
    }
  ])
  return (
    <RouterProvider router = {router} />
)};

export default App;
