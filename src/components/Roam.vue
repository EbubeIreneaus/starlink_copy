<style scoped>
:root {
    --text-color: white;
}

.head-section {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/roam-main.webp');
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
    bottom: 15px;

    width: 100%;
}

.head-sec-cont .order-btn button {
    padding: 10px 100px;
    margin: auto;
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
    top: 40%;
    font-family: 'Times New Roman', serif;
}

.btm .hr-line {
    height: 200px !important;
    border: 1px solid white;
    /* background-color: white; */
}

@media screen and (max-width :992px) {
    .head-section {
        background-image: url('../assets/images/business-main-min.jpg');
        background-size: cover;
        background-position: center;

    }

    .main-bg-sec-2 .text {
        width: 90%;
        margin: auto;
        top: 20%;
        font-family: 'Times New Roman', serif;
    }
}
</style>

<template>
    <main>
        <div class="head-section ">
            <div class="head-sec-cont text-center">
                <div class="cont-text position-relative">
                    <h1>STARLINK ROAM</h1>
                    <small>Unlimited high-speed, low-latency internet wherever and whenever you need it.
                       </small>
                    <div class="order-btn position-absolute">
                        <router-link to="/pyt/order" class="btn btn-outline-light">ORDER NOW</router-link>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <article class="row">
                <div class="col-lg-6 col-12">
                    <img src="../assets/images/roam-img-1.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>IN-MOTION USE</h2><br>
                        <small>
                            The Flat High Performance Starlink allows users to enjoy high-speed, low-latency internet while
                            in motion. <br><br>

                            With a wide field of view and enhanced GPS capabilities, the Flat High Performance Starlink can
                            connect to more satellites, allowing for consistent connectivity on the go.
                            <br><br>
                            The hardware is designed for a permanent installation on your vehicle and is resilient in harsh
                            environments.
                            <br><br>
                            Currently available for order and use in select markets.
                        </small> <br><br>

                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/roam-img-2.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>PORTABLE USE</h2>
                        <br> <br>
                        <small>With network priority, users can expect download speeds of up to 220 Mbps, upload up to 25
                            Mbps, and latency of 25-50 ms, enabling high throughput connectivity for offices of 20+ users,
                            storefronts, and demanding workloads across the globe.
                            <br><br>
                            With Starlink, there are no long-term contracts and no exclusivity requirements. Learn more
                            about Starlink specifications here..</small>
                        <br><br>
                    </div>
                </div>
            </article>
            <article class="row">
                <div class="col-lg-6 col-12 ">
                    <img src="../assets/images/roam-img-3.webp" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>WORK AND PLAY AT REMOTE LOCATIONS</h2>
                        <br><small>Travel to locations where connectivity has been unreliable or completely unavailable. Use
                        Starlink within your continent with the Regional plan, or across the world wherever Starlink
                        provides service with the Global plan.
                        <br><br>
                        For more on Starlink Roam availability, see our FAQs </small>
                        <br><br>
                    </div>
                </div>
            </article>

        </section>
        <section>
            <article class="main-bg-sec-2">
                <div class="text">
                    <h2>PAY AS YOU GO</h2><br>
                    <small>
                        Pause and un-pause service at any time. Billing is in one-month increments, 
                        allowing users to customize their service to their individual travel needs.</small> <br><br>

                </div>
            </article>
        </section>
    </main>
</template>

<script>
export default {

}
</script>
