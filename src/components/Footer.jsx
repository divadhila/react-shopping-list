export default function Footer({items}) {
    if (items.length === 0) {
      return (<footer className="stats">
        Shopping list is still <strong>empty</strong>!
    </footer>)
    }
  
    const totalItems = items.length;
    const checkedItems =  items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems/totalItems) * 100);
  
    return(
      <footer className="stats">
          There are <strong>{totalItems}</strong> items on the shopping list, <strong>{checkedItems}</strong> of which have been purchased. (<strong>{percentage}%</strong>)
      </footer>
    );
  }