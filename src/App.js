import React, { Component } from 'react'
import Plan from './plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img1 from '../src/images/Logo.png'

class App extends Component {
    state = {
        items: [],
        text: " ",
    }
    handleChange = e => {
        this.setState({ text: e.target.value })
    }
    handleAdd = e => {
        if (this.state.text !== "") {
            const items = [...this.state.items, this.state.text];
            this.setState({ items: items, text: "" })
        }
    }
    handleDelete = id => {
        console.log("Deleted", id);
        const Olditems = [...this.state.items]
        console.log("Olditems", Olditems);
        const items = Olditems.filter((element, i) => {
            return i !== id
        })
        console.log("Newitems", items);
        this.setState({ items: items });

    }
    render() {
        return (

            
            <div className="container-fluid my-5" >
                <div classname="row">
                <div className="column">
                                <img src= {img1} className='img-fluid hover-shadow' alt=''
                                  style={{ height: '50px' , width: '50px', horizontalAlign: 'right' ,maxWidth: '24rem' }} />
                                <span class="photodesc"><p class="font-weight-bold" color='white'>My Logo</p></span>
                </div>  
                      <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                      
                        <h2 className="text-center">Today's Plan</h2>
                        
                        <div className="row">
                            <div className="col-9">
                                <input type="text" className="form-control"
                                    placeholder="Write your Plans here" value={this.state.text} onChange={this.handleChange} />
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>Add</button>
                            </div>
                            <div className="container-fluid">
                                <ul className="list-unstyled row m-5">
                                    {
                                        this.state.items.map((value, i) => {
                                            return <Plan key={i} id={i} value={value}
                                                sendData={this.handleDelete}
                                            />
                                        })
                                    }

                                </ul>
                            </div>


                        </div>

                    </div>

                </div>
                <div className='row foot'>
                    <div class="col-12">
                        <h6 className="text-bottom text-white text-bold">Created by Abhinav Goswami</h6>
                        <div class="btn-group-vertical">
                            <a href="https://www.instagram.com/abhinavgoswami1110/" class="btn btn-light btn-md"
                                role="button" aria-pressed="true">Instagram</a>
                            <a href="https://www.linkedin.com/in/abhinav-goswami-150b94200/"
                                class="btn btn-light btn-md active" role="button" aria-pressed="true">Linkedin</a>
                            <a href="https://www.youtube.com/channel/UCuI_WWwxQ27GntQn3FUxLPA"
                                class="btn btn-light btn-md active" role="button" aria-pressed="true">You Tube</a>
                        </div>
                    </div>
                </div>
                

            </div>)
    }
}


export default App;