import React, { useLayoutEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

export function ProjectDIYWindTurbine() {
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
            <i class="fa-solid fa-signal fa-lg"></i>
            <div className="projects-tags-captions">Medium</div>
            <i class="fa-solid fa-clock fa-lg"></i>
            <div className="projects-tags-captions">1 hour</div>
            <i class="fa-solid fa-coins fa-lg"></i>
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

export function ProjectPowerofWater() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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
          <h2 className="paragraph__text">
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
            src="/The_Power_of_Water_Step_9.JPG"
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
            src="/The_Power_of_Water_Supplies.JPG"
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
          src="/The_Power_of_Water_Step_1.JPG"
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
          src="/The_Power_of_Water_Step_2.JPG"
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
          src="/The_Power_of_Water_Step_6.JPG"
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
          src="/The_Power_of_Water_Step_7.JPG"
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
          src="/The_Power_of_Water_Step_9.JPG"
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
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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
          <h2 className="paragraph__text">
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
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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
            <div className="project-cost-text projects-tags-captions">$50</div>
          </div>
          <h2 className="paragraph__text">
            Everyday the sun produces extreme amounts of energy and only a small
            percentage enters the atmosphere; however a single hours’ worth of
            that “small percentage” is enough to power the whole world for more
            than an year.
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
            <a
              className="supplies-text"
              href="https://www.solarmade.com/products/jss-p"
            >
              1 Solar Panel
            </a>
            <a
              className="supplies-text"
              href="https://www.solarmade.com/products/alligator-clips"
            >
              2 Alligator Clips
            </a>
            <a
              className="supplies-text"
              href="https://www.solarmade.com/products/jss-m"
            >
              1 Motor
            </a>
            <a
              className="supplies-text"
              href="https://www.solarmade.com/products/gears-bag"
            >
              Gears
            </a>
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
        <div style={{ marginTop: "2rem" }}>
          <img
            className="project__full__image"
            alt="cover"
            src="/Solar_Car_Supplies.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Supplies
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 1</h1>
        <h2 className="paragraph__text  mission__text">
          Cut out 2 wires from the clothes hanger to act as axles.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_1.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 2</h1>
        <h2 className="paragraph__text  mission__text">
          Take one of the axles and insert a gear (do not glue yet).
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_2.jpg"
        />
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
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_9.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 10</h1>
        <h2 className="paragraph__text  mission__text">
          For each wire, place it between the ridges then use a crimp tool to
          squeeze the ridges tightly so that you cannot pull the wire out.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_10.jpg"
        />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step 11</h1>
        <h2 className="paragraph__text  mission__text">
          Slide the covers back over the clips.
        </h2>
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_11.jpg"
        />
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
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_13.jpg"
        />
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
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_14.jpg"
        />
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
        <img
          className="project__full__image"
          alt="cover"
          src="/Solar_Car_Step_16.jpg"
        />
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
          src="/Solar_Car_Result.jpg"
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
          The Clean Air Act gives the US government broad power to protect
          public health by regulating major sources of pollutants. Rules
          developed under the law have, for example, required power plants to
          install filters and scrubbers to limit the release of sulfur dioxide
          and particulate matter. The Environmental Protection Agency, or EPA,
          has also used the law to phase lead out of gasoline and issue vehicle
          standards to reduce tailpipe emissions. But there’s one significant
          source of pollution that the agency has so far ignored: All of the
          consumer appliances that burn natural gas or fuel oil in homes and
          businesses. The direct combustion of fossil fuels like these within
          the country’s buildings is responsible for roughly 10 percent of total
          US greenhouse gas emissions. On Tuesday, the Sierra Club and 25 other
          environmental and public health groups filed a petition asking the EPA
          to use its authority to crack down on fuel-burning appliances.
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
          “Emissions from buildings have a harmful, and frankly scary, impact on
          human health and contribute significantly to the climate crisis,”
          Amneh Minkara, the deputy director of the Sierra Club’s building
          electrification campaign, said in a written statement accompanying the
          announcement. “It is the duty of the EPA to keep the American public
          safe from breathing in these pollutants.”
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          This story was originally published by Grist and is reproduced here as
          part of the Climate Desk collaboration. The Clean Air Act gives the US
          government broad power to protect public health by regulating major
          sources of pollutants. Rules developed under the law have, for
          example, required power plants to install filters and scrubbers to
          limit the release of sulfur dioxide and particulate matter. The
          Environmental Protection Agency, or EPA, has also used the law to
          phase lead out of gasoline and issue vehicle standards to reduce
          tailpipe emissions. But there’s one significant source of pollution
          that the agency has so far ignored: All of the consumer appliances
          that burn natural gas or fuel oil in homes and businesses. The direct
          combustion of fossil fuels like these within the country’s buildings
          is responsible for roughly 10 percent of total US greenhouse gas
          emissions. On Tuesday, the Sierra Club and 25 other environmental and
          public health groups filed a petition asking the EPA to use its
          authority to crack down on fuel-burning appliances. MOTHER JONES TOP
          STORIES Pre-K Went Virtual During the Pandemic. For Some, It May Stay
          That Way. The petition asks the EPA to formally list all fossil
          fuel-fired heating appliances, including stoves and clothes dryers, as
          pollution sources. “Emissions from buildings have a harmful, and
          frankly scary, impact on human health and contribute significantly to
          the climate crisis,” Amneh Minkara, the deputy director of the Sierra
          Club’s building electrification campaign, said in a written statement
          accompanying the announcement. “It is the duty of the EPA to keep the
          American public safe from breathing in these pollutants.” While the
          Department of Energy regulates many home appliances in order to
          promote the most energy-efficient models, there are no regulations
          that aim to mitigate the health effects of pollutants from these
          devices, like nitrogen oxides, or NOx—a precursor to smog. The
          petition asks the EPA to phase in NOx performance standards for
          furnaces and water heaters, eventually landing on a zero-emissions
          standard by 2030. This would effectively ban the manufacture of these
          appliances altogether, forcing building owners to purchase alternative
          heating devices powered solely by electricity, like heat pumps.
        </h2>
      </div>
    </div>
  );
}

