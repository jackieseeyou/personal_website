import data from "../../data/index.json";

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills"> 
            <div className="portfolio--container">
                <p className="section--title">Technical Proficiencies</p>
                <h2 className="skills--section--heading">My Skills</h2>
            </div>


            <div className="skills--section--container">
                <div className="skills--section--img--container">
                    {data?.skills?.map((item, index) => (
                        <div key={index} className="skills--section--img">
                            <img src={item.src} alt={item.name}/>
                            <div className="skills--img--name">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}