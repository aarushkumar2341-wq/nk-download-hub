document.getElementById("downloadBtn").addEventListener("click", function(e){
e.preventDefault();

const apkLink = "https://your-download-link.com/app.apk";

// Replace the link above with your APK or Play Store link.
window.location.href = apkLink;
});
