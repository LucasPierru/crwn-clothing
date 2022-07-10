import { CategoryItemContainer, BackgroundImage, CategoryBodyContainer } from './category-item.styles'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return(
      <CategoryItemContainer>
				<BackgroundImage 
					className="background-image" 
					imageUrl={imageUrl}
				/>
				<CategoryBodyContainer className="category-body-container">
					<h2>{title}</h2>
					<p>Show Now</p>
				</CategoryBodyContainer>
			</CategoryItemContainer>
  );
}

export default CategoryItem;