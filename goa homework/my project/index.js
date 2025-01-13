console.log('hello world');
let DarkButton = document.createElement('button');
DarkButton.className = 'dark_h';
DarkButton.textContent = 'click to have a Dark mode';
let darkmodistvis = document.createElement('p');
darkmodistvis.className = 'dark_h';
darkmodistvis.textContent = 'Dark mode';
let darkfigcaption = document.querySelector('.figcaption');
darkfigcaption.appendChild(darkmodistvis);
darkfigcaption.appendChild(DarkButton);


DarkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});



let clickingButton = document.querySelectorAll('.click');
let startingNull = document.querySelector('.null');
let count = 0;

clickingButton.forEach(button => {
  button.addEventListener('click', () => {
    count++;
  startingNull.textContent = `${count}`;
  });
});



let calculate = document.querySelector('.calculate');
let water_amount = document.querySelector('.water_amount');
let num = document.querySelector('.num');
let spaan = document.querySelector('.spaan');
let age = document.querySelector('.num').value;
let red_inp = document.querySelector('.red_inp');


calculate.addEventListener(('click'), () => {
  let age = document.querySelector('.num').value;
if(age == 18){
spaan.textContent = '1,839 ml';
}
else if(age == 19){
spaan.textContent = '1,832 ml ';
}
else if(age == 20){
  spaan.textContent = '1,827 ml';
  }
  else if(age == 21){
    spaan.textContent = '1,818 ml';
    }
    else if(age == 22){
      spaan.textContent = '1,811 ml';
      }
      else if(age == 23){
        spaan.textContent = '1,805 ml';
        }
        else if(age == 24){
          spaan.textContent = '1,799 ml';
          }
          else if(age == 25){
            spaan.textContent = '1,791 ml';
            }
            else if(age == 26){
              spaan.textContent = '1,784 ml';
              }
              else if(age == 27){
                spaan.textContent = '1,776 ml';
                }
                else if(age == 28){
                  spaan.textContent = '1,771 ml';
                }
                  else if(age == 29){
                    spaan.textContent = '1,763 ml';
                    }
                    else if(age == 30){
                      spaan.textContent = '1,756 ml';
                      }
                      else if(age == 31){
                        spaan.textContent = '1,750 ml';
                        }
                        else if(age == 32){
                          spaan.textContent = '1,745 ml';
                          }
                          else if(age == 33){
                            spaan.textContent = '1,736 ml';
                            }
                            else if(age == 34){
                              spaan.textContent = '1,729 ml';
                              }
                              else if(age == 35){
                                spaan.textContent = '1,724 ml';
                                }
                                else if(age == 36){
                                  spaan.textContent = '1,715 ml';
                                  }
                                  else if(age == 37){
                                    spaan.textContent = '1,708 ml';
                                    }
                                    else if(age == 38){
                                      spaan.textContent = '1,702 ml';
                                      }
                                      else if(age == 39){
                                        spaan.textContent = '1,695 ml';
                                        }
                                        else if(age == 40){
                                          spaan.textContent = '1,690 ml';
                                          }
                                          else if(age == 41){
                                            spaan.textContent = '1,684 ml';
                                            }
                                            else if(age == 42){
                                              spaan.textContent = '1,678 ml';
                                              }
                                              else if(age == 43){
                                                spaan.textContent = '1,670 ml';
                                                }
                                                else if(age == 44){
                                                  spaan.textContent = '1,664 ml';
                                                  }
                                                  else if(age == 45){
                                                    spaan.textContent = '1,655 ml';
                                                    }
                                                    else if(age == 46){
                                                      spaan.textContent = '1,649 ml';
                                                      }
                                                      else if(age == 47){
                                                        spaan.textContent = '1,641 ml';
                                                        }
                                                        else if(age == 48){
                                                          spaan.textContent = '1,634 ml';
                                                          }
                                                          else if(age == 49){
                                                            spaan.textContent = '1,626 ml';
                                                            }
                                                            else if(age == 50){
                                                              spaan.textContent = '1,618 ml';
                                                              }
                                                              else if(age == 51){
                                                                spaan.textContent = '1,612 ml';
                                                                }
                                                                else if(age == 52){
                                                                  spaan.textContent = '1,604 ml';
                                                                  }
                                                                  else if(age == 53){
                                                                    spaan.textContent = '1,600 ml';
                                                                    }
                                                                    else if(age == 54){
                                                                      spaan.textContent = '1,593 ml';
                                                                      }
                                                                      else if(age == 55){
                                                                        spaan.textContent = '1,585 ml';
                                                                        }
                                                                        else if(age == 56){
                                                                          spaan.textContent = '1,578 ml';
                                                                          }
                                                                          else if(age == 57){
                                                                            spaan.textContent = '1,565 ml';
                                                                            }
                                                                            else if(age == 58){
                                                                              spaan.textContent = '1,554 ml;'
                                                                              }
                                                                               else if(age == 59){
                                                                                spaan.textContent = '1,550 ml';
                                                                                }
                                                                                 else if(age == 60){
                                                                                  spaan.textContent = '1,542 ml';
                                                                                  }
 });



