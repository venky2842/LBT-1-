  "use strict";
  /*function stop(){
    alert("wait");
  }*/
var explosionWords = ['Pop!', 'Snap!', 'Crack!'];
var bubblesPopped = 0;
var $score = document.getElementById('score');
function updateScore(offset) {
  bubblesPopped += offset;
  $score.innerHTML = 'Popped ' + bubblesPopped + ' bubbles!';
}
function createBubble1() {
  // create bubble graphic
  var $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  var $word = document.createElement('div');
  $word.classList.add('wordstyles');
  $word.innerHTML = "help";
  // wrap in a larger div so bubbles are easy to pop while moving
  var $boundingBox1 = document.createElement('div');
  $boundingBox1.classList.add('bubble-wrap');
  $boundingBox1.style.left = 5 + Math.random() * 90 + 'vw';
  $bubble.appendChild($word);
  $boundingBox1.appendChild($bubble);
  $boundingBox1.addEventListener('click', destroyBubble($boundingBox1));
  // attach to doc and return
  document.body.appendChild($boundingBox1);
  return $boundingBox1;
}
function createBubble2() {
  // create bubble graphic
  var $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  // wrap in a larger div so bubbles are easy to pop while moving
  var $boundingBox2 = document.createElement('div');
  $boundingBox2.classList.add('bubble-wrap');
  $boundingBox2.style.left = 5 + Math.random() * 90 + 'vw';
  $boundingBox2.appendChild($bubble);
  $boundingBox2.addEventListener('click', destroyBubble($boundingBox2));
  // attach to doc and return
  document.body.appendChild($boundingBox2);
  return $boundingBox2;
}
function createBubble3() {
  // create bubble graphic
  var $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  // wrap in a larger div so bubbles are easy to pop while moving
  var $boundingBox3 = document.createElement('div');
  $boundingBox3.classList.add('bubble-wrap');
  $boundingBox3.style.left = 5 + Math.random() * 90 + 'vw';
  $boundingBox3.appendChild($bubble);
  $boundingBox3.addEventListener('click', destroyBubble($boundingBox3));
  // attach to doc and return
  document.body.appendChild($boundingBox3);
  return $boundingBox3;
}
function createBubble4() {
  // create bubble graphic
  var $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  // wrap in a larger div so bubbles are easy to pop while moving
  var $boundingBox4 = document.createElement('div');
  $boundingBox4.classList.add('bubble-wrap');
  $boundingBox4.style.left = 5 + Math.random() * 90 + 'vw';
  $boundingBox4.appendChild($bubble);
  $boundingBox4.addEventListener('click', destroyBubble($boundingBox4));
  // attach to doc and return
  document.body.appendChild($boundingBox4);
  return $boundingBox4;
}
function createBubble5() {
  // create bubble graphic
  var $bubble = document.createElement('div');
  $bubble.classList.add('bubble');
  
  // wrap in a larger div so bubbles are easy to pop while moving
  var $boundingBox5 = document.createElement('div');
  $boundingBox5.classList.add('bubble-wrap');
  $boundingBox5.style.left = 5 + Math.random() * 90 + 'vw';
  $boundingBox5.appendChild($bubble);
  $boundingBox5.addEventListener('click', destroyBubble($boundingBox5));
  // attach to doc and return
  document.body.appendChild($boundingBox5);
  return $boundingBox5;
}

function createExplosion(x, y) {
  // create explosion at the coordinates
  var $explosion = document.createElement('div');
  $explosion.classList.add('explosion');
  $explosion.style.left = x + 'px';
  $explosion.style.top = y + 'px';
  $explosion.innerHTML = explosionWords[Math.floor(Math.random() * 3)];
  document.body.appendChild($explosion);
  // animate cartoon pop on words
  just.animate({
    targets: $explosion,
    to: 600,
    fill: 'forwards',
    easing: 'ease-out',
    css: [
    { scale: 1 },
    { offset: 0.2, scale: 1.4, opacity: 1 },
    { scale: .7, opacity: 0 }] }).


  on('finish', function () {return document.body.removeChild($explosion);});
}
function destroyBubble($bubble) {
  return function () {
    // create explosion at bubbles old position
    var rect = $bubble.getBoundingClientRect();
    var centerX = (rect.right - rect.left) * .45 + rect.left;
    var centerY = (rect.bottom - rect.top) * .45 + rect.top;
    createExplosion(centerX, centerY);
    updateScore(1);
     //remove bubble
    $bubble.style.display = 'none';
  };
}
function generateBubbles(min, max) {
  var length = min + Math.round(Math.random() * (max - min));
  var targets = [];
  for (var i = 0; i < length; i++) {
    targets.push(createBubble1());
    targets.push(createBubble2());
    targets.push(createBubble3());
    targets.push(createBubble4());
    targets.push(createBubble5());
    //targets.push(createBubble6());
  }
  return targets;
}
function animateBubbles() {
  var bubbles = generateBubbles(0, 1);
  var player = just.animate({
    targets: bubbles,
    to: '8s',
    easing: 'ease-in',
    css: {
      transform: function () {
        var endTranslateY = just.random(100, 110, 'vh', true);
        var startScale = just.random(70, 100, null, true);
        var endScale = just.random(70, 100, null, true);
        return [
        'translateY(0) scale(0.' + startScale + ')',
        'translateY(-' + endTranslateY + ') scale(0.' + endScale + ')'];

      } },

    delay: function () {
      return just.random(0, 5000);
    } })

  .on('finish', function () {
    bubbles.forEach(function (bubble) {
      document.body.removeChild(bubble);
    });
  });
  return player;
}
function startBubbles() {
  animateBubbles().on('finish', startBubbles);
}
function startWaves() {
  just.animate({
    targets: document.body,
    to: '1s',
    fill: 'both',
    css: {
      backgroundColor: [
      'hsl(196, 92.2%, 20%)',
      'hsl(196, 92.2%, 15%)'] },


    direction: 'alternate',
    iterations: Infinity });

}
startBubbles();
startWaves();
