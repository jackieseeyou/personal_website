import data from "../../data/index.json";
export default function MyPortfolio() {
    return(
        <section className="portfolio--section" id="myProjects">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">Projects</h2>
                </div>
                <div>
                <a
                    href="https://github.com/"
                    className="navbar--content"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 33 33"
                        fill="none"
                    >
                        <path
                            d="M16.5 2.75C9.543 2.75 4 8.293 4 15.25C4 20.728 7.673 25.301 12.61 26.84C13.159 26.946 13.352 26.61 13.352 26.321V24.234C9.61 24.971 8.883 22.676 8.883 22.676C8.411 21.371 7.733 21.022 7.733 21.022C6.7 20.397 7.812 20.415 7.812 20.415C8.949 20.491 9.555 21.573 9.555 21.573C10.573 23.317 12.244 22.797 12.868 22.509C12.972 21.799 13.252 21.354 13.56 21.111C10.693 20.875 7.674 19.664 7.674 14.607C7.674 13.146 8.186 11.999 9.033 11.127C8.905 10.863 8.489 9.621 9.128 8.123C9.128 8.123 10.188 7.831 13.352 10.07C14.354 9.776 15.438 9.639 16.5 9.634C17.562 9.639 18.646 9.776 19.648 10.07C22.812 7.831 23.872 8.123 23.872 8.123C24.511 9.621 24.095 10.863 23.967 11.127C24.814 11.999 25.326 13.146 25.326 14.607C25.326 19.681 22.295 20.868 19.417 21.094C19.833 21.406 20.222 22.065 20.222 23.093V26.321C20.222 26.61 20.413 26.946 20.963 26.84C25.895 25.299 29.565 20.729 29.565 15.25C29.565 8.293 24.022 2.75 16.5 2.75Z"
                            fill="#EBEBEB"
                        />
                    </svg>
                </a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                            <ul className="portfolio--tech-stack">
                                {item.stack.map((tech, idx) => (
                                    <li key={idx} className="portfolio--tech-item">{tech}</li>
                                ))}
                            </ul>

                            <p className="text-sm portfolio--link">
                                
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                                >
                                <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                </svg>
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

