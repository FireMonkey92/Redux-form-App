import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { addMessage ,clearState} from './actions'
import { connect } from 'react-redux';





class Form extends Component {

    renderTextBox(field) {

        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''} ${field.meta.dirty && !field.meta.error ? 'no-error' : ''} `
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type='text' {...field.input}></input>
                <div className='error'>
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    renderTextArea(field) {

        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''} ${field.meta.dirty && !field.meta.error ? 'no-error' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <textarea type='text'  {...field.input} ></textarea>
                <div className='error'>
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit = (data) => {
        this.props.addMessage(data,()=>{
                this.props.history.push('/');
        } );
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.props.clearState();
        },5000);
    }

    render() {
        return (
            <div className="Form">
                <div className="top">
                    <h3>Add a Message</h3>
                    <Link to="/">Back</Link>
                </div>
                <form onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                    <Field name='title'
                        label='Title:'
                        component={this.renderTextBox}>
                    </Field>
                    <Field name='from'
                        label='From:'
                        component={this.renderTextBox}>
                    </Field>
                    <Field name='message'
                        label='Message:'
                        component={this.renderTextArea}>
                    </Field>
                    <div>
                    </div>
                    <button type='submit'>Submit</button>
                    <div>{this.props.success.success}</div>
                </form>
            </div>
        );
    }
}

function validate(value) {

    const error = {};
    if (!value.Title) {
        error.Title = 'Please Enter The Title'
    }
    if (!value.From) {
        error.From = 'Please Enter The From'
    }
    if (!value.Message) {
        error.Message = 'Please Enter The Message'
    }
    return error;
}

function mapStateToProps(state){
    console.log(state);
    return{
        success : state.messages
    }
}

export default reduxForm({
    validate,
    form: 'PostMessage'
})(
    connect(mapStateToProps,{ addMessage,clearState })(Form)
);

