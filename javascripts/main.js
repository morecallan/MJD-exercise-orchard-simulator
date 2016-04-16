"use strict";

var output = $("#output");
var timesGrown = 0;

output.html(`<div class="row">`)

// Create a Plant function.
var Plant = function() {
    this.height = 0; // Plant should have a property of height.

};


// Create a Tree function.
// Tree should have a property of branches.
var Tree = function() {
    this.branches = 0;
    this.growthCount = 0;
};
// Plant should be the prototype of Tree.
Tree.prototype = new Plant();




// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
Plant.prototype.increaseHeight = function (amount) {
    this.height += amount;
};

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function (amount) {
    this.height -= amount;
};


// The Tree prototype should have two methods on it: grow and trim.
// The grow method should accept an integer value as input.
// The grow method should increase the height of the tree.
Tree.prototype.grow = function (amount) {
    this.growthCount += amount;
    this.increaseHeight(amount);
    while (this.growthCount >= 10) {
        this.branches ++;
        this.growthCount -= 10;
    } 
};

// The trim method should decrease the height of the tree.
// The trim method should accept an integer value as input.
// When the trim method is called, the number of branches should decrease by one.
Tree.prototype.trim = function (amount) {
    this.decreaseHeight(amount);
    this.branches--;
};

// Each time the height of a tree increases by 10, the value of branch should increase by one.
var branchIncrease = function(growthCount) {
    
}

// Create a PearTree instance of Tree. 
var PearTree = new Tree();

// Create an OakTree instance of Tree.
var OakTree = new Tree();


// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
var timer = setInterval(growMyTrees, 1000);

function growMyTrees() {
    PearTree.grow(8);
    OakTree.grow(14);

    // Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
    timesGrown ++
    if (timesGrown % 10 === 0 && timesGrown > 0) {
        PearTree.trim(2);
        OakTree.trim(4);
        showMyTrees();
    } else {
        showMyTrees();
    }

    // Stop growing the trees after they have grown 30 times.
    if (timesGrown >= 30) {
        clearInterval(timer);
    }
}

// Also output the current height of each tree and how many branches it has to the DOM.
function showMyTrees() {
    var buildstring = "";
    buildstring += `<div class="col-md-4"><div class="card">`
    buildstring += `<p class="timeP">After ${timesGrown} seconds...</p>`
    buildstring += `<p class="pearTree"><b>Pear Tree</b> is now <b>${PearTree.height}cm</b> tall and has <b>${PearTree.branches}</b> branches</p>`;
    buildstring += `<p class="oakTree"><b>Oak Tree</b> is now <b>${OakTree.height}cm</b> tall and has <b>${OakTree.branches}</b> branches</p>`;
    buildstring += `</div></div>`
    output.append(buildstring);
}


