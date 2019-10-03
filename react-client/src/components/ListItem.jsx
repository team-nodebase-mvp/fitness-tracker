import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    console.log('exercise object parsed',JSON.parse(this.props.exercise));
    console.log('data I want',JSON.parse(this.props.exercise).sets);
    const exercise = JSON.parse(this.props.exercise);
    

    return (
      <div>
        <div>
          { this.props.exercise }
        </div>
        <div>
        <table className="table" border="1">
          <tbody>
            <tr>
              <td>exercise.date</td>
              <td>Row:1 Cell:2</td>
              <td>Row:1 Cell:3</td>
              <td>Row:1 Cell:4</td>
              <td>Row:1 Cell:5</td>
              <td>Row:1 Cell:6</td>
              <td>Row:1 Cell:7</td>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:1</td>
            </tr>
          </tbody>
        </table>
        </div> 
      </div>
    )

  }
}
export default ListItem;


