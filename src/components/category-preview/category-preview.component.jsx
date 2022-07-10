import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';


const CategoryPreview = ({title, products}) => {
  return(
    <CategoryPreviewContainer className='category-preview-container'>
      <h2>
        <Title className='title' to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview className='preview'>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;