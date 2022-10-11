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
                <p>63 E. Studebaker Street Bolingbrook, IL 60440</p>
                <p>Phone: (800) 000-0000</p>
                <p>Mobile: (800) 000-0000</p>
                <p>Email: <span>info@your-company.com</span></p>
                <div class="icon-container">
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
@import "@/assets/scss/variables.scss" ;
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
    margin-top: 20px;
}
a{
    text-decoration: none;
    color: $color3;
}
.footer-description{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap:50px;
}
.footer-description div{
    width: 30%;
    margin-top: 90px;
}
p{
    max-width: 400px;
    line-height: 30px;
    margin-top: 20px;
}
.icon-container{
    margin: 0 !important;
   
}
svg{
    padding: 4px;
    cursor: pointer;
}
h1{
    font-size: 1.2rem;
}
p{
    color: $color3;

}
li{
    padding-top: 10px;
}
ul svg{
    color: white;
}

</style>