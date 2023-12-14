<style scoped>

:root {
    --text-color: white;
}

.head-section {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/bg-main.jpg');
    background-size: cover;

}

.head-sec-cont {
    position: absolute;
    width: 100%;
    height: calc(100vh - 110px);
    top: 110px;
    color: var(--text-color);
}

.cont-text {
    width: 50%;
    height: 100%;
    margin: auto;
}

.head-sec-cont p {
    font-family: 'Times New Roman', Times, serif;
}

.head-sec-cont .order-btn {
    bottom: 5px;

    width: 100%;
}

.head-sec-cont .order-btn button {
    padding: 20px 100px;
    margin: auto;
}

article a {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.main-bg-sec-2 {
    background-image: url('/src/assets/images/main-bg-1.webp');
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.main-bg-sec-2 .text {
    width: 40%;
    position: absolute;
    left: 10%;
    top: 30%;
    font-family: 'Times New Roman', serif;
}

.main-bg-sec-2 .text a {
    margin-top: 30px;
    background-color: transparent;
}
.customerquote article{
font-family:'Arial Narrow Bold', sans-serif;
font-size: large;
text-align: center;
line-height: 37px;
}
.customerquote article p{




margin-top: 10px;
}
@media screen and (max-width:992px) {
    .head-section {
        background-image: url('../assets/images/bg-main-small.jpg');
        background-size: cover;
        background-position: center;

    }

    .cont-text {
        width: 100%;
    }

    .main-bg-sec-2 .text {
        width: 90%;
        margin: auto;
        top: 10%;
        font-family: 'Times New Roman', serif;
    }
}
</style>
<template>
    <main>
        <div class="head-section ">
            <div class="head-sec-cont text-center">
                <div class="cont-text position-relative">
                    <h1>ORDER STARLINK</h1>
                    <h5>End year sales: <b><i style="text-decoration:line-through">$500</i> $355</b></h5>
                <p class="p-4">Connect to high-speed, low-latecy internet across the globe, even in the most
                     remote and rural locations</p>
                   
                    <div class="order-btn position-absolute">
                        <router-link to="/pyt/order" class="btn btn-outline-light">ORDER NOW</router-link>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/main-img-1.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>STREAMING, VIDEO CALLS, ONLINE GAMING & MORE</h2>
                        <small>With Starlink, users can engage in activities that historically have not been possible with
                            satellite internet.</small> <br><br>

                        <small>Starlink’s high-speed, low-latency service is made possible via the world’s largest
                            constellation of highly advanced satellites operating in a low orbit around the Earth.
                        </small><br><br>

                        <!-- <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">Learn More</router-link> -->
                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/main-img-2.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>EASY SELF-INSTALL</h2>
                        <small>Your Starlink Kit arrives with everything you need to get online
                            in minutes including your Starlink, WiFi router, cables and base.</small> <br><br>
                        <br><br>

                        <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">VIEW INSTALL</router-link>
                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/main-img-3.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>NO CONTRACTS, 30-DAY TRIAL</h2>
                        <small>Long term contracts prevent both parties from making sensible changes when necessary.</small>
                        <br><small>
                            With Starlink, it’s a fair deal both ways. Starlink can adjust terms and pricing as needed, and
                            customers can
                            cancel at any time, for any reason.</small>
                        <br><small>Try any Starlink Service for 30 days and, if not satisfied, return the hardware for a
                            full refund..</small> <br><br>
                        <br>

                        <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">VIEW INSTALL</router-link>
                    </div>
                </div>
            </article>
        </section>

        <section>
            <article class="main-bg-sec-2">
                <div class="text">
                    <h2>TRAVEL WITH STARLINK</h2>
                    <small>With Starlink’s Mobile plans, you can take your high-speed, low-latency internet service with you
                        wherever you go.
                        <br><br>
                        Pause and resume your plan based on your travel needs and stay connected in any location where
                        Starlink is available.</small> <br><br>

                    <!-- <router-link to="" class="btn btn-outline-light px-5">Learn More</router-link> -->
                </div>
            </article>
        </section>

        <section class="customerquote bd-dark  row p-lg-5">
            <h2 class="text-center my-3">Customer Quote</h2>
            <article class="col-lg-4 col-12 p-lg-5 mb-5">
                <q>
                    It’s an entirely different world...Before Starlink we had to ration data and we couldn’t stream. Now we
                    have files downloading, Pandora playing, Zoom going and there’s no latency whatsoever.
                </q>
                <p> Martins D. from Califonia, USA</p>
            </article> 
            <article class="col-lg-4 col-12 p-lg-5 mb-5">
                <q>
                    Absolute game changer! There’s no overpromising and underdelivering like our old slow 
                    provider. Plug it in and show Dishy the sky, that’s it! In under 5 minutes we’ve gone from
                     the forgotten to having the fastest internet connection in the area.
                </q>
                <p>  Hilary B. from Southern England</p>
            </article>
             <article class="col-lg-4 col-12 p-lg-5 mb-5">
                <q>
                    Millions are not connected to the Internet — we're thrilled to say that we're no longer 
                    among them. Blistering fast and online in minutes, Starlink ends a six-year journey.                </q>
                <p> Henshaw V. from Australia</p>
            </article>
        </section>

        <section>
            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/main-img-4.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>LEADER IN SPACE SUSTAINABILITY</h2>
                        <small>Starlink not only leads the industry in innovations to reduce satellite brightness, 
                            but also on-orbit debris mitigation — meeting or exceeding all regulatory and industry 
                            standards.</small> <br><br>

                        <!-- <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">Learn More</router-link> -->
                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/main-img-5.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>ENGINEERED BY SPACEX</h2>
                        <small>SpaceX is leveraging its experience in building rockets and spacecraft to deploy 
                            the world’s most advanced broadband internet system. As the world’s leading provider
                             of launch services – and the only provider with an orbital class reusable rocket
                              – SpaceX has deep experience with both spacecraft and on-orbit operations.</small> <br><br>
                        <br><br>

                        <!-- <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">Learn More</router-link> -->
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<script>

export default {
props:['php_amount'],

methods:{
amount(php_amt){
    const amt_fmt = new Intl.NumberFormat('en-US',{style:'currency', currency:"USD", maximumFractionDigits:2})
    return amt_fmt.format(php_amt)
}
}
}
</script>