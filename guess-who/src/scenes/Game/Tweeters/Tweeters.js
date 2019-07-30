import React from 'react';

const Tweeters = () => {
    return (
        <div className="tweeters-container">
            <p className="tweeter-title">
                <i className="fab fa-twitter" alt="twitter icon"></i>
                Who Tweeted It?!
            </p>
            <div className="tweeters">
                <div className="tweeter">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAARVBMVEWHj5LK0tWEjI/O1NiFjZC2u7+orbHI0NOPl5qWn6LQ1tqiqq2LkpaxuLuaoKSBiYzCys2gp6qqsrW7w8attri4wcTAx8qAjcWBAAAC0ElEQVR4nO3a7Y6qMBSFYWiL0AIWQb3/Sz3dBR1nnEnAmHiyeZ8fk1EhgZV+7BaKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgtZ1706Qt/H+cPr2m7T1/62/gyvOj66Ut/F9OG8kVWS0PIGdht5ARNGbiUgW39ZpXVk4G0A+uNWyUaV5hoivRfry4Dt+pYd5rqeui7dLRRl8Fx1VzfXfPwae0ptYSdZnC9TwhHt892EEeZQK5TnUIYdtoXTLr51AtMl5pDOOobE9dk0KSS4BLTCT7dfb/TDNJxoxzXpPZQ7TSD1A4maQfHnbQD455SiTIeHArXDGk88PozMONwjr8cWNp6kJXCVf/c6KpgQ//UNi72ViA0+mukfLO2fyqgq7RctGUYUmmtux24YpLFsYTw9a1pOiNbTtUwTGlMUL5ecJ30eHtNf0J1GxNia+0Yb1uP+TTFGZhGamHbyrifQpi/Nz4Nh+H82GEUZ2C8RFCmhaHc5H1MGPJKqXo8TW0G8ZiH/fxxCcF8TQj28nCa1gziKd+rX3pAH/KYYFqJ4JJXjcVtrtCagZHVcTk0t44xjwm9lxmxnZfOdbOEoDQDd84TQvdVFsR+2Xe3aXCMrfxXL9tuOjOY+//0/cd+Hgnq/CH3lPqod27MA1+4/PjV5Zaw7Lkan0unk1QN+jJIo2Auip7WCLk7hHaplVLxIEcdosIMgp+Lw/GXbYQ4DuN9hDDzcWeN64U239rh152U7w/ZZTdRSid1GZRzfbzuhQIpFMpJ3R7KXBz+3DT5Q54w7aTteaMUP371ayVxtCqfvQ/NuieOyykKM9gWgVRLVl0GYd3zxoeTvLoMVj5zfRBlh11NBvk9lFOzVaduXqi309QXHO+lFYUPG99Ku6s/felv407Va/ptE+p/zcUXffrCAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzOP6XmKHV0kVbcAAAAAElFTkSuQmCC" className="profile-photo" />
                    <div className="tweeter-info">
                        <p className="tweet-name">Elizabeth Warren</p>
                        <p className="tweet-handle">@ewarren</p>
                    </div>
                </div>
                <div className="tweeter">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAARVBMVEWHj5LK0tWEjI/O1NiFjZC2u7+orbHI0NOPl5qWn6LQ1tqiqq2LkpaxuLuaoKSBiYzCys2gp6qqsrW7w8attri4wcTAx8qAjcWBAAAC0ElEQVR4nO3a7Y6qMBSFYWiL0AIWQb3/Sz3dBR1nnEnAmHiyeZ8fk1EhgZV+7BaKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgtZ1706Qt/H+cPr2m7T1/62/gyvOj66Ut/F9OG8kVWS0PIGdht5ARNGbiUgW39ZpXVk4G0A+uNWyUaV5hoivRfry4Dt+pYd5rqeui7dLRRl8Fx1VzfXfPwae0ptYSdZnC9TwhHt892EEeZQK5TnUIYdtoXTLr51AtMl5pDOOobE9dk0KSS4BLTCT7dfb/TDNJxoxzXpPZQ7TSD1A4maQfHnbQD455SiTIeHArXDGk88PozMONwjr8cWNp6kJXCVf/c6KpgQ//UNi72ViA0+mukfLO2fyqgq7RctGUYUmmtux24YpLFsYTw9a1pOiNbTtUwTGlMUL5ecJ30eHtNf0J1GxNia+0Yb1uP+TTFGZhGamHbyrifQpi/Nz4Nh+H82GEUZ2C8RFCmhaHc5H1MGPJKqXo8TW0G8ZiH/fxxCcF8TQj28nCa1gziKd+rX3pAH/KYYFqJ4JJXjcVtrtCagZHVcTk0t44xjwm9lxmxnZfOdbOEoDQDd84TQvdVFsR+2Xe3aXCMrfxXL9tuOjOY+//0/cd+Hgnq/CH3lPqod27MA1+4/PjV5Zaw7Lkan0unk1QN+jJIo2Auip7WCLk7hHaplVLxIEcdosIMgp+Lw/GXbYQ4DuN9hDDzcWeN64U239rh152U7w/ZZTdRSid1GZRzfbzuhQIpFMpJ3R7KXBz+3DT5Q54w7aTteaMUP371ayVxtCqfvQ/NuieOyykKM9gWgVRLVl0GYd3zxoeTvLoMVj5zfRBlh11NBvk9lFOzVaduXqi309QXHO+lFYUPG99Ku6s/felv407Va/ptE+p/zcUXffrCAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzOP6XmKHV0kVbcAAAAAElFTkSuQmCC" className="profile-photo" />
                    <div className="tweeter-info">
                        <p className="tweet-name">Pete Buttigieg</p>
                        <p className="tweet-handle">@PeteButtigieg</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweeters;