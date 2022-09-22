import React, { useLayoutEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

export function ProjectDIYWindTurbine() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">DIY Wind Turbine</h1>
          <h2 className="italics__text">By Rick Xu</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Medium</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">1 hour</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$25</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
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
          <h2 className="projects__intro__paragraph__text">
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
            <li className="supplies-text">1 Electric fan or hair blower</li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.amazon.com/Topoox-15000-16500RPM-Electric-Science-Experiments/dp/B073Q2Y3RC/ref=sr_1_6?"
              >
                1 1.5 V DC Motor
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.amazon.com/Etekcity-Multimeter-MSR-R500-Electronic-Multimeters/dp/B01N9QW620/ref=sr_1_7?"
              >
                1 Voltmeter
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.amazon.com/Elegoo-Values-Resistor-Assortment-Compliant/dp/B072BL2VX1/ref=sr_1_4?"
              >
                1 10-Ohm Resistor
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.amazon.com/WGGE-WG-026-Pieces-Colors-Alligator/dp/B06XX25HFX/ref=sr_1_5?"
              >
                4 Alligator Clips
              </a>
            </li>
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

export function ProjectPowerofWater() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">The Power of Water</h1>
          <h2 className="italics__text">By Matthew Tsui</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Easy</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">1 hour</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$20</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
            Have you ever wished to harness the power of water? Water is a
            renewable resource that’s vital to human survival. Who knew it would
            be so useful for issues other than hydration? In this project, you
            will learn how to build a simple water turbine. You then modify the
            turbine, looking to increase its efficiency during further
            explorations.
            <br />
            <br />
            Climate change is one of the key issues that threaten future
            generations. The burning of fossil fuels is one of the primary
            accelerators for climate change. Specifically, it can produce soot,
            smog, and acid rain, and greatly increases carbon emissions.
            Therefore, to reduce our carbon footprint, we look toward renewable
            and cleaner energy sources. Water, in the form of hydro energy, is
            one such renewable energy source. Energy can be harnessed in dams or
            directly from rivers.
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/The_Power_of_Water_Step_9.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The final result!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">Styrofoam</li>
            <li className="supplies-text">6 Spoons</li>
            <li className="supplies-text">2 Plastic Cups</li>
            <li className="supplies-text">8 Paper Clips</li>
            <li className="supplies-text">1 Wooden Dowel</li>
            <li className="supplies-text">String/Fishing Line</li>
            <li className="supplies-text">1 Small Object of Your Choice</li>
            <li className="supplies-text">Sink/Water Source</li>
            <li className="supplies-text">Hot Glue Gun</li>
            <li className="supplies-text">Scissors</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/The_Power_of_Water_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Take 2 paper clips and bend the outer wire so that it sticks out.
          Then, flip it such that each end has a loop.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Power_of_Water_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Cut the ends off of each of the six spoons. Then, proceed and hot glue
          a paper clip to each of the spoons.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Power_of_Water_Step_2.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Cut each of the paper clips such that the ends are split. This will
          allow for the spoons to adhere to our motor.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Hot glue the two original paper clips to a plastic cup, each.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Cut a piece of styrofoam roughly 3x3 inches. Then, proceed to pierce
          the middle of the styrofoam with your wooden dowel.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 6</h1>
        <h2 className="paragraph__text  mission__text">
          Take each of your plastic spoons and pierce the styrofoam in the
          center of the dowel such that they are evenly spaced. Additionally,
          ensure that the inside of each spoon faces the same direction.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Power_of_Water_Step_6.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 7</h1>
        <h2 className="paragraph__text  mission__text">
          Tie string around a light object of your choice. Then, tie the other
          end of the string to the end of your dowel.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Power_of_Water_Step_7.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 8</h1>
        <h2 className="paragraph__text  mission__text">
          Assemble your water turbine by placing the dowel in between the two
          red cubs (put it through the paper clips).
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 9</h1>
        <h2 className="paragraph__text  mission__text">
          Place it under the faucet. Observe as the motor turns your object is
          lifted.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Power_of_Water_Step_9.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          If your weight starts moving up, congrats! Your water turbine has
          successfully harnessed energy from the faucet to raise the weight!
          <br />
          <br />
          Now, experiment with the number, shape, and angle of blades to see
          which combination raises the weight the fastest! You can look at real
          water mills for inspiration. For further exploration, try hooking up
          the turbine with a generator and a motor. See the power of wind for
          more explanation.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            In real life, what other machine would be needed to generate
            electricity?
          </li>
          <li className="supplies-text">
            What type of energy conversion does the water turbine carry out?
          </li>
          <li className="supplies-text">
            What aspects of a specific river/water source make it optimal for a
            water turbine location?
          </li>
          <li className="supplies-text">
            How else can we harness energy from water?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          How can water generate the energy needed to raise the object? The
          rushing water has both mechanical and potential energy. As gravity
          pulls it down a stream/onto our turbine, it exerts a force onto our
          turbine’s blades/spoons and turns the motor. Then, as the motor turns,
          it spins the string and raises the object.
          <br />
          <br />
          This process reverses the typical energy conversion of a motor.
          Specifically, instead of converting electricity into mechanical
          energy, we are using the mechanical energy harnessed by the spinning
          turbine and converting it into potential energy noted by the raised
          object.
        </h2>
      </div>
    </div>
  );
}

