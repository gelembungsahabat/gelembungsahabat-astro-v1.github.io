import "./styles/article.css";
import { CodeBlock } from "../code-block";
export function BasicAeromodellingArticle() {
  return (
    <div className="content-wrapper">
      <h1>Basic Aeromodelling</h1>
      <br />
      <p>
        Aeromodelling uses Unmanned Aerial Vehicles (UAV) Technology. Many of
        them are "mini" scale replicas of real-world aircraft, and primarily
        intended for fun.
      </p>
      <br />
      <h2>Type Of Aeromodelling</h2>
      <a href="#plane-model">Plane Model</a>
      <p>Glider Model</p>
      <p>Helicopter Model</p>
      <p>Quadcopter</p>
      <p>Hexacopter</p>
      <br />
      <h2>Plane Model</h2>

      <section id="plane-model">
        <h2>- Types of Plane Model</h2>
        <p>
          There are several distinct types of plane model, each with its own
          challenges and rewards:
        </p>
        <ul>
          <li>
            <strong>Gliding:</strong> The most accessible entry point, gliding
            models rely on aerodynamic principles to stay aloft. They’re great
            for learning about lift, drag, and stability.
          </li>
          <li>
            <strong>Rubber-Powered:</strong> These models use rubber bands to
            provide initial thrust, offering a hands-on introduction to
            propulsion.
          </li>
          <li>
            <strong>Control-Line:</strong> These models are propelled by a
            tether and require skill to steer accurately.
          </li>
          <li>
            <strong>Radio-Controlled (RC):</strong> The most popular and
            advanced form, RC aircraft are controlled wirelessly, allowing for
            complex maneuvers and longer flight times. RC models come in a huge
            range of sizes and designs, from tiny drones to large scale
            warbirds.
          </li>
        </ul>
      </section>
    </div>
  );
}
