
import React from 'react';

function TopicsPage() {

    return(
        <>
        <h2>Web Development Concepts</h2>
        <nav class="local">
            <a href="#webServers">Web</a>
            <a href="#frontendDesign">Frontend</a>
            <a href="#optimizeImages">Images</a>
            <a href="#favicons">Favicons</a>
        </nav>

    <article id="webServers">
        <h3>Web Servers</h3>
        <p><strong>Index.html</strong> is a component of the URL usually displays after a slash / and is a common name used for a website, especially when the user requests no other page. This name is used as the homepage of a website. In addition, index is the root directory (top-level directory) or is the starting point of a website. Index is a path to the resource that a user is requesting from the web server. For example, OSU Apache web server uses index.html as the default name. However, with other servers, such as Microsoft’s .NET platform, it uses default.html as their homepage.</p>
        <p>From the <strong>Web Dev/Inspector Network</strong> tab, file details viewed from the web server are different from when the file is viewed from the local hard drive. Firstly, there are five files from the web server as opposed to only three files of the local hard drive. In the web server file of a1-tsuiem/, the general section has an extra detail, which displays the <strong>remote address</strong> also known as the <strong>IP address</strong>. Also, the <strong>response header</strong> from the web server displays details regarding connection, content-encoding, date, Etag, server, etc. In the local hard drive, the file only displays content-type and last-modified details. Lastly, the request headers from the web server shows cache control, language used, host, encoding, user-agent (browser), etc.</p>
        <p>Within this web server file, favicon.ico (favorites icon) displays a GET status of 200 OK because Oregon State University’s web server automatically provides a custom logo to enhance the information of the address bar and bookmark lists. This favicon file is a small graphic icon resource used by some browsers. However, the other two files, such as, main.css and main.js are displaying status code 404 Not Found because the requested resource of a CSS file and a JS file are not found on the web server.</p>
        <p>From this web file, the URL has a few components, such as, a <strong>scheme</strong>, <strong>subdomain</strong>, <strong>host domain</strong>, and <strong>directories</strong>. The first part of a URL is the scheme, which in this web file is <strong>HTTPS</strong>. Next, is the server machine is web.engr.oregonstate.edu. The subdomains are web and engr while the host domain is oregonstate.edu. The <strong>path to resource</strong> is /~tsuiem/a1-tsuiem/.</p>
    </article>

    <article id="frontendDesign">
        <h3>Frontend Design</h3>
        <p>Web applications and mobile applications have a <strong>frontend design</strong> that provides the user an experience. 
            This includes the visual design of a page, the graphical user-interface (GUI), and the interactive experience. 
            For an effective frontend design, the visual aspect needs to have a consistent color scheme, a picture, font, icon, and a navigation 
            system allows the user to explore the application with ease. There are ways to measure a frontend design, such as using the five E’s 
            of <strong>usability</strong>. Usability of a web or mobile application is important because it helps users do tasks quickly and achieve their goals, 
            including providing a sense of accomplishment. By implementing the five E’s of usability, users are likely to seek an alternative product, such as a competitor’s web application. 
            The designer can take a methodical approach in creating a web application or any product by gathering requirements, testing prototypes, 
            evaluating and analyzing design alternatives, proposing solutions, and give the product to users for testing. In addition, there are guidelines in addressing usability issues, 
            such as <strong>response time</strong> of an application, number of navigation or <strong>content depth levels</strong> of a product, and the impact of using multiple input devices 
            to achieve the user’s goal. Let's take a look at the five E's of usability below.</p>
        <dl>
            <dt><strong>Effective</strong></dt>
            <dd>Measures the accuracy of results by looking at if users have met their goals.</dd>
            <dt><strong>Efficient</strong></dt>
            <dd>Measuring how users perform a task and requiring the least number of steps to take, in order, to get results the quickest.</dd>
            <dt><strong>Easy to Navigate</strong></dt>
            <dd>Measuring especially for first time users of a web or mobile application if they will understand how to go back to a previous page, locate the navigation or search bar, and being able to repeat this for next the time.</dd>
            <dt><strong>Error-free</strong></dt>
            <dd>Content should be clear and accessible to the user because users can come from any background. Measure how users will run into roadblocks and find common errors.</dd>
            <dt><strong>Enjoyable</strong> </dt>
            <dd>Measure how engaging and fitting the content and design of a web or mobile application is for the audience and industry needs.</dd>
        </dl>
        <p>
            Behind the scenes of a web page, there are <strong>page layout tags</strong> that structure an HTML document. These page layout tags are nested in the body element and are known as <strong>block-level</strong> elements. These elements usually break the flow or section off content with a newline before and after the element. Page layout tags also help with search engines robots and screen readers to identify the components of a page. Typically, a page includes page layout tags, such as header, nav, main, section, articles, asides, and a footer.  
            To start off a page, there is a <strong>header element</strong> that is typically displayed the same from page to page. This element is usually a banner or symbol for an application or website, which could be the name, publisher, or a marketing slogan.
            Next, each application or website is easier to navigate with a <strong>nav element</strong>, which helps the user move from the main menu, search, tools, stories, locations, and legal inks. This allows the user to move from one page to another or within a page to a different section.
            Within the majority of the page there is an element that holds galleries, tutorials, stories, and more. This element is called <strong>main element</strong> that expands on the central topic of a document or the function for an application.
            A <strong>section element</strong> has content that all makes sense together with a title using a headline h1. <strong>Headline elements</strong> are used hierarchically with headlines ranging from h1 through h6. 
            Whereas, an <strong>article element</strong> has standalone content, meaning the information in an article element should make sense regardless of the rest of the content of the website or application. An article element is usually nested in a section element and uses h2, the second-level headline. Article tags can be styled with ID selectors to uniquely identify each article, which also includes using a value with a hashtag and a name. The IDs help users jump within a page by creating a place for anchors to land.
            In addition, a <strong>div element</strong> can be used as a placeholder for dynamic content. This element is generic with no style or dimensions, practically has no effect on the content or layout. This element is used when no other element, such as an article or nav element, makes sense.
            Next, an <strong>aside element</strong> can float to the left or right of an article and indirectly relate to the content of an article. This element can be used to emphasize the topic or be used as call-out boxes. Some designers use an aside element as sidebars to hold the navigation for a website. Another way for frontend developers to display comments or captions for media, such as images or movies, is the <strong>figure and figcaption elements</strong>. A figcaption element is used for media, while a figure element is used for images by wrapping the &lt;img&gt; and &lt;figcaption&gt;.
            Also, another way to make certain comments or content stand out is by using a <strong>blockquote element</strong>. This is to cite and quote from extended quotations or passages. A &lt;blockquote&gt; helps make the content standout from a typical paragraph. The text can include the usage of quote &lt;q&gt; and source by using citation &lt;cite&gt;.
            Lastly, a page layout includes a <strong>footer element</strong> that resides below the &lt;main&gt; and holds the website owner’s copyright statement with a copyright symbol, contact information, links to important pages, and legal information.
        </p>
        <p>In a web page, users can navigate through content by jumping within a page, to another page, or to an external website. This is done by using anchor elements. There are two types of anchor elements, absolute and relative paths. An absolute path links to outside resources that include its own scheme, domain, subdomain, 
            directory, and files names. Examples of an absolute path are links to articles, maps, dictionaries, etc. Meanwhile, a relative path points to the location of a file relative to the current directory. A user can move up and down within the same directory by adding ./ before the name of a file, child directory with a /, and parent directory with ../. Each .. moves up one directory. Below, we break down how the types of anchor elements used to help users reach their goals.
            </p>
        <ol>
            <li>An anchor element can create hyperlinks to link to <strong>external</strong> content. To link to an outside resource, an anchor element can be written with an <strong>href attribute</strong> linking to an external website. Between an anchor element will be a text that describes the link.</li>
            <li>An <strong>internal anchor element</strong> helps to link one text item to another text item within the same page. An anchor tag will have an href attribute and a hashtag symbol and value to jump to a tag with the same value. That tag will use an ID attribute.</li>
            <li>An anchor element that links from <strong>page to page</strong> by using a navigation element to have anchor tags with different HTML pages. Each page typically has the same header and navigation bar to return, for example, to a default or home page and other pages.</li>
        </ol>
    </article>

    <article id="optimizeImages">
        <h3>Optimizing Images</h3>
        <p>
            The 6 major specifications of images for the web are having a descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and a color mode. A <strong>descriptive file name</strong> helps search engine optimization (SEO) robots to show related images that the user had searched. A descriptive file name uses actual words, numbers, and abbreviations that are related to the content or image. Another specification of images for a web page is having a <strong>small file size</strong> because it creates faster loading time of a web page. Images can be compressed by minimizing the size in bytes. There are two types of image compression: lossy and lossless. Lossy compression is irreversible and permanently removes less critical information, especially redundant data. This can also reduce image quality and cause distortion. However, lossless compression avoids causing image quality degradation because the file size does not compress dramatically. This is when disk space and performance quality is not an issue. In addition, using small file sizes on a web page uses less bandwidth and speeds up content delivery. Not only is compression important, but also having <strong>exact dimensions</strong> because cropping images to reduce a size helps prevent a website from loading slowly. For example, trying to fit a 6000px wide image to a 500px wide block will cause the image to show up slow for the user. When images are compressed and cropped to a fitting size, make sure the image has the <strong>correct file format</strong>. For the best performance of a PNG, GIF, JPG, etc. the file format can prevent image distortion and allow background colors to show through an image. Images can show up on a web page, but a <strong>reduced resolution</strong> of an image can cause issues. Some monitors render 72 or 300 or more pixels per inch, while newer technology with higher resolution screens demand a sharper image. Therefore, the designer is suggested to provide multiple sizes of images as standard practice. Lastly, the <strong>color mode</strong> of an image is important because it allows images with certain file formats to show up consistently across platforms. The most common color mode used is RGB to optimize images and ensure the colors appear identically. Other types of color modes include using names, hexadecimal values, and the HSL system.
        </p>
        <p>
            Once major specifications for an image have been applied, each photo and line art should be in a file format that is the most appropriate. The reason is, each file format will render a color mode that will produce the optimal quality of an image. For example, photographic images are best formatted using JPG and WebP. JPG format will efficiently store high-quality photos with millions of colors, and when they are compressed down to small file sizes the photo remains rectangular, which will give fast access for viewing online. Also, WebP are typically only used for photo images, which can be compressed down to small file sizes while remaining a rectangular shape. SVG and GIF are best used for line art because those illustrations and drawings usually have limited color as opposed to photo images. GIF file formats are not built to contain high-quality photos and are best used with images with sharp lines and edges and fewer colors. However, PNG is suitable for both line art and photography because of lossless compression, PNG does not degrade in quality and detail after image compression.
        </p>
    </article>

    <article id="favicons">
        <h3>Favicons</h3>
        <p>
            Favicons, favorite icons, or touch icons are logos or symbols that represent a company or brand. They show up on a browser tab, cellphone, smartwatch, list of search engine results, or on a large display. These icons allow a user to keep track of the dozens of web pages they may have opened. They can be saved with file formats GIF, PNG, ICO, and SVG, however, the most common types of file formats are SVD and PNG. Favicons can go from being a complex symbol or logo to a simple favicon, whichever works best across devices. Usually, they are saved in multiple file formats and sizes for different browsers and devices. Favicons also show up to a bookmark list, favorites list, a device screen as well as a search engine results list.
        </p>
    </article>
        </>
    );
}

export default TopicsPage;