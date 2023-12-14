<style scoped>

.btm .hr-line{
    height: 200px !important;
    border: 1px solid white;
    /* background-color: white; */
}
</style>

<template>
      <section>
            <div class="btm d-flex flex-column justify-content-center align-items-center">
                <div class="hr-line my-5"></div>
                <router-link to="/pyt/order" class="btn btn-outline-info px-4 mb-1">ORDER NOW</router-link>
                <small style="font-size: 12px;">By clicking Sign Up, you agree to our 
                    <span  style="text-decoration: underline;">privacy policy</span></small>
            </div>
        </section>
</template>

<script>
export default {
    
}
</script>