let slideIndex = 0;

function showSlides() {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) { slideIndex = 1 }
 slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', function() {
 showSlides(1); 

 let prev = document.querySelector('.prev');
 let next = document.querySelector('.next');

 prev.addEventListener('click', function() {
      currentSlide(1);
 });

 next.addEventListener('click', function() {
      plusSlides(1);
 });
});

window.onbeforeunload = function() {
  return "information in this page wont be saved if you refresh it";
};

let number = prompt("enter your age there")
 if (number < 18){
    console.log("customer is under 18");
}
else if (number >= 18){
    console.log("customer is over 18");
}
else{
  console.error('asaki mititebuli ar aris')
};


let asasoiani = document.querySelector('.asasoiani');
  let klebadip = document.querySelector('.klebadip');
  
  asasoiani.addEventListener('input', function() {
   let maxlength = asasoiani.getAttribute('maxlength');
   let daitvleba = maxlength - asasoiani.value.length;
   klebadip.textContent = `Characters remaining: ${daitvleba}`;
  });



  let inputi = document.querySelector('.inp_text');
  let btn = document.querySelector('.btn');
  let result = document.querySelector('.result');
  
  btn.addEventListener('click', (event) => {
    event.preventDefault();
  
    let inputValue = inputi.value;
    let randomNumber = 10;
  
    if (inputValue == randomNumber) {
      result.textContent = 'You are lucky to guess';
    } else {
      result.textContent = 'Try again.';
    }
  });


  let burger = document.querySelector('.burger-menu');
  let burgerisnav = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      burgerisnav.style.display = burger.classList.contains('active') ? 'block' : 'none';
  });

  burgerisnav.addEventListener('click', () => {
      burger.classList.remove('active');
      burgerisnav.style.display = 'none';
  });


let rate = document.querySelector('.rate_us');
let star = document.querySelector('.fa-star');
let clicked = document.querySelector('.clicked');
let feedback = document.querySelector('.fdbck');

let clickCount = 0;

clicked.addEventListener(('click'), () => {
  if(clickCount === 0){
    feedback.textContent = 'it is bad';
  }
    else if (clickCount === 1) {
      feedback.textContent = 'it it decent';
    } else if (clickCount === 2) {
      feedback.textContent = 'it is good';
    }
    else if (clickCount === 3) {
      feedback.textContent = 'it is excellent';
    }

    clickCount ++ ;
})

