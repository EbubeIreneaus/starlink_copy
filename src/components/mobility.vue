<style scoped>
:root {
    --text-color: white;
}

.head-section {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/mobility-main.webp');
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
                    <h1>STARLINK MOBILITY</h1>

                    <small>High speed global internet, up to 220 Mbps download, for critical in motion
                        applications.</small>

                    <div class="order-btn position-absolute">
                        <router-link to="/pyt/order" class="btn btn-outline-light">ORDER NOW</router-link>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <article class="row">
                <div class="col-lg-6 col-12 ">
                    <img src="../assets/images/mobility-img-2.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>IN MOTION CONNECTIVITY AROUND THE GLOBE</h2>

                        <small>
                            Starlink Mobility works with Starlink’s Flat High Performance hardware. With a wide field of
                            view and enhanced GPS capabilities, the Flat High Performance can connect to more satellites,
                            allowing for consistent connectivity on the go.
                            <br><br>
                            The hardware is designed for permanent installation on your vehicle and is resilient in harsh
                            environments.
                            <br><br>
                            Ideal for mobile businesses and public sector use cases, including trucking, buses, shuttles,
                            and emergency response. Currently available for order and use in select markets.
                            <br><br>
                        </small>
                        <br><br>

                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/mobility-img-3.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>24/7 PRIORITY</h2>
                        <small>
                            Starlink Mobility plans have the highest priority in the network, meaning your connectivity is
                            prioritized even in times of network congestion.
                            <br><br>
                            High priority connectivity is particularly critical for emergency responders. Learn more on
                            Starlink’s efforts to support emergency responders here.


                        </small>
                        <br><br>
                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/mobility-web-4.webp" alt="" class="img-fluid">
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
           <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/mobility-img-5.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>100% COVERAGE</h2>
                        <small>
                            Starlink Mobility provides 100% coverage in your country and every country where
                             Starlink service is available across the globe. Plans can also be used on the
                              ocean, with connectivity available in the vast majority of the Earth's oceans
                               and seas.
                           </small>
                     <br><br>
                        </div>
                </div>
            </article>
        </section>

        <section>
            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/mobility-img-6.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>PAY AS YOU GO</h2>
                        <small>
                            Starlink Mobility provides the ability to pause and un-pause service at 
                            
                            any time and is billed in one-month increments, allowing users to customize 
                            their service to their individual needs.
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
    props:['php_amount']

}
</script>