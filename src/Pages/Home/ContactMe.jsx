export default function ContactMe() {
    return (
        <section id="contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Feel free to send me an email and we can get in touch!
                </p>
                <div className="social--icon">
                                <ul>
                                    <li>
                                        <a
                                            href="mailto:jackiesieu1@gmail.com"
                                            className="navbar--content"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="70"
                                                height="70"
                                                viewBox="0 0 33 33"
                                                fill="none"
                                            >
                                                <path
                                                    d="M4 9C4 7.34315 5.34315 6 7 6H26C27.6569 6 29 7.34315 29 9V24C29 25.6569 27.6569 27 26 27H7C5.34315 27 4 25.6569 4 24V9ZM7 8C6.44772 8 6 8.44772 6 9V9.51472L16.5 16.4853L27 9.51472V9C27 8.44772 26.5523 8 26 8H7ZM27 11.7197L16.8902 18.7071C16.6716 18.8522 16.3284 18.8522 16.1098 18.7071L6 11.7197V24C6 24.5523 6.44772 25 7 25H26C26.5523 25 27 24.5523 27 24V11.7197Z"
                                                    fill="#EBEBEB"
                                                />
                                            </svg>
                                            <p>jackiesieu1@gmail.com</p>
                                        </a>
                                    </li>

                                    
                                    <li>
                                    {/* <a
                                        href="https://www.linkedin.com/"
                                        className="navbar--content"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="70"
                                        height="70"
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                                            fill="#EBEBEB"
                                        />
                                        </svg>
                                        <p>linkedin</p>
                                    </a> */}
                                    </li>
                                </ul>
        </div>
            </div>
            {/* <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required/>
                    </label>

                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required/>
                    </label>

                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required/>
                    </label>

                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required/>
                    </label>
                </div>


                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..."/>
                </label>

                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form> */}
            
        </section>
    )
}