export function ProjectWaterCycle() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">The Water Cycle</h1>
          <h2 className="italics__text">By Neal Sodhi</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Easy</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">2 hours</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$5</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
            What would you do if you were stranded on an island and didn’t have
            any clean drinking water? You could purify some of the dirty water
            you can find on the island! We can use the water cycle to purify
            dirty water. Because the sun’s energy can be accessed from nearly
            anywhere, this process makes for an easy, low-cost way to clean
            water.
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/Water_Cycle_Step_5.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The setup!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              1 Small Glass or Plastic Container
            </li>
            <li className="supplies-text">
              1 Large Glass or Plastic Container
            </li>
            <li className="supplies-text">1 Food Coloring Dye</li>
            <li className="supplies-text">1 Cup of Water</li>
            <li className="supplies-text">1 Rubber Band</li>
            <li className="supplies-text">1 Small Rock</li>
            <li className="supplies-text">Plastic Wrap</li>
            <li className="supplies-text">Sunlight</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/Water_Cycle_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Fill the large container with water so it is approximately 1 inch
          deep. Then add a few drops of food coloring to the water.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Place the small container inside of the large container in the center
          of the large container. Make sure no water gets inside the small
          container. If the small container is floating you can add a paper
          weight to the container so that it does not move.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Step_2.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Loosely place the plastic wrap over the large container; make sure
          there is some plastic wrap falling over the sides of the container.
          Put a rubber band around the container so that it holds the plastic
          wrap in place.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Step_3.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Place the rock in the center of the plastic wrap so that it creates a
          dip in the plastic wrap over where the small container is.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Step_4.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Place the device in the sun and periodically adjust its location so
          that it remains in the sun.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Step_5.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          After a while, you should begin to see clean water collecting in the
          small container. This means that the heat has evaporated the colored
          water, causing it to collect and condense on the plastic wrap, where
          it then drips back down into the small container.
          <br />
          <br />
          Now you can leave it out for even longer and wait for even more clean
          water to collect in the container.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Result.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            Why does the device need to be placed in the sun to work?
          </li>
          <li className="supplies-text">
            Would this process have worked for different colored water too?
          </li>
          <li className="supplies-text">
            Why is it important to have access to clean water?
          </li>
          <li className="supplies-text">
            Why don't the contaminants end up in the clean water container?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          How can water generate the energy needed to raise the object? The
          rushing water has both mechanical and potential energy. As gravity
          pulls it down a stream/onto our turbine, it exerts a force onto our
          turbine’s blades/spoons and turns the motor. Then, as the motor turns,
          it spins the string and raises the object.
          <br />
          <br />
          This process reverses the typical energy conversion of a motor.
          Specifically, instead of converting electricity into mechanical
          energy, we are using the mechanical energy harnessed by the spinning
          turbine and converting it into potential energy noted by the raised
          object.
        </h2>
      </div>
    </div>
  );
}

