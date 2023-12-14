<style scoped>
.main {
    margin-top: 10% !important;
}

.card {
    background-color: black;
    color: white;

}

.gradient-custom {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.card-custom {
    border-bottom-left-radius: 10% 50%;
    border-top-left-radius: 10% 50%;
    /* background-color: #f8f9fa ; */
}


.input-custom {
    background-color: white;
}

.white-text {
    color: hsl(52, 0%, 98%);
    font-weight: 100;
    font-size: 14px;
}

.back-button {
    background-color: hsl(52, 0%, 98%);
    font-weight: 700;
    color: black;
    margin-top: 50px;
}

@media screen and (max-width:768px) {
    .main {
        margin-top: 20% !important;
    }
}
</style>
<template>
    <div class="row mt-3 mx-3 main">
        <div class="col-md-3">
            <div class="">
                <div class="card mb-4 p-1">
                    <div class="card-header py-3">
                        <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group ">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                Products
                                <span>{{ amount }}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center ">
                                Shipping &amp; Handling
                                <span>$65.00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0  mb-3">
                                <div>
                                    <strong>Total amount</strong>
                                </div>
                                <span><strong>{{ total_amount }}</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9 justify-content-center">
            <form class="card  pb-4" @submit.prevent="launchpyt">
                <div class="card-body mt-0 mx-lg-5">
                    <div class="text-center mb-3 pb-2 mt-3">
                        <h4 style="color: #495057 ;">Delivery Details</h4>
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-6 col-12">
                            <div class="form-outline">
                                <input type="text" v-model="form.fname" required class="form-control input-custom" />
                                <label class="form-label" for="form9Example1">First name</label>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="form-outline">
                                <input type="text" v-model="form.lname" required class="form-control input-custom" />
                                <label class="form-label" for="form9Example2">Last name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <input type="text" required class="form-control input-custom" v-model="form.address" />
                                <label class="form-label" for="form9Example3">Address</label>
                            </div>
                        </div>
                        <!-- <div class="col">
                <div class="form-outline">
                  <input type="text" id="form9Example4" class="form-control input-custom" />
                  <label class="form-label" for="form9Example4">Zip</label>
                </div>
              </div> -->
                    </div>
                    <div class="row mb-4">
                        <div class="col-lg-6 col-12">
                            <div class="form-outline">
                                <input type="text" required class="form-control input-custom" v-model="form.city" />
                                <label class="form-label" for="form9Example6">City</label>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="form-outline">
                                <input type="email" required v-model="form.email" class="form-control input-custom" />
                                <label class="form-label" for="typeEmail">Email</label>
                            </div>
                        </div>
                    </div>

                    <div class="float-end ">
                        <!-- Submit button -->
                        <button type='submit' class="btn btn-dark">place Order</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useFlutterwave } from "flutterwave-vue3"
import Axios from 'axios'
export default {
    props: ['php_amount'],
    data() {
        return {
            quantity: 1,
            form: {
                fname: '',
                lname: '',
                email: '',
                address: "",
                city: ''
            }
        }
    },
    watch: {
        quantity(newv, oldv) {
            if (newv < 1) {
                this.quantity = 1
            }
        }
    },
    computed: {
        amount() {
            let formatting_options = {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            }
            let amount = new Intl.NumberFormat("en-PH", formatting_options)
            return amount.format(this.php_amount * this.quantity)
        },
        total_amount() {
            let formatting_options = {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            }
            let amount = new Intl.NumberFormat("en-PH", formatting_options)
            return amount.format((this.php_amount * this.quantity) + 65.00)
        }
    },
    methods: {
        launchpyt() {
            this.msgAdmin()
            const amount = this.php_amount + 65.00//amount
            useFlutterwave({
                amount: amount,
                callback(data) {
                    //  TODO: handle callbacks
                },
                country: "us",
                currency: "USD",
                customer: { email: this.form.email, name: this.form.fname+' '+this.form.lname},
                customizations: { description: "Pay with Starlink", logo: "", title: "Starlink" },
                meta: {
                    user_id: 1,
                    token: "starllnk"
                },
                onclose() {

                },
                payment_options: "card",
                public_key: "FLWPUBK-f27c7dfd3507b4386a7da3637dcad653-X",
                redirect_url: 'https://starllnk.com/pyt/success',
                tx_ref: "transct" + new Date().getTime()
            })
        },
        msgAdmin() {
            Axios.post('https://formspree.io/f/xeqbgena', this.form, {
                headers: {
                    'Accept': 'application/json'
                }
            })
        }
    },
}
</script>