
$(document).ready(function () {
    console.log("HEy im ready")
    // VARIABLES
    //------------------------------------------------------
    // setting a random value for each jewel
    var jewel1 = Math.floor((Math.random() * 12) + 1);
    var jewel2 = Math.floor((Math.random() * 12) + 1);
    var jewel3 = Math.floor((Math.random() * 12) + 1);
    var jewel4 = Math.floor((Math.random() * 12) + 1);

    console.log(jewel1, jewel2, jewel3, jewel4);
    
    // setting up a global variable
    var score = 0;
    var win = 0;
    var loss = 0;

    // setting up a random variable compared with score
    var target = Math.floor((Math.random() * 120) + 19);
    console.log(target);
    $("#rand").html(target);

    // FUNCTIONS
    //------------------------------------------------------
    
    // function to updates score 
    function update_score(s) {
        score = score + s;
        $('#score').html(score);

        if (target === score) {
            win = win + 1;
            alert('you win');
            reset();
        }
    }

    //function which to increment loss, alert user, and reset
    function set_loss() {
        loss = loss + 1;
        alert('you loss');
        reset();
    }

    // resetting after each game
    function reset() {
        jewel1 = Math.floor((Math.random() * 12) + 1);
        jewel2 = Math.floor((Math.random() * 12) + 1);
        jewel3 = Math.floor((Math.random() * 12) + 1);
        jewel4 = Math.floor((Math.random() * 12) + 1);
    }


    // MAIN LOGIC
    //------------------------------------------------------

    // link jQuery selector and html
    $("#jewel1").on("click", function () {
        update_score(jewel1);
        console.log(jewel1);
    });
    $("#jewel2").on("click", function () {
        update_score(jewel2);
        console.log(jewel2);
    });
    $("#jewel3").on("click", function () {
        update_score(jewel3);
        console.log(jewel3);
    });
    $("#jewel4").on("click", function () {
        update_score(jewel4);
        console.log(jewel4);
    });
    
        
    score = 0;
    update_score(0);
    $('#win').html(win);
    $('#loss').html(loss);
});

