// let input = document.getElementById('search');
// let button = document.getElementById('button');
// let show = document.getElementById('result');
// let image = document.getElementById('image');

// button.addEventListener('click', () => {
//     let movieName = input.value;
//     // fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=1e54f907`)
    // fetch(` https://api.tvmaze.com/search/shows?q=${movieName}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); 
//             // if (data.Response === "True") {
//             //     show.innerHTML = `
//             //         Movie Name: ${data.Title}<br>
//             //         Rating: ${data.imdbRating}<br>
//             //         Released: ${data.Released}<br>
//             //         Actors: ${data.Actors}<br>
//             //         Writer: ${data.Writer}<br>
//             //     `;
//             //     image.src = data.Poster;
//             // } else {
//             //     show.innerHTML = `Error: ${data.Error}`;
//             //     image.src = "";
//             // }
//             data.map((e)=>{
//                 console.log(e.show.name);
//                 console.log(e.show.rating.average);
//                 e.show.genre.forEach(a=>{
//                     console.log(a);
//                 })
//                 console.log(e.show.name);
//                 console.log(e.show.name);

//             })
//         })
//         .catch(error => {
//             show.innerHTML = `Error: ${error.message}`;
//             image.src = "";
//         });
// });
// image.addEventListener('click', () => {
//     let movieName = input.value;
//     // fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=1e54f907`)
//     fetch(` https://api.tvmaze.com/search/shows?q=${movieName}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); 
//            data.map((e)=>{  
//            })
//         })
//         .catch(error => {
//             show.innerHTML = `Error: ${error.message}`;
//             image.src = "";
//         });

// });
