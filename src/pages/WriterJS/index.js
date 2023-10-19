import bannerBackground from "assets/home/projects/writerjs.gif";
import Page from "components/Page";
import ProjectBanner from "components/Project/ProjectBanner";

import "./WriterJS.css";

function WriterJS() {
  return (
    <Page className="WriterJS">
      <ProjectBanner text="WRITER JS" background={bannerBackground} />
      <div className="wrapper--about">
        <div className="content">
          <div id="about__overview">
            <span id="overview-1" className="title">
              Project Overview
            </span>
            <span id="overview-2">
              WriterJS was built as a side project; it was initially a part of
              MotorDebate before I decided to branch it off into its own
              project.
              <br /> <br />I needed a WYSIWYG (what you see is what you get)
              text editor, and the free ones I found online didn't suit my
              needs. I decided to create my own, although WriterJS is largely
              inspired by <a href="https://editorjs.io/">Editor.js</a>. At the
              time, Editor.js was incomplete and lacked certain features that I
              needed, so I recreated their block-styled editor with my own
              features.
              <a href="https://github.com/kennybc/writer" target="_blank">
                <div id="href--github"> View on GitHub </div>
              </a>
            </span>
          </div>
          <div id="about__demo">
            <span id="demo-1" className="title">
              Demo
            </span>
            <div id="demo-2">
              <div id="demo-3"> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-features">
        <div className="content" style={{ background: "white" }}>
          <div id="features__compat">
            <span id="compat-1" className="title">
              Compatibility
            </span>
            <span id="compat-2">
              WriterJS was created using ES6 (or ES2015) JavaScript. It's still
              relatively new; most browsers support it and have for a while, but
              there are exceptions. All commonplace browsers fully support ES6
              (provided the user has been updating their browser) with the
              exception of Internet Explorer.
              <br /> <br />
              Basic browser compatibility has been pulled from
              <a href="https://www.w3schools.com/Js/js_es6.asp" target="_blank">
                w3schools.com
              </a>
              . Listed are versions of the browser that support ES6 as well as
              the date those versions were pushed out to the public. A more
              complete spreadsheet describing compatibility can be found
              <a
                href="https://kangax.github.io/compat-table/es6/"
                target="_blank"
              >
                here
              </a>
              .
              <div id="compat-3">
                <div style={{ display: "table-row", background: "#cccccc" }}>
                  <div className="compat__browser"> Chrome </div>
                  <div className="compat__browser"> Edge </div>
                  <div className="compat__browser"> Firefox </div>
                  <div className="compat__browser"> Safari </div>
                  <div className="compat__browser"> Opera </div>
                </div>
                <div style={{ display: "table-row" }}>
                  <div className="compat__browser"> v 58 </div>
                  <div className="compat__browser"> v 14 </div>
                  <div className="compat__browser"> v 54 </div>
                  <div className="compat__browser"> v 10 </div>
                  <div className="compat__browser"> v 55 </div>
                </div>
                <div style={{ display: "table-row", background: "#f2f2f2" }}>
                  <div className="compat__browser"> 1/17 </div>
                  <div className="compat__browser"> 8/16 </div>
                  <div className="compat__browser"> 3/17 </div>
                  <div className="compat__browser"> 7/16 </div>
                  <div className="compat__browser"> 8/18 </div>
                </div>
              </div>
            </span>
          </div>
          <div id="features__specs">
            <span id="specs-1" className="title">
              Features
            </span>
            <span id="specs-2">
              <li> 0 dependencies, completely self-contained </li>
              <li>
                Paragraph, Heading, Image, Embed, Quote, Link, and Delimiter
                blocks
              </li>
              <li>
                Formats images as base64 to eliminate need for server-side code
              </li>
              <li> Export as JSON for easy storage and reinterpretation </li>
              <li> Lightweight files and intuitive setup/usage </li>
              <li> Embed from Instagram, Facebook, Twitter, and Youtube </li>
            </span>
            <div id="specs-3">
              <div id="specs-4">
                <i>const</i> writer = <i>new</i> {"Writer("}
                <a>"elementID"</a>, {"{ imageQuality: <b>0.6</b> });"} <br />
                {"writer.init();"}
              </div>
              <span>
                To get started, simply include writer.js in the head. Then,
                create a div element you wish to have the editor in. After that
                element, include a script tag with the line of code above. Note
                that the elementID should not be prepended by "#".
              </span>
              <br /> <br />
              <span>
                imageQuality may be adjusted to speed up performance. Since
                images are stored in base64, a lower image quality might yield a
                significantly lower image size while keeping the image
                relatively the same in terms of appearance to the naked eye.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default WriterJS;
