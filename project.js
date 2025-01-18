const arr = [
  {
    username: "JohnDoe",
    date: "2025-01-09",
    time: "10:30 AM",
    category: "Sports",
    content:
      "The latest updates on the football league have fans excited. Here's everything you need to know about the upcoming matches.",
  },
  {
    username: "JaneSmith",
    date: "2025-01-08",
    time: "2:15 PM",
    category: "Technology",
    content:
      "The rise of AI in healthcare is transforming the way we approach patient care and diagnostics. Here's a deep dive into this fascinating topic.",
  },
  {
    username: "MikeGreen",
    date: "2025-01-07",
    time: "6:45 PM",
    category: "Travel",
    content:
      "Exploring the hidden gems of Southeast Asia: 5 destinations you shouldn't miss on your next trip.",
  },
  {
    username: "SarahConnor",
    date: "2025-01-06",
    time: "11:00 AM",
    category: "Food",
    content:
      "From farm to table: The importance of sustainable eating habits and how you can support local farmers.",
  },
  {
    username: "PeterParker",
    date: "2025-01-05",
    time: "9:00 PM",
    category: "Entertainment",
    content:
      "A review of the most anticipated movie of the year: Does it live up to the hype?",
  },
];

//form opening on clicking create
const create_btn = document.getElementsByClassName("second_content")[0];
const form = document.getElementsByClassName("form")[0];
create_btn.addEventListener("click", () => {
  form.style.display = "block";
  console.log("hi");
});

//form closing on clicking cross

const cross_btn=document.getElementById('cross')
  cross_btn.addEventListener('click',()=>{
      form.style.display='none';    
      form.reset();
    }
  )

//creating read blog page dynamically

const blog = document.getElementsByClassName("blog")[0];

const readblog_btn = document.getElementsByClassName("readblog")[0];
const card_container=document.createElement('div');

readblog_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
  blog.style.display = "block";
  const main = document.querySelector("main");
  if (main) {
    main.style.display = "none"; // Hide the main element
  }

  
  card_container.className='card_container'

  arr.forEach((obj) => {
    const card = document.createElement("div");
    card.className = "card";

    const nameanddata = document.createElement("div");
    nameanddata.className = "nameanddata";

    const user_name = document.createElement("div");
    user_name.className = "user_name";
    const name = obj.username;
    if (!name) {
      user_name.textContent = "Anonymous";
    } else {
      user_name.textContent = `👤 ${obj.username}`;
      console.log(obj.username);
    }

    const blog_date = document.createElement("div");
    blog_date.className = "blog_date";
    blog_date.textContent = obj.date;

    const blog_content = document.createElement("div");
    blog_content.className = "blog_content";
    blog_content.innerHTML = obj.content;

    const categoryandtime = document.createElement("div");
    categoryandtime.className = "categoryandtime";

    const category = document.createElement("div");
    category.className = "card_category";
    category.textContent = obj.category;

    const time = document.createElement("div");
    time.className = "time";
    time.textContent=`0${obj.time}`;

    nameanddata.appendChild(user_name);
    nameanddata.appendChild(blog_date);

    categoryandtime.appendChild(category);
    categoryandtime.appendChild(time);

    card.appendChild(nameanddata);
    card.appendChild(blog_content);
    card.appendChild(categoryandtime);

    card_container.appendChild(card);
  });
  blog.appendChild(card_container);
});

//home button
const back=function(){
  card_container.innerHTML = "";
  blog.style.display = "none";
  const main = document.querySelector("main");
  main.style.display = "block";
}

const home_btn = document.getElementsByClassName("home")[0];
home_btn.addEventListener("click", () => {
  if(blog.style.display === "none"){
    alert("Already on Home page")
  }
  back();
});
const back_btn=document.getElementsByClassName('back_btn')[0];
  back_btn.addEventListener('click',()=>{
  back();
})

//fetching data from form and inserting it in to array
const blog_form = document.querySelector("form");
blog_form.addEventListener("submit", (event) => {
  console.log("ji");
  event.preventDefault();

  console.log("ki");

  const username = document.getElementById("name").value;
  const content = document.querySelector("#content").innerHTML;
  const category = document.getElementById("category").value;
  const curr_date = new Date();
  let time = "";
const hour = curr_date.getHours();
const min = curr_date.getMinutes().toString().padStart(2, "0"); // Ensures 2-digit minutes

if (hour === 0) {
  time = `12:${min} AM`;
} else if (hour === 12) {
  time = `12:${min} PM`;
} else if (hour > 12) {
  time = `${hour - 12}:${min} PM`;
} else {
  time = `${hour}:${min} AM`;
}
  const year = curr_date.getFullYear();
  const blogdate = curr_date.getDate();
  const month = curr_date.getMonth();
  const date = `${year}-0${month + 1}-${blogdate}`;

  const obj = { username, date, time, category, content };
  arr.unshift(obj);

  blog_form.reset();
  reset();
});

const reset=function(){
  document.querySelector("#content").innerHTML="Write Your Content";
}
const reset_btn=document.getElementsByClassName("reset")[0];
reset_btn.addEventListener("click",()=>{
  reset();
})
//styling inside form
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const left_align = document.getElementById("Left_Align");
const center_align = document.getElementById("Center_Align");
const right_align = document.getElementById("Right_Align");

bold.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("not error");
  document.execCommand("bold");
});

italic.addEventListener("click", (event) => {
  // event.stopPropagation();
  document.execCommand("italic");
  console.log("not error");
});
underline.addEventListener("click", (event) => {
  // event.stopPropagation();
  document.execCommand("underline");
  console.log("not error");
});
left_align.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("not error");
  document.execCommand("justifyLeft");
});
center_align.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("not error");
  document.execCommand("justifyCenter");
});
right_align.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("not error");
  document.execCommand("justifyRight");
});
