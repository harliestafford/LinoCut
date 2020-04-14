var prevBtn = $(".prevBtn");
var nextBtn = $(".nextBtn");
var holder;
var stepNumber;

var steps = [
    {
        header: 'Step 1: Collecting Supplies',
        copy: "Most supplies can be purchased at your local craft and hardware stores. Click below to purchase supplies online.",
        image: 'url("images/linocutSupplies.jpeg")'
    },

    {
        header: 'Step 2: Designing Your Piece',
        copy: "Sketch out or digitally create what you want the finished piece to look like. Then, when it's done, transfer traditional drawings to digital and flip the digital piece on it's y-axis (vertical). Print the design.",
        image: 'url("images/design.jpg")'
    },

    {
        header: 'Step 3: Transferring Your Design',
        copy: "Lay transfer paper on the block where you want your design. Then, place your design ontop of the transfer paper and trace it onto the block. Once it is transferred, go over the transferred area on the block with a permanent marker.",
        image: 'url("images/transferpaper.jpg")'
    },
    {
        header: 'Step 4: Time To Cut',
        copy: "The first step involves cutting away the white areas of the image. Linoleum printing is essentially a form of stamp printing, so whatever is cut out of the block will not be inked. The cutting tools are V-shaped and U-shaped gouges. Cut slowly and and with a smaller gauge. When linoleum gets warm it cuts very smoothly and quickly so be sure to use that electric blanket to keep the linoleum warm. The sharper the blade, the smoother the cut. Be careful and always cut away from yourself.",
        image: 'url("images/cutLino.jpg")'
    },
    {
        header: 'Step 5: Proofing/Inking',
        copy: "Once you are finished cutting, test your print with a little ink. Wearing gloves, dust off your cut block and add a little bit of ink to a smooth surface. Roll your roller over the ink slowly until it has a thin layered coat of ink. Then, apply the ink to your block. Gently apply the block to your test surface (paper, brown bag, etc.). Pull the paper way carefully.",
        image: 'url("images/testPrints.jpg")'
    },
    {
        header: 'Step 6: Make Some Adjustments',
        copy: "Nothing is ever perfect the first time around so chances are you'll need to make adjustments. Clean off your block and cut any additional areas that you need to adjust.",
        image: 'url("images/adjusting.jpg")'
    },
    {
        header: 'Step 7: Final Print',
        copy: "Repeat step five and apply the new design to your final surface. If you are still not happy with it, repeat step six. Otherwise, let your ink dry and enjoy your new piece!",
        image: 'url("images/finalPrint.jpg")'
    },
]

stepNumber = 0;

//SHOW STEPS
$(window).ready(displaySteps);

function displaySteps() {
    // console.log(holder);
    console.log(stepNumber);
    holder = steps[stepNumber];
    $('#image').css('background-image', holder.image);
    $('#stepH2').text(holder.header)
    $('#stepP').text(holder.copy)

    if (stepNumber == 0) {
        $(prevBtn).css('visibility', 'hidden')
        $(nextBtn).css('visibility', 'visible')
    }
    else {
        prevBtnHide()
        nextBtnHide()
    }
    if (stepNumber >= 1) {
        $('#stores').css('visibility', 'hidden') 
    }
};

//INCREMENTING BUTTONS
function prevBtnHide() {
    if (stepNumber <= 0) {
        $(prevBtn).css('visibility', 'hidden')
    }
    else {
        $(prevBtn).css('visibility', 'visible')
    }
};

function nextBtnHide() {
    if (stepNumber < 6) {
        $(nextBtn).css('visibility', 'visible')
    }
    else {
        $(nextBtn).css('visibility', 'hidden')
    }
};

$(prevBtn).click(function(){
    stepNumber--;
    displaySteps()
    prevBtnHide()
    nextBtnHide()

    console.log(stepNumber);
    console.log(holder);
});

$(nextBtn).click(function(){
    stepNumber++;
    displaySteps()
    prevBtnHide()
    nextBtnHide()

    console.log(stepNumber);
    console.log(holder);
});

