import './ExpenseGR.css';

function ExpenseGR(props) {
  // optimize date variable so it can be projected in react html element(s)
  // props runs the variables in the .js file, in this case 'new Date(x,y,z)'.
  const grV = props.goonRating + (" e.g. 'verified' prop");

  return (
    <div className='expense-date'>
      <div>{grV}</div>
    </div>
  );
}

export default ExpenseGR;
