function openCredits() {
    // Open credits window
    var creditsWindow = window.open('', '_blank');

    // Ensure the window is opened before proceeding
    if (creditsWindow) {
        var creditsContent = `
            <html>
            <head>
                <title>CREDITS</title>
                <style>
                
                    body {
                        font-family: 'Bangers', bold;
                        font-size: 3rem;
                        text-align: center;
                        background-image: url('Underwater.jpg');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        margin-bottom: 20px;
                    }
                    .btn-AoS {
                        background: #b4b03d;
                        color: rgb(247, 247, 247);
                        width: 10%;
                        padding: .5rem 0;
                        margin-bottom: .75rem;
                        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
                        font-size: 1.5rem;
                        font-family: 'Arial', sans-serif;
                        font-style: bold;
                        letter-spacing: .17em;
                        border: 2px solid rgba(0, 0, 0, 1);
                        box-shadow: inset 3px 3px 0 rgba(255, 255, 255, 0.5),
                                    inset -3px -3px 0 rgba(0, 0, 0, 0.5);
                        cursor: pointer;
                        
                    }
                    p.credits {
                        font-style: italic;
                        font-size: 2rem;
                    }
                    h1 {
                        color: #b4b03d;
                        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.8);
                    }
                </style>
            </head>
            <body>
                <h1>CREDITS</h1>
                <br>
                <p class="credits"> PRAGATI DANGI (43) <br> ANURAG THAKUR (09) <br> ROHIT JAIN (52) </p>
                <button class="btn-AoS" onclick="window.close()">Back</button>
            </body>
            </html>
        `;

        creditsWindow.document.write(creditsContent);
        creditsWindow.document.close();
    } else {
        console.error("Unable to open credits window");
    }
}
function quitGame() {
    // Close all windows
    var windows = window.open('', '_blank');
    if (windows) {
        windows.close();
    }
}