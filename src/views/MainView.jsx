/* eslint-disable react/no-unescaped-entities */
import icon1 from "../assets/icon_1.jpg";
import icon2 from "../assets/icon_2.jpg";
import icon3 from "../assets/icon_3.jpg";
import heroImage from "../assets/hero_image.jpg";
import locationIcon from "../assets/location_icon.png";
import phoneIcon from "../assets/phone_icon.png";
import timeIcon from "../assets/time_icon.png";
import map from "../assets/map.png";

function dateDifference(date1, date2, differenceFormat = "%y") {
	const datetime1 = new Date(date1);
	const datetime2 = new Date(date2);
	const diffTime = Math.abs(datetime2 - datetime1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	// Calculate years
	const diffYears = diffDays / 365;

	if (differenceFormat === "%y") {
		return Math.floor(diffYears);
	} else {
		// You can implement other formats as needed
		return "Format not supported";
	}
}

function App() {
	const fromYear = 1952;
	const yearCount = dateDifference(`${fromYear}-01-01`, new Date().toISOString().slice(0, 10), "%y");

	return (
		<div>
			<div className="navbar-wrapper">
				<div className="container">
					<nav
						id="topbar"
						className="navbar navbar-inverse navbar-static-top"
						style={{ backgroundColor: "#fff", borderColor: "#fff" }}
					>
						<div className="container">
							<div className="navbar-header">
								<button
									type="button"
									className="navbar-toggle collapsed hide"
									data-toggle="collapse"
									data-target="#navbar"
									aria-expanded="false"
									aria-controls="navbar"
								>
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div id="navbar" className="navbar-collapse collapse show">
								<div
									id="logo-mobile"
									style={{
										fontSize: "20px",
										textAlign: "center",
										color: "#c7254e",
										backgroundColor: "#fff",
										textShadow: "0px 0px 2px #ff000"
									}}
								>
									<b>Κρεοπωλείο "ο Κώστας"</b>
								</div>
								<div
									id="logo-desktop"
									style={{
										fontSize: "36px",
										textAlign: "center",
										color: "#c7254e",
										backgroundColor: "#fff",
										textShadow: "0px 0px 2px #ff000"
									}}
								>
									Κρεοπωλείο "ο Κώστας"
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<img className="hero" src={heroImage} />
			<div className="hero-caption">
				<>
					<h1>Από το {fromYear}</h1>
					<p>
						Είμαστε κοντά σας {yearCount} - γεμάτα απόλαυση - χρόνια, για να σας παρέχουμε ποιοτικά ελληνικά
						τρόφιμα.
					</p>
				</>
			</div>
			<div className="container marketing">
				<div className="row">
					<div className="col-lg-4">
						<img className="img-circle" src={icon1} alt="Κρέας" width="140" height="140" />
						<h2>Κρέας</h2>
						<p>Προσφέρουμε ποιοτικό, ελληνικό, γευστικό κρέας. Σας το φέρνουμε στην πόρτα σας.</p>
					</div>
					<div className="col-lg-4">
						<img className="img-circle" src={icon2} alt="Προϊόντα" width="140" height="140" />
						<h2>Προϊόντα</h2>
						<p>Είτε λάδι είτε τυρί, σε εμάς θα βρείτε τα καλύτερα προϊόντα της αγοράς, στην καλύτερη τιμή.</p>
					</div>
					<div className="col-lg-4">
						<img className="img-circle" src={icon3} alt="Κατεψυγμένα" width="140" height="140" />
						<h2>Κατεψυγμένα</h2>
						<p>Από ψαρικά Καλλιμάνη, μέχρι αρακά Μπαρμπαστάθη. Η υψηλότερη ποιότητα της αγοράς.</p>
					</div>
				</div>
				<hr className="featurette-divider" />
				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">
							Επισκεφθείτε μας. <span className="text-muted">Βρείτε ακριβώς αυτό που χρειάζεστε.</span>
						</h2>
						<p className="lead">
							Ελάτε να σας εξυπηρετίσουμε προσωπικά, πείτε μας τι ψάχνετε για να σας βοηθήσουμε.
						</p>
						<p className="lead">
							<img
								src={locationIcon}
								style={{ marginBottom: "4px", marginRight: "5px" }}
								width="16"
								height="16"
								alt="Location Icon"
							/>
							Κεφαλληνίας και Φυλής, Αθήνα
						</p>
						<p className="lead">
							<img
								src={phoneIcon}
								style={{ marginBottom: "4px", marginRight: "5px" }}
								width="16"
								height="16"
								alt="Phone Icon"
							/>
							2111834845 καλέστε μας για παραγγελίες και ερωτήσεις.
						</p>
						<p className="lead" style={{ fontSize: "16px", marginBottom: "0px" }}>
							<img
								src={timeIcon}
								style={{ marginBottom: "4px", marginRight: "5px" }}
								width="16"
								height="16"
								alt="Time Icon"
							/>
							Ώρες λειτουργίας: Δευ-Τετ-Σαβ 07:00-17:00, Τρί-Πεμ-Παρ 07:00-20:00
						</p>
					</div>
					<div
						className="col-md-5"
						style={{ cursor: "pointer" }}
						onClick={() => window.open("https://maps.app.goo.gl/iFyg3RKy1YFF3MgG7", "_blank").focus()}
					>
						<img
							className="featurette-image img-responsive center-block"
							data-src="holder.js/500x500/auto"
							alt="500x500"
							src={map}
							data-holder-rendered="true"
							style={{ width: "380px", height: "550px", objectFit: "cover" }}
						/>
					</div>
				</div>
				<hr className="featurette-divider" />
			</div>
			<footer>
				<p className="pull-right">
					<a href="#">Back to top</a>
				</p>
				<p>&copy; {new Date().getFullYear()} Κρεοπωλείο "Ο Κώστας" &middot; All Rights Reserved</p>
			</footer>
		</div>
	);
}

export default App;
