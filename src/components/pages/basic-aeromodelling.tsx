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
        <h3>- Types of Plane Model</h3>
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
        <br />
        <h3>- Movement</h3>
        <img src="images/pitch-roll-yaw.gif" alt="pitch-roll-yaw" />
        <br />
        Gif source:{" "}
        <a href="https://howthingsfly.si.edu/media/roll-pitch-yaw">
          https://howthingsfly.si.edu/media/roll-pitch-yaw
        </a>
        <p>
          Plane models are exactly have the same basic movement as normal plane
          as Boeing or other real-world planes:
        </p>
        <ul>
          <li>
            <strong>Pitch:</strong> Pitch is the rotation of an aircraft around
            its long axis (also known as the lateral axis). Think of it as
            tilting the nose of the aircraft up or down. Pitch is primarily
            controlled by the <code>elevator</code> – a movable surface on the
            tail of the aircraft. Changes in engine power, control stick
            movements, and aerodynamic forces all contribute to pitch.
          </li>
          <br />
          <li>
            <strong>Roll:</strong> Roll is the rotation of an aircraft around
            its transverse axis (also known as the longitudinal axis). This is
            the rotation around the aircraft's length, like tilting from side to
            side. Roll is primarily controlled by the <code>ailerons</code> –
            movable surfaces on the wings. These surfaces create differential
            lift, causing the aircraft to rotate.
          </li>
          <br />

          <li>
            <strong>Yaw:</strong> Yaw is the rotation of an aircraft around its
            vertical axis (also known as the directional axis). This is the
            rotation around the nose, like turning the nose to the left or
            right. It’s often described as “nose-to-wind” or “nose-off”. Yaw is
            generally caused by <code>rudder</code> movements. The rudder is a
            control surface located on the tail of the aircraft. It pushes the
            tail in one direction, causing the aircraft to rotate around its
            vertical axis.
          </li>
        </ul>
      </section>
    </div>
  );
}
