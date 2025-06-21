# portfolio


## REFLECTION:

While coding this assignment, the most amount of time taken was on the Navigation Bar. Styling the nav bar required a lot of work, especially aligning the Logo with content, Work and About links in the centre and the Resume button at the end. The solution was just placement of the nav links in different DIVs and using flex.

I've also made the logo wink on hover for desktop, as well as have the logo wink when it was tapped, on mobile. This required javascript to complete which I looked up and incorporated in my code. Changed the hamburger icon to an X when expanded ( using 3 spans and transition animations) and colour coded the same to fit the brand colours.

The showreel video is only a teaser for now, but I've ensured that I make it autoplay on mute (just like I'd have with the final video) with the 3 seconds that I have for now.

### Nav bar that displays on desktop only:

I couldn't get the entire "Work" dropdown to have a single border like on mobile and it wasn't looking right. So I styled it slightly differently. To do that, I've added a second nav bar for desktop which would display at a certain size, for the "Work & About" links. Only the Desktop version would have shadow. There was also no responsive options on Bootstrap for shadow or colour.

This also made it easier for me to add another image tag for javascript to change the logo: On 'tap' for mobile, and on 'hover' for desktop.

October 11th 2023: Added Animate On Scroll Library to make content appear on page while scrolling down to content.


### April 16th 2024
Now that I have learned javascript, I can incorporate that into my code as a separate java file instead of in each file. (For the logo wink) And now, I also understand the code that is used. Seems simple!

### Feb 19th 2025
I'm adding dark mode to the website:

To add dark mode classes to each page from javascript is impossible since each page is different and I hadn't coded the website with the intention of adding dark mode.

An easier workaround for me was to design a stylesheet for the dark mode version (based on existing stylesheet) and then add these classes to the html for dark mode classes. The rest was just adjusted accordingly in the dark mode stylesheet. Some places in the website required adding extra classes here and there, but overall it was quite straightforward.

These new classes I've added are redundant to main.css, but will be activated once darkmode.css is used instead.

### Feb 20th & 21st 2025
Checking for dark mode state and switching the css file caused the website to flicker as the main.css was loading first. I made darkmode.css as default and used a visibility:hidden inline style in the html until the entire code loads, then the js removes that inline style once page loads, revealing the webpage with the correct stylesheet.

The button & the logo was a bit of a headache, but it was just about local and global variables.
Redesigned the footer to be more modern.

### Feb 24th 2025
Adds hover animations for Banner text

### Mar 11 2025
Makes Resume/CV button more visible with contrast. Now fits at least AA contrast guidelines.
Also adds rotation animations on about image in layers: BG, stars, cutout, stars. Uses Chat GPT to clean up/ simplify code.

### May 20th 2025
Added a loading animation to the website after noticing it takes a while to load on mobile, even on 4G. This delay is mostly due to the images. I’ve optimized some image sizes, and the site performs well on desktop or a good Wi-Fi connection.

To show the loader while the page loads, I used CSS to hide the main content (body) and only display the loader. Once the page finishes loading, JavaScript hides the loader and reveals the main content.

### June 15-20th 2025
I've figured out a way to load my site from https://sunitj.com using github's Enforce HTTPS and Custom Site through my domain in GoDaddy. Had to change A records & CNAME in Godaddy and add a CNAME file in the root folder of my site with sunitj.com in it.

### June 12st 2025
Testing Open Graph Meta Tags with a custom thumbnail. Things are working as expected. Used open graph meta tags for Home, About & Open Ottawa page. More info at the url ogp.me


## SOURCE & CREDITS

I've used the following sources to help with coding my website:

[Banner Image](https://www.pexels.com/photo/photo-of-boy-wearing-yellow-shirt-while-using-an-imac-4144144/)
I've used this image as a placeholder for now, but hope to replace it with an image of myself in the future.

[Hover image javascrpt](https://linuxhint.com/change-image-on-hover-in-javascript/)

[Change Hamburger to X](https://stackoverflow.com/questions/28247310/bootstrap-mobile-menu-icon-change-to-x-close)

[Change logo when clicking on Hamburger](https://stackoverflow.com/questions/58625458/how-to-change-logo-src-when-clicked-on-hamburger-menu)

[Typewriter Animation](https://github.com/kubowania/typewriter)

[Animate On Scroll Library](https://michalsnik.github.io/aos/)

[Beautiful mockups to make portfolio much better, thanks to Mockups-Design](https://mockups-design.com/)

[Dark Mode Button from Oslo 418 on codepen](https://codepen.io/Oslonline/pen/VYwwdop)

[Daniel Reimer - Animated Text Fill](https://www.sliderrevolution.com/resources/css-text-animation/)

## Libraries used:

1. Bootstrap Icons & Font Awesome for Icons
2. Bootstrap (of course)
3. Google Fonts
4. Animate On Scroll
