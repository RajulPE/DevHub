/* ********************************************************** */
// All Icons Libraries Data Object
/* ********************************************************** */

let iconData = [
	{
		id: 1,
		lib_name: "Font Awesome",
		lib_details:
			"The web's most popular icon set & toolkit with vector icons & logos for your website.",
		lib_color: "#1fa67a",
		lib_link: "https://fontawesome.com/",
	},
	{
		id: 2,
		lib_name: "Boxicons",
		lib_details:
			"A simple vector icons crafted for designers & developers to use in your project.",
		lib_color: "#030f12",
		lib_link: "https://boxicons.com/",
	},
	{
		id: 3,
		lib_name: "Material Icons",
		lib_details:
			"A delightful, beautifully crafted symbols for common actions and items to use.",
		lib_color: "#212121",
		lib_link: "https://material.io/icons/",
	},
	{
		id: 4,
		lib_name: "Flaticon",
		lib_details:
			"A largest database for wide variety of vector icons in SVG, PNG, EPS or Icon Font.",
		lib_color: "#4AD295",
		lib_link: "https://flaticon.com/",
	},
	{
		id: 5,
		lib_name: "Tabler Icons",
		lib_details:
			"A set of over many free high-quality SVG icons with size & stroke customizable.",
		lib_color: "#7d3bec",
		lib_link: "https://tablericons.com/",
	},
	{
		id: 6,
		lib_name: "Shape",
		lib_details: "The collection of icons and illustrations with fully customizable options.",
		lib_color: "#3913B8",
		lib_link: "https://shape.so/",
	},
	{
		id: 7,
		lib_name: "Lottie Icons",
		lib_details:
			"A set of animated lottie files icons that work like magic on your webflow site.",
		lib_color: "#f48126",
		lib_link: "https://lottieflow.com/",
	},
	{
		id: 8,
		lib_name: "Icons8",
		lib_details:
			"A variety icons, illustrations, photos, music, and design tools with icons8 toolkit.",
		lib_color: "#1fb141",
		lib_link: "https://icons8.com/",
	},
	{
		id: 9,
		lib_name: "Nucleo",
		lib_details:
			"A cool icon organizer & library of icons, powerful app to customize & collect icons.",
		lib_color: "#121318",
		lib_link: "https://nucleoapp.com/",
	},
	{
		id: 10,
		lib_name: "Streamline Icons",
		lib_details:
			"A collection of icon pack which work faster with our plugins for figma & sketch.",
		lib_color: "#00f6f6",
		lib_link: "https://streamlineicons.com/",
	},
	{
		id: 11,
		lib_name: "LineIcons",
		lib_details:
			"A handcrafted icons pack for modern UI of web, android, ios, desktop app projects.",
		lib_color: "#D5119A",
		lib_link: "https://lineicons.com/",
	},
	{
		id: 12,
		lib_name: "Feather Icons",
		lib_details:
			"A simply beautiful open source icons pack with an emphasis on simplicity & flexibility.",
		lib_color: "#959da5",
		lib_link: "https://feathericons.com/",
	},
	{
		id: 13,
		lib_name: "Ionicons",
		lib_details: "A premium icons for web, ios, android, desktop apps with SVG & Web Font.",
		lib_color: "#0cadff",
		lib_link: "https://ionicons.com/",
	},
	{
		id: 14,
		lib_name: "CSS Icons",
		lib_details:
			"A pure built-in CSS icons library, & format in pure CSS, SVG, Figma & Adobe XD.",
		lib_color: "#691FEE",
		lib_link: "https://css.gg/",
	},
	{
		id: 15,
		lib_name: "Freeicons",
		lib_details:
			"The largest database of free icons available in PNG, SVG, EPS, PSD & BASE 64.",
		lib_color: "#3e95e7",
		lib_link: "https://freeicons.io/",
	},
	{
		id: 16,
		lib_name: "Freeicons",
		lib_details: "Free PNG image, SVG vector icons for commercial and personal use.",
		lib_color: "#2E4857",
		lib_link: "https://www.iconpacks.net/",
	},
	{
		id: 17,
		lib_name: "Iconfinder",
		lib_details: "Icons and Illustrations extensive, made easy. Make that icon perfect.",
		lib_color: "#ee5253",
		lib_link: "https://www.iconfinder.com/",
	},
	{
		id: 18,
		lib_name: "Lordicon",
		lib_details: "Powerful animated icon library with every animated Lottie animations.",
		lib_color: "#08c18a",
		lib_link: "https://lordicon.com/",
	},
	{
		id: 19,
		lib_name: "UX Wing",
		lib_details: "Well Optimized SVG & PNG icons for interface design of Web and App Dev.",
		lib_color: "#2fc6b2",
		lib_link: "https://uxwing.com/",
	},
];

/* ********************************************************** */
// All Icons Libraries Preview Mapping
/* ********************************************************** */

let iconLibrary = document.querySelector(".libraries");

Object.values(iconData).map((val) => {
	iconLibrary.innerHTML += `
        <!-- Library ${val.id} -->
        <div class="lib_card">
            <h2>${val.lib_name}</h2>
            <p>${val.lib_details}</p>
            <a
                href="${val.lib_link}"
                class="btn lib_link"
                target="_blank"
            >
                See Now
            </a>
        </div>
    `;
});
