
let header=()=>
{
  return` <!-- collapsed sidepanel start start from here -->
  <div id="mySidepanel" class="sidepanel">
    <!-- sidepanel website icon -->
    <img src="https://www2.skillsoft.com/wp-content/uploads/2019/10/Deccan-Chronicle.png" id="menulogo"> 
    <!-- closepanel icon   -->
    <i style='font-size:24px' onclick="closeNav()" class='fas' id="closebtn">&#xf359;</i>
    <hr>
    <!-- home and prayer icon -->
    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home icon" id="home-icon">
    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png" alt="prayer" id="bellicon"><span id="prayer">Prayers</span> 
    <!-- sidepanel items -->
    <h3 id="asformat"><a href="./nation.html">Nation</a></h3>
    <ul>
    <li><a href="./nation.html"><i class="fa fa-angle-double-right "></i>Crime</a></li>
    <li><a href="./nation.html"><i class="fa fa-angle-double-right "></i>Current Affairs</a></li>
    <li><a href="./nation.html"><i class="fa fa-angle-double-right "></i>Politics</a></li>
    <li><a href="./nation.html"><i class="fa fa-angle-double-right "></i>In Other News</a></li>
  </ul>
  <h3 id="asformat"><a href="./south.html">South</a></h3>
    <ul>
    <li><a href="./south.html"><i class="fa fa-angle-double-right "></i>Telangana</a></li>
    <li><a href="./south.html"><i class="fa fa-angle-double-right "></i>Andhra Pradesh</a></li>
    <li><a href="./south.html"><i class="fa fa-angle-double-right "></i>Tamil Nadu</a></li>
    <li><a href="./south.html"><i class="fa fa-angle-double-right "></i>Karnataka</a></li>
    <li><a href="./south.html"><i class="fa fa-angle-double-right "></i>Kerala</a></li>
  </ul>
  <h3 id="asformat"><a href="./world.html">World</a></h3>
  <ul>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Australia and New Zealand</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Neighbours</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Asia</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Africa</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>America</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Europe</a></li>
  <li><a href="./world.html"><i class="fa fa-angle-double-right "></i>Middle East</a></li>
</ul>
<h3 id="asformat"><a href="./entertainment.html">Entertainment</a></h3>
  <ul>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Theatre</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Music</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Bollywood</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Kollywood</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Sandalwood</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Television</a></li>
  <li><a href="./entertainment.html"><i class="fa fa-angle-double-right "></i>Movie Reviews</a></li>
</ul>

  </div>
  <!-- open nav -->
  <button class="openbtn" onclick="openNav()">
    &#9776;
  </button>
  &nbsp;
  <!-- header items -->
  <div id="l-side-item">
  <h3 id="headder-menu">e-Paper</h3>
<h3 id="headder-menu"> | </h3>
<h3 id="headder-menu">Sunday Chronicle</h3>
</div>

<img src="https://madeinearth.in/wp-content/uploads/2015/03/fb-icon.png" alt="xyz" class="ficon">
<img src="data:image/png;base64,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" alt="xyz" class="ticon">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrWtSBSRhL18Xo-LoWKvEWbIfuq43m6uquw&usqp=CAU" alt="xyz" class="iicon">
<img src="https://thumbs.dreamstime.com/b/appstore-apple-company-icon-vector-image-can-also-be-used-social-media-logos-suitable-mobile-apps-web-apps-print-media-80364097.jpg" alt="xyz" class="smediaicons">

<div id="r-side-item">
    <h3 id="headder-menu"><input type="checkbox" id="autorefresh">Auto Refresh</h3>
  

<h3 id="headder-menu" >| Corporate Insolvency Resolution Process</h3>
</div>`

}
export{header}
