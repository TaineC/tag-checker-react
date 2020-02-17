import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: [],
    }
  }

  checkHTML = (e) => {
    this.setState({inputValue: []})
    e.preventDefault()
    let form = new FormData(this.form);
    let text = form.get('input');
    console.log(text)

    let htmlValidationRegExp = /<.+?>/g;
    if(text.length == 0){
        return false;
    }
    else{
      let tagArray = text.match(htmlValidationRegExp);
      console.log(tagArray)
      const arrWithSlashElements = tagArray.filter(e => e.includes('/'));
      const arrWithoutSlashElements = tagArray.filter(e => !e.includes('/'));
      this.state.inputValue.push(arrWithoutSlashElements, arrWithSlashElements);
    }
  }

  checkArray = (e) => {
    this.checkHTML(e)
    console.log(this.state.inputValue)
    console.log(this.state.inputValue[0])
    for (let i = 0; i < this.state.inputValue[1].length; i++) {
      console.log(this.state.inputValue)
    }
    // this.state.inputValue[1].split('/').join('')
    console.log(this.state.inputValue[1])


    //future code

    //various conditions calculated based upon array sort methods
    // - reverse sort match array string to other array string
  }

  render(){
    return (
      <div className="App">
        <Form className="form" onSubmit={this.checkArray} ref={(el) => {this.form = el}}>
          <Form.Group>
            <Form.Control type="text" className="form-control" name="input" id="input" as="textarea" rows="10" cols="80"/>
          </Form.Group>
          <Button type="submit">Okay</Button>
        </Form>
      </div>
    );
  }
}

export default App;
