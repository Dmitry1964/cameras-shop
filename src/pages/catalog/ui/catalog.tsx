import { Banner } from 'src/widgets/banner';
import { Breadcrumbs } from 'src/widgets/breadcrumbs/ui';
import { CatalogFilter } from 'src/widgets/catalog-filter';
import { CatalogSort } from 'src/widgets/catalog-sort';
import { Pagination } from 'src/widgets/pagination';
import { ProductsList } from 'src/widgets/products-list';

const Catalog = (): JSX.Element => (
  <main>
    <Banner />
    <div className="page-content">
      <Breadcrumbs />
      <section className="catalog">
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <div className="catalog__aside">
              <CatalogFilter />
            </div>
            <div className="catalog__content">
              <CatalogSort />
              <ProductsList />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default Catalog;
