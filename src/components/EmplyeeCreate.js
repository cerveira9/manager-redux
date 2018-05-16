import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import Card from '../common/Card';
import Button from '../common/Button';
import CardItem from '../common/CardItem';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {    
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardItem>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);
