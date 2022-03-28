import { Component } from "react";

class Resume extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Resume</h2>
                <h3>Diplomacy Lab - U.S. Department of State</h3>
                <ul>
                    <li>Created a report to assist Operations Center in identifying misinformation to ensure accurate, timely reportage.</li>
                    <li>Applied techniques adopted to a machine learning driven web app to expedite information processing.</li>
                    <li>Consulted with members of Operations Center to provide high-quality user experience and accurate deliverables.
                    </li>
                </ul>
            </div>
        )
    }
}

export default Resume