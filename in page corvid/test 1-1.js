import wixLocation from "wix-location";
let m = 0;

$w.onReady(function () {
//$w('#html1').
//console.log("edf");
//$w("#html1").onMessage( (event) => {
//console.log("efd");
  //let a = event.data;
//console.log(a);
//} );

    $w('#iconButton2').hide();
    $w('#iconButton3').hide();
    $w('#iconButton4').hide();
    $w('#iconButton5').hide();
    $w('#iconButton6').hide();
    $w('#iconButton7').hide();
    $w('#iconButton8').hide();
    $w('#iconButton9').hide();

    $w('#button13').hide();
    $w('#button14').hide();
    $w('#button15').hide();
    $w('#button16').hide();
    $w('#button17').hide();
    $w('#button18').hide();
    $w('#button19').hide();
    $w('#button20').hide();

    $w('#button21').hide();
    $w('#button22').hide();
    $w('#button23').hide();
    $w('#button24').hide();
    $w('#button25').hide();
    $w('#button26').hide();
    $w('#button27').hide();
    $w('#button28').hide();

    $w('#button29').hide();
    $w('#button30').hide();
    $w('#button31').hide();
    $w('#button32').hide();
    $w('#button33').hide();
    $w('#button34').hide();
    $w('#button35').hide();
    $w('#button36').hide();
            
    $w('#button37').hide();
    $w('#button38').hide();
    $w('#button39').hide();
    $w('#button40').hide();
    $w('#button41').hide();
    $w('#button42').hide();
    $w('#button43').hide();
    $w('#button44').hide();
    
    $w('#button45').hide();
    $w('#html1').hide();






    $w('#iconButton1').onClick(() => {
        $w('#button1').hide();
        $w('#button6').hide();
        $w('#button7').hide();
        $w('#button8').hide();
        $w('#button9').hide();
        $w('#button10').hide();
        $w('#button11').hide();
        $w('#button12').hide();
        $w('#button13').show();
        $w('#button14').show();
        $w('#button15').show();
        $w('#button16').show();
        $w('#button17').show();
        $w('#button18').show();
        $w('#button19').show();
        $w('#button20').show();
        //console.log("icon1");
        $w('#iconButton1').hide();
        $w('#iconButton2').show();
        $w('#iconButton6').show();
    })
    $w('#iconButton2').onClick(() => {
        $w('#button13').hide();
        $w('#button14').hide();
        $w('#button15').hide();
        $w('#button16').hide();
        $w('#button17').hide();
        $w('#button18').hide();
        $w('#button19').hide();
        $w('#button20').hide();
        $w('#button21').show();
        $w('#button22').show();
        $w('#button23').show();
        $w('#button24').show();
        $w('#button25').show();
        $w('#button26').show();
        $w('#button27').show();
        $w('#button28').show();
        //console.log("icon2");
        $w('#iconButton2').hide();
        $w('#iconButton6').hide();
        $w('#iconButton3').show();
        $w('#iconButton7').show();
    })
    $w('#iconButton6').onClick(() => {
        $w('#button13').hide();
        $w('#button14').hide();
        $w('#button15').hide();
        $w('#button16').hide();
        $w('#button17').hide();
        $w('#button18').hide();
        $w('#button19').hide();
        $w('#button20').hide();
        $w('#button1').show();
        $w('#button6').show();
        $w('#button7').show();
        $w('#button8').show();
        $w('#button9').show();
        $w('#button10').show();
        $w('#button11').show();
        $w('#button12').show();
        $w('#iconButton6').hide();
        $w('#iconButton2').hide();
        $w('#iconButton1').show();
    })
    $w('#iconButton3').onClick(() => {
        $w('#button21').hide();
        $w('#button22').hide();
        $w('#button23').hide();
        $w('#button24').hide();
        $w('#button25').hide();
        $w('#button26').hide();
        $w('#button27').hide();
        $w('#button28').hide();
        $w('#button29').show();
        $w('#button30').show();
        $w('#button31').show();
        $w('#button32').show();
        $w('#button33').show();
        $w('#button34').show();
        $w('#button35').show();
        $w('#button36').show();
        $w('#iconButton3').hide();
        $w('#iconButton7').hide();
        $w('#iconButton4').show();
        $w('#iconButton8').show();
    })
    $w('#iconButton7').onClick(() => {
        $w('#button21').hide();
        $w('#button22').hide();
        $w('#button23').hide();
        $w('#button24').hide();
        $w('#button25').hide();
        $w('#button26').hide();
        $w('#button27').hide();
        $w('#button28').hide();
        $w('#button13').show();
        $w('#button14').show();
        $w('#button15').show();
        $w('#button16').show();
        $w('#button17').show();
        $w('#button18').show();
        $w('#button19').show();
        $w('#button20').show();
        $w('#iconButton7').hide();
        $w('#iconButton3').hide();
        $w('#iconButton2').show();
        $w('#iconButton6').show();
    })
    $w('#iconButton4').onClick(() => {
        $w('#button29').hide();
        $w('#button30').hide();
        $w('#button31').hide();
        $w('#button32').hide();
        $w('#button33').hide();
        $w('#button34').hide();
        $w('#button35').hide();
        $w('#button36').hide();
        $w('#button37').show();
        $w('#button38').show();
        $w('#button39').show();
        $w('#button40').show();
        $w('#button41').show();
        $w('#button42').show();
        $w('#button43').show();
        $w('#button44').show();
        $w('#iconButton4').hide();
        $w('#iconButton8').hide();
        $w('#iconButton5').show();
        $w('#iconButton9').show();
    })
    $w('#iconButton8').onClick(() => {
        $w('#button29').hide();
        $w('#button30').hide();
        $w('#button31').hide();
        $w('#button32').hide();
        $w('#button33').hide();
        $w('#button34').hide();
        $w('#button35').hide();
        $w('#button36').hide();
        $w('#button21').show();
        $w('#button22').show();
        $w('#button23').show();
        $w('#button24').show();
        $w('#button25').show();
        $w('#button26').show();
        $w('#button27').show();
        $w('#button28').show();
        $w('#iconButton8').hide();
        $w('#iconButton4').hide();
        $w('#iconButton3').show();
        $w('#iconButton7').show();
    })
    $w('#iconButton5').onClick(() => {
       $w('#button37').hide();
        $w('#button38').hide();
        $w('#button39').hide();
        $w('#button40').hide();
        $w('#button41').hide();
        $w('#button42').hide();
        $w('#button43').hide();
        $w('#button44').hide();
        $w('#iconButton5').hide();
        $w('#iconButton9').hide();
          $w('#button45').show();
    })
    $w('#iconButton9').onClick(() => {
        $w('#button37').hide();
        $w('#button38').hide();
        $w('#button39').hide();
        $w('#button40').hide();
        $w('#button41').hide();
        $w('#button42').hide();
        $w('#button43').hide();
        $w('#button44').hide();
        $w('#button29').show();
        $w('#button30').show();
        $w('#button31').show();
        $w('#button32').show();
        $w('#button33').show();
        $w('#button34').show();
        $w('#button35').show();
        $w('#button36').show();
        $w('#iconButton9').hide();
        $w('#iconButton5').hide();
        $w('#iconButton4').show();
        $w('#iconButton8').show();
        $w('#text13').hide();
    })
	
    
    //group1
    $w('#button1').onClick(() => {
            $w('#button1').style.backgroundColor = '#5dae5d'
            m++;
    })
	$w('#button6').onClick(() => {
            $w('#button6').style.backgroundColor = '#ff6666'
    })
	$w('#button7').onClick(() => {
            $w('#button7').style.backgroundColor = '#ff6666'
    })
	$w('#button8').onClick(() => {
            $w('#button8').style.backgroundColor = '#ff6666'
    })
	$w('#button9').onClick(() => {
            $w('#button9').style.backgroundColor = '#ff6666'
    })
	$w('#button10').onClick(() => {
            $w('#button10').style.backgroundColor = '#ff6666'
    })
	$w('#button11').onClick(() => {
            $w('#button11').style.backgroundColor = '#ff6666'
    })
	$w('#button12').onClick(() => {
            $w('#button12').style.backgroundColor = '#ff6666'
    })
    
    
    
    
    
    
    //group2
    $w('#button18').onClick(() => {
            $w('#button18').style.backgroundColor = '#5dae5d'
            m++;
    })
	$w('#button20').onClick(() => {
            $w('#button20').style.backgroundColor = '#ff6666'
    })
	$w('#button19').onClick(() => {
            $w('#button19').style.backgroundColor = '#ff6666'
    })
	$w('#button17').onClick(() => {
            $w('#button17').style.backgroundColor = '#ff6666'
    })
	$w('#button16').onClick(() => {
            $w('#button16').style.backgroundColor = '#ff6666'
    })
	$w('#button15').onClick(() => {
            $w('#button15').style.backgroundColor = '#ff6666'
    })
	$w('#button14').onClick(() => {
            $w('#button14').style.backgroundColor = '#ff6666'
    })
	$w('#button13').onClick(() => {
            $w('#button13').style.backgroundColor = '#ff6666'
    })
    
    
    
    
    
    
    //group4
    $w('#button32').onClick(() => {
            $w('#button32').style.backgroundColor = '#5dae5d'
            m++;
    })
	$w('#button36').onClick(() => {
            $w('#button36').style.backgroundColor = '#ff6666'
    })
	$w('#button35').onClick(() => {
            $w('#button35').style.backgroundColor = '#ff6666'
    })
	$w('#button34').onClick(() => {
            $w('#button34').style.backgroundColor = '#ff6666'
    })
	$w('#button33').onClick(() => {
            $w('#button33').style.backgroundColor = '#ff6666'
    })
	$w('#button31').onClick(() => {
            $w('#button31').style.backgroundColor = '#ff6666'
    })
	$w('#button30').onClick(() => {
            $w('#button30').style.backgroundColor = '#ff6666'
    })
	$w('#button29').onClick(() => {
            $w('#button29').style.backgroundColor = '#ff6666'
    })
    
    
    
    
    
    
    //group3
    $w('#button22').onClick(() => {
            $w('#button22').style.backgroundColor = '#5dae5d'
            m++;
    })
	$w('#button28').onClick(() => {
            $w('#button28').style.backgroundColor = '#ff6666'
    })
	$w('#button27').onClick(() => {
            $w('#button27').style.backgroundColor = '#ff6666'
    })
	$w('#button26').onClick(() => {
            $w('#button26').style.backgroundColor = '#ff6666'
    })
	$w('#button25').onClick(() => {
            $w('#button25').style.backgroundColor = '#ff6666'
    })
	$w('#button24').onClick(() => {
            $w('#button24').style.backgroundColor = '#ff6666'
    })
	$w('#button23').onClick(() => {
            $w('#button23').style.backgroundColor = '#ff6666'
    })
	$w('#button21').onClick(() => {
            $w('#button21').style.backgroundColor = '#ff6666'
    })






//group5
    $w('#button43').onClick(() => {
            $w('#button43').style.backgroundColor = '#5dae5d'
            m++;
    })
	$w('#button44').onClick(() => {
            $w('#button44').style.backgroundColor = '#ff6666'
    })
	$w('#button42').onClick(() => {
            $w('#button42').style.backgroundColor = '#ff6666'
    })
	$w('#button41').onClick(() => {
            $w('#button41').style.backgroundColor = '#ff6666'
    })
	$w('#button40').onClick(() => {
            $w('#button40').style.backgroundColor = '#ff6666'
    })
	$w('#button39').onClick(() => {
            $w('#button39').style.backgroundColor = '#ff6666'
    })
	$w('#button38').onClick(() => {
            $w('#button38').style.backgroundColor = '#ff6666'
    })
	$w('#button37').onClick(() => {
            $w('#button37').style.backgroundColor = '#ff6666'
    })
    
    $w('#button45').onClick(() => {
            $w('#html1').show();
            $w('#button45').hide();
            $w('#audioPlayer1').hide();
    })

});
//console.log("hi1");