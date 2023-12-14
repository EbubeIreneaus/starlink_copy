<style>
:root{
    --text-color:white;
}
a{
    text-decoration: none;
}
header{
    width: 100vw;
    position: absolute;
    top: 0%;
}
nav{
    align-items: center;
    height:100px;
    width: 80%;
    margin: auto  !important;
  
}
    nav ul{
        max-width: 80%;
        height: 100%; 
        margin: 0%;
  
    }
    ul li{
        list-style-type: none;
    }
    nav ul a{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding: 5px 10px;
        color: var(--text-color);
    }
    nav .router-link-active{
        border-bottom: 1px solid white;
    }
    nav  h2{
        font-family: 'Courier New', Courier, monospace;
        color: var(--text-color) ;
    }
nav .btn:hover{
    background-color: transparent !important;
    color: var(--text-color);
}
    .offcanvas{
        width: 17% !important;
        background-color: black;
    }
    .offcanvas ul{
        text-align: left;
        padding-inline-start: 0%;
        width: 100%;
    }
    .offcanvas-body  a{
       border-bottom: 1px solid whitesmoke;
        display: block;
        padding: 20px 5px;
        color: var(--text-color);
     
    }
    .nav-menu-mobile a{
        padding:  10px 5px;
        border: none;
    }
    @media screen and (max-width:992px){
        .offcanvas{
        width: 95% !important;
    }
    }
</style>
<template>
    <header>

   <nav class=" d-flex justify-content-between">
    <h2 class="mt-1">StarLink</h2>
    <ul class="d-none d-lg-flex align-items-center justify-content-between
  ">
        <li><router-link to="/">Residential</router-link></li>
        <li><router-link to="/business">Business</router-link></li>
        <li><router-link to="/roam">Roam</router-link></li>
        <li><router-link to="/mobility">Mobility</router-link></li>
        <li><router-link to="/aviation">Aviation</router-link></li>
        <li><router-link to="/maritime">Maritime</router-link></li>
        <li><router-link to="/contact">Support</router-link></li>
    </ul>
    <button type="button" class="btn float-end btn-outline-light"
    @click="show_sidebar = true"><i class="fa fa-bars"></i></button>
   </nav>

  
  <div class="offcanvas offcanvas-end shadow-lg" :class="{'show':show_sidebar}" tabindex="-1">
    <div class="offcanvas-header mb-4">
      <button type="button" class="btn btn-outline-light" 
      @click="show_sidebar = false"><i class="fa-solid fa-close"></i></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <ul class="nav-menu-mobile ">
        <router-link to="/"><li>Residential</li></router-link>
        <router-link to="/roam"><li>Roam</li></router-link>
        <router-link to="/business"><li>Business</li></router-link>
        <router-link to="/service"><li>Service</li></router-link>
        <router-link to="/mobility"><li>Mobility</li></router-link>
        <router-link to="/maritime"><li>Maritime </li></router-link>
        <router-link to="/aviation"><li>Aviation </li></router-link>
       
        <router-link to="/contact"><li>Support </li></router-link>
        
       </ul>

       <ul class="d-none">
        <router-link to=""><li>Map</li></router-link>
        <router-link to=""><li>Resources</li></router-link>
        <router-link to=""><li>Specification</li></router-link>
        <router-link to=""><li>Us</li></router-link>
        <router-link to=""><li>Sign In</li></router-link>
        
       </ul>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            show_sidebar:false,
        }
    },
}
</script>