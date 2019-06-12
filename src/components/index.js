import React from 'react';
import _ from 'lodash';

import {
  Col,
} from 'reactstrap';

import Text from './Text';
import DropDown from './DropDown';
import RadioButton from './RadioButton';

import {
  FILTER_TYPE_TEXT,
  FILTER_TYPE_DROP_DOWN,
  FILTER_TYPE_RADIO_BUTTON,
} from './constants';

import forms from './table';

class FieldType extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myArrays:forms,
      formValues: false,
      filtered:[],
      page:'1',
    };
    this.submitForm = this.submitForm.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    // this.onChange =  this.onChange.bind(this);s

  }


  componentDidMount() {
    //  const formMapping = Object.keys(forms).map(form => {
    //   return { id: form, value: null, isVisible : null }
    // })
    
    
    this.renderFunction('1')
  }

  renderFunction (page) {
    const formValues = _.mapKeys(this.renderCheck(), 'id');
    this.setState({
      formValues,
    })

    function slices(value){
      return value.slice('',1) === page
    }
    const filtered = Object.keys(formValues).filter(slices)
    this.setState({
      filtered
    })

    const arr = Object.keys(formValues).map((value) => value)
    arr.filter(function(num){
      return filtered.includes(num)
    })
    console.log(filtered)
  }

  onChange = (e) => {
    this.setState ({
      page : e.target.value
    })
    this.renderFunction(e.target.value)
  }


  onCheckChange = (e) => {
    e.persist()
    const id = e.target.id
    const current= this.state.myArrays[id]
    const parent = this.state.myArrays[this.state.myArrays[id].dependsOn]
    const child = this.state.myArrays[this.state.myArrays[id].child]

    
    
    if(!parent && !child)
    {
      return (
        this.setState(prevState => {
          return (
            {
              formValues: {
                ...prevState.formValues,
                [this.state.myArrays[id].id]: {
                  id:id,
                  value: e.target.value,
                  isVisible: true,
                  }
              }
            }
          )
        })
      )
    }
    else if(!parent)
    {
      return (
        this.setState(prevState => {
          return (
            { 
              formValues: {
                ...prevState.formValues,
                [this.state.myArrays[id].id]: {
                  id:id,
                  value:e.target.value,
                  isVisible: true,
                  childVisible: e.target.value === child.expectedValue? true : false,
                  
                },
                [this.state.myArrays[id].child]:{
                  id:id,
                  value:null,
                  isVisible: e.target.value === child.expectedValue ? true : false,
                  childVisible: e.target.value === current.expectedValue ? true : false,
                },
                [this.state.myArrays[this.state.myArrays[id].child].child]: {
                  id:id,
                  value:null,
                  isVisible: false,
                  childVisible: false,
                }
              }
            }
          )
        })
      )
    }
    else if ( parent && !child )
    {
      return(
          this.setState(prevState => {
            return (
              {
                formValues: {
                  ...prevState.formValues,
                  [this.state.myArrays[id].id]: {
                    id:id,
                    value: e.target.value,
                    isVisible: true,
                  }
                }
              }
            )
          })
        )
    }
    else if(parent)
    {
      return (
        this.setState(prevState => {
          return (
            { 
              formValues: {
                ...prevState.formValues,
                [this.state.myArrays[id].id]: {
                  id:id,
                  value:e.target.value,
                  isVisible: e.target.value ? true : false,
                  childVisible: e.target.value === child.expectedValue? true : false
                },
                [this.state.myArrays[id].child]:{
                  id:id,
                  value:null,
                  isVisible: e.target.value === child.expectedValue ? true : false,
                  childVisible: false,
                }
              }
            }
          )
        })
      )
    }
    
    
    else {
      console.log('else')
      // this.setState(prevState => {
      //   return (
      //     { 
      //       formValues: {
      //         ...prevState.formValues,
      //         [id]: {
      //           id:id,
      //           value:e.target.value,
      //           isVisible: e.target.value === expectedValue  ? true : false,
      //           childVisible: parent.childVisible === true  ? true : false              
      //         }
      //       }
      //     }
      //   )
      // })
    }
    // console.log(id,e.target.value)
  }

  submitForm = (e) => { 
    e.preventDefault()  
    const { formValues } = this.state
    console.log(formValues)
    
  };

  renderCheck() {
    const { myArrays } = this.state;

    return Object.keys(myArrays).map(id => {
      const {dependsOn} = myArrays[id]
      return ({
        id,
        value: null,
        isVisible: !dependsOn ? true : false,
        childVisible: false
      })
    });
  }


  render() {
    const { myArrays,filtered } = this.state
    return(
      <div>
      <form onSubmit={this.submitForm}>
			{filtered.map(id => {
        const {fieldLabel,fieldName,formType,dependsOn,formData,expectedValue} = myArrays[id]
        const parent= this.state.formValues[dependsOn];
        switch (formType){
            case FILTER_TYPE_TEXT:
            return(
                  <Col key={id}>
                    <Text
                      name={fieldName}
                      value={this.setState[this.state.formValues]}
                      placeholder={fieldLabel}
                      onChange={this.onCheckChange}
                      dependsOn={dependsOn}
                      id={id}
                      parent={parent}
                      expectedValue={expectedValue}
                    />
                    <br />
                  </Col>
                );
              case FILTER_TYPE_DROP_DOWN:
                return (
                  <Col key={id}>
                    <DropDown
                      name={fieldName}
                      items={formData.selection}
                      value={this.state[fieldName]}
                      onChange={this.onCheckChange}
                      id={id}
                    />
                    <br />
                    <br />
                  </Col>
                );
              case FILTER_TYPE_RADIO_BUTTON:
              return(
                <Col >
                  <RadioButton
                    key={id}
                    name={fieldName}
                    items={formData.selection}
                    value={formData.selection.value}
                    onChange={this.onCheckChange}
                    dependsOn={dependsOn}
                    id={id}
                    parent={parent}
                    expectedValue={expectedValue}
                  />
                  <br />
                </Col>
          );
          default:
            return(
              <div>{formType}</div>
            );
        }
		})}
			<input type="submit"/> <br />
    </form>
    <button onClick={this.onChange} value='1'>1</button> <button onClick={this.onChange} value='2'>2</button> <button onClick={this.onChange} value='3'>3</button> <button onClick={this.onChange} value='4'>4</button> <button onClick={this.onChange} value='5'>5</button> <button onClick={this.onChange} value='6'>6</button>
    </div>
    )
  }
}


export default FieldType;
