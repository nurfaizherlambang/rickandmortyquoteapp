<!--
    Move JS to index.js
    Style with bootstrap
-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rick and Morty Quotes Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="static/js/index.js"></script>
        <link href="static/css/style.css" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper" class="container-fluid d-flex justify-content-center align-items-center">
            <div id="quote-box">
                <div id="header-text" class="text-center mx-5">Rick <span id="and">and</span> Morty</div>
                <div id="header-text" class="text-center mx-5 mb-5" style="font-size: large; font-family: 'Courier New', Courier, monospace;">Quotes Generator</div>
                <div id="text" class="text-center mx-5 my-2"></div>
                <div id="author" class="text-center mb-5"></div>
                <div class="row justify-content-center py-4">
                    <div class="col-auto"> 
                        <a id="tweet-quote" class="btn btn-primary" target="_top">Tweet</a>
                        <button id="new-quote" class="btn btn-primary">New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>