export function ProjectSolarCar() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">Solar Powered Car</h1>
          <h2 className="italics__text">By Sooah Kwak</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Hard</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">4 hours</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$40</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
            In one hour 488 quintillion joules of energy from the sun enters the
            earth’s atmosphere; it is more than enough to meet the human’s
            yearly energy usage. How do we harness such a vast amount of power?
            Solar Panels. This project will show one example of how solar power
            could be used. You will build a car powered only by the solar panel;
            this car will not use any batteries or other expendable forms of
            energy.
            <br />
            <br />
            Everyday we use nonrenewable sources of energy such as fossil fuels;
            this usage leads to the acceleration of climate change in many ways.
            They emit greenhouse gasses that traps the heat in the atmosphere
            therefore, causing the planet to become warmer. This leads to
            drastic changes in the ecosystems through the butterfly effect.
            Solar energy is renewable as it is from the sun and it has a cleaner
            carbon footprint.
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/Solar_Car_Step_20.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The finished solar car!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.solarmade.com/products/jss-p"
              >
                1 Solar Panel
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.solarmade.com/products/alligator-clips"
              >
                2 Alligator Clips
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.solarmade.com/products/jss-m"
              >
                1 Motor
              </a>
            </li>
            <li className="supplies-text">
              <a
                className="supplies-text"
                href="https://www.solarmade.com/products/gears-bag"
              >
                Gears
              </a>
            </li>
            <li className="supplies-text">1 Metal Clothes Hanger</li>
            <li className="supplies-text">Paper Clips</li>
            <li className="supplies-text">Parchment Paper</li>
            <li className="supplies-text">Plastic Straws</li>
            <li className="supplies-text">4 CD Disks</li>
            <li className="supplies-text">Tape</li>
            <li className="supplies-text">Cardboard</li>
            <li className="supplies-text">Hot Glue Gun</li>
            <li className="supplies-text">Crimp Tool</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}></div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Cut out 2 wires from the clothes hanger to act as axles.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Take one of the axles and insert a gear (do not glue yet).
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Creating the wheels: Take 4 DVDs and glue a gear to the “inside” part
          of the DVDs (the side facing the chassis).
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_3.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Take 1 wheel and place it on the floor; take the axle and put it
          through and hot glue them together.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_4.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Flip the axle and hot glue the topside of the wheel.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_5.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 6</h1>
        <h2 className="paragraph__text  mission__text">
          Repeat for all wheels until you have 2 axles with 2 wheels each.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_6.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 7</h1>
        <h2 className="paragraph__text  mission__text">
          Creating the “engine”: Take the alligator clips and slide their covers
          off by having them grip something and then pull the covers off.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_7.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 8</h1>
        <h2 className="paragraph__text  mission__text">
          Take the covers of the alligator clips (colored plastic) and slide
          them over the wires of the motor.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_8.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 9</h1>
        <h2 className="paragraph__text  mission__text">
          Strip the wires with a scissor
          (https://www.bobvila.com/articles/how-to-strip-wire/).
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 10</h1>
        <h2 className="paragraph__text  mission__text">
          For each wire, place it between the ridges then use a crimp tool to
          squeeze the ridges tightly so that you cannot pull the wire out.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 11</h1>
        <h2 className="paragraph__text  mission__text">
          Slide the covers back over the clips.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 12</h1>
        <h2 className="paragraph__text  mission__text">
          Take the solar panel and flip it over; attach the alligator clips to
          each conductor.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_12.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 13</h1>
        <h2 className="paragraph__text  mission__text">
          Creating the chassis: cut out a large rectangular piece of cardboard.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 14</h1>
        <h2 className="paragraph__text  mission__text">
          Take one of the axles and put it on top of the cardboard; take 2 paper
          clips, unbend them; and cut into two U pieces; then puncture through
          the cardboard with these clips to hold the axle in place; at the
          bottom of the cardboard, bend the metal wires into Ω shape. This will
          be your bearing. The strikethrough is the cardboard; you want the axle
          to go through the topside.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 15</h1>
        <h2 className="paragraph__text  mission__text">
          Hot glue gun the bent paper clips to the cardboard on the bottom side.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_15.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 16</h1>
        <h2 className="paragraph__text  mission__text">
          Repeat for another axle.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 17</h1>
        <h2 className="paragraph__text  mission__text">
          Shift the gear accordingly so that it’s close to the cardboard and
          then glue it. Attach the motor and small pinion to the gear. Hot glue
          gun around the motor to make sure it sticks.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_17.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 18</h1>
        <h2 className="paragraph__text  mission__text">
          Take another paper clip and bend it around the motor. Punch in the
          holes and insert the wires (this is similar to what you did for the
          axles). Bend the wires bottom side and glue it.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_18.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 19</h1>
        <h2 className="paragraph__text  mission__text">
          Take 2 pieces of cardboard; make a ㄷ shape with both of them. They
          will be your support for the solar panel; glue them to the chassis.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_19.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 20</h1>
        <h2 className="paragraph__text  mission__text">
          Either glue or tape the solar panel to the top of these supports.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_20.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          If the wheels start spinning when the panel is exposed to the sun then
          you successfully harnessed the solar energy to make a functional car!
          <br />
          <br />
          You could change the gear ratios between the motor and axle to modify
          the “specialization” of your car (distance vs speed). You could change
          the radii of the wheels to manipulate the torque from the floor on the
          wheels. This could help with rough surfaces. You could change the
          style of bearings to reduce the friction on the rotation of the axle.
          In other words, make it spin more smoothly. One way could be fidget
          spinners.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            How could we efficiently use the solar panel in a practical manner?
          </li>
          <li className="supplies-text">Are solar cars practical?</li>
          <li className="supplies-text">
            What else could solar energy be used for?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          Each atom has a nucleus made up of neutrons and protons; there are
          multiple rings around the nucleus containing the electrons that are
          spinning around the nucleus.
          <br />
          <br />
          The <b>solar cells</b> (or photovoltaic cells aka PV cells) are thin
          black layers you can see inside the solar panels; each cell has
          multiple layers of silicon and other semiconductor materials. The top
          layer (N side) is negatively charged with more electrons by adding
          special elements such as phosphorus. The bottom (P side) is dosed with
          boron elements for positive charge.
          <br />
          <br />
          This difference in charges leads to the creation of an electric field
          between the layers.
          <br />
          <br />
          <b>Electricity</b> is a flow of electrons. As the sunlight hits the{" "}
          <b>solar cells</b>, the electrons become “energized” and break free of
          their atoms. These electrons tend to move around randomly; however,
          the electric field causes the electrons to move towards the N side.
          This leads to a creation of a circuit. If we connect these layers with
          a conductive wire then the electrons would be flowing from N side to P
          side continuously. Now we have a circuit of electricity powered by the
          sunlight.
          <br />
          <br />
          Connecting this circuit to a <b>motor</b> will provide the electricity
          to the motor. Inside the motor, there are stationary magnets that
          create a <b>magnetic field</b> (North and South ends). Between these
          magnets is a rotor which is electromagnetic.
          <br />
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Diagram.png"
        />
        <h2 className="paragraph__text  mission__text science__text">
          Electromagnetic material is a dormant magnet that gets activated by
          electricity. When the electricity activates the rotor it creates a
          magnet that is repulsive to the current magnets causing the rotation.
          The North and South ends are determined by the electron flow.
          <br />
          <br />
          Every half turn of the rotor, the special piece called commutator
          reverses the electron flow to change the ends of the rotor magnet (N
          and S) so that it is always repulsive to the stationary magnets to
          keep up the rotations.
          <br />
          <br />
          This rotation is translated to the axle through the gears by applying
          the <b>torque</b> to the gear on the axle. The torque is a rotational
          force so applying torque means applying force that causes rotation.
          The friction between the ground and the wheel also applies torque to
          the wheels causing the rotation.
        </h2>
      </div>
    </div>
  );
}

