// 
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import '../CSS/Header.css';
// materials
import logo1 from '../images/logo1.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default class Header extends Component {
    
    render() {
        return(
            <>
            <div className="fixed-top">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="myDiv">
                        <div className="container d-flex justify-content-between align-items-center"> 
                        <button className="nav_link nav-btn font-bold" type="button"><PhoneInTalkIcon></PhoneInTalkIcon>1900 8000</button> 
                            <div>
                            <img
                                    src={logo1}
                                    width="85"
                                    height="85"
                                    alt=" logo"
                                />
                                <Link className=" text-2xl font-bold no-underline text-green-900 hover:text-green-900 ms-0 " to="/">CESPIN</Link>
                            </div>
                                
                            <div>
                                <button className="nav_link nav-btn" type="button"><ShoppingCartIcon></ShoppingCartIcon></button>
                                <button className="nav_link nav-btn" type="button"><PersonIcon></PersonIcon></button>  
                                <button className="nav_link nav-btn" type="button"><LocationOnIcon></LocationOnIcon></button>  

                            </div>
                        </div>
                    </nav>
                
                    <Navbar expand="lg" className="bg-body-tertiary"  id="myDiv1">
                        <Container fluid>
                            
                            <Navbar.Toggle aria-controls="navbarScroll" style={{color: "black"}}/>
                            <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="me-auto my-2 my-lg-2 mx-auto "
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                    <Nav.Link ><Link className="nav_link" to="/">TRANG CHỦ</Link></Nav.Link>
                                    <Nav.Link ><Link className="nav_link" to="/blog" >BÀI VIẾT</Link></Nav.Link>
                                    <Nav.Link ><Link className="nav_link" to="/contact">LIÊN HỆ</Link></Nav.Link>
                                    <Nav.Link ><Link className="nav_link" to="/product">SẢN PHẨM</Link></Nav.Link>
                                    <NavDropdown title="BỘ SƯU TẬP" id="navbarScrollingDropdown" className="nav_link">
                                    <NavDropdown.Item className="nav_link">HIỆN ĐẠI</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">CỔ ĐIỂN</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">SANG TRỌNG</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">TRẺ TRUNG</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item  className="nav_link">
                                        KHÁC...
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PHÒNG" id="navbarScrollingDropdown" className="nav_link">
                                    <NavDropdown.Item className="nav_link">PHÒNG ĂN</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">PHÒNG NGỦ</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">PHÒNG LÀM VIỆC</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">PHÒNG KHÁCH</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">PHÒNG BẾP</NavDropdown.Item>
                                    <NavDropdown.Item className="nav_link">NGOẠI THẤT</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="nav_link">
                                        KHÁC...
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search..."
                                        className="me-1"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success"><SearchIcon></SearchIcon></Button>
                                </Form>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
               
            </div>
            <Outlet />
            </>  
        ); 
    }
}

window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('myDiv');
    var myDiv1 = document.getElementById('myDiv1');

    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 200) { // Khoảng cách từ đỉnh trang để thẻ div biến mất
      myDiv.classList.add('hide');
      myDiv1.classList.add('fixed-top');
    } else {
      myDiv.classList.remove('hide');
      myDiv1.classList.remove('fixed-top');
    }
  });
