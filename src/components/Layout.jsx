import Container from "./Container";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div className="bg-white rounded-2xl">{children}</div>
    </Container>
  );
};

export default Layout;
