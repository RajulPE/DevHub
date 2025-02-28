/* ********************************************************** */
// All Android Libraries Data Object
/* ********************************************************** */

let androidData = [
	{
		id: 1,
		lib_name: "Picasso",
		lib_details: " Picasso claims to allow for hassle-free image loading in the application—often in one line of code. ",
		lib_color: "#6610f2",
		lib_link: "https://square.github.io/picasso/",
	},
    {
		id: 2,
		lib_name: "Glide",
		lib_details: "Glide is yet another praised image loader and one of the best new Android libraries for developers.",
		lib_color: "#ee6e73",
		lib_link: "https://github.com/bumptech/glide",
	},
    {
		id: 3,
		lib_name: "Zxing",
		lib_details: "ZXing is a barcode image-processing Android library that is implemented in Java.",
		lib_color: "#06b6d4",
		lib_link: "https://github.com/zxing/zxing",
	},
    {
		id: 4,
		lib_name: "CAMView",
		lib_details: "CAMView is an android camera easy access library and installed QR scanner, based on ZXing.",
		lib_color: "#1e87f0",
		lib_link: "https://github.com/LivotovLabs/CamView",
	},
    {
		id: 5,
		lib_name: "Stetho",
		lib_details: "Stetho is a sophisticated debug bridge for Android applications.",
		lib_color: "#111417",
		lib_link: "http://facebook.github.io/stetho/",
	},
    {
		id: 6,
		lib_name: "ExoPlayer",
		lib_details: "ExoPlayer is an Android media player library developed by Google.",
		lib_color: "#2188ff",
		lib_link: "https://exoplayer.dev/hello-world.html",
	},
    {
		id: 7,
		lib_name: "Dagger 2",
		lib_details: "Dagger 2 is  mainly relies on using Java annotation processors that include compiling time in order to calculate and identify dependencies.",
		lib_color: "#FF4081",
		lib_link: "https://dagger.dev/",
	},
    {
		id: 8,
		lib_name: "Retrofit",
		lib_details: "Retrofit is a type-safe REST client build by square for Android and Java which intends to make it simpler to expand RESTful web services.",
		lib_color: "#6332f6",
		lib_link: "https://square.github.io/retrofit/",
	},
    
    {
		id: 9,
		lib_name: "Espresso",
		lib_details: "Espresso is an open source android user interface (UI) testing framework developed by Google.",
		lib_color: "#e69138",
		lib_link: "https://developer.android.com/training/testing/espresso",
	},
    {
		id: 10,
		lib_name: "Moshi",
		lib_details: "Moshi JSON library, created by Square, converts JSON into Java and Kotlin models where converting JSON to Java model (and vice versa) is straightforward.",
		lib_color: "#98a7d4",
		lib_link: "https://github.com/square/moshi",
	},
    {
		id: 11,
		lib_name: "Android Jetpack",
		lib_details: "Android Jetpack is a selection of software components which helps building reliable Android apps.",
		lib_color: "#81B214",
		lib_link: "https://developer.android.com/jetpack",
	},
	{
		id: 12,
		lib_name: "Android Databinding",
		lib_details: "Android DataBinding library allow you to bind UI elements in your layout to data sources in your app via declarative format. ",
		lib_color: "#8d0000",
		lib_link: "https://developer.android.com/topic/libraries/data-binding",
	},
	{
		id: 13,
		lib_name: "RxJava",
		lib_details: "RxJava is an open source implementation of ReactiveX library for Java Virtual Machine (JVM). ",
		lib_color: "#3498db",
		lib_link: "https://github.com/ReactiveX/RxJava",
	},
	{
		id: 14,
		lib_name: "Room",
		lib_details: "Room is an official Android ORM-it relies a lot on annotations and standard SQL syntax while its APi is similar to Retrofit API",
		lib_color: "#89E089",
		lib_link: "https://developer.android.com/jetpack/androidx/releases/room",
	},
	{
		id: 15,
		lib_name: "Robolectric",
		lib_details: "Robolectric is a great library for unit testing and handling several aspects of Android apps including views, resource loading and more.",
		lib_color: "#FF6B6B",
		lib_link: "http://robolectric.org/",
	},
];

/* ********************************************************** */
// All Android Libraries Preview Mapping
/* ********************************************************** */

let androidLibrary = document.querySelector(".libraries");

Object.values(androidData).map((val) => {
	androidLibrary.innerHTML += `
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
