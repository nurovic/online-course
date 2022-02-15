<script>
export default {
name:"briefCourse",
props:["course"]

}
</script>

<template>
  <div class="courseIdRightPanel">
      <div class="price-container">
            <div class="price">$ {{course.price}}</div>
             <button name="button" type="submit" class="button" onclick="alert('Hello world!')">    
                  <span class="price-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" id="icon-size" class="icon-size h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </span>
                  <div class="price-buy">Add Order</div>
             </button>
          </div>

          <ul class="course-details">
              <li class="list course-details-list-students">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size h-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg></span>
                <span class="list-students">{{course.members.length}}</span>
              </li>

              <li class="list course-details-list-lessons">
                  <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon-size h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                  </span>
                  <!-- <span class="list-lessons">{{courses.movie.count}} Lessons</span> -->
                  <span class="list-lessons">{{course.file.length}}</span>
              </li>

                <li class="list course-details-list-file">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon-size h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg></span>

                    <span class="list-file"> Category: {{course.category.name}} </span>
                </li>

                <li class="list coure-details-list-level">
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-size h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>

                    <!-- <span class="list-level">{{courses.level}}</span> -->
                    <span class="list-level">{{course.level.level}}</span>
                </li>

                <li class="list course-details-list-audio">
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-size h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                    </span>
                    <span class="list-audio">English</span>
                </li>
          </ul>
  </div>
</template>



<style>
.price-container     {
    height: 120px;
    margin-bottom: 30px;
}
.price-container .price {
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
}
.price-container .button {
    width:400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgb(76, 167, 179);
    border: 3px solid rgba(76, 179, 174, 0.705);
    border-radius: 15px;
     box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 30px, rgba(0, 0, 0, 0.2) 0px 5px 5px;
}
.price-container .price-buy {
    font-size:25px;
    font-weight: 300;

}
#icon-size {
    height: 40px;
    color:black;
}
.icon-size {
    height: 20px;
    color:rgba(61, 61, 61, 0.5);
}

.course-details .list {
    margin-left:-30px;
    margin-bottom: 20px;
    /* background: red; */
    font-size:15px ;
    font-weight: 200;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.course-details .list .icon {
    margin: 20px;
}
</style>