const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = 
  frontEndFrameworks.map(x => <li key={x}>{x}</li> );
    //Object.entries(frontEndFrameworks).map(([key,value]) => "<li>"+[value,value]); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
