import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';



class Form extends Component {

    renderTextBox(field) {
        return (
            <div className='form-input'>
                <label>{field.label}</label>
                <input type='text' {...field.input}></input>
                <div className='error'>
                {field.meta.error}
                </div>
            </div>
        )
    }

    renderTextArea(field) {
        return (
            <div className='form-input'>
                <label>{field.label}</label>
                <textarea type='text'  {...field.input} ></textarea>
                <div className='error'>
                {field.meta.error}
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="Form">
                <div className="top">
                    <h3>Add a Message</h3>
                    <Link to="/">Back</Link>
                </div>
                <form>
                    <Field name='Title'
                        label='Title:'
                        component={this.renderTextBox}>
                    </Field>
                    <Field name='From'
                        label='From:'
                        component={this.renderTextBox}>
                    </Field>
                    <Field name='Message'
                        label='Message:'
                        component={this.renderTextArea}>
                    </Field>
                </form>
            </div>
        );
    }
}

function validate(value){

    const error = {};
    if(!value.Title){
        error.Title = 'Please Enter The Title'
    }
    if(!value.From){
        error.From = 'Please Enter The From'
    }
    if(!value.Message){
        error.Message = 'Please Enter The Message'
    }
    return error;
}

export default reduxForm({
    validate,
    form: 'PostMessage'
})(Form);

