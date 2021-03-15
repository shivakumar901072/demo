import React from 'react';

const initialState={
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
}

class Form extends React.Component {
    
        state= initialState;
          
    

    validate = () => {
        let nameError = "";
        let emailError = "";
         let passwordError = "";
    
        if (!this.state.name) {
          nameError = "name cannot be blank";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
        if(this.state.password.length<5) {
            passwordError =" password must be atleast 5"
        }
    
        if (emailError || nameError || passwordError) {
          this.setState({ emailError, nameError, passwordError });
          return false;
        }
    
        return true;
      };

    
      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };

    handleChange=(e) => {
    this.setState({
        name: e.target.value
    })
        

    }

    handleEmail = (e) => {
this.setState({
    email: e.target.value
})
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input type = "text" value={this.state.name} placeholder="name" onChange={this.handleChange}></input><br/>
               <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>

               <input type="text" value ={this.state.email} placeholder ="email" onChange ={this.handleEmail}></input><br/>
               <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>

               <input type="password" value ={ this.state.password} placeholder="password" onChange={this.handlePassword}></input><br/>
               <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>

               <button type="submit">Submit</button>
               </form>

        );
    }
} 
export default Form;