// // How to Use :

// const mailer = require("./mailer");
// await mailer(["email@hiascs.com", "email@hiascs.com"]);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		// from google smtp ,
		user: "techfest@opju.ac.in",
		pass: "goyw scee bzxo dflo", // from app passkeys
	},
});


async function makeMessage(recieversList, spoc_id, spoc_password) {
	try {
		const message = {

			from: '"UpStairs" <admin@upstairs.com>', // sender address

			to: recieversList, // list of receivers

			subject: "Your Email and password", // Subject line

			// text: This invitation is sent by ${user.userName}, // plain text body
			//     or
			html: `<b>This mail is sent by team upStairs </b>
			<p>You Have been enrolled as SPoC in our portal. Your Login ID and Password are:</p>
			<p>SPoC ID/ Login ID: <b> ${spoc_id}</b></p>
            <p>Password:<b> ${spoc_password} </b> </p>
            <p>Do not share your login ID or Password with Anyone.</p>
			<h3>Thank you</h3>
			`, // html body

			// attachments: [
			// 	{
			// 		filename: "Text.txt",
			// 		path: "./new.txt",
			// 	},
			// ],
		};

		return message;
	} catch (error) {
		return "error"
	}
}

// async..await is not allowed in global scope, must use a wrapper
async function mailer(listOfRecievers, spoc_id, spoc_password) {
	try {
    
		// send mail with defined transport object
		let message = await makeMessage(listOfRecievers, spoc_id, spoc_password);
		const info = await transporter.sendMail(message, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Message sent: %s", info.messageId);
			}
		});
		return info;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}

module.exports = mailer;