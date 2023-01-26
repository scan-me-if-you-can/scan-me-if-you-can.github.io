// ===== START CUSTOM DATA =====
const DATA = {
    STYLE: {
        NB_MAX_CONTRIBUTORS_PER_LINE: 4, // Integer in [1, 2, 3, 4, 6]
        CONTRIBUTOR_IMAGE_SIZE: "180px",
        FOOTER_LOGO_SIZE: "240px",
    },
    HEAD: {
        FAVICON_SRC: "img/logo_dummy.png",
        PROJECT_TITLE: "Scan Me If You Can: Understanding and Detecting Unwanted Vulnerability Scanning",
        PROJECT_SUBTITLE: {
            "name": "Proceedings of the Web Conference (WWW), 2023",
            "url": "https://www2023.thewebconf.org/",
        },
        AUTHOR_NAME: "Xigao Li",
        VIDEO_SRC: "video/dummy_video.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "Web vulnerability scanners (WVS) are an indispensable tool for penetration testers and developers of web applications, allowing them to identify and fix low-hanging vulnerabilities before they are discovered by attackers. Unfortunately, malicious actors leverage the very same tools to identify and exploit vulnerabilities in third-party websites. Existing research in the WVS space is largely concerned with how many vulnerabilities these tools can discover, as opposed to trying to identify the tools themselves when they are used illicitly.",
"In this work, we design a testbed to characterize web vulnerability scanners using browser-based and network-based fingerprinting techniques. We conduct a measurement study over 12 web vulnerability scanners as well as 159 users who were recruited to interact with the same web applications that were targeted by the evaluated WVSs. By contrasting the traffic and behavior of these two groups, we discover tool-specific and type-specific behaviors in WVSs that are absent from regular users. Based on these observations, we design and build ScannerScope, a machine-learning-based, web vulnerability scanner detection system. ScannerScope consists of a transparent reverse proxy that injects fingerprinting modules on the fly without the assistance (or knowledge) of the protected web applications. Our evaluation results show that ScannerScope can effectively detect WVSs and protect web applications against unwanted vulnerability scanning, with a detection accuracy of over 99% combined with near-zero false positives on human-visitor traffic. Finally, we show that the asynchronous design of ScannerScope results in a negligible impact on server performance and demonstrate that its classifier can resist adversarial ML attacks launched by sophisticated adversaries"
],
        // OVERVIEW: {
        //     "src": "img/overview_dummy.png",
        //     "legend": "Dummy overview of our method.",
        // }
    },
    CONTENT: [ // If you want to add other sections, add them with their title (used for navigation) and the html code of the section
        // {
        //     "name": "Section 1",
        //     "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        // },
        // {
        //     "name": "Section 2",
        //     "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        // },
    ],
    CONTRIBUTORS: [
        {
            "name": "Xigao Li",
            "img": "img/xigao_2031_sq.png",
            "url": "https://xigaoli.com"
        },
        {
            "name": "Babak Amin Azad",
            "img": "img/babak.jpg",
            "url": "https://www.silverf0x00.com/"
        },
        {
            "name": "Amir Rahmati",
            "img": "img/amir.jpg",
            "url": "https://amir.rahmati.com"
        },
        {
            "name": "Nick Nikiforakis",
            "img": "img/nick_new_small.jpg",
            "url": "https://securitee.org"
        },
    ],
    LINKS: [
        {
            "title": "Paper (Available Soon)",
            "icon": "img/paper.svg",
            "links": [
                {
                    "name": "PDF",
                    "url": "#",
                    "icon": "img/paper_copy.svg"
                },
            ],
        },
        {
            "title": "Dataset (Available Soon)",
            "icon": "img/code.svg",
            "links": [
                {
                    "name": "Dataset",
                    "url": "#",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
                // {
                //     "name": "Example Video:<br> Cryptocurrency Giveaway Scam",
                //     "url": "#",
                //     "icon": "img/GitHub-Mark-Light-32px.png"
                // },
            ],
        },
        
    ],
    CITATION: ` \
        @article{xigao2023scanme,
            title     = {Scan Me If You Can: Understanding and Detecting Unwanted Vulnerability Scanning},
            author    = {Li, Xigao and Amin Azad, Babak and Rahmati, Amir and Nikiforakis, Nick},
            booktitle = {Proceedings of the Web Conference (WWW)},
            year      = {2023}
        }
    `,
    FOOTER: {
        LOGOS: [
            {
                "name": "PragSec Lab",
                "src": "img/pragsec.png",
                "url": "#"
            },
            {
                "name": "Ethos Lab",
                "src": "img/ethos.png",
                "url": "#"
            },
            {
                "name": "Stony Brook University",
                "src": "img/sbu.png",
                "url": "#"
            },
        ],
        COPYRIGHT: `Copyright PragSec Lab & Ethos Lab 2023`
    },
}
// ===== END CUSTOM DATA =====