let starter = 0;
        let momateba = document.querySelector('.momateba');
        let dakleba = document.querySelector('.dakleba');
        let zero = document.querySelector('.zero');
        momateba.addEventListener('click', () => {
            if(starter >= 0, starter < 1000){
            starter ++;
          }
          zero.textContent = starter;
        } )
        dakleba.addEventListener('click', () => {
          if(starter > 0){
            starter --;
          }
          zero.textContent = starter;
        } )


     




  let likeButton = document.querySelector('.like_button');
let likeIcon = document.querySelector('.like_icon');
let dislikeIcon = document.querySelector('.dislike_icon');
let likedislike = document.querySelector('.like_dislike');

if (likeButton) {
 likeButton.addEventListener("click", function() {
    if (likeIcon.style.display === "none") {
      likeIcon.style.display = "inline";
      dislikeIcon.style.display = "none";
      likedislike.textContent = 'like';
    } else {
      likeIcon.style.display = "none";
      dislikeIcon.style.display = "inline";
      likedislike.textContent = 'dislike';
    }
 })
};



let quotebi = [
  "მოკრძალებულობა - გონიერების ნიშანია. ", 
	
	 " თუ საფულიდან ფულს თავზე დაიყრით, მას თქვენ ვეღარავინ წაგართმევთ.",
	
	 "პატარა ჭკუის მქონე ადამიანები მგრძნობიარეები არიან პატარა წყენების მიმართ. დიდი ჭკუის პატრონები კი ყველაფერს ამჩნევენ, მაგრამ არაფერზე ბრაზდებიან.",
	
	 " ჭკვიან ადამიანს 2 სიტყვა ეყოფა, სამი კი მისთვის საკმარისი არ იქნება.",
	
	 "სულელებისთვის გარეგნული ფაქტორი ცხოვრების ნაწილის ნახევარს შეადგენს, ასეთი დამოკიდებულების გამო, ბევრი ნიჭიერი ადამიანი სულელი აღმოჩნდება. მიუხედავად თავისი ჭკუისა.",
	
	 "არაფერია იმაზე დამღლელი და მოსაწყენი, უყურო როგორ ახდენს ადამიანი თავისი ჭკუის დემონსტრირებას. განსაკუთრებით მაშინ, როდესაც ჭკუა არ აქვს..",
	 "გინდა იყო ჭკვიანი? - ისწავლე ჭკვიანური კითხვების დასმა. ყურადღებით მოსმენა, წყნარად პასუხი და გაჩუმება მაშინ, როცა სათქმელი არაფერია.",

	  "პირი - გონების კარია. თუ ის ღია დაგრჩებათ, ჭკუა გარეთ გაგექცევათ. წარმოსახვა გონების ფეხებია. თუ არ გააკონტროლებთ, ის ჭკუას სწორი გზიდან გადაიყვანს.",
	
	 "არ ღირს ინტელექტის გაღმერთება. მას ყოვლისშემძლე კუნთები აქვს, მაგრამ არ აქვს სახე.",
	
	 "ბევრი განიცდის თავისი გარეგნობის გამო, მაგრამ არავინ წუხს - ტვინზე. ",
	
	 "გონება ამბიციების გარეშე იგივეა, რაც ჩიტი ფრთების გარეშე.",
	
	 "გონება მდიდრდება იმით, რასაც იღებს, გული კი იმით, რასაც გასცემს.",
	
	 "ჭკვიანი სახე არ არის ჭკუის ნიშანი.",
	
	 "კაცი მარტო მაშინ არის ხერხი, როცა ცოდნა აქვს, როცა ჭკუა ცოდნით გაულესია, ცოდნის ჩარხზე გაუჩარხავს. მაშინ ხერხსავით სხვისთვისაც გააქვს და თავისთვისაც შემოაქვს.",

	 "დიდი მამულის-შვილური სიყვარული და ღრმა სარწმუნოება – ორი უძლიერესი გრძნობაა ადამიანისა.",

	 "თანდათან მგლების ხროვას ემსგავსება კაცთა მოდგმა.",
	
];

