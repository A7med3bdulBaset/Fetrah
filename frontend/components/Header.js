import React, { useEffect, useState, useRef } from "react";
import { APP_NAME } from "../config";

import { isAuth, signout } from "../actions/auth";
import Search from "./blog/Search";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const container = useRef();

  useEffect(() => {
    setIsAuthenticated(isAuth());
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar style={{ backgroundColor: "#a7727d" }} navbar="true" {...props}>
        <NavbarBrand
          style={{ color: "white", fontSize: "22px", marginLeft: "2rem" }}
          className="font-weight-bold"
          href="/"
        >
          {APP_NAME}
        </NavbarBrand>
        <NavbarToggler navbar="true" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ marginRight: "5rem" }} className="me-auto" navbar>
            <>
              {isAuthenticated && isAuthenticated.role === 0 && (
                <div className="authContainer">
                  <div className="accountIcon">
                    <Image
                      className="notificationIcon"
                      src={"/images/notificationIcon.svg"}
                      width={20}
                      height={20}
                      alt={""}
                    />
                  </div>
                  <div className="accountRoundedBtn">
                    <div className="roundedBtnLabel">
                      {" "}
                      <Link
                        style={{ textDecoration: "none", color: "#000" }}
                        className={"AccountItemContainer"}
                        onClick={(e) => {
                          e.preventDefault();
                          setShowMenu(!showMenu);
                        }}
                        ref={container}
                        href={"/"}
                      >
                        حسابي
                        {showMenu && (
                          <ul className="accountMenu">
                            <li>
                              {" معلوماتي الشخصية"}
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                href={"/user"}
                              ></Link>
                            </li>
                            <li>طلبات القبول</li>
                            <li
                              onClick={() => {
                                signout(() => {
                                  router.replace("/signin");
                                });
                              }}
                            >
                              تسجيل الخروج
                            </li>
                          </ul>
                        )}
                      </Link>
                    </div>
                    <div className="accountIcon">
                      <Image
                        src={"/images/accountIconMale.png"}
                        width={35}
                        height={35}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
              )}

              {!isAuthenticated && (
                <>
                  <div className="authContainer">
                    <div className="roundedBtn">
                      <div className="roundedBtnLabel">
                        <Link
                          style={{ textDecoration: "none", color: "#000" }}
                          href={"/signup"}
                        >
                          حساب جديد
                        </Link>
                      </div>
                    </div>
                    <div className="roundedBtn">
                      <div className="roundedBtnLabel">
                        <Link
                          style={{ textDecoration: "none", color: "#000" }}
                          href={"/signin"}
                        >
                          تسجيل دخول
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <NavItem>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "1.2rem",
                    textAlign: "center",
                  }}
                  href="/blogs/"
                >
                  الدعم
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "1.2rem",
                    textAlign: "center",
                  }}
                  href="/blogs/"
                >
                  كيف تختار زوجك
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "1.2rem",
                    textAlign: "center",
                  }}
                  href="/blogs/"
                >
                  التجارب الناجحة
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "1.2rem",
                    textAlign: "center",
                  }}
                  href="/blogs/"
                >
                  {" "}
                  البحث
                </NavLink>
              </NavItem>
            </>

            {/* {isAuthenticated && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    signout(() => {
                      router.replace("/signin");
                    });
                  }}
                >
                  Signout
                </NavLink>
              </NavItem>
            )} */}

            {/* {isAuthenticated && isAuthenticated.role === 1 && (
              <NavItem>
                <NavLink href="/admin">
                  {isAuthenticated.name}'s Dashboard
                </NavLink>
              </NavItem>
            )} */}

            {/* <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem> */}

            {/* <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
      {/* <Search /> */}
    </>
  );
};

export default Header;
