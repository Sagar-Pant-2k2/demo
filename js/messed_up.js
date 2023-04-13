// const wellImage = document.querySelector('.card-image');

// const openModal=>()

const maps = {
    "card_1" : `
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
 `,

    "card_2" : `
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8347.851100255111!2d79.48008735098306!3d29.014455646618586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzUxLjUiTiA3OcKwMjknMDguOSJF!5e1!3m2!1sen!2sin!4v1681036518504!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,

"card_3" : ` 
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12793.63038016821!2d79.47824522849726!3d29.01189971631255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQyLjgiTiA3OcKwMjknMTMuMiJF!5e1!3m2!1sen!2sin!4v1681036658010!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

"card_4" : `
      
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12794.076153131722!2d79.4825452284958!3d29.0082997163348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzI5LjkiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681036737796!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,
"card_5" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12791.62377683086!2d79.48764522850374!3d29.02809971621243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQxLjIiTiA3OcKwMjknNDcuMCJF!5e1!3m2!1sen!2sin!4v1681036866028!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_6" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.634363153276!2d79.48734523128581!3d29.029199716205813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ1LjEiTiA3OcKwMjknNDYuMCJF!5e1!3m2!1sen!2sin!4v1681036956481!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
"card_7" : `
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13663.634365298085!2d79.4873452!3d29.0291997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMyLjIiTiA3OcKwMjknMjcuNiJF!5e1!3m2!1sen!2sin!4v1681037076867!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_8" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.06347878475!2d79.49634523128181!3d29.018399716272523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjIiTiA3OcKwMzAnMTguNCJF!5e1!3m2!1sen!2sin!4v1681037141544!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
"card_9" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.965220141343!2d79.49804523128492!3d29.02669971622125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzM2LjEiTiA3OcKwMzAnMjQuNSJF!5e1!3m2!1sen!2sin!4v1681037208907!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 `,

    "card_10" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.462307238859!2d79.49464523128634!3d29.030499716197774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ5LjgiTiA3OcKwMzAnMTIuMiJF!5e1!3m2!1sen!2sin!4v1681037268244!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
"card_11" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.672028746414!2d79.50294523128008!3d29.013799716300973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzQ5LjciTiA3OcKwMzAnNDIuMSJF!5e1!3m2!1sen!2sin!4v1681037322112!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_12" : `
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.335749083813!2d79.46364523128386!3d29.02389971623855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjgnMjAuNiJF!5e1!3m2!1sen!2sin!4v1681037370519!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
"card_13" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.89148131004!2d79.45104523128234!3d29.019699716264487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzEwLjkiTiA3OcKwMjcnMzUuMyJF!5e1!3m2!1sen!2sin!4v1681037436498!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_14" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13665.341305998703!2d79.44374523128104!3d29.01629971628549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzU4LjciTiA3OcKwMjcnMDkuMCJF!5e1!3m2!1sen!2sin!4v1681037486742!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
 `,
"card_15" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.788038210301!2d79.4943452312741!3d28.99779971639992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzUyLjEiTiA3OcKwMzAnMTEuMiJF!5e1!3m2!1sen!2sin!4v1681037563354!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_16" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13668.343314087902!2d79.49424523127254!3d28.993599716425884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDU5JzM3LjAiTiA3OcKwMzAnMTAuOCJF!5e1!3m2!1sen!2sin!4v1681037602175!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,
"card_17" : `
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.875639830747!2d79.49264523127665!3d29.00469971635723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjkiTiA3OcKwMzAnMDUuMCJF!5e1!3m2!1sen!2sin!4v1681037685364!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_18" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.259135760594!2d79.48794523127556!3d29.001799716375178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA2LjUiTiA3OcKwMjknNDguMSJF!5e1!3m2!1sen!2sin!4v1681037742842!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
"card_19" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.325252209737!2d79.48874523127543!3d29.00129971637826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzA0LjciTiA3OcKwMjknNTEuMCJF!5e1!3m2!1sen!2sin!4v1681037798518!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_20" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.906386212444!2d79.43504523128792!3d29.034699716171833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA0LjkiTiA3OcKwMjYnMzcuNyJF!5e1!3m2!1sen!2sin!4v1681037853899!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,
"card_21" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13662.906388353123!2d79.4350452!3d29.0346997!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzI2LjAiTiA3OcKwMjYnMjAuOCJF!5e1!3m2!1sen!2sin!4v1681037964998!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

   " card_22" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.143872098208!2d79.42884523128443!3d29.025349716229577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzMxLjMiTiA3OcKwMjYnMTUuNCJF!5e1!3m2!1sen!2sin!4v1681038019251!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,

"card_23" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13662.89314910269!2d79.43224523128795!3d29.034799716171243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAyJzA1LjMiTiA3OcKwMjYnMjcuNiJF!5e1!3m2!1sen!2sin!4v1681038084339!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_24" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.483927441095!2d79.43604523127499!3d29.00009971638568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAwLjQiTiA3OcKwMjYnNDEuMyJF!5e1!3m2!1sen!2sin!4v1681038134417!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,

"card_25" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2494.563349960718!2d79.48553562067704!3d29.01847546195178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzA2LjYiTiA3OcKwMjknMTQuNiJF!5e1!3m2!1sen!2sin!4v1679546820917!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
   
 `,

    "card_26" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13663.674067365379!2d79.4058452312857!3d29.028899716207658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzQ0LjAiTiA3OcKwMjQnNTIuNiJF!5e1!3m2!1sen!2sin!4v1681038192956!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
 `,
    
"card_27" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13667.370210800635!2d79.46654523127528!3d29.000959716380354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzAzLjUiTiA3OcKwMjgnMzEuMSJF!5e1!3m2!1sen!2sin!4v1681039422390!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_28" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13664.42837622053!2d79.44254523128363!3d29.023199716242882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAxJzIzLjUiTiA3OcKwMjcnMDQuNyJF!5e1!3m2!1sen!2sin!4v1681039483561!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `,
    
"card_29" : `
          
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.359848721646!2d79.48774523127814!3d29.008599716333137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzMxLjAiTiA3OcKwMjknNDcuNCJF!5e1!3m2!1sen!2sin!4v1681039538333!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 `,

    "card_30" : `
          
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13666.888864411174!2d79.48254523127666!3d29.004599716357852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDAwJzE2LjYiTiA3OcKwMjknMjguNyJF!5e1!3m2!1sen!2sin!4v1681039579963!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
 `




}

const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.close');
const card = document.querySelectorAll('.card');
const container = document.querySelector('.map-url');
// const Iframe = document.querySelector('iframe')

modalWindow.classList.remove("flex");

card.forEach(Element=>{
    // console.log(card.classList.);

    // modalWindow.classList.add('hidden');
    Element.addEventListener('click',()=>{
        x = Element.classList[1];
        
        container.innerHTML = maps[x];
        console.log(maps[x]);
        modalWindow.classList.remove('hidden');
        // modalWindow.classList.add('flex');
        // console.log("working fine");
    });
    
});

console.log("hello world");
closeButton.addEventListener('click',()=>{
    // console.log((modalWindow));
    modalWindow.classList.add("hidden");
    // modalWindow.classList.remove("flex-col");
    // console.log("hemlo guyz");
});




// wellImage.addEventListener('click',openMap());