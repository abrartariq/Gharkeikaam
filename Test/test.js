/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");


// Application Server
const serverUri = "http://localhost:3000/#";
const appTitle = "GharKeiKaam";
const aboutus	="http://localhost:3000/about"
const admin	="http://localhost:3000/admin_requests"
const worker="http://localhost:3000/workersmain"
const workeradd="http://localhost:3000/addworker"


/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({ browserName: "chrome" })
	.build();

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*
var browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({ browserName: "firefox" })
	.build();
 */

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
	return new Promise((resolve, reject) => {
		browser.getTitle().then(function(title) {
			resolve(title);
		});
	})
}

/**
 * Sample test case
 * To check whether the given value is present in array.
 */
/*describe("Array", function() {
	describe("#indexOf()", function() {
		it("should return -1 when the value is not present", function() {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});*/

describe("Home Page", function() {
	/**
	 * Test case to load our application and check the title.
	 */
	it("Should load the home page", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(serverUri)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});
	/**
	 * Test case to check whether the given element is loaded.
	 */
	it("Should check whether the given elements on home page such sign in login in successfully", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ className: "signup-form" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});

	it("Should load the About page", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(aboutus)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});

	it("Check if About Us Components Open successfully", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ className: "about" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});



	it("Should Load Admin Page and Check", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(admin)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});

	it("Pending Requests Component Uploaded", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ className: "form-group a" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});


	it("Should Load Worker Page and Check", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(worker)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});

	it("Testing WorkersAdd Components", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ className: "table1 table-hover" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});


	it("Should Load WorkerAdd and Check", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(workeradd)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});

	it("Testing WorkersAdd Components", function() {
		return new Promise((resolve, reject) => {
			browser
				.findElement({ className: "addworker-form" })
				.then(elem => resolve())
				.catch(err => reject(err));
		});
	});

		


	/**
	 * End of test cases use.
	 * Closing the browser and exit.
	 */
	after(function() {
		// End of test use this.
		browser.quit();
	});
});


