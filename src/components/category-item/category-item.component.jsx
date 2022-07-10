import { CategoryItemContainer, BackgroundImage, CategoryBodyContainer } from './category-item.styles'
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

  return(
      <CategoryItemContainer onClick={onNavigateHandler}>
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