export function BlogDemo2() {
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
          The Clean Air Act gives the US government broad power to protect
          public health by regulating major sources of pollutants. Rules
          developed under the law have, for example, required power plants to
          install filters and scrubbers to limit the release of sulfur dioxide
          and particulate matter. The Environmental Protection Agency, or EPA,
          has also used the law to phase lead out of gasoline and issue vehicle
          standards to reduce tailpipe emissions. But there’s one significant
          source of pollution that the agency has so far ignored: All of the
          consumer appliances that burn natural gas or fuel oil in homes and
          businesses. The direct combustion of fossil fuels like these within
          the country’s buildings is responsible for roughly 10 percent of total
          US greenhouse gas emissions. On Tuesday, the Sierra Club and 25 other
          environmental and public health groups filed a petition asking the EPA
          to use its authority to crack down on fuel-burning appliances.
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
          “Emissions from buildings have a harmful, and frankly scary, impact on
          human health and contribute significantly to the climate crisis,”
          Amneh Minkara, the deputy director of the Sierra Club’s building
          electrification campaign, said in a written statement accompanying the
          announcement. “It is the duty of the EPA to keep the American public
          safe from breathing in these pollutants.”
        </h2>
        <h2 className="blog__paragraph__text paragraph-break">
          This story was originally published by Grist and is reproduced here as
          part of the Climate Desk collaboration. The Clean Air Act gives the US
          government broad power to protect public health by regulating major
          sources of pollutants. Rules developed under the law have, for
          example, required power plants to install filters and scrubbers to
          limit the release of sulfur dioxide and particulate matter. The
          Environmental Protection Agency, or EPA, has also used the law to
          phase lead out of gasoline and issue vehicle standards to reduce
          tailpipe emissions. But there’s one significant source of pollution
          that the agency has so far ignored: All of the consumer appliances
          that burn natural gas or fuel oil in homes and businesses. The direct
          combustion of fossil fuels like these within the country’s buildings
          is responsible for roughly 10 percent of total US greenhouse gas
          emissions. On Tuesday, the Sierra Club and 25 other environmental and
          public health groups filed a petition asking the EPA to use its
          authority to crack down on fuel-burning appliances. MOTHER JONES TOP
          STORIES Pre-K Went Virtual During the Pandemic. For Some, It May Stay
          That Way. The petition asks the EPA to formally list all fossil
          fuel-fired heating appliances, including stoves and clothes dryers, as
          pollution sources. “Emissions from buildings have a harmful, and
          frankly scary, impact on human health and contribute significantly to
          the climate crisis,” Amneh Minkara, the deputy director of the Sierra
          Club’s building electrification campaign, said in a written statement
          accompanying the announcement. “It is the duty of the EPA to keep the
          American public safe from breathing in these pollutants.” While the
          Department of Energy regulates many home appliances in order to
          promote the most energy-efficient models, there are no regulations
          that aim to mitigate the health effects of pollutants from these
          devices, like nitrogen oxides, or NOx—a precursor to smog. The
          petition asks the EPA to phase in NOx performance standards for
          furnaces and water heaters, eventually landing on a zero-emissions
          standard by 2030. This would effectively ban the manufacture of these
          appliances altogether, forcing building owners to purchase alternative
          heating devices powered solely by electricity, like heat pumps.
        </h2>
      </div>
    </div>
  );
}
