import bannerBackground from "assets/home/projects/motordebate.gif";
import tile_1a from "assets/motordebate/tile-1a.png";
import tile_1b from "assets/motordebate/tile-1b.png";
import tile_2a from "assets/motordebate/tile-2a.png";
import tile_2b from "assets/motordebate/tile-2b.png";
import tile_3a from "assets/motordebate/tile-3a.png";
import tile_3b from "assets/motordebate/tile-3b.png";
import ProjectBanner from "components/ProjectBanner/ProjectBanner";

import "./MotorDebate.css";

function MotorDebate() {
  return (
    <div id="homePage">
      <ProjectBanner text="MOTORDEBATE" background={bannerBackground} />
      <div className="wrapper--about">
        <div className="content">
          <div id="about__overview">
            <span id="overview-1" className="title">
              Project Overview
            </span>
            <span id="overview-2">
              MotorDebate is a student-run blog centered around cars. Run by a
              team of car enthusiasts, the blog aims to provide up-to-date
              motor-focused information.
              <br /> <br />
              MotorDebate was a larger one of my full-stack web projects; I
              completely rebuilt the site from scratch, including a new design
              and a custom built blog framework done in PHP. This project
              presented several security challengers which were interesting to
              work through.
            </span>
          </div>
          <div id="about__palette">
            <span id="palette-1" className="title">
              Palette
            </span>
            <div id="palette__spacing">
              <div id="palette-2">
                <div
                  className="palette__color"
                  style={{ background: "#ea7a12" }}
                ></div>
                <div
                  className="palette__color"
                  style={{ background: "#ffffff" }}
                ></div>
                <div
                  className="palette__color"
                  style={{ background: "#e2e2e2" }}
                ></div>
                <div
                  className="palette__color"
                  style={{ background: "#262626" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper--design">
        <div className="content">
          <span id="design-1" className="title">
            Design Choices
          </span>
          <span id="design-2">
            I found that the old design lacked a consistent aesthetic. While
            each individual section might have looked nice on its own, their
            styles clashed when put together. The site also felt cluttered so I
            decided to take a minimalist approach. Click on each tile to see a
            before/after comparison.
          </span>
          <div id="design-3">
            <input type="checkbox" id="tile-1-cb" />
            <label id="tile-1" htmlFor="tile-1-cb">
              <div>
                <div>
                  <img src={tile_1a} />
                  <img src={tile_1b} />
                </div>
              </div>
            </label>
            <input type="checkbox" id="tile-2-cb" />
            <label id="tile-2" htmlFor="tile-2-cb">
              <div>
                <div>
                  <img src={tile_2a} />
                  <img src={tile_2b} />
                </div>
              </div>
            </label>
            <input type="checkbox" id="tile-3-cb" />
            <label id="tile-3" htmlFor="tile-3-cb">
              <div>
                <div>
                  <img src={tile_3a} />
                  <img src={tile_3b} />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="wrapper--backend">
        <div className="content">
          <div id="backend__oop">
            <span className="title backend-1"> Framework </span>
            <span className="backend-2">
              PHP is an old language; when I learned it, it was mostly taught
              procedurally and lacked full OOP support. This project was my
              first instance of using OOP principles in PHP which I found
              necessary to keep the blog's back-end structure organized.
              <br /> <br />
              Using classNamees allowed the framework to take a much more
              organized and accessible form. This also supports scalability.
              Implementing new features and updating existing ones would require
              little work.
              <br /> <br />
              <div className="backend-3">
                <b>className</b> UserActionHandler {"{"}
                <br />
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  &emsp;&emsp;<b>private</b> $db; <br />
                  &emsp;&emsp;<b>private</b> $session; <br />
                  &emsp;&emsp;<b>function __construct</b>($db = false) ...
                  <br />
                  &emsp;&emsp;<b>public function</b> login($user, $pass,
                  $remember) ... <br />
                  &emsp;&emsp;<b>public function</b> logout() ...
                </div>
                {"}"}
              </div>
              <div className="backend-3">
                <a>// When a login POST request is received </a> <br /> <br />
                $user = $_POST[<i>"username"</i>]; <br />
                $pass = $_POST[<i>"password"</i>]; <br />
                $rem = $_POST[<i>"remember"</i>]; <br />
                <b>if</b>(<b>isset</b>($user) && <b>isset</b>($pass) &&
                <b>isset</b>($rem))
                {
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    &emsp;&emsp;$handler = <b>new</b> UserActionHandler();
                    <br />
                    &emsp;&emsp;<b>die</b>
                    {"($handler->login($user, $pass, $rem))"};
                  </div>
                }
              </div>
            </span>
          </div>
          <div id="backend__security">
            <span className="title backend-1"> Security </span>
            <span className="backend-2">
              Security precautions are in place for common attacks such as SQL
              injection, cross-site scripting, session hijacking, and more. User
              account security is obviously important, and these protocols will
              be updated and improved upon in the future.
              <br /> <br />
              For example: session fixing/hijacking. <br />
              If a user logs in and does not wish to be remembered, their
              session lifetime is set to expire upon the page closing. If they
              wish to be remembered, a cookie is set with a 30 day lifespan.
              That cookie is fingerprinted: it contains a token that is
              generated upon session creation. That token is stored in a
              database and matched to attempts future site-visits. Successful
              login attempts will prompt that token to be rerandomized.
              <br /> <br />
              <div className="backend-3">
                <b>public function</b> login($user, $pass, $remember) {"{"}
                <br />
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  &emsp;&emsp;<b>if</b>
                  {"(password_verify($pass, ...)) {"} <br /> <br />
                  &emsp;&emsp;&emsp;&emsp;... <br /> <br />
                  &emsp;&emsp;&emsp;&emsp;<b>if</b>
                  {"($remember == true) {"}
                  <br />
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <a>{"// Generate token --> $session"} </a> <br />
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <a>// Store session token in db </a> <br />
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setcookie(
                    <i>"session"</i>, $session, ...); <br />
                  </div>
                  &emsp;&emsp;&emsp;&emsp;{"}"} <br />
                  <div style={{ marginTop: "10px" }}> </div>
                  &emsp;&emsp;{"}"} <br />
                </div>
                {"}"}
              </div>
              <div className="backend-3">
                <a>// When the page is loaded, check for existing cookie </a>
                <br /> <br />
                <b>if</b>
                {"("}
                <b>isset</b>
                {'($_COOKIE["session"])) {'}
                <br />
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  &emsp;&emsp;
                  {'$token = $db->sanitize($_COOKIE[<i>"session"</i>]);'} <br />
                  &emsp;&emsp;
                  <a>{"// Is the token in the db and valid? --> $valid"}</a>
                  <br />
                  &emsp;&emsp;<b>if</b>
                  {"($valid == true) {"} <br />
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    &emsp;&emsp;&emsp;&emsp;$loggedin = true; <br />
                    &emsp;&emsp;&emsp;&emsp;
                    <a>// Rerandomize the token and update in db </a> <br />
                  </div>
                  &emsp;&emsp;{"}"} <br />
                </div>
                {"}"}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotorDebate;
