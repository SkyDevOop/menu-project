import React, {useState} from "react";
import {Container,Form, Navbar, Nav, Image,} from "react-bootstrap";
const NavBar = ({searchFilter}) => {
  const[searchValue, setSearchValue] = useState('')
  const getInputValueSearch = (e) => {
    e.preventDefault()
    searchFilter(searchValue)
    setSearchValue('')
  }
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="m-0" href="/"><Image className="logo-menu" src="logo.png"></Image></Navbar.Brand>
          <Navbar.Toggle className="my-NavBar-toggle" aria-controls="navbarScroll" />
          <Navbar.Collapse className="" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex my-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                onChange={(e)=>{
                  setSearchValue(e.target.value)
                }}
                value={searchValue}
              />
              <button onClick={getInputValueSearch} className="btn-search">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