export function ProjectWKOWATME() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">
            What Kind of Windows are the Most Efficient?
          </h1>
          <h2 className="italics__text">By Samuel Lurvey</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Easy</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">3 hours</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$10</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
            Ever wondered why houses need to be heated or cooled? In this
            project, you’ll use windows in cardboard boxes to learn about heat
            transfer and what types of windows are most effective at keeping
            heat inside.
            <br />
            <br />
            Conserving energy is very important, especially since many houses
            are heated with fossil fuels such as natural gas, which contribute
            to climate change. In cold areas, houses should be built to keep
            heat inside to avoid having to repeatedly heat them.
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/Wkowatms_Step_8.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The setup!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              <a
                href="https://www.amazon.com/dp/B07GNMKYCZ"
                className="supplies-text"
              >
                4 Cheap Thermometers
              </a>
            </li>
            <li className="supplies-text">4 Identical Small Cardboard Boxes</li>
            <li className="supplies-text">4 Water Bottles</li>
            <li className="supplies-text">1 small funnel</li>
            <li className="supplies-text">1 pot</li>
            <li className="supplies-text">Thin Curtain Material</li>
            <li className="supplies-text">Thick Curtain Material</li>
            <li className="supplies-text">Plastic Wrap</li>
            <li className="supplies-text">Ruler</li>
            <li className="supplies-text">Scissors</li>
            <li className="supplies-text">Tape</li>
            <li className="supplies-text">Sunlight</li>
            <li className="supplies-text">Access to Stovetop</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/Wkowatms_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Cut a rectangular hole into the same side of three of the cardboard
          boxes. These holes will serve as windows. Use a ruler to make sure
          that each window is the same size. Leave one of the boxes without a
          hole - it will model a room without windows.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Using the plastic wrap, cover the inside of each hole completely. Use
          the tape to secure the plastic wrap over the holes on the inside of
          the boxes.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_2.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Cut a “Curtain” from each of the two types of material that are big
          enough to completely cover the holes. Take one of the boxes with a
          hole, and secure the thinner curtain material over the hole in the
          same way that you did with the plastic wrap.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_3.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Take another box with a hole, and secure the thicker curtain material
          over the inside of the hole in the same way that you did with the
          plastic wrap. You should now have four different boxes: one without a
          hole, one with a hole but no curtain, one with a hole and a thin
          curtain, and one with a hole and a thick curtain.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_4.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Pour the water from the water bottles into a pot or whatever you are
          using to heat up the water. Have a parent or instructor heat the water
          until it’s boiling or is very hot. If the water is boiling, wait till
          it cools down slightly so it won’t scald you if it spills on you.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_5.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 6</h1>
        <h2 className="paragraph__text  mission__text">
          With your parent or instructor’s help, pour the hot water back into
          each of the bottles using the funnel. It’s ok if the bottles aren’t
          totally full, as some of the water may have evaporated. Try to make
          sure each bottle has the same amount of water.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_6.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 7</h1>
        <h2 className="paragraph__text  mission__text">
          Using the thermometers, record the temperature in each bottle and then
          write the temperatures down on a piece of paper or in a notebook.
          Remove the thermometers from the bottles.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_7.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 8</h1>
        <h2 className="paragraph__text  mission__text">
          Put a bottle into each box and close the boxes with tape. If there are
          any other holes in the boxes, close them with tape too. Leave the
          boxes somewhere where it isn’t too hot. If you leave them outside,
          make sure that it’s either evening or that they’re in the shade.
          Remember that you don’t want to expose the boxes to too much heat,
          since you’re trying to make them lose heat.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_8.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 9</h1>
        <h2 className="paragraph__text  mission__text">
          Wait three hours, then come back and open the boxes. Using the
          thermometers, record the temperature in each bottle once again and
          then write the temperatures down in the same place. Remove the
          thermometers from the bottles.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_9.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 10</h1>
        <h2 className="paragraph__text  mission__text">
          Look at the new temperature values as compared to the old ones. What
          do you notice about which bottles stayed more warm?
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Wkowatms_Step_10.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          The original temperatures of all four bottles should be roughly the
          same, since they were all filled with water that was the same
          temperature. If the water bottle in the box without a window was the
          hottest after three hours, congratulations! This is the expected
          outcome, since any type of window allows heat to escape. The second
          hottest should be the box with a thick curtain, followed by the box
          with a thin curtain and the one with a window but no curtain, which
          should have lost the most heat.
          <br />
          <br />
          Now you can experiment with different materials and window shapes and
          sizes to see how you can keep the most heat in the box! You might want
          to take inspiration from windows in your own house, or try to add more
          than one layer of curtains.You can even add more than one window to
          each box.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Water_Cycle_Result.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            Why do you think that windows allow heat to escape?
          </li>
          <li className="supplies-text">
            Do you think that the shape of a window matters?
          </li>
          <li className="supplies-text">
            Why is it important to keep heat inside of a house?
          </li>
          <li className="supplies-text">
            Will a bigger window allow more heat to escape, or a smaller one?
            What if a box had multiple windows?
          </li>
          <li className="supplies-text">
            In this experiment, you used water bottles to heat up the boxes.
            What does your family use to heat up your house? Why?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          How does heat travel? The main way is through conduction, when heat
          moves from a warmer area to a cooler one. If you’ve ever wondered why
          a hot drink will slowly become colder on a cold day, it’s because of
          conduction. A material known as an insulator is something that blocks
          the flow of heat, preventing conduction from occurring as quickly.
          Anything can be an insulator - from a book made of paper to a window
          made of glass. However, thicker materials such as wool are generally
          better insulators. Plastic wrap, since it’s so thin, isn’t a very
          effective insulator, so a cardboard box with a window in it made of
          plastic wrap will lose heat faster than one without.
          <br />
          <br />
          Believe it or not, the best insulator is actually a vacuum, or a space
          where there’s nothing at all, not even air! Because of that, the best
          kind of window would be one with two layers, and a vacuum in between
          them. This technique is used in insulated food containers and water
          bottles. Using this method, very little heat is lost to conduction.
          However, creating a vacuum is very hard, so it isn’t possible to make
          a window like that in a cardboard box.
          <br />
          <br />
          Scientists have estimated that homeowners can reduce their home’s
          energy bill by up to a quarter with insulated curtains to better keep
          heat inside, and even the U.S. Department of Energy says that
          homeowners should use insulated curtains to save money. Since heating
          up houses takes energy, it’s important to keep our homes as warm as
          possible using the principles of insulation and conduction.
        </h2>
      </div>
    </div>
  );
}

