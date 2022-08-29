const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

const auth = new OAuth2(
	MAILING_ID,
	MAILING_SECRET,
	'https://developers.google.com/oauthplayground'
);

exports.sendVerificationEmail = (email, name, url) => {
	auth.setCredentials({
		refresh_token: MAILING_REFRESH,
	});
	const accessToken = auth.getAccessToken();
	const smtpTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: EMAIL,
			clientId: MAILING_ID,
			clientSecret: MAILING_SECRET,
			refreshToken: MAILING_REFRESH,
			accessToken,
		},
	});
	const mailOptions = {
		from: EMAIL,
		to: email,
		subject: 'Verify your email',
		html: `<div style="max-width:700px; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; font-family:Roboto; font-weight: 600; color: #3b5998; "> <img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width: 30px;"></img> <span>Action required: Activate your Facebook Clone account</span> </div> <div style="padding: 1rem 0; border-top: 1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5; color: #141823; font-size: 17px; font-family: Roboto;"> <span>Hello ${name}</span> <div style="padding: 20px 0;"> <span style="padding: 1.5rem 0;">Please verify your email by clicking the link below</span> </div> <a href="${url}" style="width: 200px; padding: 10px 15px; background: #4c649b; color: #e5e5e5; text-decoration: none; font-weight: 600;">Confirm account</a> <br /> <div style="padding-top: 20px ;"><span style="margin: 1.5rem 0; color: gray">Facebook Clone by Bradon Siegle</span></div> </div>`,
	};
	smtpTransport.sendMail(mailOptions, (error, response) => {
		if (error) {
			return error;
		} else {
			return response;
		}
	});
};
