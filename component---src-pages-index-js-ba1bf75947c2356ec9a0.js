"use strict";(self.webpackChunkservice_mesh_patterns=self.webpackChunkservice_mesh_patterns||[]).push([[678],{4313:function(e,M,n){n.r(M),n.d(M,{default:function(){return d}});var i=n(7294),t=n(935),L=n(9357),s=n(1597),a=n(1074),j=a.default.nav.withConfig({displayName:"navbarstyle__Navigation",componentId:"sc-v0mr6c-0"})(["\n    position: sticky;\n    top: 0px;\n    height: 110px;\n    display: flex;\n    background-color: #fff;\n    justify-content: space-between;\n    box-shadow: 0px 10px 25px rgba(0, 179, 159, 0.2);\n    margin: 0 auto;\n    padding: 0 5vw;\n    z-index: 3;\n    align-self: center;\n\n    @media (max-width: 912px) {\n        height: 110px;\n        top: 0;\n        left: 0;\n        right: 0;\n    }\n"]),N=a.default.div.withConfig({displayName:"navbarstyle__Toggle",componentId:"sc-v0mr6c-1"})(["\n  display: none;\n  height: 100%;\n  cursor: pointer;\n  padding: 0 10vw;\n\n  @media (max-width: 912px) {\n    display: flex;\n  }\n"]),c=a.default.div.withConfig({displayName:"navbarstyle__Navbox",componentId:"sc-v0mr6c-2"})(["\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media (max-width: 912px) {\n    flex-direction: column;\n    position: fixed;\n    width: 100%;\n    justify-content: flex-start;\n    padding-top: 10vh;\n    background-color: #fff;\n    transition: all 0.3s ease-in;\n    top: 12vh;\n    left: ",";\n  }\n\n  button {\n    margin-left: 1rem;\n\n    @media (max-width: 912px) {\n      margin: 2rem auto;\n    }\n  }\n"],(function(e){return e.open?"0":"-100%"})),I=a.default.div.withConfig({displayName:"navbarstyle__Hamburger",componentId:"sc-v0mr6c-3"})(["\n  background-color: #111;\n  width: 30px;\n  height: 3px;\n  transition: all .3s linear;\n  align-self: center;\n  position: relative;\n  transform: ",';\n\n  ::before,\n  ::after {\n    width: 30px;\n    height: 3px;\n    background-color: #111;\n    content: "";\n    position: absolute;\n    transition: all 0.3s linear;\n  }\n\n  ::before {\n    transform: ',";\n    top: -10px;\n  }\n\n  ::after {\n    opacity: ",";\n    transform: ",";\n    top: 10px;\n  }\n"],(function(e){return e.open?"rotate(-45deg)":"inherit"}),(function(e){return e.open?"rotate(-90deg) translate(-10px, 0px)":"rotate(0deg)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"rotate(90deg) ":"rotate(0deg)"})),g=a.default.div.withConfig({displayName:"navbarstyle__LogoWrap",componentId:"sc-v0mr6c-4"})(["\n  margin: auto 0;\n  flex: 0 1 160px;\n  @media (max-width: 912px) and (orientation: landscape) {\n    flex: 0 1 160px;\n  }\n  @media (max-width: 980px) {\n    width: 90%;\n  }\n  @media (max-width: 965px) {\n    min-width: 15%;\n  }\n"]),u=(0,a.default)(s.Link).withConfig({displayName:"navbarstyle__NavItem",componentId:"sc-v0mr6c-5"})(['\n  text-decoration: none;\n  color: rgb(60, 73, 79);\n  margin: 0 1rem;\n  transition: all 200ms ease-in;\n  position: relative;\n  position: relative;\n  max-width: 6rem;\n  white-space: pre-wrap;\n  \n  :after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 0%;\n    content: ".";\n    color: transparent;\n    background: rgb(0, 211, 169);\n    height: 1px;\n    transition: all 0.4s ease-in;\n  }\n\n  :hover {\n    color: rgb(0, 211, 169);\n    ::after {\n      width: 100%;\n    }\n  }\n\n  .layer5{\n    position: relative;\n    right: 8px;\n    min-width: 120%;\n    @media (max-width: 912px) {\n      position: relative;\n      top: 20px;\n      right: 85px;\n    }\n  }\n\n  @media (max-width: 912px) {\n    margin: 20px 0;\n    font-size: 1.5rem;\n    max-width: none;\n    white-space: nowrap;\n    z-index: 6;\n  }\n']),w=n(8080),r=function(){var e=(0,i.useState)(!1),M=e[0],n=e[1];return i.createElement(j,null,i.createElement(g,{as:s.Link,to:"/"},i.createElement("img",{className:"pattern",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDE1Ljk0IDI3Ni45OSI+PHRpdGxlPnNlcnZpY2UtbWVzaC1wYXR0ZXJucy1zaWRlPC90aXRsZT48cGF0aCBkPSJNMTg3Ljg5LDQ1LjIzYTkxLjM2LDkxLjM2LDAsMCwxLDEzLjkyLDI1LjA4YzQuMzksMTEuNjIsNi4zOSwyMy43MiwzLjg5LDM2LTMuMzcsMTYuNDYtMTMsMjguMDYtMjkuMSwzMy42My02LjI2LDIuMTYtMTIuNzMsMy0xOS4yMS4zMmE4Ljc5LDguNzksMCwwLDEtMi40Ny0xLjM0LDE2LjMxLDE2LjMxLDAsMCwxLTQuMDksMTAuNCw4LjkyLDguOTIsMCwwLDEsMi42NS0uNzYsMjQuNjcsMjQuNjcsMCwwLDEsMi43LS4zN0E3MCw3MCwwLDAsMCwxODEsMTQxLjg3YTkxLjk0LDkxLjk0LDAsMCwwLDMwLjk1LTI0LjM3LDgzLjc3LDgzLjc3LDAsMCwwLDEyLjMtMTksMTA1Ljc1LDEwNS43NSwwLDAsMCw4LjY4LTMyLDEzMC4xNCwxMzAuMTQsMCwwLDAtLjE0LTI4LjMyYy0uMjMtMi4yNy0xLjItMy4yMS0zLjI2LTMuNTgtNS4yNy0uOTMtMTAuNTMtMi0xNS43LTMuMjQtMTMuNTMtMy4yOC0yNy4xNy02LjA1LTQwLjczLTkuMjEtNC44Mi0xLjEyLTkuNjYtMi4xMy0xNC40OS0zLjIsMy41NSwzLjM4LDcuMzYsNi4xNiwxMSw5LjFDMTc2LjE3LDMzLjI2LDE4Mi42MiwzOC42MiwxODcuODksNDUuMjNaIiBmaWxsPSIjMDBiMzlmIi8+PHBhdGggZD0iTTM5LDE2Mi40OEM0My4xMiwxNDUsNTAsMTI5LDY0LjE1LDExNy4yNWMxMi45LTEwLjc0LDI3LjUxLTE0LjA5LDQzLjYyLTguNTIsOC4xMiwyLjgyLDE1LjA5LDcuMzYsMTguNzksMTUuNjNhOS4yMyw5LjIzLDAsMCwxLC43OSwyLjMxLDE2LjIsMTYuMiwwLDAsMSw5LjIyLTQuMzdjLS4yMS0uMTQtLjQzLS4zLS42Ny0uNDktNS00LTkuNjUtOC4zMS0xNS4zOS0xMS4yMy0yMC40Mi0xMC40MS00MS44Ny0xMS43NS02My42Ni02LjItMjMuMTEsNS44OS00MSwxOS45LTU1LjY1LDM4LjM2LTEuNjQsMi4wNi0xLjUxLDMuNC0uMTYsNS41QzEyLjQyLDE2NS45MSwyMy42OCwxODMuNjgsMzUsMjAxLjRjMS40OSwyLjM1LDMuMDUsNC42Niw1LjA5LDcuNzYuMjItNS4yMy0uODktOS40MS0xLjQ4LTEzLjYxQzM3LjA1LDE4NC40OSwzNi4zNSwxNzMuNDgsMzksMTYyLjQ4WiIgZmlsbD0iIzAwZDNhOSIvPjxwYXRoIGQ9Ik03My43NywzOS43NWEyMTQuNTEsMjE0LjUxLDAsMCwxLDIzLjcyLTIuNjJjNy4yMS0uNCwxNC4yNSwxLDIxLjIyLDIuODQsMTYuNSw0LjMyLDMxLjMxLDExLjU2LDQyLjE2LDI1LjIxLDEwLjM2LDEzLDEyLjg1LDI3LjY2LDcuMjksNDMuMzQtMi44NCw4LTcuNjUsMTQuNjYtMTUuODUsMTguMjhhNC44Niw0Ljg2LDAsMCwxLTEuODUuNDgsMTYuMjYsMTYuMjYsMCwwLDEsNC4zOCw5LjU2LDEzLDEzLDAsMCwxLDEuMjUtMS42OGM2LTcuMTUsMTEuNDUtMTQuNjUsMTQuNTctMjMuNmE5My4zMSw5My4zMSwwLDAsMCw1LTM2LjYsODkuMyw4OS4zLDAsMCwwLTktMzQuOTNDMTU5LDI0LjU3LDE0OCwxMS44NCwxMzQuNSwxLjE0Yy0yLTEuNi0zLjQ3LTEuNDEtNS41Ny0uMDdDMTExLjU5LDEyLjIzLDk0LjE0LDIzLjIzLDc2Ljc3LDM0LjMzYy0yLjcsMS43My01LjU5LDMuMjMtOC4yLDUuNjhBMjMuODQsMjMuODQsMCwwLDAsNzMuNzcsMzkuNzVaIiBmaWxsPSIjMDBkM2E5Ii8+PHBhdGggZD0iTTI1LDExMS42MmM2LjgzLTguNjQsMTMuMzQtMTcuNTcsMjIuNTUtMjQsMTctMTEuNzksMzUuMzYtMTkuNDUsNTYuNDctMTYuNDksMTcsMi4zOCwyOS4yOSwxMS42NSwzNS40MywyOCwyLjYzLDcsMy40NiwxNC4zMS4zNywyMS41OGE2LjQ4LDYuNDgsMCwwLDEtLjc1LDEuMzksMTYuMjYsMTYuMjYsMCwwLDEsOS42MSwzLjQ2LDYuNSw2LjUsMCwwLDEtLjE4LS43M2MtLjE2LS44OS0uMTYtMS44MS0uMjMtMi43MWE3My45Miw3My45MiwwLDAsMC00LjI5LTIxYy01LjQ2LTE0LjM4LTE0LjgxLTI1Ljc5LTI2LjM0LTM1LjcyLTE3LTE0LjY0LTM3LTIwLjkyLTU5LTIxLjc2YTExMS4wNiwxMTEuMDYsMCwwLDAtMTguNzYuNTJjLTQuMzIuNTYtNC42NC42MS01LjU3LDQuODRxLTYsMjcuNTEtMTIuMSw1NWMtMS4wNSw0Ljc4LTIuMDcsOS41Ni0zLjI1LDE1QzIxLjY4LDExNi42MywyMy4xMywxMTQsMjUsMTExLjYyWiIgZmlsbD0iIzAwYjM5ZiIvPjxwYXRoIGQ9Ik0yNzYuMTcsMTI4LjkzYy0xMS40MS0xNy43Ni0yMi43LTM1LjYxLTM0LjEtNTMuMzktMS41MS0yLjM2LTIuNzItNS01LjI1LTcuNjEuNzMsNi4yLDEuMjUsMTEuNiwyLDE3LDEuNTksMTEuMiwxLjU4LDIyLjI5LTEuMzgsMzMuMzEtNC42NSwxNy4zLTEyLjM5LDMyLjY4LTI3LDQzLjg1YTQ0LjQ3LDQ0LjQ3LDAsMCwxLTI3LjEyLDkuMDYsNDAuNjMsNDAuNjMsMCwwLDEtMTkuNzItNS4yMmMtNS4zNi0yLjg4LTkuOTMtNi42Mi0xMi42My0xMi4yNS0uODUtMS43Ny0xLjIxLTIuODUtLjk0LTMuNTdhMTYuMjIsMTYuMjIsMCwwLDEtOS43Myw0LjY0LDI1LjI4LDI1LjI4LDAsMCwxLDIuNzMsMmM1LjEsNC4xNSwxMC4xOSw4LjMsMTYuMTksMTEuMTUsMTYuNzEsNy45NCwzNC4zNiw5LjYzLDUyLjMzLDYuNzksMjcuMS00LjI3LDQ3LjY0LTE5LjQ4LDY0LjQ4LTQwLjM5QzI3Ny42NCwxMzIuNCwyNzcuNDYsMTMwLjkzLDI3Ni4xNywxMjguOTNaIiBmaWxsPSIjMDBkM2E5Ii8+PHBhdGggZD0iTTI0MC4yNSwxODAuMTVjLTE2LjgxLDE2Ljg4LTM2LjkzLDI2LjMxLTYxLjE2LDI2LjM4LTE2LjkuMDUtMzQuOC0xMS4wNS00MC44MS0yNy4zNS0yLjQ4LTYuNzQtNC4xMy0xMy41OC0xLjU3LTIwLjY5YTEzLjU3LDEzLjU3LDAsMCwxLDEuNjUtMy42NywxNi4zLDE2LjMsMCwwLDEtMTAuMDgtMy42NywxMC40OCwxMC40OCwwLDAsMSwuNTYsMi44MWMuNTMsNS4yMS44MSwxMC41LDIuMzcsMTUuNTMsOC4zMiwyNi44MywyNi4yMSw0NS4xOSw1MS40OSw1Ni4zMSwxNi4xNSw3LjExLDMzLjM0LDkuMjgsNTEsNy40NCw3Ljg5LS44Miw3Ljk0LS42OCw5LjUxLTcuNTksNC4zNC0xOS4xLDguNy0zOC4xOSwxMi45LTU3LjMxLjcxLTMuMjIsMi02LjQsMS45My0xMC41NS0xLDEuMzQtMS41MywyLTIsMi43NkMyNTEuMSwxNjcuMzgsMjQ2LjE1LDE3NC4yMiwyNDAuMjUsMTgwLjE1WiIgZmlsbD0iIzAwYjM5ZiIvPjxwYXRoIGQ9Ik05Mi4xNiwyMzUuMjdhODcuNTgsODcuNTgsMCwwLDEtMTctMjkuNDhjLTMuNjYtMTAuMzYtNS43OS0yMS00LTMyLjEyLDIuNTMtMTYuMTMsMTAuNzItMjguMTgsMjUuNzktMzQuOTIsNy4zMi0zLjI3LDE1LTQuODIsMjMtMS43N2ExMS40MiwxMS40MiwwLDAsMSwyLjQ4LDEuMTcsMTYuMjgsMTYuMjgsMCwwLDEsMy40Mi05LjY2LDEzLjYsMTMuNiwwLDAsMS0yLC4yNiw5OS42OCw5OS42OCwwLDAsMC0xMi44OCwxLjY0Yy0xNC43MiwzLjEyLTI2LjkyLDEwLjgyLTM3LjY3LDIxYTkwLjY0LDkwLjY0LDAsMCwwLTI3LjM4LDQ5LjI3QTEzMC44NSwxMzAuODUsMCwwLDAsNDQsMjM2LjEzYy4zNCw0LjYxLDIuMjUsNi4yNSw2Ljg2LDcuMTksMTkuMjgsMy45MiwzOC40NCw4LjQ4LDU3LjY2LDEyLjY4LDMuMjguNzEsNi40OSwxLjkzLDEwLjgzLDIuMDZsLTguMDYtNi4xNUMxMDQuNTgsMjQ2Ljc3LDk3LjgzLDI0MS42Myw5Mi4xNiwyMzUuMjdaIiBmaWxsPSIjMDBiMzlmIi8+PHBhdGggZD0iTTIwNy4xMywyMzYuODdjLTYuODYsMS4xOS0xMy43NiwyLTIwLjY4LDIuNzJhNzAuNjgsNzAuNjgsMCwwLDEtMTYuOTUsMCw5NS41Myw5NS41MywwLDAsMS0yMy4zMS02LjM4Yy0xMS42Mi00Ljg5LTIyLjE2LTExLjI5LTMwLTIxLjQ0LTkuNDQtMTIuMjUtMTIuNjItMjUuOS04LTQwLjc5LDIuNjMtOC40Myw3LTE1Ljk1LDE1LjUtMjBhNi42NSw2LjY1LDAsMCwxLDMuMy0xLDE2LjI2LDE2LjI2LDAsMCwxLTQuNjQtOS41LDE4LDE4LDAsMCwxLTEuMiwxLjU3Yy0zLjkyLDQuNzUtNy45Myw5LjQzLTEwLjc4LDE1LTYuODcsMTMuMzYtOS4zOCwyNy41Ni05LDQyLjVhODgsODgsMCwwLDAsNi43MSwzMi4xMWM3LjM4LDE3LjYyLDE5LjE0LDMyLDM0LDQzLjgxLDIuMzMsMS44Niw0LDIsNi42MS4zNiwxNS05Ljc0LDMwLjE2LTE5LjI2LDQ1LjI2LTI4Ljg3LDUtMy4xNywxMC02LjM4LDE1LTkuNjJBMS44MywxLjgzLDAsMCwwLDIwNy4xMywyMzYuODdaIiBmaWxsPSIjMDBkM2E5Ii8+PHBvbHlnb24gcG9pbnRzPSI2NDMuNjIgMTEwLjc5IDY0My42MiAxMTQuMjMgNjQzLjYyIDEzMC40MSA2NDMuNjIgMTUwLjE0IDY0My42MiAxNzguOTQgNzIwLjMgMTc4Ljk0IDcyMC4zIDE2Mi43NiA2NTkuOCAxNjIuNzYgNjU5LjggMTUwLjE0IDY1OS44IDE0Ni41OCA3MDYuMjggMTQ2LjU4IDcwNi4yOCAxMzAuNDEgNjU5LjggMTMwLjQxIDY1OS44IDExNC4yMyA3MjAuMyAxMTQuMjMgNzIwLjMgOTguMDUgNjQzLjYyIDk4LjA1IDY0My42MiAxMTAuNzkiIGZpbGw9IiMzYzQ5NGYiLz48cGF0aCBkPSJNMTAxNS45NCwxNTcuOGEyMC4zOCwyMC4zOCwwLDAsMS0xLjY3LDguMiwyMC44OSwyMC44OSwwLDAsMS00LjU5LDYuNzMsMjIuMDgsMjIuMDgsMCwwLDEtNi43NCw0LjUzLDIwLjU2LDIwLjU2LDAsMCwxLTguMjUsMS42OEg5MTl2LTE3aDc1LjdhNC4wNiw0LjA2LDAsMCwwLDQuMS00LjF2LTYuNThhNC4wNiw0LjA2LDAsMCwwLTQuMS00LjFIOTQwLjIzYTIwLjEzLDIwLjEzLDAsMCwxLTguMTktMS42NywyMS40MSwyMS40MSwwLDAsMS0xMS4zOC0xMS4zOCwyMC4xMywyMC4xMywwLDAsMS0xLjY3LTguMTlWMTE5LjNhMjAuNTIsMjAuNTIsMCwwLDEsMS42Ny04LjI1QTIxLjY0LDIxLjY0LDAsMCwxLDkzMiw5OS43MmEyMC4zLDIwLjMsMCwwLDEsOC4xOS0xLjY3aDc1LjcxVjExNS4ySDk0MC4yM2E0LjA2LDQuMDYsMCwwLDAtNC4xLDQuMXY2LjU4YTQsNCwwLDAsMCw0LjEsNC4wOWg1NC40NmEyMC43MywyMC43MywwLDAsMSw4LjI1LDEuNjdBMjEuODcsMjEuODcsMCwwLDEsMTAxNC4yNywxNDNhMjAuNzMsMjAuNzMsMCwwLDEsMS42Nyw4LjI1WiIgZmlsbD0iIzNjNDk0ZiIvPjxwYXRoIGQ9Ik03NDEuNjksMTEzLjQ4aDQxLjQ5VjEzMC4zSDc0OS43NnYxNS40Mmg3LjY2bDI5LjM0LDMzLjIyaDIwbC0yOS4zNC0zMy4yMmgxMS40NWExMi41NiwxMi41NiwwLDAsMCwxMi41Ni0xMi41NlYxMTAuNjFhMTIuNTYsMTIuNTYsMCwwLDAtMTIuNTYtMTIuNTZoLTYzdjgwLjg5SDc0MloiIGZpbGw9IiMzYzQ5NGYiLz48cGF0aCBkPSJNMzg0LDE0NS42aDEuMTZhMTIuMzcsMTIuMzcsMCwwLDAsMTIuNDYtMTIuNDdWMTEwLjUyYTEyLjM3LDEyLjM3LDAsMCwwLTEyLjQ2LTEyLjQ3aC02My4ydjgwLjg5aDE2LjIzbC0uMjktNjUuNTJoNDEuNDZ2MTYuNTJIMzQ2VjE0NS42IiBmaWxsPSIjM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSI0MjguOSA5OC4wNSAzOTYuNTQgMTc4Ljk0IDQxNSAxNzguOTQgNDM2Ljk5IDEyMi4zMiA0NTIuNjcgMTYyLjc2IDQyNy4xOCAxNjIuNzYgNDIxLjE0IDE3OC45NCA0NzcuNDQgMTc4Ljk0IDQ0NS4wOCA5OC4wNSA0MjguOSA5OC4wNSIgZmlsbD0iIzNjNDk0ZiIvPjxwYXRoIGQ9Ik01MTkuNjksOTguMDVoMzEuOTNWMTE1LjJINDcwLjcxVjk4LjA1aDQ5IiBmaWxsPSIjM2M0OTRmIi8+PHJlY3QgeD0iNTAyLjU5IiB5PSIxMjIuMzgiIHdpZHRoPSIxNy4xNSIgaGVpZ2h0PSI1Ni41NiIgZmlsbD0iIzNjNDk0ZiIvPjxwYXRoIGQ9Ik02MDYuMTQsOTguMDVoMzEuOTNWMTE1LjJINTU3LjE2Vjk4LjA1aDQ5IiBmaWxsPSIjM2M0OTRmIi8+PHJlY3QgeD0iNTg5LjA0IiB5PSIxMjIuMzgiIHdpZHRoPSIxNy4xNSIgaGVpZ2h0PSI1Ni41NiIgZmlsbD0iIzNjNDk0ZiIvPjxwYXRoIGQ9Ik05MTMuNDQsMTc4Ljk0SDg5Ni4yOXYtNTlhNC41OCw0LjU4LDAsMCwwLS4zOC0xLjgzLDQuNzksNC43OSwwLDAsMC0yLjUzLTIuNTMsNC41OSw0LjU5LDAsMCwwLTEuODQtLjM4SDgxMi4yOFY5OC4wNWg3OS4yNkEyMS4xMSwyMS4xMSwwLDAsMSw5MDAsOTkuNzhhMjEuNjgsMjEuNjgsMCwwLDEsMTEuNywxMS43LDIxLjA5LDIxLjA5LDAsMCwxLDEuNzMsOC40NlptLTc1Ljc2LDBIODIwLjUzVjEyNC4xOGgxNy4xNVoiIGZpbGw9IiMzYzQ5NGYiLz48L3N2Zz4=",alt:"pattern"})),i.createElement(N,{onClick:function(){return n(!M)}},console.log(M),i.createElement(I,{open:M})),i.createElement(c,{open:M},i.createElement(u,{to:"/chapters"},"Book Chapters"),i.createElement(u,{to:"/"},"Meet the Authors"),i.createElement(u,{to:"/"},"Patterns in action"),i.createElement(u,{to:"/about"},"About ",i.createElement("img",{className:"layer5",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1NzYuOSA5NC4xOSI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMSB7CiAgICAgICAgICAgICAgICBmaWxsOiAjM2M0OTRmCiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5jbHMtMiB7CiAgICAgICAgICAgICAgICBmaWxsOiAjMDBiMzlmCiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5jbHMtMyB7CiAgICAgICAgICAgICAgICBmaWxsOiAjMDBkM2E5CiAgICAgICAgICAgIH0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHRpdGxlPmxheWVyNS1uby10cmltPC90aXRsZT4KICAgIDxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBjbGFzcz0iY2xzLTEiIC8+CiAgICA8cG9seWdvbgogICAgICAgIHBvaW50cz0iMTM1Ljg0IDAgOTguMzMgOTMuNzggMTE5LjcyIDkzLjc4IDE0NS4yMiAyOC4xNCAxNjMuMzkgNzUuMDMgMTMyLjIyIDc1LjAzIDEyNS4yMiA5My43OCAxOTIuMTEgOTMuNzggMTU0LjU5IDAgMTM1Ljg0IDAiCiAgICAgICAgY2xhc3M9ImNscy0xIiAvPgogICAgPHBvbHlnb24KICAgICAgICBwb2ludHM9IjIxOC41OCAzMi44MyAxOTUuMTQgMCAxNzEuNjkgMCAyMDkuMiA1Ni4yNyAyMDkuMiA5My43OCAyMjcuOTYgOTMuNzggMjI3Ljk2IDU2LjI3IDI2NS40NyAwIDI0Mi4zMiAwIDIxOC41OCAzMi44MyIKICAgICAgICBjbGFzcz0iY2xzLTEiIC8+CiAgICA8cG9seWdvbgogICAgICAgIHBvaW50cz0iMjczLjU2IDE0Ljc3IDI3My41NiAxOC43NiAyNzMuNTYgMzcuNTEgMjczLjU2IDYwLjM5IDI3My41NiA5My43OCAzNjIuNDYgOTMuNzggMzYyLjQ2IDc1LjAzIDI5Mi4zMiA3NS4wMyAyOTIuMzIgNjAuMzkgMjkyLjMyIDU2LjI3IDM0Ni4yMSA1Ni4yNyAzNDYuMjEgMzcuNTEgMjkyLjMyIDM3LjUxIDI5Mi4zMiAxOC43NiAzNjIuNDYgMTguNzYgMzYyLjQ2IDAgMjczLjU2IDAgMjczLjU2IDE0Ljc3IgogICAgICAgIGNsYXNzPSJjbHMtMSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTM5Mi45MiwxNy44OEg0NDFWMzcuMzlIMzk4LjEybC4xOCwxNy44OGgxMi44N2wzNCwzOC41MWgyMy4xNmwtMzQtMzguNTFoMTMuMjdhMTQuNTYsMTQuNTYsMCwwLDAsMTQuNTctMTQuNTZWMTQuNTdBMTQuNTcsMTQuNTcsMCwwLDAsNDQ3LjU5LDBoLTczVjkzLjc4aDE4Ljc2WiIKICAgICAgICBjbGFzcz0iY2xzLTEiIC8+CiAgICA8cmVjdCBpZD0iX1BhdGhfIiB3aWR0aD0iMzYuOTMiIGhlaWdodD0iMTcuNzkiIHg9IjUzNi42MSIgeT0iLjQiIGNsYXNzPSJjbHMtMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIC8+CiAgICA8cGF0aCBpZD0iX1BhdGhfMiIgZD0iTTU3Ni45LDYwLjMzVjUzYzAtOC40OS03LjE0LTE1LjM3LTE1Ljk0LTE1LjM3aC01OS42VjMyLjc0SDQ3OS41NHYyMWg3NS41NHY2LjU3WiIgY2xhc3M9ImNscy0yIgogICAgICAgIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiAvPgogICAgPHBvbHlnb24gaWQ9Il9QYXRoXzMiIHBvaW50cz0iNTAxLjM2IDI2LjkzIDUwMS4zNiAxOC4xOSA1MzAuNTggMTguMTkgNTMwLjU4IC40IDQ3OS41NCAuNCA0NzkuNTQgMjYuOTMgNTAxLjM2IDI2LjkzIgogICAgICAgIGNsYXNzPSJjbHMtMyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIC8+CiAgICA8cGF0aCBpZD0iX1BhdGhfNCIgZD0iTTU1NS4wOCw2Ni4wNVY3Ni40SDUyNS44NlY5NC4xOWgzNmExNC43NywxNC43NywwLDAsMCwxNS0xNC40OVY2Ni4wNVoiIGNsYXNzPSJjbHMtMyIKICAgICAgICBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgLz4KICAgIDxwYXRoIGlkPSJfUGF0aF81IiBkPSJNNDk5LjYxLDY3Vjc2LjRoMjAuMjJWOTQuMTloLTI2YTE0Ljc3LDE0Ljc3LDAsMCwxLTE1LTE0LjQ5VjY3WiIgY2xhc3M9ImNscy0yIgogICAgICAgIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiAvPgo8L3N2Zz4=",alt:"Layer5 logo"})),i.createElement(w.Z,{secondary:!0,title:"Get it Now",url:"/"})))},D=n(2530),o=n.p+"static/cover-4c532f3844883ffe524e2c2bc33d756b.png",A=a.default.section.withConfig({displayName:"herostyle__HeroStyleWrapper",componentId:"sc-1p5yesj-0"})(["\n    width: 100%;\n    background-color: #00B39F;\n    color: #FFF;\n    display: flex;\n    position: relative;\n    margin: 0 auto 2rem;\n    \n    .content {\n        display: flex;\n        justify-content: space-between;\n        margin-inline: 10%;\n    }\n\n    .info {\n        width: 50%;\n        display: flex;\n        flex-direction: column;\n        gap: 1em;\n        margin-top: 4.5rem;\n        align-self: center;\n        @media(max-width: 1200px) {\n            width: 90%;\n        }\n    }\n    \n    .title {\n        color: #fff;\n        font-size: 3.5rem;\n        margin-bottom: .5rem;\n        @media(max-width: 750px) {\n            font-size: 2.5rem;\n        }\n    }\n\n    .description {\n        color: rgba(255, 255, 255, 0.85);\n        font-style: italic;\n        font-size: 1.5rem;\n        font-weight: 200;\n    }\n\n    .credit {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n\n        .junction {\n            margin: 0 1rem;\n            color: rgba(255, 255, 255, 0.85);\n            font-style: italic;\n            font-weight: 400;\n        }\n\n        .by-junction {\n            margin-right: 1rem;\n            color: rgba(255, 255, 255, 0.85);\n            font-style: italic;\n            font-weight: 400;\n        }\n    }\n    \n    .author {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        gap: .75em;\n\n        @media(max-width: 500px) {\n            width: auto;\n        }\n\n        .icon {\n            min-width: 40%;\n        }\n\n        .name {\n            margin-top: 1rem;\n            font-weight: bold;\n        }\n    }\n\n    .graphic {\n        position: absolute;\n        bottom: -150px;\n        right: 0px;\n        height: 100%;\n        mix-blend-mode: soft-light;\n    }\n\n    .cover{\n        position: relative;\n        right: -5rem;\n        top: 2.5rem;\n        z-index: 2;\n        width: 38%;\n        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);\n    }\n\n    @media(max-width: 1200px) {\n        margin: 0 auto 6rem;\n\n        .content {\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .cover {\n            top: 3rem;\n            width: 70%;\n            right: 0;\n        }\n    }\n"]),l=n(7059),y=function(){return i.createElement(A,null,i.createElement("img",{className:"graphic",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI0NzMiIHZpZXdCb3g9IjAgMCAxNDQwIDQ3MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNvZnQtbGlnaHQiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0yMDQgMzE0LjYwMkwtOTguNzI1IDMyNC4zMkM2LjU1MDAzIDMzMi44MjMgMjE3LjEgMzQ5LjgyOCA0MjcuNjUgMjk3LjU5N0M2MzguMiAyNDUuMzY1IDg0OC43NSAxMjIuNjgzIDEwNTkuMyA3MC40NTE1QzEyNjkuODUgMTguMjIwMiAxNDgwLjQgMzUuMjI1NyAxNjkwLjk1IDM1LjIyNTdDMTkwMS41IDM1LjIyNTcgMjExMi4wNSAxOC4yMjAyIDIyMTcuMzMgOC41MDI3NkwyMzIyLjYgMFY0NzIuNTExSDIyMTcuMzNDMjExMi4wNSA0NzIuNTExIDE5MDEuNSA0NzIuNTExIDE2OTAuOTUgNDcyLjUxMUMxNDgwLjQgNDcyLjUxMSAxMjY5Ljg1IDQ3Mi41MTEgMTA1OS4zIDQ3Mi41MTFDODQ4Ljc1IDQ3Mi41MTEgNjM4LjIgNDcyLjUxMSA0MjcuNjUgNDcyLjUxMUMyMTcuMSA0NzIuNTExIDYuNTUwMDMgNDcyLjUxMSAtOTguNzI1IDQ3Mi41MTFILTIwNFYzMTQuNjAyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzg2MjFfMTM5MjgpIi8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNvZnQtbGlnaHQiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0yMDQgMTU4LjE0TC05OC43MjUgMTg0LjM3N0M2LjU1MDAyIDIxMC42MTQgMjE3LjEgMjYzLjA4OCA0MjcuNjUgMjk4LjA3MUM2MzguMiAzMzMuMDU0IDg0OC43NSAzNTAuNTQ1IDEwNTkuMyAyOTguMDcxQzEyNjkuODUgMjQ1LjU5NyAxNDgwLjQgMTIzLjE1NyAxNjkwLjk1IDg4LjE3NDJDMTkwMS41IDUzLjE5MTMgMjExMi4wNSAxMDUuNjY2IDIyMTcuMzMgMTMxLjkwM0wyMzIyLjYgMTU4LjE0VjQ3Mi45ODVIMjIxNy4zM0MyMTEyLjA1IDQ3Mi45ODUgMTkwMS41IDQ3Mi45ODUgMTY5MC45NSA0NzIuOTg1QzE0ODAuNCA0NzIuOTg1IDEyNjkuODUgNDcyLjk4NSAxMDU5LjMgNDcyLjk4NUM4NDguNzUgNDcyLjk4NSA2MzguMiA0NzIuOTg1IDQyNy42NSA0NzIuOTg1QzIxNy4xIDQ3Mi45ODUgNi41NTAwMiA0NzIuOTg1IC05OC43MjUgNDcyLjk4NUgtMjA0VjE1OC4xNFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl84NjIxXzEzOTI4KSIvPgo8L2c+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpzb2Z0LWxpZ2h0Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0tMjA0IDI2Mi44NkwtOTguNzI1IDI4OS41ODNDNi41NTAwMyAzMTUuMDkyIDIxNy4xIDM2OC41MzcgNDI3LjY1IDM5NC4wNDZDNjM4LjIgNDIwLjc2OSA4NDguNzUgNDIwLjc2OSAxMDU5LjMgMzU4LjgyQzEyNjkuODUgMjk4LjA4NiAxNDgwLjQgMTc1LjQwMyAxNjkwLjk1IDE2Ni45QzE5MDEuNSAxNTguMzk4IDIxMTIuMDUgMjYyLjg2IDIyMTcuMzMgMzE1LjA5MkwyMzIyLjYgMzY4LjUzN1Y0NzNIMjIxNy4zM0MyMTEyLjA1IDQ3MyAxOTAxLjUgNDczIDE2OTAuOTUgNDczQzE0ODAuNCA0NzMgMTI2OS44NSA0NzMgMTA1OS4zIDQ3M0M4NDguNzUgNDczIDYzOC4yIDQ3MyA0MjcuNjUgNDczQzIxNy4xIDQ3MyA2LjU1MDAzIDQ3MyAtOTguNzI1IDQ3M0gtMjA0VjI2Mi44NloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl84NjIxXzEzOTI4KSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfODYyMV8xMzkyOCIgeDE9IjEwNTkuMyIgeTE9IjAiIHgyPSIxMDU5LjMiIHkyPSI0NzIuNTExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEIzOUYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBCMzlGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzg2MjFfMTM5MjgiIHgxPSIxMDU5LjMiIHkxPSI3Ni41MjQ5IiB4Mj0iMTA1OS4zIiB5Mj0iNDcyLjk4NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBEM0E5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRDNBOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl84NjIxXzEzOTI4IiB4MT0iMTA1OS4zIiB5MT0iMTY2LjQxMSIgeDI9IjEwNTkuMyIgeTI9IjQ3MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBEM0E5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRDNBOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",alt:"Hero Section Graphic"}),i.createElement("section",{className:"content"},i.createElement("div",{className:"info"},i.createElement("h1",{className:"title"},"Service Mesh Patterns"),i.createElement("p",{className:"description"},"Best patterns and practices for getting the most out of Istio, Linkerd, Consul, App Mesh, or any service mesh, including those using Envoy and WebAssembly."),i.createElement("div",{className:"credit"},i.createElement("p",{className:"by-junction"},"By"),i.createElement("div",{className:"author"},i.createElement(l.S,{className:"icon",src:"../../assets/images/lee_calcote.png",alt:"Lee Calcote",__imageData:n(6885)}),i.createElement("p",{className:"name"},"Lee Calcote")),i.createElement("p",{className:"junction"},"and"),i.createElement("div",{className:"author"},i.createElement(l.S,{className:"icon",src:"../../assets/images/nic_jackson.png",alt:"Nic Jackson",__imageData:n(8189)}),i.createElement("p",{className:"name"},"Nic Jackson")))),i.createElement("img",{className:"cover",src:o,alt:"service mesh pattern book cover"})))},x=a.default.section.withConfig({displayName:"aboutstyle__AboutStyleWrapper",componentId:"sc-l9xaci-0"})(['\n\n    margin: 4rem auto;\n\n    .heading{\n        font-size: 2.75rem;\n        margin-bottom: 1rem;\n    }\n\n    .green{\n        color: #00B39F;\n    }\n\n    .subhead{\n        margin: 2rem auto 1rem;\n    }\n\n    ul {\n        list-style: none;\n        padding-left: 1.5rem;\n    }\n\n    li::before {\n        content: "•";\n        color: #00B39F;\n        margin: 0.5em;\n        font-size: 1.5rem;\n        top: 2px;\n        position: relative;\n    }\n\n    @media screen and (max-width: 700px) {\n        li {\n            display: flex;\n            \n            &::before {\n                margin: 0 0.5rem;\n            }\n        }\n    }\n\n    .book-quote{\n        p {\n            margin-left: 2rem;\n            \n            &:first-child::before {\n                content: url(',");\n                position: absolute;\n                left: 0;\n                margin-top: -0.25rem;\n            }\n            \n            &:last-child::after {\n                content: url(",");\n                position: relative;\n                margin-left: 0.5rem;\n            }\n        }\n    }\n"],"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGjSURBVHgBlVTLVcMwEBzZ5p4S3AEpIQ0QkgoSP7jnUQGkAuAM79mpICHAGVMBoQOX4DOOJaQ4/kurZA566/WuZmckm8GGdejDQwjBVxjfRNb6jzAER4ocS0yDtEwzK4mLL1nlHzMb7HEnN0iMJALz484JslzW3m6KRzPJQJL8NEhKpFLdUqp7amXfw3u5PvT2YYiQYenABGVXn0RhAMdZnESicFSoJyoaJzCBS/9LKHtNJApKkbTa672wNya4CqLqWZ0hhawYqk/k4ZFsFAiquFDuwzxUVF6ctnXbcA7KMiCWauJDpJSXN8yErLbY60ywIBsFVqg7ZzhRjUKtaP0ykuuQaEwwbpzNGWraRBfejGzMxVsVb18nhqtfYtf9qGsijhEoOGxTx+41WcvFd6/9sH6GQ8uEqC7BuUO1iPLcB424itSvyTbUXlqnJRJsSDZy8dvYha4tzifVE3nOJdnKRFLFrmMjSnXJgohbrGBObYVgdG1LfZeI+n4Ump47jFbPWawnUjeORtrxfGCpT3RJD3/yhdv4UeqImhB4BoVpsNOl/wEPhosT2p+ITgAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBjVXLcYMwEH0IfHcJ7iDuwOScz9gVBCpwCYEKMj4nMzgV4MSTc1wCJZAOfLdBWRlbFiAtfgdmtezT210twoMNeTbGCG9wwUOJhzjV6222JN/UGX9AGtjfHKeQQeQk1vKr44kgGSFgJaxuX3Ak0KZlx8PHL+LCJTRjiZ4stf2T8SJAoR52oRpjsEKi0HZVTdhYKf/cQkOtOOIqJEUIXshRUdMKrqI99XyvV8K7A4daOIQq3NRzA0PxpV1IgB8EWV9HO38PwVWvvjeaOLuQxBwcKrHT9ih4AQ8d2xb6zqJbMzyhRggOEp8XM+hsxGdYI20l5WECLqnHeNcXavodssSneG14XnFrUjBbN9Rvk5h/zAereW4lda4ozybUz4glmtX4vvtmV5CIuy5xlstY4gH32h46G7qpKaldX6iZtJAhpjRppbF2n42q/IjE9krQTbChWlcO4pqyS3rC/d+Ewv5UuXk9tba6QJ2Tj1+jLQVlZyeqP3AgE6IvtU9iQQOwgQNez7PNEnrOSCTutAwWwSY5VWVnyrr4B+VqhPmx6OrNAAAAAElFTkSuQmCC"),T=n(3366),m=["children"],C=a.default.div.withConfig({displayName:"Container__ContainerWrapper",componentId:"sc-zdopju-0"})(["\n\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin: 0 auto;\n    @media (min-width: 576px) {\n        max-width: 100%;\n    }\n    @media (min-width: 768px) {\n        max-width: 720px;  \n    }\n    @media (min-width: 992px) {\n        max-width: 960px; \n    }\n    @media (min-width: 1200px) {\n        max-width: 1170px; \n    }\n\n    ","\n    a.mute {\n    text-decoration: none;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n  a.highlight {\n    color: ",';\n    background-color: "#eeeeee";\n    border-radius: 8px;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    &:hover {\n      color: ',";\n    }\n  }\n  .highlight {\n    color: ",';\n    background-color: "#eeeeee";\n    border-radius: 8px;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n'],(function(e){return e.fluid&&(0,a.css)(["\n        max-width: 100%; \n    "])}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.keppelColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.keppelColor}),(function(e){return e.theme.primaryColor})),z=function(e){var M=e.children,n=(0,T.Z)(e,m);return i.createElement(C,n,M)},E=function(){return i.createElement(z,null,i.createElement(x,null,i.createElement("h1",{className:"heading"},"About the ",i.createElement("span",{className:"green"},"Service Mesh Patterns")," Book"),i.createElement("section",null,i.createElement("p",null,"A service mesh is a layer in your infrastructure that facilitates communication between services and so much more. Its value is enormous, and the value you derive from one is very much related to what role you play in the design, implementation, and operations of your cloud native applications and infrastructure."),i.createElement("p",null,"As your organization adopts microservices, you also need a service mesh, the infrastructure layer that handles interservice communication in microservice architectures. This seminal book provides patterns and operational best practices to help you deploy and use service meshes in a way that meets your company's goals and needs."),i.createElement("p",null,"Developers face a wide range of choices today: which service mesh to use, which features to deploy, and the best ways to exploit and deploy those features. Whether you're investigating service meshes or already use one, authors Lee Calcote and Nic Jackson provide universal patterns applicable to any service mesh: Istio, Linkerd, Consul, App Mesh, and more.")),i.createElement("ul",null,i.createElement("li",null,"Get a vendor-neutral perspective on where each mesh shines (and perhaps, doesn't)."),i.createElement("li",null,"Understand how service meshes benefit developers, operators, and service owners differently."),i.createElement("li",null,"Determine whether you're running your mesh effectively."),i.createElement("li",null,"Avoid service mesh lock-in through use of service mesh abstractions."),i.createElement("li",null,"Learn common deployment patterns for implementing a specific service mesh function."),i.createElement("li",null,"Use configuration best practices to avoid common pitfalls."),i.createElement("li",null,"Explore federation of service mesh deployments and other service mesh types.")),i.createElement("p",null,"As microservices proliferate your environment, fear not: service meshes are here to manage your service sprawl. This book shows you how."),i.createElement("h2",{className:"subhead"},"Who is this book for?"),i.createElement("div",{className:"book-quote"},i.createElement("p",null,"Identifying who this book is for has been one of the hardest challenges in writing it. The power of a service mesh is vast, and therefore, empowers individuals of many different roles."),i.createElement("p",null,"In short, this book is for anyone delivering workloads enabled by a service mesh and who wants to ensure their use of a service mesh provides the most possible value to the workloads and teams that rely on it."))))},d=function(){return i.createElement(i.Fragment,null,i.createElement(L.Z,{title:"Service Mesh Patterns",description:"Service Mesh Patterns - Expect more from your infrastructure",schemaMarkup:{"@context":"https://schema.org","@type":"Book",name:"Service Mesh Patterns",url:"https://service-mesh-patterns.github.io/service-mesh-patterns/",logo:"https://service-mesh-patterns.github.io/service-mesh-patterns/images/service-mesh-pattern.png",sameAs:["https://github.com/service-mesh-patterns/service-mesh-patterns"]}}),i.createElement(t.Z,null,i.createElement(r,null),i.createElement(y,null),i.createElement(E,null),i.createElement(D.Z,null)))}},8189:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAADvElEQVQ4y3WVXyj7bxTHP7uTlKTWJFISSpIZiqtdSC4kV5oLE3GBkOJWGXcTnylu5tbERrtQu0H5N0VmtiS22b4Xy/wmhPB5Pud8O8/3+Wi/f0+d9Xye83len/c5z3nOJESUyACATCfm2YhoZYx5GGNxVVUVxpiiqmoCANzkA4AcsVcnjHOkjEVtbgGAiKqq+F8DALghYgwALBn7dBpQl6FSppcFTIlEIorD4VAHBwfB5XJBNBolkkImoASXtQj/BhQOgtEGtre3By0tLVBdXQ3d3d1gtVqhqqoKZmdniUTGAEARwmVN5U+YGTC4vb1FgjU2NoLb7eY73t/fcXFxEcvKysDr9XJ5jBETFJEGShVXmAMAMREqoxenp6fBZDLh8vIyhymKgt/f35hKpbC9vR07Ozs5TITMhMoIImZL4sRQyId0Og1tbW1oNpvR4/Hgr8Qv/vbT0xM+PDzg+Pg4VlRUYCKR4DxVVSEjdCsB3UI+B/r9fjAajdjV1YWjo6OkloMcDgd/7uvrQ71ejz6fjwO1sAXQQ0CqLS0E2NjYwOLiYlxZWcFwOIz7+/t4enqK6+vrSPlcWlrCvLw8nJ+fx4w8ajUWl7SkknQCrq6uYmlpKRKYxv39PQaDQby+vuZ53Nra4grHxsYySlPUEKLyA9QUbm5u8hytra3hy8sL3tzc4O7uLoe+vr6i0+nEkpISHvrHx8e/gSRTlAzJhmQyieXl5Tg5OYk0Pzw8xKOjIw6l56mpKczKysL+/n7+gX8AEwT0iFVFOKC3txfr6+sxEAjg1dUVXl5ecguFQkgVkJubizMzMz9RZRyKm0L+KRvynJ2dQXNzM1ZWVqLL5cLz83OkQiewLMtYUFCARUVFuL29/b9lk03NQCwwOsmmpiYw1hpxZ2eHh0ph09xut3NYTU0NHRKIVDEhiC5HDr96qqpa6DaEQiFlZGQE6urqsLa2Fo6Pj+Hi4oIrPDg4wIWFBSwsLATyPT4+anWoiJT9uXqSJOnoZ2hoSDYYDKROaW1tZQMDAxAKhSAYDMLd3R2cnJyAzWaDhoYGMJvNMDExwZLJpCJqUVZVlfdTyWKxcCopNZlMciwW4+UQj8eVaDSqxGIx3rYCgQD4fD41GAwq4XBYmZub46H7/X5Z28+Bw8PDks1m4yqFgzpPjL78+fmJb29v+Pz8jOm/0rywtZFMJiP5+fm8wdLwer1/GqzBYJB6enqkjo4OgvLFVCqVwxizinue0Joq1Sz9LXx9fZEvW6/X8x7odDolu93OG+xvB3vjE6PM8tAAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/a8b52/nic_jackson.png","srcSet":"/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/53973/nic_jackson.png 30w,\\n/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/7ab40/nic_jackson.png 60w,\\n/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/a8b52/nic_jackson.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/bde72/nic_jackson.webp 30w,\\n/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/927d1/nic_jackson.webp 60w,\\n/service-mesh-patterns/static/0f70f1c1a39e38901c8641e441773935/507b0/nic_jackson.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}')},6885:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFYklEQVQ4y02Te1BUdRTHf/uv4x9NEXvv7z7ZvffuC2gKfOYD0qwIa7RII8sFnZwRG60orfFBkmIvC0ickhkzi2mKR0H5mEHwNRaiMyImAsLyRp6tGQF7d3/f5q460x/fmfPHOZ9zvmfOITrPk/syKLUZPE/clJuh8bxfo3xlsq50J2uCuTjeaabN8vXEq3KFw875E2VhpkF5YvDUpnF2m8ZzROM4ch9mcz4cS3QrgfKZOqUdPlnAkgQVr6c+gsxZTmxNm4Wt6XOwPEmDW6TQeT4QzeUp0ewxFszm5OxRoE2LtRMXpVZcZFAKXaBYZFDzzScSzfLNL0XO7t/GWn84wM5/lMu+WPO0mf6YZhqUh26J54o0GkvUmFhyFygINv1/MJcgmjrlwpvT5rOrJfks1HCMoaeZYbCNRa7UstGfDrLC7OeZR4wN65SaOs9D47iiu06pjegCtaxaNmEIgumSJKZxMSjJeYUNlX/FJhp+w3RfC6YH2zHZVIfxyoOsZucmluQU4eR4ZlBqOjkODs6e6YhOSPmZukADhijAJQphlyjCEDi2Y8UT6Pz2c6DtAjB8E+Fb7UBfM4InjuDQhtXwiBxz8jwMSsMaz8Npt3c4Y+0ziCEKfgtmSNZ0IjNEkS1yO7EnYxnOFLyN2v07cOnQJxg7V42KHZtxck8utj+XglSvAwmKwjSeZzrPmxrHWVA/MSSxwiWJcEmi6ZElpgkCW794Hn7etg7ni7fjl715CNSUYfzcL6j9vACVeVtRmrMaby19HLMNjd23fW+XlcQliT1RoCwxryKzOI7H2tQFKMvJxETDz0DXVUz9UYvpi7WYvFgHdDagetdGbFmWgvg41bJsASNRIM93E7csmW5ZgluWmEeRmS4IWBTvw76VS9B0YCcm6stQk5uFghXL0Hp4H0aPHcau5QvxZKIXDoHCHV2TwO6eEG/eBSoSLLteSWI+WYZbVvC0R8Wvm1aipeQd1O16A4dezcDpnVk4viUDaS4Z8apq1VirYi5RYNH7tYAeWe72KDI8shzxyjKzEn2qigRFwrbUR9Fd9hkmzlciePwbDFQdxIfpc+CjHDyyAm+0ucTuQa2H6CE+Ran0Kgq8qmomOBwsXlWYV3UgY1ka0uNd+GKjHy2lu9Fe9inK8nIx3yHDHafDI1CrMfOqCvPIknUhMEShgvhU1e+LU+FRZNNhj2VxMQ+xFS+uxQ9ff4eCVelIS0rGqtmP4dWF85CaEI9UjwvPPrMa85PnQ33wAaZzHPMpinnPvp8kJyTO8KpqxyOGB/61G8OlR6tRe2mQXW7uR0NpIb7ctAEZC1KwOuUp5L2Whc/WvIDCvcU4Un2N5ecXYvHchWH14YespwgkebwzSU7OeyQ7a1Nmzakr6AnCHPwH7OKNIDrHwf7q7mTXy4+gLD8fR3fvRW3JAVyv+p792dLHyuv6cGMArPFG0Px4fykWJM/JTJm7kJBVK9JtaUtTSf8/KAqMhhAYmTIvt98Ol51oYbkFVexY1Sl282w9aztZw8abLrC+3kFWfaGL/VTbFb7Uettsu2Wi9w6Ksv3ZZP26dTYSAQjuqXMkVNQbjODE713I+7LOLPj6nJm9vYYVl7exv/t7WXHxj5ElL39qynM3m1nvHkVj6230jIeL7tePRWAjrQNTpG1gyjY+CdI+NEkCI2Zm12goEJwGxqaAlr5J1DeP4YODp7E8uwTvF57CmaYxnLs63HGl805mY1swCrvUMmxruDZMSMdwiHQMRWW7OfSvLTASIi19kZk9o5P+/rHpisFgpOdC84BZVX/THLiD7rEQKkcn4Qcwo7F1nJxpGrL13wZpHwyR1oEQ+Q/Prie8XUIUawAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/a8b52/lee_calcote.png","srcSet":"/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/53973/lee_calcote.png 30w,\\n/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/7ab40/lee_calcote.png 60w,\\n/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/a8b52/lee_calcote.png 120w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/bde72/lee_calcote.webp 30w,\\n/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/927d1/lee_calcote.webp 60w,\\n/service-mesh-patterns/static/691b6f792d0dc9edead33711e735e895/507b0/lee_calcote.webp 120w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ba1bf75947c2356ec9a0.js.map