import { Button, Layout } from "antd";
import React from "react"
import { Link } from "react-router-dom";
import "./index.css";

export default function StartPage() {
return(
    <body className="bodyStartPage">
    <div>
        <div class="background"></div>
<div class="woolf"></div>

<div class="content-container">
	<div class="content">

		<h1 className="h1-SP">Welcome to BookTracking</h1>
		
		<h2 className="h2-SP">by Raul Ferent</h2>

		<h3 className="h3-SP">Get started here!</h3>

		<Button><Link to={'/Register'}>REGISTER</Link></Button>
        <Button><Link to={'/Login'}>LOGIN</Link></Button>
	</div>
    </div>
    </div>
    </body>
);
}
