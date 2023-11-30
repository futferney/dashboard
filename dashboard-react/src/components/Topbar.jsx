import React from 'react';
import styled from 'styled-components'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

const Navbar = styled.nav`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

const TopbarIconContainer  = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

const TopIconBadge = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const TopAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

export default function Topbar() {
return (
    <Navbar>
    <TopbarWrapper>
        <div>
            <Logo>Admin</Logo>
        </div>
        <TopRight>
        <TopbarIconContainer>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
        </TopbarIconContainer>
        <TopbarIconContainer>
            <Language />
            <span className="topIconBadge">2</span>
        </TopbarIconContainer>
        <TopbarIconContainer>
            <Settings />
        </TopbarIconContainer>
        <TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </TopRight>
    </TopbarWrapper>
    </Navbar>
);
}
