<template>
    <div class="container">
        <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">
                 

        </div>
        <div class="footer-description">
            <div>
                <h1>ABOUT ME</h1>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
            <div>
                <h1>USEFUL LINKS</h1>
                <ul>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> Latest Books</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> Upcoming Events</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> Recent Articles</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> Business Enquiries</a></li>
                    <li><a href=""><font-awesome-icon icon="fa-solid fa-chevron-right" /> Visit My Foundation</a></li>
                </ul>
            </div>
            <div>
                <h1>CONTACT INFO</h1>
                <h2>63 E. Studebaker Street Bolingbrook, IL 60440</h2>
                <h2>Phone: (800) 000-0000</h2>
                <h2>Mobile: (800) 000-0000</h2>
                <h2>Email: <span>info@your-company.com</span></h2>
                <div>
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </div>
            </div>
        </div>

    </div>
  
</template>

<script>
export default {
    name:'FooterComponent'

}
</script>

<style lang="scss" scoped>
.container{
    color: white;
    display: flex;
    height: 60vh;
    background-image: url('@/assets/proj-images/footer-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
}
.logo-div{
        height: 200px;
        width:205px;
        img{
            width: 100%;
        }
    }
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
.footer-description{
    display: flex;
}

</style>