<style scoped>
:root {
    --text-color: white;
}

.head-section {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/avi-main.webp');
    background-size: cover;

}

article img {
    object-fit: cover;
    object-position: center;
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

.customerquote article {
    font-family: 'Arial Narrow Bold', sans-serif;
    font-size: large;
    text-align: center;
    line-height: 37px;
}

.customerquote article p {




    margin-top: 10px;
}

.btm .hr-line {
    height: 200px !important;
    border: 1px solid white;
    /* background-color: white; */
}

@media screen and (max-width:992px) {
    .head-section {
        /* background-image: url('../assets/images/bg-main-small.jpg'); */
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
                    <h1>STARLINK AVIATION</h1>

                    <small>High-speed, low-latency, in-flight internet with connectivity across the globe. Reserve now with deliveries starting in 2023.</small>

                    <div class="order-btn position-absolute">
                        <router-link to="/pyt/order" class="btn btn-outline-light">ORDER NOW</router-link>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <article class="row">
                <div class="col-lg-6 col-12 ">
                    <img src="../assets/images/avi-img-1.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>STREAMING, VIDEO CALLS, GAMING & MORE AT ANY ALTITUDE</h2>

                        <small>
                            Starlink can deliver up to 350 Mbps to each plane, enabling all passengers to access streaming-capable internet at the same time.
                            <br><br>
With latency as low as 20 ms, passengers can engage in activities previously not functional in flight, including video calls, online gaming, virtual private networks and other high data rate activities.
                        </small>
                        <br><br>

                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/avi-img-2.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>GLOBAL COVERAGE</h2>
                        <small>
                            As the world's largest satellite constellation with coverage over land, the oceans and polar regions, Starlink is positioned to connect passengers wherever your flight routes evolve.

                        </small>
                        <br><br>
                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/avi-img-3.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>SUPERIOR TECHNOLOGY</h2>
                        <small>Starlink's low-profile Aero Terminal features an electronically steered phased array antenna, which enables new levels of reliability, redundancy and performance.</small> <br><br>
                        <br>

                        <!-- <router-link to="" class="learn-more btn btn-outline-light px-5 py-2">VIEW INSTALL</router-link> -->
                    </div>
                </div>
            </article> 
           <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/avi-img-4.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>CONVENIENT INSTALL</h2>
                        <small>
                            Starlink's simplified design enables installations during minimal downtime and combines well with other routine maintenance checks.
                            <br><br>
Your Starlink Aviation Kit includes your Aero Terminal, power supply, 2 wireless access points, and harnesses.
                           </small>
                     <br><br>
                        </div>
                </div>
            </article>
        </section>

        <section>
            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/avi-img-5.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>HARDWARE & SERVICE</h2>
                        <small>
                            No long-term contracts and all plans include unlimited data. Your hardware is under warranty for as long as you subscribe to the service.
                        </small> 
                            <br><br>
                    </div>
                </div>
            </article>
        </section>

    </main>
</template>

<script>
export default {

}
</script>