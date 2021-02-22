import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo.jsx'
import BusinessInfo from './BusinessInfo.jsx'
import AddressDetails from './AddressDetails.jsx'
import  AccountDetails from './AccountDetails.jsx'
import Display from './Display.jsx'
export default class Form extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        businessname: '',
        type: '',
        country: '',
        currency: '',
        achRoutingnumber: '',
        accNumber: '',
        accType: '',
        city: '',
        postcode: '',
        address: ''
    }
    nextstep = () => {
        this.setState({
            step: this.state.step + 1
        })

    }
    prevstep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }
    showform = () => {
        if (this.state.step === 1) {
            if (this.state.type === "Personal") {
                return (<PersonalInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                />);
            }
            else if (this.state.type === "Business") {
                return (<BusinessInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    businessName={this.businessName}
                    email={this.state.email}
                    phone={this.state.phone}
                />);
            }
            if (this.state.step === 2)
                return (<AccountDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    country={this.state.country}
                    currency={this.state.currency}
                    accountNo={this.state.accNumber}
                    accountType={this.state.accType}
                />);
            if (this.state.step === 3)
                return (<AddressDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    city={this.state.city}
                    postCode={this.state.postcode}
                    address={this.state.address}

                />);
            if (this.state.step === 4)
                return (<Display
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    businessName={this.state.businessName}
                    type={this.state.type}
                    handleChange={this.handleChange}
                    country={this.state.country}
                    accountNo={this.state.accNumber}
                    city={this.state.city}
                    address={this.city.address}
                    prevStep={this.prevStep}
                />);


        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.step}</h2>
{this.showform}
            </div>
        )
    }
}