function randomquotebi() {
  let quote = quotebi[Math.floor(Math.random() * quotebi.length)];
  document.querySelector('.quote').innerHTML = quote;
}

document.querySelector('.new-quote').addEventListener("click", 
randomquotebi
);
randomquotebi(); 

let Count = 0;
let tenSecond = setInterval(() => {
  console.log('It has been 10 seconds');
  Count++;
  if (count === 20) {
    clearInterval(tenSecond);
  }
}, 10000);




class klaszeinformacia {
  constructor(name,category, price, description, image, popularity) {
      this.name = name;
      this.category = category;
      this.price = price;
      this.description = description;
      this.image = image;
      this.popularity = popularity;
  }
}


class formebisclasi {
  constructor() {
      this.products = document.querySelector('.products');
  }

  htmlstructurissheqmna(products) {
      products.forEach(product => {
          let productDiv = document.createElement('div');

          let img = document.createElement('img');
          img.src = product.image;
          img.alt = product.name;
          productDiv.appendChild(img);
          img.classList.add('classimg')

          let h2 = document.createElement('h2');
          h2.textContent = product.name;
          productDiv.appendChild(h2);

          let p1 = document.createElement('p');
          p1.textContent = ` ${product.category}`;
          productDiv.appendChild(p1);
         
          let p2 = document.createElement('p');
          p2.textContent = `Price: $${product.price}`;
          productDiv.appendChild(p2);

          let p3 = document.createElement('p');
          p3.textContent = product.description;
          productDiv.appendChild(p3);

          let p4 = document.createElement('p');
          p4.textContent = product.popularity;
          productDiv.appendChild(p4);

          this.products.appendChild(productDiv);
      });
  }
}

let axaliformebi = [
  new klaszeinformacia(
    'new football kits',
    'forma N1',
    15.50,
     '2023/24 season liverpool 3rd kit',
      '../image/image1.jpg',
      '55% of people buy this'
  ),
  new klaszeinformacia(
     'new football kits',
      'forma N2',
      18.50,
      '2023/24 season manchester city 1st kit',
      '../image/image2.jpg',
    '90% of people buy this'
  ),
  new klaszeinformacia(
    'new football kits',
      'forma N3',
      20.50,
      '2023/24 season bayern munchen 2nd kit',
      '../image/image4.jpg',
    '70% of people buy this'
  ),
  new klaszeinformacia(
    'new football kits',
    'forma N4',
    25.50,
   '2023/24 season barcelona 2nd kit',
    '../image/image3.jpg',
    '85% of people buy this'
),
];

let formebi = new formebisclasi();
formebi.htmlstructurissheqmna(axaliformebi);



let timer = null;
let sawyisi = 0;
let sawyisiori = 0;
let taimeri = document.querySelector('.timer_display');

