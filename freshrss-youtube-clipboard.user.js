// ==UserScript==
// @name         FreshRSS YouTube to Clipboard
// @namespace    com.jhvisser.rss
// @version      1.0.0
// @description  Grabs a list of all the YouTube links on a FreshRSS page and saves them to clipboard.
// @author       Fogest [freshrss@jhvisser.com]
// @match        https://rss.jhvisser.com/i/*
// ==/UserScript==

(function() {
    addButton();

    function addButton(){
        let nav = document.getElementsByClassName("nav_menu")[0];

        let exportToClipboard = document.createElement('a')
        exportToClipboard.id = "exportToClipboard";
        exportToClipboard.classList.add("btn");
        exportToClipboard.title = "Copy Links to Clipboard"

        let exportToClipboardIcon = document.createElement("img");
        exportToClipboardIcon.classList.add("icon");
        exportToClipboardIcon.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDM4Ljg5MSA0MzguODkxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzguODkxIDQzOC44OTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zNDcuOTY4LDU3LjUwM2gtMzkuNzA2VjM5Ljc0YzAtNS43NDctNi4yNjktOC4zNTktMTIuMDE2LTguMzU5aC0zMC44MjRjLTcuMzE0LTIwLjg5OC0yNS42LTMxLjM0Ny00Ni40OTgtMzEuMzQ3DQoJCQkJYy0yMC42NjgtMC43NzctMzkuNDY3LDExLjg5Ni00Ni40OTgsMzEuMzQ3aC0zMC4zMDJjLTUuNzQ3LDAtMTEuNDk0LDIuNjEyLTExLjQ5NCw4LjM1OXYxNy43NjNIOTAuOTIzDQoJCQkJYy0yMy41MywwLjI1MS00Mi43OCwxOC44MTMtNDMuODg2LDQyLjMxOHYyOTkuMzYzYzAsMjIuOTg4LDIwLjg5OCwzOS43MDYsNDMuODg2LDM5LjcwNmgyNTcuMDQ1DQoJCQkJYzIyLjk4OCwwLDQzLjg4Ni0xNi43MTgsNDMuODg2LTM5LjcwNlY5OS44MjJDMzkwLjc0OCw3Ni4zMTYsMzcxLjQ5OCw1Ny43NTQsMzQ3Ljk2OCw1Ny41MDN6IE0xNTEuNTI3LDUyLjI3OWgyOC43MzUNCgkJCQljNS4wMTYtMC42MTIsOS4wNDUtNC40MjgsOS45MjctOS40MDRjMy4wOTQtMTMuNDc0LDE0LjkxNS0yMy4xNDYsMjguNzM1LTIzLjUxYzEzLjY5MiwwLjQxNSwyNS4zMzUsMTAuMTE3LDI4LjIxMiwyMy41MQ0KCQkJCWMwLjkzNyw1LjE0OCw1LjIzMiw5LjAxMywxMC40NDksOS40MDRoMjkuNzh2NDEuNzk2SDE1MS41MjdWNTIuMjc5eiBNMzcwLjk1NiwzOTkuMTg1YzAsMTEuNDk0LTExLjQ5NCwxOC44MDgtMjIuOTg4LDE4LjgwOA0KCQkJCUg5MC45MjNjLTExLjQ5NCwwLTIyLjk4OC03LjMxNC0yMi45ODgtMTguODA4Vjk5LjgyMmMxLjA2Ni0xMS45NjQsMTAuOTc4LTIxLjIwMSwyMi45ODgtMjEuNDJoMzkuNzA2djI2LjY0NQ0KCQkJCWMwLjU1Miw1Ljg1NCw1LjYyMiwxMC4yMzMsMTEuNDk0LDkuOTI3aDE1NC4xMjJjNS45OCwwLjMyNywxMS4yMDktMy45OTIsMTIuMDE2LTkuOTI3Vjc4LjQwMWgzOS43MDYNCgkJCQljMTIuMDA5LDAuMjIsMjEuOTIyLDkuNDU2LDIyLjk4OCwyMS40MlYzOTkuMTg1eiIvPg0KCQkJPHBhdGggZD0iTTE3OS4yMTcsMjMzLjU2OWMtMy45MTktNC4xMzEtMTAuNDI1LTQuMzY0LTE0LjYyOS0wLjUyMmwtMzMuNDM3LDMxLjg2OWwtMTQuMTA2LTE0LjYyOQ0KCQkJCWMtMy45MTktNC4xMzEtMTAuNDI1LTQuMzYzLTE0LjYyOS0wLjUyMmMtNC4wNDcsNC4yNC00LjA0NywxMC45MTEsMCwxNS4xNTFsMjEuNDIsMjEuOTQzYzEuODU0LDIuMDc2LDQuNTMyLDMuMjI0LDcuMzE0LDMuMTM1DQoJCQkJYzIuNzU2LTAuMDM5LDUuMzg1LTEuMTY2LDcuMzE0LTMuMTM1bDQwLjc1MS0zOC42NjFjNC4wNC0zLjcwNiw0LjMxLTkuOTg2LDAuNjAzLTE0LjAyNQ0KCQkJCUMxNzkuNjI4LDIzMy45NjIsMTc5LjQyNywyMzMuNzYxLDE3OS4yMTcsMjMzLjU2OXoiLz4NCgkJCTxwYXRoIGQ9Ik0zMjkuMTYsMjU2LjAzNEgyMDguOTk3Yy01Ljc3MSwwLTEwLjQ0OSw0LjY3OC0xMC40NDksMTAuNDQ5czQuNjc4LDEwLjQ0OSwxMC40NDksMTAuNDQ5SDMyOS4xNg0KCQkJCWM1Ljc3MSwwLDEwLjQ0OS00LjY3OCwxMC40NDktMTAuNDQ5UzMzNC45MzEsMjU2LjAzNCwzMjkuMTYsMjU2LjAzNHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNzkuMjE3LDE0OS45NzdjLTMuOTE5LTQuMTMxLTEwLjQyNS00LjM2NC0xNC42MjktMC41MjJsLTMzLjQzNywzMS44NjlsLTE0LjEwNi0xNC42MjkNCgkJCQljLTMuOTE5LTQuMTMxLTEwLjQyNS00LjM2NC0xNC42MjktMC41MjJjLTQuMDQ3LDQuMjQtNC4wNDcsMTAuOTExLDAsMTUuMTUxbDIxLjQyLDIxLjk0M2MxLjg1NCwyLjA3Niw0LjUzMiwzLjIyNCw3LjMxNCwzLjEzNQ0KCQkJCWMyLjc1Ni0wLjAzOSw1LjM4NS0xLjE2Niw3LjMxNC0zLjEzNWw0MC43NTEtMzguNjYxYzQuMDQtMy43MDYsNC4zMS05Ljk4NiwwLjYwMy0xNC4wMjUNCgkJCQlDMTc5LjYyOCwxNTAuMzcsMTc5LjQyNywxNTAuMTY5LDE3OS4yMTcsMTQ5Ljk3N3oiLz4NCgkJCTxwYXRoIGQ9Ik0zMjkuMTYsMTcyLjQ0MkgyMDguOTk3Yy01Ljc3MSwwLTEwLjQ0OSw0LjY3OC0xMC40NDksMTAuNDQ5czQuNjc4LDEwLjQ0OSwxMC40NDksMTAuNDQ5SDMyOS4xNg0KCQkJCWM1Ljc3MSwwLDEwLjQ0OS00LjY3OCwxMC40NDktMTAuNDQ5UzMzNC45MzEsMTcyLjQ0MiwzMjkuMTYsMTcyLjQ0MnoiLz4NCgkJCTxwYXRoIGQ9Ik0xNzkuMjE3LDMxNy4xNmMtMy45MTktNC4xMzEtMTAuNDI1LTQuMzYzLTE0LjYyOS0wLjUyMmwtMzMuNDM3LDMxLjg2OWwtMTQuMTA2LTE0LjYyOQ0KCQkJCWMtMy45MTktNC4xMzEtMTAuNDI1LTQuMzYzLTE0LjYyOS0wLjUyMmMtNC4wNDcsNC4yNC00LjA0NywxMC45MTEsMCwxNS4xNTFsMjEuNDIsMjEuOTQzYzEuODU0LDIuMDc2LDQuNTMyLDMuMjI0LDcuMzE0LDMuMTM1DQoJCQkJYzIuNzU2LTAuMDM5LDUuMzg1LTEuMTY2LDcuMzE0LTMuMTM1bDQwLjc1MS0zOC42NjFjNC4wNC0zLjcwNiw0LjMxLTkuOTg2LDAuNjAzLTE0LjAyNQ0KCQkJCUMxNzkuNjI4LDMxNy41NTQsMTc5LjQyNywzMTcuMzUzLDE3OS4yMTcsMzE3LjE2eiIvPg0KCQkJPHBhdGggZD0iTTMyOS4xNiwzMzkuNjI2SDIwOC45OTdjLTUuNzcxLDAtMTAuNDQ5LDQuNjc4LTEwLjQ0OSwxMC40NDlzNC42NzgsMTAuNDQ5LDEwLjQ0OSwxMC40NDlIMzI5LjE2DQoJCQkJYzUuNzcxLDAsMTAuNDQ5LTQuNjc4LDEwLjQ0OS0xMC40NDlTMzM0LjkzMSwzMzkuNjI2LDMyOS4xNiwzMzkuNjI2eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";

        exportToClipboard.appendChild(exportToClipboardIcon);
        nav.append(exportToClipboard);
        exportToClipboard.addEventListener('click', getYouTubeLinks);
    }

    function getYouTubeLinks(element, e){
        let youtubeLinks = "", links = document.links;
        for(let i = 0; i < links.length; i++) {
            if(links[i].href.includes("youtube")) {
                youtubeLinks += links[i].href + "\n";
            }
        }
        copyToClipboard(youtubeLinks);
    }

    function copyToClipboard(text) {
        let dummy = document.createElement("textarea");
        // to avoid breaking orgain page when copying more words
        // cant copy when adding below this code
        // dummy.style.display = 'none'
        document.body.appendChild(dummy);
        //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

})();
