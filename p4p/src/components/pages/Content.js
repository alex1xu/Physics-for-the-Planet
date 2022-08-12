import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export function ProjectDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">DIY Wind Turbine</h1>
          <h2 className="italics__text">By Rick Xu</h2>
          <div className="projects-tags">
            <div className="projects-tags-captions">Medium</div>
            <div className="projects-tags-captions">1 hour</div>
            <div className="project-cost-text projects-tags-captions">$40</div>
          </div>
          <h2 className="paragraph__text">
            Ever wanted to harness the power of the wind? After all, it’s free!
            In this project, you’ll learn how to build your own wind turbine.
            Then, you’ll experiment with modifying parts of your turbine to make
            it as effective as possible. Although your turbine will be made out
            of cardboard and cork, the idea of using the force of wind to turn a
            generator shaft and produce electricity is the same one used by real
            wind turbines.
            <br />
            <br />
          </h2>
          <h2 className="paragraph__text">
            Wind turbines capture some of the immense energy from the Earth’s
            winds to generate electricity and power our homes. Because Earth’s
            wind will never run out, it is a renewable resource and makes wind
            turbine technology a crucial part of replacing
            climate-change-inducing fossil fuels as humanity’s main energy
            source.
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/Wind_Turbine_Step_6.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The final result!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">1 Electric fan or Hair Blower</li>
            <li className="supplies-text">1 1.5 V DC Motor</li>
            <li className="supplies-text">1 Voltmeter</li>
            <li className="supplies-text">1 10-Ohm Resistor</li>
            <li className="supplies-text">4 Alligator Clips</li>
            <li className="supplies-text">
              1 Cork or Cork-Sized Piece of Styrofoam
            </li>
            <li className="supplies-text">6 Paper Clips</li>
            <li className="supplies-text">1 Paper-Sized Cardboard</li>
            <li className="supplies-text">1 Plastic Cup</li>
            <li className="supplies-text">Super Glue</li>
            <li className="supplies-text">Hot Glue Gun</li>
            <li className="supplies-text">Tape</li>
            <li className="supplies-text">Scissors</li>
            <li className="supplies-text">Ruler</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/Wind_Turbine_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Take 6 paper clips and bend the outer wire so that it sticks out.
          Then, make the outer wire wavy so that it can grip the cork/styrofoam
          better.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Cut 3 rectangles 1 inch x 1.5 inch, then tape the paper clips to the
          rectangles.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_2.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Stick the paper clips around the body of the cork/styrofoam at equally
          spaced intervals and angle each blade at 45 degrees. Then, place a dab
          of super glue on your motor shaft and stick the cork/styrofoam onto
          the motor shaft. Make sure it’s centered!
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_3.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Cut a square piece of cardboard slightly larger than the cup’s lip,
          then hot glue the cardboard to the cup and then hot glue your turbine
          on top of that.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_4.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Connect your wires like the image below. There should be two alligator
          wires from the turbine to the resistor, and two alligator wires from
          the multimeter probes to the resistor. Note that the alligator wires
          from the multimeter should be between the wires from the turbine.
          Although it’s not necessary to match colors, it’s easier to keep track
          of your circuit this way.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_5.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 6</h1>
        <h2 className="paragraph__text  mission__text">
          Set your multimeter to DC A and the smallest amperage (current)
          possible. On the multimeter shown here, it is 5m Amps, which means 5
          milliAmps or 0.005 Amps. We are setting it to the smallest reading
          possible because motors like the one used here generate very little
          voltage. Then, place your turbine in front of your running fan/hair
          blower and watch the reading go up!
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind_Turbine_Step_6.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          If your voltmeter shows a number that isn’t zero, congratulations!
          That means your turbine has created an electric current, which means
          your generator can power electronics like lights or other motors. If
          your number is negative, flip the wires on your voltmeter.
        </h2>
        <h2 className="paragraph__text mission__text">
          Now, experiment with the number, shape, and angle of blades to see
          which combination creates the most current! You might want to take
          inspiration from real turbines: notice the number, shape, and angle of
          their blades.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            Why do you think real wind turbines have three blades?
          </li>
          <li className="supplies-text">Why do we need wind turbines?</li>
          <li className="supplies-text">
            What can we use the electric current to do?
          </li>
          <li className="supplies-text">
            Can you think of any potential problems with using wind turbines?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          How can wind generate electricity? It all starts when the wind exerts
          a <b>force</b> on the blades. Forces cause objects to move and are
          used on an object by another object. Because the blades are angled,
          when the wind pushes on the blades the blades will move sideways,
          rotating the shaft of the <b>motor</b>.
        </h2>
        <h2 className="paragraph__text mission__text science__text">
          We are actually using a motor in reverse. Whereas a motor converts
          electrical energy to mechanical energy, we are converting the shaft’s
          rotation (mechanical energy) to a voltmeter reading (electrical
          energy). In real-world applications, we would use a <b>generator</b>{" "}
          to convert mechanical to electrical energy.
        </h2>
        <h2 className="paragraph__text mission__text science__text">
          Within the motor are magnets which create a <b>magnetic field</b>. The
          shaft that is being turned has loops of copper wire on the end inside
          the motor, and when the copper loops rotate within the magnetic field
          they cause a <b>current</b> of <b>electricity</b> (A current is a flow
          of electrons, think of it like a river). This is because the amount of
          magnetic field that is present within the loop changes as the loop
          rotates. The electricity will flow through the loops, out of the
          motor, and across the voltmeter which will show a reading because of
          this electric flow.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wind Turbine Diagram.png"
        />
      </div>
    </div>
  );
}