export function ProjectGreenhouseEffect() {
  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">
            Replicate the Greenhouse Effect
          </h1>
          <h2 className="italics__text">By Caden Li</h2>
          <div className="projects-tags">
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Easy</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">1 hour</div>
            <i class="fa-solid fa-coins fa-lg"></i>
            <div className="project-cost-text projects-tags-captions">$10</div>
          </div>
          <h2 className="projects__intro__paragraph__text">
            Have you ever thought about why global warming even happens? What
            does the carbon dioxide from cars, and planes even do? And why is
            that so bad to the earth? In this simple project, you get to create
            an environment to see how CO2 affects the earth.
            <br />
            <br />
            Climate change is a huge issue that becomes exponentially worse as
            time goes on. The burning of fossil fuels is a big part of speeding
            up this process, and it is important to learn why. Fossil fuels
            often produce Carbon Dioxide(CO2) as a leftover product, which can
            increase the greenhouse effects of the earth. This causes global
            warming, the melting of ice caps, increased natural disasters, and
            disrupted environments due to rising temperatures. Learning what
            excess carbon dioxide does to our planet is important as it brings
            awareness to how the use of fossil fuels is hurting us, and the need
            there is to stop it
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/The_Greenhouse_Effect_Step_5.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            The setup!
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              <a
                href="https://www.amazon.com/dp/B07TFJYM5H"
                className="supplies-text"
              >
                2 Thermometers
              </a>
            </li>
            <li className="supplies-text">2 Identical Empty Water Bottles</li>
            <li className="supplies-text">2-4 Seltzer Tablets (CO2)</li>
            <li className="supplies-text">1 Tabletop Lamp (100 Watts)</li>
            <li className="supplies-text">Scissors</li>
            <li className="supplies-text">Duct Tape</li>
            <li className="supplies-text">Timer</li>
            <li className="supplies-text">Sink/Water Source</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/The_Greenhouse_Effect_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Partially fill both bottles with the same amount of water
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Greenhouse_Effect_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Cover the top of one bottle with duct tape and poke a small hole
          through the top with scissors (have an adult help you). Then, put the
          thermometer through the hole.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Greenhouse_Effect_Step_2.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 3</h1>
        <h2 className="paragraph__text  mission__text">
          Drop the seltzer tablets in the second bottle. Cover immediately using
          one of the options above to secure the second thermometer in the top
          of the second bottle.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Greenhouse_Effect_Step_3.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 4</h1>
        <h2 className="paragraph__text  mission__text">
          Record the temperature of each bottle immediately. Measuring the
          temperature immediately after adding the seltzer tables eliminates the
          possibility that adding seltzer adds heat somehow.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Greenhouse_Effect_Step_4.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 5</h1>
        <h2 className="paragraph__text  mission__text">
          Turn the high-wattage lamp on, making sure that the light is shining
          directly and evenly on both bottles
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/The_Greenhouse_Effect_Step_5.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 6</h1>
        <h2 className="paragraph__text  mission__text">
          Observe and record the temperature of each bottle every 20 minutes
          (using the timer) for the next hour.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          At the end of the hour, which bottle had a higher temperature? If you
          got the one with carbon dioxide, your experiment succeeded!
          <br />
          <br />
          You can test the effects of having more and less seltzer, the amount
          of time, the amount of light/heat, and the amount of water in the
          bottles as well to see the different outcomes.
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Discussion</h1>
        <ol className="supplies-list">
          <li className="supplies-text">
            What effect does carbon dioxide have on the atmospheric temperature?
          </li>
          <li className="supplies-text">
            How does this experiment show the greenhouse effect that naturally
            occurs in Earth’s atmosphere?
          </li>
          <li className="supplies-text">
            What can we do to lower carbon emissions?
          </li>
        </ol>
      </div>
      <div className="mission__div science__div">
        <h1 className="heading__text mission__text science__text">
          What's The Science?
        </h1>
        <h2 className="paragraph__text  mission__text science__text">
          How does carbon dioxide help increase atmospheric temperatures? Carbon
          dioxide is a type of greenhouse gas, which helps contain heat within
          the earth’s atmosphere. In the beginning, the sun sends solar
          radiation (light), which ~50% entered the earth’s surface. The Earth
          then absorbs it and emits the extra heat outwards. The Earth has many
          greenhouse gases so when the infrared radiation(heat) that the Earth
          emits goes up, some of the heat reflects back, instead of escaping the
          earth. This is important in maintaining good temperatures for living
          beings, but too much greenhouse gases can capture too much heat,
          causing the Earth to warm up, and cause global warming.
        </h2>
      </div>
    </div>
  );
}

