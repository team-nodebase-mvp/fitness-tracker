import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    console.log('exercise object',this.props.exercise);
    console.log('data I want',JSON.stringify(this.props.exercise.sets));
    const exerciseCategory = this.props.exercise.exerciseCategory;

    return (
      <div>
        <div>
          { this.props.exercise }
        </div>
        <div>

        </div> 
      </div>
    )

  }
}
export default ListItem;


{/* <table class="tftable" border="1">
<tr>
  <th>Header 1</th>
  <th>Header 2</th>
  <th>Header 3</th>
  <th>Header 4</th>
  <th>Header 5</th>
  <th>Header 6</th>
  <th>Header 7</th>
</tr>
<tr>
  <td>Row:1 Cell:1</td>
  <td>Row:1 Cell:2</td>
  <td>Row:1 Cell:3</td>
  <td>Row:1 Cell:4</td>
  <td>Row:1 Cell:5</td>
  <td>Row:1 Cell:6</td>
  <td>Row:1 Cell:7</td>
</tr>
</table> */}