document.querySelector(".start_button").addEventListener("click", function() {
  if (timer === null) {
    sawyisi = Date.now();
    timer = setInterval(function() {
      sawyisiori = Date.now() - sawyisi;
      let formattedTime = formatTime(sawyisiori);
      taimeri.textContent = formattedTime;
    }, 10);
    this.textContent = 'Pause';
  } else {
    clearInterval(timer);
    timer = null;
    this.textContent = 'Resume';
  }
});
ment.querySelector('.stop_button').addEventListener("click", function() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      this.textContent = 'Reset';
      sawyisisami = 0;
      let daformatebuli = formatTime(sawyisisami);
      taimeri.textContent = daformatebuli;
    } else {
      startTime = Date.now();
      timer = setInterval(function() {
        sawyisisami = Date.now() - startTime;
        let daformatebuli = formatTime(sawyisisami);
        taimeri.textContent = daformatebuli;
      }, 10);
      document.querySelector('.start_button').textContent = "Pause";
    }
  });
  
  function formatTime(time) {
    let wamebi = Math.floor((time / 1000) % 60);
    let wutebi = Math.floor((time / (1000 * 60)) % 60);
  
  
    if (wutebi < 10) {
      wutebi = "0" + wutebi;
    }
    if (wamebi < 10) {
      wamebi = "0" + wamebi;
    }
  
    return wutebi + ":" + wamebi;
  }
  
  
  let xutasicaloria = document.querySelector('.xutasi');
  let atasikaloria = document.querySelector('.atasi');
  let atasxutasikaloria = document.querySelector('.atasxutasi');
  let sawmeli = document.querySelector('.calorie_food');
  let sawmlisgilaki = document.querySelector('.calorie_button');
  let ingredientebi = document.querySelector('.ingredients')
  
  
  sawmlisgilaki.addEventListener('click', () => {
    if (xutasicaloria.checked) {
      sawmeli.textContent = 'Chicken Tikka Masala with Vegetables (498 kcal)';
      ingredientebi.textContent = 'chicken beef with sauce'
    } 
    else if (atasikaloria.checked) {
      sawmeli.textContent = 'Peppers Cucumber & Avocado Salad';
      ingredientebi.textContent = 'Lettuce, cherry tomatos, cucumber, avocados, red bell paper, lemon juice';
    }
    else if (atasxutasikaloria.checked) {
      sawmeli.textContent = 'Avocado & Arugula Omelet (344 calories),Roasted Veggie Mason Jar Salad (400 calories),Zucchini Noodles with Avocado Pesto & Shrimp (547 calories),apple(76 calories';
      ingredientebi.textContent = '1 cup cucumber slices  medium carrot, cut into stick cup hummus ';
   }
  
   });
   
  
  let fastfood = document.querySelector('.fastfood')
  let fastfoodInput = document.querySelector('.fastfood_input');
  let fastofoodButton = document.querySelector('.fastofood_button');
  let fastfoodPlace = document.querySelector('.place');
  let fastfoodName = document.querySelector('.fastfood_name');
  let popularity = document.querySelector('.popularity');
  
  fastofoodButton.addEventListener(('click'), () => {
  if(fastfoodInput.value == 'mcdonalds'){
   fastfoodName.textContent = 'mcdonalds'
   fastfoodPlace.textContent = '1 Dzmebi Kakabadzeebi St Near Metro Rustaveli, Tbilisi Georgia';
  popularity.textContent = 'popularity:10/10'
  }
  else if(fastfoodInput.value == 'wendys'){
   fastfoodName.textContent = 'wendys'
   fastfoodPlace.textContent = '26 viktor dolidzes street,tbilisi';
  popularity.textContent = 'popularity:9/10'
  }
  else if(fastfoodInput.value == 'starbucks'){
   fastfoodName.textContent = 'starbucks'
   fastfoodPlace.textContent = 'not available in georgia';
  popularity.textContent = 'popularity:7/10'
  }
  else if(fastfoodInput.value == 'xinklis saxli'){
   fastfoodName.textContent = 'xinklis saxli'
   fastfoodPlace.textContent = '72 Atskuri Street';
  popularity.textContent = 'popularity:9/10'
  }
  else if(fastfoodInput.value == 'macshaurma'){
   fastfoodName.textContent = 'macshaurma'
   fastfoodPlace.textContent = 'giorgi saakadze square';
  popularity.textContent = '8/10'
  }
  else if(fastfoodInput.value == 'KFC'){
   fastfoodName.textContent = 'KFC'
   fastfoodPlace.textContent = 'davit gamrekeli street';
  popularity.textContent = 'popularity:10/10'
  }
  })
  
  
  let momxmareblebi = [
    {
     saxeli: 'nika',
     onlainia: true, 
     qalaqi: 'tbilisi',
     pirveladshomosvla:false 
     },
    {
      saxeli: 'gio',
      onlainia: false,
      qalaqi: 'tbilisi',
      pirveladshomosvla:true  },
    { 
      saxeli: 'vano',
      onlainia: true,
      qalaqi: 'qutaisi',
      pirveladshomosvla:false 
     },
    { 
      saxeli: 'dachi',
      onlainia: false,
      qalaqi: 'poti',
      pirveladshomosvla:true 
     },
    {
    saxeli: 'natia',
    onlainia: true,
    qalaqi: 'senaki',
    pirveladshomosvla:true 
  },
  {
    saxeli: 'ani',
    onlainia: true,
    qalaqi: 'tbilisi',
    pirveladshomosvla:false, 
  }
   ];
   
   let aqtiuri = momxmareblebi.filter(user => user.onlainia);
   let aqtiurisaxeli = aqtiuri.map(user => user.saxeli);
   
   console.log(aqtiurisaxeli); 
  
   let xili = [
    'vashli',
    'banani',
    'ananasi',
    'kitri',
    'pomidori',
    'kivi',
    'portoxali',
    'sazamtro',
    'komshi',
    'mandarini',
    'atami',
    'marwyvi'
   ];
   
   let danawilebulixili = xili.filter(word => word.startsWith('k') || word.length > 8) 
   let saboloodxili = danawilebulixili.map(word => word.toUpperCase()); 
   
   console.log(saboloodxili); 
  
   //API
  
   function weatherAPI(city) {
    let chemikey = '9f23b56e8dcad8299bf4e5a2a3fc932b';
    let urllink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chemikey}&units=metric`;
  
    fetch(urllink)
        .then(response => response.json())
        .then(data => amindisinfo(data));
  }
  
  function amindisinfo(data) {
    let amindisdiv = document.querySelector('.amindisdiv');
    document.querySelector('.qalaqissaxeli').textContent = `${data.name}`;
    document.querySelector('.gradusi').textContent = data.main.temp;
  }
  //main temp da egeni APIs infoshi vnaxe da aq ar gadmomitania
  function getWeatherButton() {
    let qalaqischasaweri = document.querySelector('.qalaqischasaweri');
    let qalaqi = qalaqischasaweri.value.trim();
  
    if (qalaqi) {
        weatherAPI(qalaqi);
    } else {
        alert('rame unda chaiweros');
    }
  }
  
  let amindisgilaki = document.querySelector('.amindisgilaki');
  amindisgilaki.addEventListener('click', 
  getWeatherButton
  );  
  
  let promisebutton = document.querySelector('.promise_button');
  let promisep = document.querySelector('.promise_p');
  
  function mtavaripromise(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  
  async function promisefunction() {
    promisep.textContent = 'Processing...';
    await mtavaripromise(1000);
    promisep.textContent = 'Done!';
    console.log('clicked');
  }
  
  promisebutton.addEventListener('click',
   promisefunction
   );
  
  
  function graxalimomxmarebeli(name, callback) {
    console.log('shemovida ' + name);
    callback();
  }
  
  function momxmarebeligavida() {
    console.log('gavida');
  }
  
  graxalimomxmarebeli('nika',  momxmarebeligavida);
  
  let carielimasivi = [];
  
  let telefonebi = [
    { telefoni: "redmi note 11",
    fasi: 1100 },
    { telefoni: "redmi note 9s", 
    fasi: 850 },
    { telefoni: "iphones 5s",
    fasi: 300 },
    { telefoni: "iphone 11",
    fasi: 950 },
    { telefoni: "iphone 14 pro", 
    fasi: 2000 },
    { telefoni: "samsung galaxy a23",
    fasi: 2900 },
    { telefoni: "huawey",
     fasi: 750 },
    { telefoni: "galaxy j series",
    fasi: 1000 },
  ];
  
  
  telefonebi.forEach(product => {
    let aqcia = product.fasi * 0.5;
    carielimasivi.push(aqcia);
  });
  
  console.log("sawyisi fasi: " + telefonebi.map(product => product.fasi));
  console.log("fasdaklebis mere " + carielimasivi);