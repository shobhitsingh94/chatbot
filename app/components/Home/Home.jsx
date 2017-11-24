import React from "react";
import PropTypes from "prop-types";
import ChatBot from 'react-simple-chatbot';
import {renderBooksList, emailValidator} from "../../utility";
import io from 'socket.io-client';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.user = {
            name: '',
            email: ''
        }
    }

    getCredentials = (value, type) => {
        switch (type) {
            case 'name':
                this.user.name = value;
                break;
            case 'email':
                this.user.email = value;
                //this.addUser(this.user);
                break;
            default:
                break;
        }
    }

    addUser = (user) => {
        let details = Object.assign({}, user, this.user);
        this.props.addNewUser(details);
    }

    componentWillMount() {

    }

    componentWillReceiveProps() {

    }


    render() {
        return (
            <section className="container bg-gray">
                <div className="wraper">
                    <ChatBot
                        steps={[
                            {
                              id: '1',
                              message: 'What is your name?',
                              trigger: '2',
                            },
                            {
                              id: '2',
                              user: true,
                              validator: (value) => {
                                if (!value) {
                                  return 'We will need your credentials';
                                }
                                this.getCredentials(value, 'name');
                                return true;
                              },
                              trigger: '3',
                            },
                            {
                              id: '3',
                              message: 'Hi {previousValue},what would you like to enter?',
                              trigger: '4'

                            },
                            {
                              id: '4',
                              options: [
                                  {  value: 'id', label: 'Id/Password', trigger: '5' },
                                  {  value: 'email', label: 'Email', trigger: '6' },
                                ]
                              //validator: (value) => {
                              //  //if (!emailValidator(value)) {
                              //  //  return 'Please enter valid email';
                              //  //}
                              //  this.getCredentials(value, 'email');
                              //  return true;
                              //},
                            },
                            {
                              id: '5',
                              component : <InputForm addUser={this.addUser} option={true}/>,
                              waitAction: true,
                              trigger : '7'
                            },
                            {
                              id: '6',
                              component : <InputForm addUser={this.addUser} option={false}/>,
                              waitAction: true,
                              trigger : '7'
                            },
                            {
                              id: '7',
                              message : "Great!!done",
                              end : true
                            },
                          ]}
                        />
                </div>
            </section>
        )
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired,
    addNewUser: PropTypes.func.isRequired,

};
export default Home;

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.details = {
            id: '',
            password: '',
            email: ''
        }
    }

    onChange = (type, evt) => {
        let id = evt.target.value;
        this.setState({id: evt.target.value});
        switch (type) {
            case 'id':
                this.details.id = evt.target.value;
                break;
            case 'password':
                this.details.password = evt.target.value;
                break;
            case 'email':
                this.details.password = evt.target.value;
                break;
            default:
                break;
        }

    }

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.addUser(this.details);
        this.props.triggerNextStep();
    }

    render() {
        const {option } = this.props;
        return (
        <div className="container">
            { this.props.option ? (
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div style={{"marginBottom": "25px"}} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input className="form-control" defaultValue="" placeholder="userid"
                               onChange={this.onChange.bind(this,'id')}/>
                    </div>
                    <div style={{"marginBottom": "25px"}} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input type="password" className="form-control" defaultValue='' placeholder="password"
                               onChange={this.onChange.bind(this,'password')}/>
                    </div>
                    <div style={{"marginTop":"10px"}} className="form-group">
                        <div className="col-sm-12 controls">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form> ) : (
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div style={{"marginBottom": "25px"}} className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input className="form-control" defaultValue="" placeholder="email"
                               onChange={this.onChange.bind(this,'email')}/>
                    </div>
                    <div style={{"marginTop":"10px"}} className="form-group">
                        <div className="col-sm-12 controls">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>)
            }
        </div> );
    }
}
