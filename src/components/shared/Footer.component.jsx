export function Footer({ }) {
    
    const openChooseLanguage = (e) => {
        e.preventDefault()
    }

    return(
        <div className="footer dark">
            <div className="business">
                <h2>Top companies choose <a>Udemy Business</a> to build in-demand career skills.</h2>
                <div className="business-icons">
                    <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"/>
                </div>
            </div>
            <div className="actions">
                <div className="links">
                    <a>udemy business</a>
                    <a>teach on udemy</a>
                    <a>get the app</a>
                    <a>about us</a>
                    <a>contact us</a>
                    <a>career</a>
                    <a>blog</a>
                    <a>help and support</a>
                    <a>affiliate</a>
                    <a>investors</a>
                    <a>terms</a>
                    <a>privacy policy</a>
                    <a>cookie settings</a>
                    <a>site map</a>
                    <a>accessability statement</a>
                </div>
                <button className="leng" onClick={openChooseLanguage}> 🌐 English</button>
            </div>
            <div className="about">
                {/* <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" /> */}
                <div className="icon"></div>
                <label>© 2022 Udemy, Inc.</label>
            </div>
        </div>
    )
}