// /!\ --- Do not change following lines ---

const NB_COLS = 12;
const section_links_nav = DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name }));
const NAVIGATION_LINKS = [{ "id": "abstract", "name": "Abstract" }].concat(
    DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name })),
    [
        { "id": "contributors", "name": "Contributors" },
        { "id": "links", "name": "Links" }
    ]
);


/* Utils */
function link(url, content, style = ``) {
    return `<a href=${url} target="_blank" ${style}>${content}</a>`;
}

function padding(nbElements, nbElementsMax) {
    const PADDING_COLS = (NB_COLS - nbElements * Math.floor(NB_COLS / nbElementsMax)) / 2;
    return PADDING_COLS > 0 ? `<div class=col-lg-${PADDING_COLS}></div>` : ``;
}

function idFromTitle(title) {
    return title.name.toLowerCase().replace(' ', '-');
}

/* Header */
function displayTitle() {
    let oneLineTitle = DATA.HEAD.PROJECT_TITLE;
    const remove = ["<br>", "<br/>", "<br />"];
    for (const val of remove) {
        oneLineTitle = oneLineTitle.replace(val, " ");
    }
    document.head.querySelector("title").innerHTML = oneLineTitle;
    document.head.querySelector("meta[name='author']").content = DATA.HEAD.AUTHOR_NAME;
    document.head.querySelector("meta[name='description']").content = oneLineTitle;

    document.head.querySelector("link[rel='icon']").type = `image/${DATA.HEAD.FAVICON_SRC.split(".").at(-1)}`;
    document.head.querySelector("link[rel='icon']").href = DATA.HEAD.FAVICON_SRC;

    document.getElementById("nav-project-title").innerHTML = oneLineTitle;
    document.getElementById("head-title").innerHTML = DATA.HEAD.PROJECT_TITLE;
    document.getElementById("head-subtitle").innerHTML = `<a href=${DATA.HEAD.PROJECT_SUBTITLE.url}>${DATA.HEAD.PROJECT_SUBTITLE.name}</a>`;
}

function displayNav() {
    document.getElementById("navigation").innerHTML = NAVIGATION_LINKS.map(
        link => `
        <li class="nav-item">
            <a class="nav-link active" href="#${link.id}">${link.name}</a>
        </li>
    `).join("");
}

/* Video section */
function displayVideo() {
    document.getElementById("video").innerHTML = `<iframe class="embed-responsive-item" src=${DATA.HEAD.VIDEO_SRC}></iframe>`;
}

