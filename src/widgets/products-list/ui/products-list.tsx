import { TCamera } from 'src/shared';
import { ProductCard } from 'src/widgets/product-card';

type ProductsListProps = {
  camerasList: TCamera[];
}

const ProductsList = ({camerasList} : ProductsListProps): JSX.Element => (
  <div className="cards catalog__cards">
    {camerasList.map((camera) => (
      <ProductCard key={camera.id} product = {camera}/>
    ))}
  </div>
);

export default ProductsList;
