import backgroundDefaultImage from '../assets/bannerBackground.jpg'

export function Banner({ img=backgroundDefaultImage, title, info }) {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="info">
                <label className="title">{title}</label>
                <p>{ info }</p>
            </div>
        </div>
    )
}