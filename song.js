
 const getsongName = document.getElementById('song-name').value
 const songName = document.getElementById('song-name')
document.getElementById('search-butn').addEventListener('click',function(){
   
    fetch('https://api.lyrics.ovh/suggest/'+songName.value)
    .then(res => res.json())
    .then(data => {
        //1st result 
        const songname = data['data']['0']['title']
        const art = data['data']['0']['artist'].name
          document.getElementById('1st').innerHTML=songname;
          document.getElementById('singer').innerHTML=art;
          //2nd result 
          const songname2 = data['data']['1']['title']
          const art2 = data['data']['1']['artist'].name
            document.getElementById('2nd').innerHTML=songname2;
            document.getElementById('singer2').innerHTML=art2;
             //3rd result 
          const songname3 = data['data']['2']['title']
          const art3 = data['data']['2']['artist'].name
            document.getElementById('3rd').innerHTML=songname3;
            document.getElementById('singer3').innerHTML=art3;
                         //4rd result 
          const songname4 = data['data']['3']['title']
          const art4 = data['data']['3']['artist'].name
            document.getElementById('4th').innerHTML=songname4;
            document.getElementById('singer4').innerHTML=art4;
                          //5rd result 
          const songname5 = data['data']['4']['title']
          const art5 = data['data']['4']['artist'].name
            document.getElementById('5th').innerHTML=songname5;
            document.getElementById('singer5').innerHTML=art5;
               // 1st play lyrics butn here
          document.getElementById('playsong').addEventListener('click',function(){
            fetch('https://api.lyrics.ovh/v1/'+art+'/'+songname)
            .then(res => res.json())
            .then(data =>{
  
              const gan = data.lyrics
              document.getElementById('show').innerHTML=gan
            })
            //2nd play 
         
          })
              // 1st play lyrics butn here
              
          

    })
 

})
