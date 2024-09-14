import React from "react";
import "./Contact.css";
import Nav from "../../Navbar/Nav";
import Footers from "../../footer/Footers";

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
              <h3>
                <i class="fas fa-map-marker" style={{ color: "#fc3746" }}>
                  &nbsp;
                </i>
                ADDRESS : 2972 Westheimer Rd. Santa Ana, Illinois 85486

              </h3>
            </div>
            <hr style={{ color: "#ffffff", width: "100vw", margin: 0 }} />

            <div>
              <h3>
                <i class="fas fa-phone-volume" style={{ color: "#fc3746" }}></i>
                &nbsp;PHONE : (405) 555-0128
              </h3>
            </div>
            <hr style={{ color: "#ffffff", width: "100vw", margin: 0 }} />
            <div>
              <h3>
                <i class="fa fa-envelope" style={{ color: "#fc3746" }}></i>
                &nbsp;EMAIL : hello@example.com
              </h3>
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
      <Footers />
    </div>
  );
}

export default Contact;
