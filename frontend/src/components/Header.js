import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>My Proshop</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                        <Nav.Link><i className='fas fa-shopping-cart'></i>Home</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className='justif-content-end'>
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link><i className='fas fa-user'></i>Link</Nav.Link>
                        </LinkContainer>
                    </Nav>    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
