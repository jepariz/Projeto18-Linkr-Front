import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Lexend Deca', sans-serif;
	background-color: #F2F2F2;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	box-sizing: border-box;
}

.modal-overlay  {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: none;
	border-radius: 0;
	box-shadow: none;
	background: rgba(255, 255, 255, .9);
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	z-index: 99999;
}

.modal-content {
	width: 90%;
	max-width: 600px;
	position: relative;
	background: #333333;
	padding: 40px 0;
	display: flex;
	flex-direction: column;
	gap: 60px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	z-index: 99999;
}

.loading {
	background: linear-gradient(110deg, #d1d1d1 9%, #ececec 18%, #d1d1d1 33%);
  	animation: 1.5s shine linear infinite;
  	background-size: 200% 100%;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}


`;

export default GlobalStyle;
