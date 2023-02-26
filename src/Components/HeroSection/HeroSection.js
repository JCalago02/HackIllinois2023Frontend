import "../../Components/HeroSection/HeroSection.css"
function HeroSection(props) {
    const string = props.itemURL
    return (
        <div className="Hero-Container">
            <div className="Hero-Landing">
                <h1 className="Hero-Text">Revolutionize How You Shop.</h1>
            </div>

        </div>
    )
}

export default HeroSection;