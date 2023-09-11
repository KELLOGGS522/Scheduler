"use client"
import './globals.css'
import { Inter } from 'next/font/google'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">&lt;DIRO&gt;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Fac. Arts et Sci." id="basic-nav-dropdown" >
                  <NavDropdown title="Informatique" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link href={'117510'}>
                        Bac Info
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="119110">Bac Math-Info</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Majeure Info</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mineure Info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Maîtrise Info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Certificat Info</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Mathematique" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Bac Math</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bac Math-Phys</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Physique" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Bac Phys</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bac Phys-Info</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Chimie" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Bac Chimie</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Langue" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Bac Études Allemandes</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown title="Fac. Med." id="basic-nav-dropdown">
                  <NavDropdown title="Biochimie" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bac Bio-Info</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Bac Biochimie</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown title="Fac. Sci. Infi." id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Bac Sc. Infirmieres Form. Init. Mtl</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Bac Sc. Infirmieres Form. DEC-BAC Mtl</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Bac Sc. Infirmieres Form. Init. Laval</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Bac Sc. Infirmieres Form. DEC-BAC Laval</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  )
}
