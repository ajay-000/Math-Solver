class AllHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
	<div id="div1">
		<span id="brand">
			<a href="index.html">Maths Solver</a>
		</span>
		<ul id="pages">			<li id="homeli" class="pages-li">Home</li>
			<li id="vectorli" class="pages-li"><a href="vector.html">Vectors</a></li>
			<li id="coordinates2dli" class="pages-li"><a href="coordinate2d.html">Coordinate</a></li>
			<li id="coordinates3dli" class="pages-li">Volume</li>
			<li id="linear" class="pages-li">Linear Euqation</li>
			<li id="quadratic" class="pages-li">
				<a href="quadratic.html">
				Quadratic Equation
				</a>
			</li>
			
			<li id="contact" class="pages-li"><a href="contact.html">Contact</a></li>
		
		</ul>
		<span id="darkmode"></span>
	</div>
	<div id="div2">
		<ul id="link">
			<li id="straight-lines">Straight Lines</li>
			<LI>Cylinder</LI>
		<button id="dropdown" onclick="menu();">
		</button>
			<LI>Sphere</LI>
			<LI>Hemisphere</LI>
			<LI>Cuboid</LI>
			
		</ul>
	</div>
</header>
        `
    }
}

customElements.define('all-header', AllHeader)


class AllFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
		<div class="footer">
			<h3 class="footerh3">Maths Solver</h3>
			<p>
				Welcome to Maths Solver
			</p>

		</div>


	</footer>
        `
    }
}

customElements.define('all-footer', AllFooter)

