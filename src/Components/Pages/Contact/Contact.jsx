import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_p1">
        <div className="contact_p1_index">
          <p>lets talk</p>
          <h1>contact us</h1>
        </div>
      </div>
      <div className="contact_input">
        <div className="contact_input_p1">
          <h1>GET IN TOUCH</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ex
            recusandae corporis esse repudiandae magni voluptatem consectetur
            veritatis dolor iusto!
          </p>
          <div className="cantact_input_p1_index">
            <div>
              <h3>address</h3>
            </div>
            <div>
              <h3>phone</h3>
            </div>
            <div>
              <h3>email</h3>
            </div>
          </div>
        </div>

        <form action="" className="contact_input_p2">
          <div className="contact_input_p2_index">
            <label>Name</label>
            <div className="aval">
              <input type="text" placeholder="first name" />
              <input type="email" placeholder="last name" />
            </div>
            <label>Email</label>
            <input type="text" />
            <label> Message</label>
            <input type="text"  className="message"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