export function ProjectTurbine() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  //UN COMMENT THESE AND USE THEM
  //<i className="fa-regular fa-circle easy-tag projects-tags-captions">Easy</i>
  //<i className="fa-regular fa-circle-half-stroke medium-tag projects-tags-captions">Medium</i>
  //<i className="fa-regular fa-circle hard-tag projects-tags-captions">Hard</i>

  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">DIY Wind Turbine</h1>
          <h2 className="italics__text">By Rick</h2>
          <div className="projects-tags">
            <i className="fa-regular fa-circle hard-tag projects-tags-captions">
              Hard
            </i>
            <i className="fa-regular fa-clock black-outline projects-tags-captions">
              5 hours
            </i>
            <div className="project-cost-text projects-tags-captions">$40</div>
          </div>
          <h2 className="paragraph__text">
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
          </h2>
        </div>
        <div>
          <img
            className="project__full__image"
            alt="cover"
            src="/founder2.jpeg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Picture: cover photo caption
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              <a href="https://www.amazon.com/s?k=mechanical+drawing+pen&ref=nb_sb_noss">
                drugs
              </a>
            </li>
            <li className="supplies-text">Item 2</li>
            <li className="supplies-text">Item 3</li>
            <li className="supplies-text">Item 4</li>
          </ol>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <img className="project__full__image" alt="cover" src="/wide3.jpeg" />
      </div>
      <div className="mission__div">
        {/* ajksdhflkajhsdlkjfh */}
        <h1 className="heading__text mission__text">Step X+2</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X+1</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
        <img className="project__full__image" alt="cover" src="/wide6.jpeg" />
      </div>
      <div className="mission__div" key="conclusion">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
      </div>
    </div>
  );
}

export function BlogDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="mission__div blogs-main-div">
        <img className="project__full__image" alt="cover" src="/wide3.jpeg" />
        <h2 className="italics__text" style={{ margin: "1rem" }}>
          Picture: Caption
        </h2>
        <h1 className="blog__explain__text">Blog Title</h1>
        <h2
          className=" italics__text blog__author__text"
          style={{ marginBottom: "2rem" }}
        >
          By Author
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          The Glasswing is a tiny butterfly with invisible wings that can carry
          40 times its own weight. Over the last fourteen months, I’ve been
          inspired by the capacity of individuals to lift others: an association
          of women professionals mentoring girls through the same program that
          paid for their own educations; a network of low-income families
          lifting themselves out of poverty by supporting and advising each
          other.
        </h2>
        <img
          className="project__full__image"
          alt="STICK AN IMAGE HERE IF YOU WANT OR ELSE GET RID OF IT"
          src="/wide6.jpeg"
        />
        <h2 className="italics__text" style={{ margin: "1rem" }}>
          Picture: Caption
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
      </div>
    </div>
  );
}
