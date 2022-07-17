var box = `<svg class='box' version='1.1' id='Layer_1' x='0px' y='0px' width='65.333px' height='62.5px' viewBox='17.167 17.5 65.333 62.5' enable-background='new &#10;  17.167 17.5 65.333 62.5' xmlns='http://www.w3.org/2000/svg'>
<g>
  <path fill='#EFC75E' d='M19.985,32.486L49.986,17.5l30,14.986l-0.016,1.981L49.986,49.47L19.997, 34.491L19.985,32.486z'/>
  <path fill='#E7BF55' d='M19.986,32.486l29.977, 14.999l30.023-14.999v30l-30.109,15l-29.891-15V32.486z'/>
  <path fill='#DBB551' d='M49.986,77.432V47.473l-0.023,0.012L19.986,32.486v30l29.891,15L49.986,77.432z'/>
  <path fill='#F1D999' d='M61.99,41.477v8.792l2.678,0.216l1.707-2.033l1.607,0.253V38.483L61.99,41.477z'/>
  <path fill='#F7E3AF' d='M31.967,26.501l30.51,15.279l5.502-3.26l-30-15.023L31.967, 26.501z'/>
  <path fill='#F2F2F2' d='M43.979,60.607l-9.984-5.01c-0.551-0.277-0.998, 0.061-0.998,0.752v6.26c0,0.693,0.447,1.479,0.998,1.754 l9.984,5.012c0.551,0.275, 0.998-0.063,0.998-0.754v-6.26C44.977,61.67,44.529,60.885,43.979,60.607z M41.482, 65.617l-5.99-3.008c-0.275-0.137-0.499-0.529-0.499-0.875s0.224-0.514,0.499-0.377l5.99, 3.006c0.275,0.141,0.499,0.531,0.499,0.877C41.981,65.588,41.758,65.756,41.482, 65.617z M42.48,63.613l-6.988-3.508c-0.275-0.139-0.499-0.531-0.499-0.877s0.224-0.514, 0.499-0.375l6.988,3.508c0.276,0.139,0.499,0.531,0.499,0.875C42.979,63.584,42.757, 63.752,42.48,63.613z'/>
  <g>
    <polygon fill='#FFFFFF' points='75.49 61.648 55.025 64.82 54.393 55.201 74.859 52.03' style='' transform='matrix(0.997782, 0.066563, -0.066563, 0.997782, 4.03297, -4.193129)'/>
    <g/>
    <g style='fill: rgb(0, 0, 0);' transform='matrix(1.218144, -0.096639, 0.018226, 0.99872, -8.946234, -10.880302)'>
      <rect y='71.548' width='0.38' height='7.121' style='' x='51.896'/>
      <rect x='52.466' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='53.034' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='53.982' y='71.548' width='0.38' height='7.121' style=''/>
      <rect x='54.551' y='71.548' width='0.57' height='7.121' style=''/>
      <rect x='55.69' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='56.069' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='56.447' y='71.548' width='0.38' height='7.121' style=''/>
      <rect x='57.206' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='58.155' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='58.534' y='71.548' width='0.759' height='7.121' style=''/>
      <rect x='59.671' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='60.24' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='60.809' y='71.548' width='0.759' height='7.121' style=''/>
      <rect x='61.758' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='62.327' y='71.548' width='0.57' height='7.121' style=''/>
      <rect x='63.085' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='63.844' y='71.548' width='0.38' height='7.121' style=''/>
      <rect x='64.413' y='71.548' width='0.38' height='7.121' style=''/>
      <rect x='65.36' y='71.548' width='0.57' height='7.121' style=''/>
      <rect x='66.12' y='71.548' width='0.189' height='7.121' style=''/>
      <rect x='66.5' y='71.548' width='0.38' height='7.121' style=''/>
    </g>
  </g>
</g>
</svg>`;

window.addEventListener('load', (_e) => {
    create_box();
});

// $(window).on('load', function() {
//       create_box();
// });

function create_box() {
    var newbox = "<div class='box-wrapper'>" + box + "</div>";
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
    $(".animation").append(newbox);
}

