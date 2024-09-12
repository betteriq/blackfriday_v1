import React from "react";
import "./Contact.css";
import Nav from "../../Navbar/Nav";

function Contact() {
  return (
    <div className="contact">
      <Nav />
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            accusantium ex, totam similique sit quos magni consequatur est optio
            unde dolores, voluptatum tempore. Facilis eligendi repellendus
            dolorem blanditiis, earum fugit harum unde error corporis voluptas
            eum nisi adipisci distinctio amet laudantium neque. Voluptas, animi
            quo. Et aut non illum temporibus?
          </p>
          <div className="cantact_input_p1_index">
            <div>
              <h3><i class='fas fa-map-marker'></i>
               ADDRESS</h3>
            </div>
            <hr style={{ color: "#ffffff", width: "100vw", margin: 0 }} />

            <div>
              <h3><i class='fas fa-phone-volume'></i>
  <section></section>              PHONE</h3>
            </div>
            <hr style={{ color: "#ffffff", width: "100vw", margin: 0 }} />

            <div>
              <h3>EMAIL</h3>
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
            <input type="text" className="message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
