<style scoped>
:root {
    --text-color: white;
}

.head-section {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/maritime-main.jpg');
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
    background-image: url('/src/assets/images/maritime-img-3.jpg');
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.main-bg-sec-2 .text {
    width: 40%;
    position: absolute;
    left: 7%;
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
        /* background-image: url('../assets/images/business-main-min.jpg'); */
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
                    <h1>STARLINK MARITIME</h1>
                    <small>
                        Global maritime coverage for boats of all sizes with up to 220 Mbps download while at sea.
                    </small>


                    <div class="order-btn position-absolute">
                        <router-link to="/pyt/order" class="btn btn-outline-light">ORDER NOW</router-link>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <article class="row">
                <div class="col-lg-6 col-12 py-4">
                    <img src="../assets/images/maritime-img-1.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>GLOBAL MARITIME COVERAGE</h2>
                        <small>Starlink service is now global, providing connectivity to the vast majority of the Earth’s
                            oceans and seas. Deliveries are available in most countries where Starlink provides service.
                        </small> <br><br>

                    </div>
                </div>
            </article>

            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/maritime-img-2.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>HIGHER SPEED, LOW LATENCY</h2>
                        <br> <br>
                        <small>With network priority, users can expect download speeds of up to 220 Mbps,
                            upload up to 25 Mbps, and latency of 25-50 ms, enabling high throughput
                            connectivity for offices of 20+ users, storefronts, and demanding workloads across
                            the globe.</small>
                        <br><br>
                        <small>With Starlink, there are no long-term contracts and no exclusivity requirements.
                            Learn more about Starlink specifications here.</small>
                        <br><br>


                    </div>
                </div>
            </article>

        </section>
        <section>
            <article class="main-bg-sec-2">
                <div class="text">
                    <h2>SECURE FLEET MANAGEMENT, REMOTE MONITORING
                    </h2><br>
                    <small> Remotely monitor and manage your Starlink fleet from a single portal.

                        Starlink implements end-to-end encryption to protect your data and confidentiality of user
                        traffic.</small> <br><br>

                </div>
            </article>
        </section>
        <section>
            <article class="row">
                <div class="col-lg-6 col-12 order-2">
                    <img src="../assets/images/maritime-img-4.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center mt-5">
                    <div class="w-75 text-start">
                        <h2>PAY AS YOU GO</h2>
                        <br> <br>
                        <small>Pause and un-pause service at any time. Billing is in one-month increments, allowing users to
                            customize their service to their individual travel needs.
                        </small>



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