/* Abstract section */
function displayAbstract() {
    document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
        <h2 class="text-center">Abstract</h2>
        <hr>
        ${DATA.ABSTRACT.TEXT.map(text => `<p>${text}</p>`).join("")}
        <br>
    </div>
  `;
}

function displayOverview() {
    document.getElementById("overview").innerHTML = `
        <div class="col-sm">
            <img src=${DATA.ABSTRACT.OVERVIEW.src} alt="Method Overview" class="img-fluid">
            <div id="overview-legend">${DATA.ABSTRACT.OVERVIEW.legend}</div>
        </div>
    `;
}

/* Content sections */
function displayContentSections() {
    document.getElementById("content").innerHTML = DATA.CONTENT.map(
        section => `
        <div class="container section" id=${idFromTitle(section)}>
            <div class="row">
                <div class="col-sm">
                    <h2 class="text-center">${section.name}</h2>
                    <hr>
                    ${section.html}
                </div>
            </div>
        </div>
        `
    ).join("");
}

/* Contributors section */
function addPadding(nbContributorsInLine) {
    return padding(nbContributorsInLine, DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
}

function displayContributorsRow(contributorsInRow) {
    let htmlContent = `<div class="row text-center">` + addPadding(contributorsInRow.length);

    for (const contributor of contributorsInRow) {
        const htmlImg = `<img class="rounded-circle" src=${contributor.img} alt=${contributor.name} width=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} height=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} />`;
        htmlContent +=
            `<div class="col-lg-${Math.floor(NB_COLS / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)}">
                ${link(contributor.url, htmlImg)}
                <h4>${link(contributor.url, contributor.name)}</h4>
            </div>`;
    }
    htmlContent += addPadding(contributorsInRow.length) + `</div>`;
    return htmlContent;
}

function displayContributors() {
    htmlContent = "";

    nbLines = Math.ceil(DATA.CONTRIBUTORS.length / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)
    for (const rowId of Array(nbLines).keys()) {
        const contributorsInRow = DATA.CONTRIBUTORS.slice(rowId * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE, (rowId + 1) * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
        htmlContent += displayContributorsRow(contributorsInRow);
    }

    document.getElementById("contributors").innerHTML += htmlContent;
}


/* Links section */
function formatLink(_link) {
    return `<div class="col-sm text-center">
            ${link(_link.url, `<img src=${_link.icon} width="20px"> ${_link.name}`, `role="button" class="btn btn-dark"`)}
        </div>`;
}

function formatLinkGroup(group) {
    return `<div class="col-sm text-center">
                <img src=${group.icon} />
                <h4>${group.title}</h4>
                ${group.links.map(link => formatLink(link)).join("")}
            </div>`;
}

function displayLinks() {
    document.getElementById("links-area").innerHTML = DATA.LINKS.map(
        group => formatLinkGroup(group)
    ).join("");
}

/* Citation */
function displayCitation() {
    htmlContent = `<code>${DATA.CITATION}</code>`;
    document.getElementsByClassName("citation")[0].innerHTML = htmlContent;
}

/* Footer */
function displayFooter() {
    const nbLogos = DATA.FOOTER.LOGOS.length;
    const nbColsPerDiv = Math.floor(NB_COLS / (nbLogos + 1));
    const pad = padding(nbLogos + 1, nbLogos + 1);

    const htmlLogos = DATA.FOOTER.LOGOS.map(logo => `\
        <div class="col-md-${nbColsPerDiv} text-center">
            ${link(logo.url, `<img src=${logo.src} alt=${logo.name} width=${DATA.STYLE.FOOTER_LOGO_SIZE}>`)}
        </div>
    `);

    document.getElementById("footer").innerHTML = `\
        <div class="container footer-container">
            <div class="row align-items-center h-100">
                ${pad}
                ${htmlLogos.join("")}
                <div class="col-md-${nbColsPerDiv} text-center align-middle">
                    <h5>&copy; ${DATA.FOOTER.COPYRIGHT}</h5>
                    Website Design: ${link("https://github.com/rjgpinel/dark-academic-website", "dark-academic-website")}
                </div>
                ${pad}
            </div>
        </div>
    `;
}

/* Main */
function displayPage() {
    displayTitle();
    displayNav();
    // displayVideo();
    displayAbstract();
    // displayOverview();
    // displayContentSections();
    displayContributors();
    displayLinks();
    displayCitation();
    displayFooter();
}

displayPage();
