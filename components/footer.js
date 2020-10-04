import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="robinFooter">
          <div className="itp">
            <img src="/images/itplogo.svg" alt="Logo In The Pocket" />
            <span>Made for In The Pocket</span>
          </div>
          <div className="rvdb">
            <img src="/images/logo.svg" alt="Logo Robinvandenb.be" />
            <span>
              By <Link href="https://robinvandenb.be">Robin Vanden Berghe</Link>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
