import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CButton,
  CHeaderNavItem,
  CRow,
  CCol
} from "@coreui/react";
import "../views/style.css";
import { TheHeaderDropdown } from "./index";
import { accessrole } from "../views/config";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector(state => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  var username = "";
  if (accessrole === "Admin") username = "Administrator";
  else if (accessrole === "Bydel Director")
    username = "Bydelsdirektør, Bydel Bjerke";
  else username = "";

  return (
    <CHeader
      withSubheader
      style={{ height: "98px" }}
      className="shadow-sm ourmainheader"
    >
      {/* <div style={{borderLeft:'2px solid black',height:'30px',marginTop:'30px'}}></div> */}
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none "
        onClick={toggleSidebarMobile}
      />

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <p className="mainhead mt-4" style={{ marginLeft: 60 }}>
            {" "}
            {username}{" "}
          </p>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <CRow>
          <CCol></CCol>
          <CCol>
            {" "}
            <CButton
              block
              className="outlineButton2 mt-2 "
              style={{
                fontFamily: "Open Sans",
                height: "51px",
                width: 105,
                marginRight: 80
              }}
            >
              Kontakt
            </CButton>
          </CCol>
          <CCol>
            {" "}
            <p className="adminpara" style={{ marginTop: 20 }}>
              Min side
            </p>
          </CCol>
        </CRow>
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
