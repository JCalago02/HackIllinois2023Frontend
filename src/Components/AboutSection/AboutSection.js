import "../../Components/AboutSection/AboutSection.css"

function AboutSection(props) {


    return (
        <div className="Grid-Container">
                <div className="Title">Our Purpose</div>
                <div className="Text">We want to revolutionize the way keyboard parts are bought and sold. The number of available vendors for keyboard parts is atrocious, and 
                we made it our goal to compile and display as many available listings from reliable vendors for keycaps and keyswitches as accurately and timely as possible</div>
                <div className="Text">This project was created for HackIllinois 2023. Over the course of 36 hours, our group of 4 computer science students worked together
                to bring this website to life.</div>
                <div className="Title">Our Catalyst</div>
                <div className="Title">Our Future</div>
                <div className="Text">We hope to keep this website running and to expand on its functionality. This is its earliest form, and there are plenty of ideas on what
                can be done to make it more visually appealing, user friendly, and useful for anyone looking to purchase a mechanical keyboard.</div>
        </div>
    )
}



export default AboutSection;