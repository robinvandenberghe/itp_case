import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="robinFooter">
          <div className="itp">
            <img src="/images/inthepocket.svg" alt="Logo In The Pocket" />{" "}
            <span>Made for In The Pocket</span>
          </div>
          <div className="rvdb">
            <img src="/images/logo.svg" alt="Logo Robinvandenb.be" />{" "}
            <span>By Robin Vanden Berghe</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
