import { Component } from "react";

class Projects extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <h3>PurdueCircle</h3>
                <ul>
                    <li>Created a social media web application that integrates features from popular platforms like
                        Instagram and Reddit</li>
                    <li>Led a team of four classmates following Scrum/Agile methodology to ensure efficient and timely
                        performance.</li>
                    <li>Built and deployed application using React Native, MySQL, AWS Cloud, and Spring Boot for back-end.
                    </li>
                </ul>
                <h3>Cheerleading Competition Score Scraper</h3>
                <ul>
                    <li>
                        Wrote a Python script using Beautiful Soup to parse HTML from competition result website.
                    </li>
                    <li>
                        Collected relevant information from parsed HTML and wrote it to a CSV file.
                    </li>
                </ul>
            </div>
        );
    }
}

export default Projects