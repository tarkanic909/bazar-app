import FilterWidgetSubitem from "../FilterWidgetSubitem";
import "./index.scss";

function FilterWidgetItem(props) {
  const subcategories = props.subcategories || [];

  return (
    <div className="filter-widget-item">
      <span className="filter-widget-item__span" {...props}>
        {props.category.category}
      </span>
      <ul className="category__subcategory">
        {subcategories.map((subcategory, index) => (
          <li key={index}>
            <FilterWidgetSubitem subcategory={subcategory} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterWidgetItem;
