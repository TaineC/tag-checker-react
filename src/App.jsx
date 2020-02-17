import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: [],
      output: '',
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

  // arraysEqual = (array1, array2) => {
  //   if (!Array.isArray(array1) || ! Array.isArray(array2) || array1.length !== array2.length){
  //     // return false;
  //     let arr1 = array1.concat().sort();
  //     let arr2 = array2.concat().sort();
  //     for (var i = 0; i < arr1.length; i++) {
  //       if (arr1[i] !== arr2[i]){
  //         // return false;
  //         console.log(false)
  //       }
  //     }
  //   }
  //   // return true;
  //   console.log(true)
  // }

  checkArray = (e) => {
    let {inputValue} = this.state;
    this.setState({output: ''})
    this.checkHTML(e)
    let array1 = inputValue[0]
    let removeChar = inputValue[1].map(i => i.replace('/',''));
    let array2 = removeChar.reverse();

    console.log(array1, array2);
    if (!Array.isArray(array1) || ! Array.isArray(array2) || array1.length !== array2.length){
      // return false;
      let arr1 = array1.concat().sort();
      let arr2 = array2.concat().sort();
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
          this.setState({output: 'Expected # found #'})
          console.log(false)
        }
      }
    }
    this.setState({output: 'Correctly tagged Paragraph'})
    console.log(true)
    // arraysEqual(array1, array2);


    // if(inputValue[0] == matchArrays){
    //   console.log('match')
    // }
    // else{
    //   console.log('dont match')
    // }


    // for (let i = 0; i < inputValue[1].length; i++) {
    //   inputValue[i] = inputValue[i].replace('/'/g,'');
    //   console.log(inputValue)
    // }
    // this.state.inputValue[1].split('/').join('')
    // console.log(inputValue[1])


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
        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default App;
