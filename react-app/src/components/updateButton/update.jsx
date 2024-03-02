import React, {useState, useEffect, Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import reportsServices from "../../services/reportsServices.js";
import updateIcon from "../../assets/updateIcon.png";
import './updateButton.css'
import Update from "./updateForm.jsx";

class UpdateReport extends Component {
        constructor(props) {
            super(props);
            this.state = { open: false }
            this.update = this.update.bind(this)
        }

    update() {
            this.setState(prevState => ({open: !prevState.open}))
    }

        render() {
            return (
                <div>
                    <button onClick={this.update} className="updateButton"><img className="Updateimg" src={updateIcon}/></button>
                    {this.state.open && <Update report={this.props.report} />}
                </div>
            )
        }
    }

    export default UpdateReport;
