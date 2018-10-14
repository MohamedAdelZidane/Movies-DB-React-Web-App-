import React from 'react';
import axios from 'axios';


class view extends React.Component{

    state={
        data:[],
    };
    
    componentDidMount () {
        axios.get(`http://api.tvmaze.com/shows?page=1`).then(res => {
            this.setState({data: res.data})
            console.log(res.data); 
            });
        }
        
    
    render(){
        return(

            this.state.data.map((movie) => 
            <p><b>Movie Name:</b> {movie.name}<br/>
            <b>Movie ID:</b> {movie.id}<br/>
            <b>Movie Description:</b> {movie.summary}<br/>
            <b>Movie URL:</b> {movie.url}
            </p>
            )
            )
                }
            }


export default view;