export function BlogFlowerTurbine() {
  return (
    <div>
      <div className="mission__div blogs-main-div">
        <img
          className="project__full__image"
          alt="cover"
          src="/Flower_Turbine_Header.jpg"
        />
        <h2 className="italics__text" style={{ margin: "1rem" }}>
          Credit: flowerturbines.com
        </h2>
        <h1 className="blog__explain__text">
          The Underrated Power of Flower Turbines
        </h1>
        <h2 className=" italics__text blog__author__text">By Charles Huang</h2>
        <h2 className="blog__paragraph__text paragraph-break">
          Wind turbines are one of the top 10 causes of bird fatalities.
          Surprising, right? The iconic triple-bladed wind turbines we see in
          the media and during drives into the countryside are certainly a force
          for good. However, there are a range of avoidable issues with the
          current design. Aside from killing birds, they require vast stretches
          of (often farmable) land, they will cause turbulence and decrease the
          efficiency of each individual turbine if placed close together, and
          they also require a consistently strong enough wind to keep pushing
          the blades to turn the rotors.
          <br />
          <br />
          These are all non-issues with Flower Turbines.
          <br />
          <br />
          Flower turbines pose no threat to our avian friends. They are
          aesthetic and take up significantly less space than traditional wind
          turbines (which need to be big to produce energy efficiently, unlike
          Flower Turbines), so they may be used in cities. Flower Turbines, in
          fact, actually work better when placed next to each other than they do
          separately. They also require a much slower starting speed, opening up
          opportunities for these turbines to be placed in areas where
          traditional turbines would not have worked.
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          <b>Problems With the Traditional Model</b>
          <br />
          According to the American Wind Energy Association, wind turbines
          produce "broadband noise" (a 'swishing' or 'whooshing' sound) as their
          rotor blades encounter turbulence "in the passing air", although some
          may also produce whines or hums, usually caused by mechanical
          components. They're not particularly loud, but in instances where
          nearby residences are in dips/hollows sheltered by the wind, turbine
          noise may "carry further than on flat terrain".
          <br />
          <br />
          They also require separation multiple times their rotor
          lengths—estimates for spacing run from 3 to 12 times the rotor
          diameter between turbines. The typical turbine of today is around 70
          meters tall and has blades about 50 meters long (100 meter diameter),
          so lots and lots of space would be required to use these turbines.
          This space also must firstly be strong enough to support the weight of
          turbines and construction equipment, it must be in an open space, and
          must have a consistent, "good wind" (only a wind blowing at 3 m/s or
          more is strong enough to start up a typical turbine).
          <br />
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Flower_Turbine_1.jpg"
        />
        <h2 className="italics__text" style={{ margin: "1rem" }}>
          The spacing required for a traditional wind turbine array (Credit:
          explainthatstuff.com)
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          <br />
          Lastly, it's estimated that 1.17 million birds are killed by wind
          turbines in the United States yearly—this number may even be
          lowballing it, since wind facilities often require the construction of
          powerlines, which kill another 30+ million birds yearly in the U.S.
          through electrocution and collision. The unique shape and design of
          Flower Turbines circumvents these shortcomings, but how?
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          <b>What does the Flower Turbine Do Differently?</b>
          <br />
          Firstly, flower turbines produce even less noise than traditional
          turbines—they're reported to make less noise than the wind! They also
          don't require as much space; the design of Flower Turbines means that
          putting turbines next to each other actually generates more energy,
          not less! This is because Flower Turbines spin vertically (like a
          helicopter's main propeller blades), while traditional turbines spin
          horizontally (like the blades of a prop plane). Flower Turbines push
          wind into neighboring Flower Turbines, artificially increasing
          windspeed. Another key aspect of the design are the horizontal ribs
          that hold segments ("petals") together, but also reduce turbulence and
          result in more efficiency (15-40%) compared to other turbines out
          there (7-30%).
          <br />
          <br />
          Flower turbines come in a variety of sizes, including turbines with
          blades only 1m high, so they can be installed anywhere. And that means
          anywhere—compared to the 3 m/s required starting speed for most wind
          turbines, Flower Turbines only require wind speeds of 0.7 m/s! Lastly,
          but certainly not least, Flower Turbines do not result in bird deaths!
        </h2>
      </div>
    </div>
  );
}

export function BlogWorkshopTroop10() {
  return (
    <div>
      <div className="mission__div blogs-main-div">
        <img
          className="project__full__image"
          alt="cover"
          src="/Troop_10_3.jpg"
        />
        <h1 className="blog__explain__text">
          Wind Turbine Workshop with Great Neck’s Troop 10
        </h1>
        <h2 className=" italics__text blog__author__text">By Charles Huang</h2>
        <h2 className="blog__paragraph__text paragraph-break">
          Physics for the Planet recently held a fun-filled evening of
          competitive wind-turbine building with the Scouts of Troop 10. The
          event took place at the Company #3 Manhasset-Lakeville Firehouse,
          where the 40+ Scouts in attendance learned how to construct working
          models of wind turbines (mostly made out of common household items)
          based on{" "}
          <a
            href="https://physics4planet.org/projects/diy_wind_turbine"
            className="supplies-text"
          >
            our project instructions
          </a>
          .
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Troop_10_2.jpg"
        />
        <h2 className="blog__paragraph__text paragraph-break">
          Then, they regrouped into patrols and duked it out as teams to see who
          could generate the highest voltage with their turbines. Friendly
          rivalries ran high as the Scouts crowded around the electric fan which
          simulated wind, watching eagerly in anticipation to see if their
          meticulously-crafted turbine could beat the high score. Along the way,
          the Scouts learned to work with basic circuitry, grasped the
          mechanisms behind renewable energy technology, and developed their
          teamwork skills. “We’re excited to be delivering workshops to the
          Great Neck community,” said Physics for the Planet Founder Rick Xu.
          “It’s rare these days that youth get to engage in hands-on
          opportunities which expand their horizons in so many ways, especially
          in the realm of environmental sustainability.”
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Troop_10_6.jpg"
        />
        <h2 className="blog__paragraph__text paragraph-break">
          <i>
            Physics for the Planet delivers physics-based projects and workshops
            to raise awareness of the important role Physics plays in protecting
            our environment. Questions? Email us at physics4planet@gmail.com
          </i>
        </h2>
      </div>
    </div>
  );
}
