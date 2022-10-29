function RedAlert(){
    var ds = "discord:дединсайдик#4664\n"
    var em = "email: semcherr@vk.com \n"
    var sk ="skype: helper \n"
    var tele= "telegram: @helper \n"
    var tel ='tel: 8805553535'
    alert(ds + em +sk +tele +tel)
}
function calculate(){
    var one=prompt("перове число")
    var two=prompt("второе число")
    var res=one*two
    alert(res)
}
function color(){
    a= document.getElementById('text1');
    a.style.color="red";
}
function OFFcolor(){
    a= document.getElementById('text1');
    a.style.color="black";
}
function color2(){
    a= document.getElementById('text1');
    b=window.getComputedStyle(a).color;
    if (b !='rgb(0, 255, 0)')
    {
        a.style.color="rgb(0, 255, 0)"
    }
    else
        a.style.color="rgb(255, 0, 0)"

    if(window.getComputedStyle(a).color==rgb(0, 0, 0))
    {
        a.style.color=rgb(255, 0, 0);
        
    }
    else a.style.color=rgb(0, 0, 0);



}
function lol(){
    var a =parseFloat(prompt('введите число'))
    var b =parseFloat(prompt('введите число'))
    if (a>0 && b>0 )
    {alert('ваши числа больше нуля')}
    else if (a<0 && b<0 ){
    alert('ваши числа меньше нуля')}
    else if (a>0 || b>0 ){
    alert('одно из ваших чисел больше нуля')}
}
function allertt(){
    a= document.getElementById('section');
    a.classList.toggle('monal-sec-0')
}
function invis1(){
    document.getElementById('invis').style.opacity='60%'
    
}
setTimeout(invis1, 50000)
function masiv(){
    m=[2,8,'dfghjk']
    a=m.length
    alert(m+'\n'+a)
}
// setTimeout(masiv, 1000)
function ccc(){
    for(let i=0;i<3;i++)
    {
        alert(i)
    }
}
function asd(){
    m=['button01','button02','button03','button04','button05','button06','button07','button08']
    
    for(let i=0 ;i<m.length;i++)
    {
        a=document.getElementById(m[i])
        a.classList.toggle('button')
    
        a.classList.toggle('button2')
        
    }
}

function allertt1(){
    a= document.getElementById('section1');
    a.classList.toggle('monal-sec-0')
}
function show_star(k){
    m=["s01","s02","s03","s04","s05"]
    k=k-1
    a=document.getElementById(m[k])
    
    if (a.src.indexOf("star_2.png")>-1)
    {
    for(let i=0 ;i<=k;i++)
    {
        a=document.getElementById(m[i])
        a.src="star_1.png"
    }
    }
    else
    {
        for(let i=0 ;i<=m.length;i++)
        {   if (i>k)
            {
                a=document.getElementById(m[i])
                a.src="star_2.png"
            }   

        }   
    }
}
