import { TCamera } from 'src/shared';
import { ProductCard } from 'src/widgets/product-card';

type ProductsListProps = {
  camerasList: TCamera[];
  showAddItemModal: (param: boolean, id: number) => void;
}

const ProductsList = ({camerasList, showAddItemModal} : ProductsListProps): JSX.Element => (
  <div className="cards catalog__cards">
    {camerasList.map((camera) => (
      <ProductCard key={camera.id} product = {camera} showAddItemModal={showAddItemModal}/>
    ))}
  </div>
);

export default ProductsList;
