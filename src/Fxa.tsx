import React from "react";
import Grid from "./Grid";
// import styles from "styles.module.css";
import UserElement from "./UserElement";

const Header = () => {
  return (
    <div className="header">
      Copy/paste this code into your registration form.
    </div>
  );
};

const Fxa = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <img
            src="https://image.e.mozilla.org/lib/fe9915707361037e75/m/4/11c1e411-7dfe-4e04-914c-0f098edac96c.png"
            alt="firefox logo"
            className="fx-logo"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Cell>
            <UserElement />
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row>
          <p className="para">
            Mozilla. 2 Harrison St, #175, San Francisco, CA 94105
            <br />
            <a
              href="https://www.mozilla.org/about/legal/terms/services/" //privacy URL
              className="privacy-url"
            >
              Mozilla Privacy Policy
            </a>
            <br />
            <a
              href="https://www.mozilla.org/about/legal/terms/services/"
              className="privacy-URL"
            >
              Firefox Cloud Terms of Service
            </a>
          </p>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Fxa;
