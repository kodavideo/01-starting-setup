import ExpenseDate from './ExpenseDate';
import ExpenseGR from './ExpenseGR'
import './ExpenseItem.css';

function ExpenseItem(props) {
//  {} inside of x to run js, props run data from component a to b.
  return (
    <div className="expense-item">
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3 className="expense-item__brand">{props.brand}</h3>
        <div className="expense-item__price">{props.stock}</div>
        <div className="expense-item__price">{props.price}</div>
        <div className="expense-item__price">{props.goonRating}</div>
        <ExpenseGR goonRating={props.goonRating}/>
      </div>
  </div>);
}

export default ExpenseItem;
