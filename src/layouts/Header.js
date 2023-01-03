import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [showSubMenu, setShowSubMenu] = useState(null);
    const refSubMenu = useRef(null);
    const refImage = useRef(null);
    const navigate = useNavigate();
    
    function handleClickOutside (event) {
        if (refSubMenu.current && !refSubMenu.current.contains(event.target)) {
            if(showSubMenu) {
                setShowSubMenu(false);
            } else {
                if (refImage.current && refImage.current.contains(event.target)) {
                    setShowSubMenu(true);
                }
            }
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    return(
        <>
            <Head>
                <h1>linkr</h1>
                <Icons ref={refImage}>
                    {showSubMenu ? <AiOutlineUp color="white" fontSize="25px"/> : <AiOutlineDown color="white" fontSize="25px"/>}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAArlBMVEX///8fXqHjHRpbgbOjstAAQZTP2uiasM3hAAAATZr0uroARJYAVJz52ACluNPxpaW1w9nH0uMASZgAUJvW1dSsvdZKda33+ft5mcLV2ufc5e/q7/XwnZ0AOpIpYqPm5eX//fX+9cs6bKiNpceDoMVSe7BtjrrjEw/nV1b74uHv7+7+99X++ub++N764FD8533742f75XL+9MD98bL97Z376YwAGIgAI4rlREPnT05tDc/gAAAE10lEQVRoge2YC3ebOBBGhyWGqMgUkHlJazvBQJpX46Sbffz/P7YzYCeAobvh4bbncM9JHEVG1/osRgDAzMzMzMzMzE9NeNfd952uwWxX3X2r7VTW8G612t6FrV3hdrVq7xoMWonWaW3LvmmyvuvUHsRTfcU0dkeWxWeaSBuuttuuOW2pbyIvnSpdZ1IYTnsmnZn7h2rr4bHWV2s91lpD+fpUbe2fa3211vN+POvVy3L5cvU/WlfU+nYF4/C8LPijbO3L1mvZeq21nsrWU/s4H+apMnSz9XraGksLDzTa28p6pFZH30Otbygvy/3X5f2xdb/c75ePlb59o+++eXxfvl3j+NfH1vV1+XPwUuulvW/m50ZeDEP29DoeW/SHeW5vr2n0x+zvtZyeR5ZH/4peR9f1LAY/C1JVNCKpdCIHQ9dx5Zi6gSsww3fZO/p/CpDqUTjU63tJrkvXClKRgc2SjG9kEHAt0CESYgf4G4ePF/guP02CBN8FjAs13GvjX7onIRex7zn4IkGxAP+ZBAG+RLzw7spDdvh2w8uZM9xrhgoSEULK0OuDjnOR5JXCTPEzHLxRqDBblzp2C6nlg71CrP+EhJdeniTch9LrLyQNXXo9sf4LOwKO3/gmgSAJB883Mtw3r9AjjkMWXn2jJIuO880NV4G5MPGS1opgx+RQr0Xfb8bIa1DOGQ5J3lDjjHGt+v1KntFRQjAh7MFenAIuFycMuKJFlrO48Loid12dyVSz49i1IiVDnTlKqpT5rs31gV57TV7F+cZLsWGDvjZArhOI1rhmzfVFxBF/jZOMNngCCU1jmPWGq2Fe6cf0p7RNHEX6EmJfQei74Dq4fpVvxA4i6ZfhlJAOe3/NOvlDvCw3+5Oz3l6R6f0JRF+vYeU9jyQSq+91DkRYNMILu50LBbefu8DNEM+7vigN623k8VYWBny67OB3MMRmwGMll+kQJlorjLy/tXHzDx7Ejf5aTJr2U/ZB7+UtprwbogW10WiL/ZD38jMW72DgwztKGjYf8d78jSmLQSkTlLTblnSXF1OOPHOoFtc0Xti0Jd3hxbXssmSER6R4LdmadLsXUwaNxcO1VAFMME4n3O4dKWUi1DwF6Ym41Uspe8koWkzay1qqR5v38gtearDedbkJ1Wm3OeE2783wilFDwwv0ZtIt3lFTJpyWOn3qvfkySsWoElk+bjH/4S3W8ogpQ3Fh2kz6xFukHIyqpTqdNapH00u7H326kaE6HXvf8WLKuTVOxaiCO3l9R2x4cfej1Tc+RdKd86XdTxOj1OUmVHcra7rupZRHqstN8Nys7og1b7GWs0m0UJwl4abNS2uZj1eXm1D1eKvTNe94u18rGsMdUZx4J6kYVQzrfUd8915iypqlJvRiZbCPa/rdO3XKcKjTO1HzUsWYbC0feb9zOXpx91MT1OUmxZ2LqHiL3c+eWlvWaUr64J2sLjfBe59iRyy9lLKmTZ4yUdRpdvBOWJebFEmnvPBixXC8c6RMGBZeM2oeeXH3Y2LSilFlR0mvyXsLuuefS4vVA+9cIhc+YcrWuVImYtwFlIRbUPx8KROpVVaK/IwpF9CdC5yhLjcprvKUxs+aMkFJnz1loDWt7di5UyYMwbWzp0zsBj0W74/q/8B1ZmZmZmZm5kfwL4A+ezMzranJAAAAAElFTkSuQmCC" alt="Não foi possível carregar a imagem" />
                </Icons>
            </Head>
            <SubMenu ref={refSubMenu} show={showSubMenu}>
                <p onClick={() => logout()}>Logout</p>
            </SubMenu>
        </>
    )
}

const Head = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 70px;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 0px 25px;
    box-sizing: border-box;
    h1 {
        font-family: 'Passion One', cursive;
        color: white;
        font-size: 55px;
        font-weight: bold;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    cursor: pointer;
    img {
        width: 55px;
        border-radius: 50%;
    }
`;

const SubMenu = styled.div`
    position: fixed;
    top: 70px;
    right: 15px;
    display: ${props => {
        if(props.show) {
            return "flex";
        } else {
            return "none";
        }
    }};
    justify-content: center;
    align-items: center;
    background-color: #151515;
    width: 150px;
    height: 45px;
    border-radius: 0px 0px 20px 20px;
    p {
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }
`;