import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
        <footer className="bd-footer text-muted">
            <div className="container-fluid p-3 p-md-5">
                <ul className="bd-footer-links">
                    <li><a href="https://github.com/twbs">GitHub</a></li>
                    <li><a href="https://twitter.com/getbootstrap">Twitter</a></li>
                    <li><a href="/docs/4.5/examples/">Examples</a></li>
                    <li><a href="/docs/4.5/about/overview/">About</a></li>
                </ul>
                <p>Criado por PlanBwebApps.com.br <a href="https://www.planbwwebapps.com.br/">PlanB Team</a>.</p>
                
            </div>
        </footer>
        )
    }
}

export default Footer;
