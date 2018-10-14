import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
class Search extends Component {
    state={
        searchText: '',
        amount: 15,
        apiUrl:'http://api.tvmaze.com/shows?page=1',
        data:[]
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => { 
            if(val === ''){
                this.setState({data: []});
            } else {
           axios
             .get(
                 `${this.state.apiUrl}&q=${this.state.searchText}&per_page=${this.state.amount}`
                 )
                    .then (res => this.setState({data: res.data}))
                    .catch(err => console.log(err));

            }
        });
    };

    onAmountChange=(e, index, value) => this.setState({ amount: value});
    
    render() {
        console.log(this.state.data);
        return (
            <div>
                <p>Please enter any query to start searching Movies</p>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search Your Favorite Movie"
                    fullWidth={true}
                />
                <br/>
                <SelectField 
                  name="amount" 
                  floatingLabelText="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  >
                  <MenuItem value={5} primaryText="5"/> 
                  <MenuItem value={10} primaryText="10"/>   
                  <MenuItem value={15} primaryText="15"/>   
                  <MenuItem value={30} primaryText="30"/>   
                  <MenuItem value={50} primaryText="50"/>                    
                  </SelectField>
                <br/>
                {this.state.data.length > 0 ? (<ImageResults data={this.state.data}/>) : null}
            </div>
        )
    }
}

export default Search;